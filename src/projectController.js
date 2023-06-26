import Task from "./task";
import Project from "./project";

const projects = [];
let currentProject = new Project("Default");
let currentIndex = 0;
projects.push(currentProject);

function createProject(name) {
    const newProject = new Project(name);
    projects.push(newProject);
}

function switchProject(index) {
    projects[currentIndex] = currentProject;
    currentProject = projects[index];
    currentIndex = index;
}
    
function addToProject(task) {
    currentProject.addTask(task);
}

function removeFromProject(index) {
    currentProject.removeTask(index);
}

function printTasks() {
    currentProject.taskList.forEach(task => {
        console.log(task.name);
    });
}