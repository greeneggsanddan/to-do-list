import { getProjects } from "./projectController";
import Project from "./project";
import Task from "./task";

export function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
}

export function saveData() {
    localStorage.setItem("projects", JSON.stringify(getProjects()));
}

export function loadData() {
    const projects = JSON.parse(localStorage.getItem("projects"));
    const savedProjects = []
    projects.forEach(project => {
        const taskList = project.taskList;
        const newTaskList = [];
        taskList.forEach(task => {
            const newTask = new Task(task.name, task.dueDate, task.priority);
            newTaskList.push(newTask);
        });
        const newProject = new Project(project.name, newTaskList);
        savedProjects.push(newProject);
    });

    return savedProjects;
}

