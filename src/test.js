class Task {
    constructor(name) {
        this.name = name;
        // this.dueDate = dueDate;
        // this.priority = priority;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }
}

class Project {
    constructor(name) {
        this.name = name;
        this.taskList = [];
    }

    get taskList() {
        return this._taskList;
    }

    set taskList(tasks) {
        this._taskList = tasks;
    }

    addTask(task) {
        const newTask = new Task(task);
        this.taskList.push(newTask);
    }

    removeTask(index) {
        this.taskList.splice(index, 1);
    }
}

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

const projects = [];
let currentProject = new Project("Default");
let currentIndex = 0;
projects.push(currentProject);