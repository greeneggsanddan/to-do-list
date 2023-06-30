import Project from "./project";
import { updateProject, updateSidebar } from "./displayController";
import format from "date-fns/format";

const projects = [];
let inbox = new Project("Inbox");
let activeProject = 0;
projects.push(inbox);

export function createProject(name) {
    const newProject = new Project(name);
    projects.push(newProject);
    switchProject(projects.length - 1);
}

export function switchProject(index) {
    activeProject = index;
}
    
export function addToProject(task, date, priority) {
    projects[activeProject].addTask(task, date, priority);
}

export function removeFromProject(index) {
    projects[activeProject].removeTask(index);
}

export function togglePriority(index) {
    return projects[activeProject].taskList[index].changePriority();
}

export function getActiveProject() {
    return projects[activeProject];
}

export function getProjects() {
    return projects;
}

addToProject("Walk the dog");
addToProject("Pick up dry-cleaning", "", 1);
addToProject("Cook dinner");
addToProject("Sign-up for swimming lessons", "2023-07-31")
createProject("Shopping list");
addToProject("Bacon");
addToProject("Lettuce");
addToProject("Tomatoes");
switchProject(0);
updateSidebar();
updateProject();