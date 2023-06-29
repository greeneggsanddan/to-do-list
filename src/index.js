import Project from "./project";
import { updateProject, updateSidebar } from "./displayController";

const projects = [];
let inbox = new Project("Inbox");
let activeProject = 0;
projects.push(inbox);

export function createProject(name) {
    const newProject = new Project(name);
    projects.push(newProject);
    switchProject(projects.length - 1);
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

export function getProjects() {
    return projects;
}

addToProject("One");
addToProject("Two");
addToProject("Three");
createProject("Shopping list");
addToProject("Bacon");
addToProject("Lettuce");
addToProject("Tomatoes");
updateSidebar();
updateProject();