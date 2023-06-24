export default class Task {
    constructor(name) {
        this.name = name;
        this.dueDate = null;
        this.priority = 0;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    // get priority() {
    //     return this._priority;
    // }

    // set priority(value) {
    //     this._priority = value;
    // }

    changePriority() {
        // console.log("before", this.priority);
        return this.priority = this.priority === 3 ? 0 : ++this.priority;
    }
}