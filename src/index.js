import Project from "./project";
import { displayProject } from "./displayController";

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

addToProject("One");
addToProject("Two");
addToProject("Three");
createProject("Shopping list");
switchProject(1);
addToProject("Bacon");
addToProject("Lettuce");
addToProject("Tomatoes");
mainDiv.appendChild(displayProject(projects[activeProject]));
printTasks();
