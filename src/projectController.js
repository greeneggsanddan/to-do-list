import Project from "./project";

const projects = [];
let inbox = new Project("Inbox");
let activeProject = 0;
projects.push(inbox);

export function createProject(name) {
    const newProject = new Project(name);
    projects.push(newProject);
}

export function switchProject(index) {
    activeProject = index;
}
    
export function addToProject(task) {
    projects[activeProject].addTask(task);
}

export function removeFromProject(index) {
    projects[activeProject].removeTask(index);
}