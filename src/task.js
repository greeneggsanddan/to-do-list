export default class Task {
    constructor(name) {
        this.name = name;
        this.priority = 0;
        this.dueDate = null;
    }

    // get name() {
    //     return this._name;
    // }

    // set name(newName) {
    //     this._name = newName;
    // }

    // get priority() {
    //     return this._priority;
    // }

    // set priority(value) {
    //     this._priority = value;
    // }

    // get date() {
    //     return this._dueDate;
    // }

    // set dueDate(date) {
    //     this.dueDate = date;
    // }

    changePriority() {
        // console.log("before", this.priority);
        return this.priority = this.priority === 3 ? 0 : ++this.priority;
    }


}