import Task from "./task";

export default class Project {
    constructor(name) {
        this.name = name;
        this.taskList = [];
    }

    addTask(task, date, priority) {
        const newTask = new Task(task, date, priority);
        this.taskList.push(newTask);
    }

    removeTask(index) {
        this.taskList.splice(index, 1);
    }
}