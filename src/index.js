import Project from "./project";
import { displayProject, displayProjectList, createForm } from "./displayController";

const projects = [];
let inbox = new Project("Inbox");
let activeProject = 0;
projects.push(inbox);

function createProject(name) {
    const newProject = new Project(name);
    projects.push(newProject);
}

function switchProject(index) {
    activeProject = index;
}
    
function addToProject(task) {
    projects[activeProject].addTask(task);
}

function removeFromProject(index) {
    projects[activeProject].removeTask(index);
}

function printTasks() {
    projects[activeProject].taskList.forEach(task => {
        console.log(task.name);
    });
}

const mainDiv = document.querySelector(".main");
const sidebar = document.querySelector(".sidebar");

addToProject("One");
addToProject("Two");
addToProject("Three");
createProject("Shopping list");
switchProject(1);
addToProject("Bacon");
addToProject("Lettuce");
addToProject("Tomatoes");
sidebar.appendChild(displayProjectList(projects));
mainDiv.appendChild(displayProject(projects[activeProject]));
const project = document.querySelector(".project-container");
project.appendChild(createForm());
printTasks();
