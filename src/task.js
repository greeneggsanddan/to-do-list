import format from "date-fns/format";

export default class Task {
    constructor(name, dueDate = "", priority = 0) {
        this.name = name;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    changePriority() {
        return this.priority = this.priority === 3 ? 0 : ++this.priority;
    }

    formatDate() {
        const date = convertDate(this.dueDate);
        return format(new Date(date), "PP");
    }
}

function convertDate(date) {    //Converts YYYY-MM-DD to YYYY, MM, DD and removes leading zeroes
    let dateArray = date.split('-');
    dateArray.forEach((date, index) => {
        if (date[0] == "0" && index != 0) {
            dateArray[index] = date.substring(1);
        }
    });
    return dateArray.join(', ');
}