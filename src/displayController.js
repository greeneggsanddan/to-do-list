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

    return sidebarDiv;
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