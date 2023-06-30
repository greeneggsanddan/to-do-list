import { addToProject, getProjects, getActiveProject, createProject, switchProject, removeFromProject, togglePriority } from ".";

const mainDiv = document.querySelector(".main");
const sidebar = document.querySelector(".sidebar");

export function updateSidebar() {
    sidebar.innerHTML = "";

    const sidebarDiv = document.createElement("div");
    const sidebarTitle = document.createElement("h3");
    const projects = getProjects();

    sidebarDiv.classList.add("project-list");
    sidebarTitle.classList.add("sidebar-title");
    sidebarTitle.textContent = "Projects";

    sidebarDiv.appendChild(sidebarTitle);
    
    projects.forEach((project, index) => {
        const projectBtn = document.createElement("button");
        const dotDiv = document.createElement("div");
        const projectName = document.createElement("p");

        projectBtn.classList.add("sidebar-btn");
        dotDiv.classList.add("dot");
        projectName.classList.add("project-name");

        projectName.textContent = project.name;

        projectBtn.addEventListener("click", () => {
            switchProject(index);
            updateProject();
            updateSidebar();
        });

        projectBtn.appendChild(dotDiv);
        projectBtn.appendChild(projectName);
        sidebarDiv.appendChild(projectBtn);
    });

    const newProjectBtn = createAddBtn("new-project-btn", "New project");
    newProjectBtn.addEventListener("click", openInput);

    sidebarDiv.appendChild(newProjectBtn);
    sidebar.appendChild(sidebarDiv);
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

    project.taskList.forEach((task, index) => {
        const taskDiv = document.createElement("div");
        const checkbox = document.createElement("button");
        const taskName = document.createElement("p");
        const spacer = document.createElement("div");
        const dueDate = document.createElement("div");
        const priority = document.createElement("button");

        taskDiv.classList.add("task-div");
        checkbox.classList.add("checkbox");
        taskName.classList.add("task-name");
        spacer.classList.add("spacer");
        dueDate.classList.add("due-date");
        priority.classList.add("priority");
        taskDiv.dataset.index = index;
        priority.dataset.priority = task.priority;

        taskName.textContent = task.name;
        if (task.dueDate != "") dueDate.textContent = task.formatDate();
        priority.textContent = "P";

        checkbox.addEventListener("click", deleteTask);
        priority.addEventListener("click", changePriority);

        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(taskName);
        taskDiv.appendChild(spacer);
        if (task.dueDate != "") taskDiv.appendChild(dueDate);
        taskDiv.appendChild(priority);
        tasks.appendChild(taskDiv);
    });

    const addTaskBtn = createAddBtn("add-task-btn", "Add task");
    addTaskBtn.addEventListener("click", openForm);
    tasks.appendChild(addTaskBtn);

    return tasks;
}

function deleteTask(e) {
    const index = e.target.closest("div").dataset.index;
    removeFromProject(index);
    updateProject();
}

function changePriority(e) {
    const index = e.target.closest("div").dataset.index;
    const priority = togglePriority(index);

    switch(priority) {
        case 1:
            e.target.dataset.priority = "1";
            break;
        case 2:
            e.target.dataset.priority = "2";
            break;
        case 3:
            e.target.dataset.priority = "3";
            break;
        default:
            e.target.dataset.priority = "0";
    }
}

function createAddBtn(className, text) {
    const button = document.createElement("button");
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const buttonText = document.createElement("p");

    button.classList.add(className);
    svg.classList.add("plus");
    
    svg.setAttribute("viewBox", "4 4 16 16");
    path.setAttribute("d", "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z");
    buttonText.textContent = text;

    svg.appendChild(path);
    button.appendChild(svg);
    button.appendChild(buttonText);

    return button;
}

function createForm() {
    const addTaskDiv = document.createElement("div");
    const input = document.createElement("input");
    const label = document.createElement("label");
    const dateInput = document.createElement("input");
    const buttonDiv = document.createElement("div");
    const cancelBtn = document.createElement("button");
    const submitBtn = document.createElement("button");

    addTaskDiv.classList.add("add-task-div")
    input.classList.add("add-task-input");
    label.classList.add("form-label");
    dateInput.classList.add("date-input");
    buttonDiv.classList.add("button-div");
    cancelBtn.classList.add("cancel-btn");
    submitBtn.classList.add("submit-btn");

    input.setAttribute("type", "text");
    input.setAttribute("maxlength", "50");
    input.setAttribute("placeholder", "Task name...");
    label.for = "due-date";
    dateInput.type = "date";
    dateInput.id = "due-date";

    label.textContent = "Due date:"
    cancelBtn.textContent = "Cancel";
    submitBtn.textContent = "Add task";

    input.addEventListener("keydown", e => {
        if (e.key === "Enter") addTask();
        if (e.key === "Escape") updateProject();
    });
    cancelBtn.addEventListener("click", updateProject);
    submitBtn.addEventListener("click", addTask);

    buttonDiv.appendChild(dateInput);
    buttonDiv.appendChild(cancelBtn);
    buttonDiv.appendChild(submitBtn);
    addTaskDiv.appendChild(input);
    addTaskDiv.appendChild(label);
    addTaskDiv.appendChild(buttonDiv);

    return addTaskDiv;
}

function addTask() {
    const task = document.querySelector(".add-task-input").value;
    const dueDate = document.querySelector(".date-input").value;
    console.log(dueDate);
    if (task == "") return;
    addToProject(task, dueDate);
    updateProject();
}

function openForm() {
    updateSidebar();

    const addTaskBtn = document.querySelector(".add-task-btn");
    const project = document.querySelector(".project-container");
    
    addTaskBtn.classList.add("hidden");
    project.appendChild(createForm());

    const input = document.querySelector(".add-task-input");
    input.focus();
}

function openInput() {
    updateProject();

    const newProjectBtn = document.querySelector(".new-project-btn");
    const projectList = document.querySelector(".project-list");
    const inputDiv = document.createElement("div");
    const input = document.createElement("input");
    const submitBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");

    newProjectBtn.classList.add("hidden");
    inputDiv.classList.add("input-div");
    input.classList.add("new-project-input");
    submitBtn.classList.add("submit-btn");
    cancelBtn.classList.add("cancel-btn");

    input.setAttribute("type", "text");
    input.setAttribute("maxlength", "20");
    input.setAttribute("placeholder", "Project name...");
    submitBtn.setAttribute("type", "button");

    cancelBtn.textContent = "Cancel";
    submitBtn.textContent = "Add project";

    input.addEventListener("keydown", e => {
        if (e.key === "Enter") addProject();
        if (e.key === "Escape") updateSidebar();
    });
    cancelBtn.addEventListener("click", updateSidebar);
    submitBtn.addEventListener("click", addProject);

    inputDiv.appendChild(input);
    inputDiv.appendChild(cancelBtn);
    inputDiv.appendChild(submitBtn);
    projectList.appendChild(inputDiv);

    input.focus();
}

function addProject() {
    const projectName = document.querySelector(".new-project-input").value;
    createProject(projectName);
    updateProject();
    updateSidebar();
}