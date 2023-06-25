import Project from "./project";

const projects = [];
let currentProject = new Project("Inbox");
let currentIndex = 0;
projects.push(currentProject);

function createProject(name) {
    const newProject = new Project(name);
    projects.push(newProject);
}

function switchProject(index) {
    projects[currentIndex] = currentProject;    //save project
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

addToProject("One");
addToProject("Two");
console.log(currentProject.taskList[1].changePriority());
console.log(currentProject.taskList[1].changePriority());
console.log(currentProject.taskList[1].changePriority());
console.log(currentProject.taskList[1].changePriority());
console.log(currentProject.taskList[1].changePriority());
console.log(currentProject.taskList[1].changePriority());
console.log(currentProject.taskList[1].changePriority());
printTasks();