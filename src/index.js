import { updateProject, updateSidebar } from "./displayController";
import { addToProject, createProject, switchProject } from "./projectController";
import { storageAvailable, populateStorage } from "./dataController";

    addToProject("Walk the dog");
    addToProject("Pick up dry-cleaning", "", 1);
    addToProject("Cook dinner");
    addToProject("Sign-up for swimming lessons", "2023-07-31")
    addToProject("Plan summer vacation", "", 3);
    createProject("Shopping list");
    addToProject("Bacon");
    addToProject("Lettuce");
    addToProject("Tomatoes");
    switchProject(0);
    updateSidebar();
    updateProject();