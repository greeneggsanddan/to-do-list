import { addToProject } from ".";
import { getActiveProject } from ".";

const mainDiv = document.querySelector(".main");

export function displayProjectList(projects) {
    const sidebarDiv = document.createElement("div");

    sidebarDiv.classList.add("project-list");
    
    projects.forEach(project => {
        const projectBtn = document.createElement("div");
        const dotDiv = document.createElement("div");
        const projectName = document.createElement("p");

        projectBtn.classList.add("sidebar-btn");
        dotDiv.classList.add("dot");
        projectName.classList.add("project-name");

        projectName.textContent = project.name;

        projectBtn.appendChild(dotDiv);
        projectBtn.appendChild(projectName);
        sidebarDiv.appendChild(projectBtn);
    });

    sidebarDiv.appendChild(createAddBtn("sidebar-btn", "New project"));

    return sidebarDiv;
}

export function updateProject() {
    mainDiv.innerHTML = "";
    const project = getActiveProject();

    const projectContainer = document.createElement("div");
    const projectTitle = document.createElement("h2");

    projectContainer.classList.add("project-container");
    projectTitle.classList.add("project-title");

    projectTitle.textContent = project.name;

    projectContainer.appendChild(projectTitle);
    projectContainer.appendChild(createTasks(project));
    mainDiv.appendChild(projectContainer);
}

function createTasks(project) {
    const tasks = document.createElement("div");

    tasks.classList.add("tasks-container");

    project.taskList.forEach(task => {
        const taskDiv = document.createElement("div");
        const checkbox = document.createElement("div");
        const taskName = document.createElement("p");

        taskDiv.classList.add("task-div");
        checkbox.classList.add("checkbox");
        taskName.classList.add("task-name");

        taskName.textContent = task.name;

        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(taskName);
        tasks.appendChild(taskDiv);
    });

    tasks.appendChild(createAddBtn("add-task-btn", "Add task"));

    return tasks;
}

function createAddBtn(className, text) {
    const button = document.createElement("button");
    const addSymbol = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const buttonText = document.createElement("p");

    button.classList.add(className);
    
    addSymbol.setAttribute("viewBox", "4 4 16 16");
    path.setAttribute("d", "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z");
    buttonText.textContent = text;

    addSymbol.appendChild(path);
    button.appendChild(addSymbol);
    button.appendChild(buttonText);

    button.addEventListener("click", openForm);

    return button;
}

export function createForm() {
    const addTaskForm = document.createElement("form");
    const input = document.createElement("input");
    const cancelBtn = document.createElement("button");
    const submitBtn = document.createElement("button");

    addTaskForm.classList.add("add-task-form")
    input.classList.add("add-task-input");
    cancelBtn.classList.add("cancel-btn");
    submitBtn.classList.add("submit-btn");

    input.setAttribute("type", "text");
    input.setAttribute("maxlength", "50");
    input.setAttribute("placeholder", "Task name...");

    cancelBtn.textContent = "Cancel";
    submitBtn.textContent = "Add task";

    input.addEventListener("keypress", e => {
        if (e.key === "Enter") addTask(e);
    });

    submitBtn.addEventListener("click", addTask);

    addTaskForm.appendChild(input);
    addTaskForm.appendChild(cancelBtn);
    addTaskForm.appendChild(submitBtn);

    return addTaskForm;
}

function addTask(event) {
    event.preventDefault();
    const task = document.querySelector(".add-task-input").value;
    addToProject(task);
    updateProject();
}

function openForm() {
    const addTaskBtn = document.querySelector(".add-task-btn");
    const project = document.querySelector(".project-container");
    
    addTaskBtn.classList.add("hidden");
    project.appendChild(createForm());

    const input = document.querySelector(".add-task-input");
    input.focus();
}