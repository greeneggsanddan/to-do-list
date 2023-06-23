export default class Task {
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