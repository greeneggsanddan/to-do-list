import Task from "./task";

export default class Project {
    constructor(name, taskList = []) {
        this.name = name;
        this.taskList = taskList;
    }

    addTask(task, date, priority) {
        const newTask = new Task(task, date, priority);
        this.taskList.push(newTask);
    }

    removeTask(index) {
        this.taskList.splice(index, 1);
    }
}