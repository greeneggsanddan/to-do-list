import Project from "./project";
import Task from "./task";

export function displayProject(project) {
    const projectDiv = document.createElement("div");
    const projectTitle = document.createElement("h2");

    projectTitle.textContent = project.name;
    
    projectDiv.appendChild(projectTitle);
    projectDiv.appendChild(createTasks(project));

    return projectDiv;
}

function createTasks(project) {
    const tasks = document.createElement("div");

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