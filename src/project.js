import Task from "./task";

export default class Project {
    constructor(name) {
        this.name = name;
        this.taskList = [];
    }

    // get taskList() {
    //     return this._taskList;
    // }

    // set taskList(tasks) {
    //     this._taskList = tasks;
    // }


    addTask(task) {
        const newTask = new Task(task);
        this.taskList.push(newTask);
    }

    removeTask(index) {
        this.taskList.splice(index, 1);
    }
}