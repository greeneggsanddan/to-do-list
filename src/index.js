import { updateProject, updateSidebar } from "./displayController";
import { setProjects, demoProject } from "./projectController";
import { storageAvailable, loadData, saveData } from "./dataController";

// if (storageAvailable("localStorage") && localStorage.getItem("projects")) {
//     setProjects(loadData());
// } else {
    demoProject();
    saveData();
// }
updateProject();
updateSidebar();
