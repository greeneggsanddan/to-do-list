import Project from "./project";
import Task from "./task";

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

    sidebarDiv.appendChild(createNewProjectBtn());

    return sidebarDiv;
}

function createNewProjectBtn() {
    const button = document.createElement("button");
    const addSymbol = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const buttonText = document.createElement("p");

    button.classList.add("sidebar-btn");
    
    addSymbol.setAttribute("viewBox", "4 4 16 16");
    path.setAttribute("d", "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z");
    buttonText.textContent = "New project";

    addSymbol.appendChild(path);
    button.appendChild(addSymbol);
    button.appendChild(buttonText);

    return button;
}

export function displayProject(project) {
    const projectContainer = document.createElement("div");
    const projectTitle = document.createElement("h2");

    projectContainer.classList.add("project-container");
    projectTitle.classList.add("project-title");

    projectTitle.textContent = project.name;
    
    projectContainer.appendChild(projectTitle);
    projectContainer.appendChild(createTasks(project));

    return projectContainer;
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

    return tasks;
}