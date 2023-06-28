import Project from "./project";
import { displayProject, displayProjectList, updateProjectDisplay } from "./displayController";

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
    
export function addToProject(task) {
    projects[activeProject].addTask(task);
}

function removeFromProject(index) {
    projects[activeProject].removeTask(index);
}

export function getActiveProject() {
    return projects[activeProject];
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