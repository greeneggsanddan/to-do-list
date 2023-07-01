import { saveData } from "./dataController";
import Project from "./project";

let projects = [];
const inbox = new Project("Inbox");
let activeProject = 0;
projects.push(inbox);

export function createProject(name) {
    const newProject = new Project(name);
    projects.push(newProject);
    switchProject(projects.length - 1);
    saveData();
}

export function switchProject(index) {
    activeProject = index;
}
    
export function addToProject(task, date, priority) {
    projects[activeProject].addTask(task, date, priority);
    saveData();
}

export function removeFromProject(index) {
    projects[activeProject].removeTask(index);
    saveData();
}

export function togglePriority(index) {
    const priority = projects[activeProject].taskList[index].changePriority();
    saveData();
    return priority;
}

export function getActiveProject() {
    return projects[activeProject];
}

export function getProjects() {
    return projects;
}

export function setProjects(array) {
    projects = array;
}

export function demoProject() {
    addToProject("Walk the dog");
    addToProject("Pick up dry-cleaning", "", 1);
    addToProject("Cook dinner");
    addToProject("Sign-up for swimming lessons", "2023-07-31")
    addToProject("Plan summer vacation", "", 3);
    createProject("Shopping list");
    addToProject("Bacon");
    addToProject("Lettuce");
    addToProject("Tomatoes");
    switchProject(0);
}