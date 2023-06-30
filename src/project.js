import Task from "./task";
import format from "date-fns/format";

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


    addTask(task, date) {
        const newTask = new Task(task, date);
        this.taskList.push(newTask);
    }

    removeTask(index) {
        this.taskList.splice(index, 1);
    }
}