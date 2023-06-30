/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateProject: () => (/* binding */ updateProject),\n/* harmony export */   updateSidebar: () => (/* binding */ updateSidebar)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\r\n\r\nconst mainDiv = document.querySelector(\".main\");\r\nconst sidebar = document.querySelector(\".sidebar\");\r\n\r\nfunction updateSidebar() {\r\n    sidebar.innerHTML = \"\";\r\n\r\n    const sidebarDiv = document.createElement(\"div\");\r\n    const sidebarTitle = document.createElement(\"h3\");\r\n    const projects = (0,___WEBPACK_IMPORTED_MODULE_0__.getProjects)();\r\n\r\n    sidebarDiv.classList.add(\"project-list\");\r\n    sidebarTitle.classList.add(\"sidebar-title\");\r\n    sidebarTitle.textContent = \"Projects\";\r\n\r\n    sidebarDiv.appendChild(sidebarTitle);\r\n    \r\n    projects.forEach((project, index) => {\r\n        const projectBtn = document.createElement(\"button\");\r\n        const dotDiv = document.createElement(\"div\");\r\n        const projectName = document.createElement(\"p\");\r\n\r\n        projectBtn.classList.add(\"sidebar-btn\");\r\n        dotDiv.classList.add(\"dot\");\r\n        projectName.classList.add(\"project-name\");\r\n\r\n        projectName.textContent = project.name;\r\n\r\n        projectBtn.addEventListener(\"click\", () => {\r\n            (0,___WEBPACK_IMPORTED_MODULE_0__.switchProject)(index);\r\n            updateProject();\r\n            updateSidebar();\r\n        });\r\n\r\n        projectBtn.appendChild(dotDiv);\r\n        projectBtn.appendChild(projectName);\r\n        sidebarDiv.appendChild(projectBtn);\r\n    });\r\n\r\n    const newProjectBtn = createAddBtn(\"new-project-btn\", \"New project\");\r\n    newProjectBtn.addEventListener(\"click\", openInput);\r\n\r\n    sidebarDiv.appendChild(newProjectBtn);\r\n    sidebar.appendChild(sidebarDiv);\r\n}\r\n\r\nfunction updateProject() {\r\n    mainDiv.innerHTML = \"\";\r\n    \r\n    const project = (0,___WEBPACK_IMPORTED_MODULE_0__.getActiveProject)();\r\n    const projectContainer = document.createElement(\"div\");\r\n    const projectTitle = document.createElement(\"h2\");\r\n\r\n    projectContainer.classList.add(\"project-container\");\r\n    projectTitle.classList.add(\"project-title\");\r\n\r\n    projectTitle.textContent = project.name;\r\n\r\n    projectContainer.appendChild(projectTitle);\r\n    projectContainer.appendChild(createTasks(project));\r\n    mainDiv.appendChild(projectContainer);\r\n}\r\n\r\nfunction createTasks(project) {\r\n    const tasks = document.createElement(\"div\");\r\n\r\n    tasks.classList.add(\"tasks-container\");\r\n\r\n    project.taskList.forEach((task, index) => {\r\n        const taskDiv = document.createElement(\"div\");\r\n        const checkbox = document.createElement(\"button\");\r\n        const taskName = document.createElement(\"p\");\r\n        const spacer = document.createElement(\"div\");\r\n        const priority = document.createElement(\"button\");\r\n\r\n        taskDiv.classList.add(\"task-div\");\r\n        checkbox.classList.add(\"checkbox\");\r\n        taskName.classList.add(\"task-name\");\r\n        spacer.classList.add(\"spacer\");\r\n        priority.classList.add(\"priority\");\r\n        taskDiv.dataset.index = index;\r\n        priority.dataset.priority = \"0\";\r\n\r\n        taskName.textContent = task.name;\r\n        priority.textContent = \"P\"\r\n\r\n        checkbox.addEventListener(\"click\", deleteTask);\r\n        priority.addEventListener(\"click\", changePriority);\r\n\r\n        taskDiv.appendChild(checkbox);\r\n        taskDiv.appendChild(taskName);\r\n        taskDiv.appendChild(spacer);\r\n        taskDiv.appendChild(priority);\r\n        tasks.appendChild(taskDiv);\r\n    });\r\n\r\n    const addTaskBtn = createAddBtn(\"add-task-btn\", \"Add task\");\r\n    addTaskBtn.addEventListener(\"click\", openForm);\r\n    tasks.appendChild(addTaskBtn);\r\n\r\n    return tasks;\r\n}\r\n\r\nfunction deleteTask(e) {\r\n    const index = e.target.closest(\"div\").dataset.index;\r\n    (0,___WEBPACK_IMPORTED_MODULE_0__.removeFromProject)(index);\r\n    updateProject();\r\n}\r\n\r\nfunction changePriority(e) {\r\n    const index = e.target.closest(\"div\").dataset.index;\r\n    const priority = (0,___WEBPACK_IMPORTED_MODULE_0__.togglePriority)(index);\r\n\r\n    switch(priority) {\r\n        case 1:\r\n            e.target.dataset.priority = \"1\";\r\n            break;\r\n        case 2:\r\n            e.target.dataset.priority = \"2\";\r\n            break;\r\n        case 3:\r\n            e.target.dataset.priority = \"3\";\r\n            break;\r\n        default:\r\n            e.target.dataset.priority = \"0\";\r\n    }\r\n}\r\n\r\nfunction createAddBtn(className, text) {\r\n    const button = document.createElement(\"button\");\r\n    const addSymbol = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\");\r\n    const path = document.createElementNS(\"http://www.w3.org/2000/svg\", \"path\");\r\n    const buttonText = document.createElement(\"p\");\r\n\r\n    button.classList.add(className);\r\n    \r\n    addSymbol.setAttribute(\"viewBox\", \"4 4 16 16\");\r\n    path.setAttribute(\"d\", \"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z\");\r\n    buttonText.textContent = text;\r\n\r\n    addSymbol.appendChild(path);\r\n    button.appendChild(addSymbol);\r\n    button.appendChild(buttonText);\r\n\r\n    return button;\r\n}\r\n\r\nfunction createForm() {\r\n    const addTaskDiv = document.createElement(\"div\");\r\n    const input = document.createElement(\"input\");\r\n    const cancelBtn = document.createElement(\"button\");\r\n    const submitBtn = document.createElement(\"button\");\r\n\r\n    addTaskDiv.classList.add(\"add-task-div\")\r\n    input.classList.add(\"add-task-input\");\r\n    cancelBtn.classList.add(\"cancel-btn\");\r\n    submitBtn.classList.add(\"submit-btn\");\r\n\r\n    input.setAttribute(\"type\", \"text\");\r\n    input.setAttribute(\"maxlength\", \"50\");\r\n    input.setAttribute(\"placeholder\", \"Task name...\");\r\n\r\n    cancelBtn.textContent = \"Cancel\";\r\n    submitBtn.textContent = \"Add task\";\r\n\r\n    input.addEventListener(\"keydown\", e => {\r\n        if (e.key === \"Enter\") addTask();\r\n        if (e.key === \"Escape\") updateProject();\r\n    });\r\n    cancelBtn.addEventListener(\"click\", updateProject);\r\n    submitBtn.addEventListener(\"click\", addTask);\r\n\r\n    addTaskDiv.appendChild(input);\r\n    addTaskDiv.appendChild(cancelBtn);\r\n    addTaskDiv.appendChild(submitBtn);\r\n\r\n    return addTaskDiv;\r\n}\r\n\r\nfunction addTask() {\r\n    const task = document.querySelector(\".add-task-input\").value;\r\n    (0,___WEBPACK_IMPORTED_MODULE_0__.addToProject)(task);\r\n    updateProject();\r\n}\r\n\r\nfunction openForm() {\r\n    updateSidebar();\r\n\r\n    const addTaskBtn = document.querySelector(\".add-task-btn\");\r\n    const project = document.querySelector(\".project-container\");\r\n    \r\n    addTaskBtn.classList.add(\"hidden\");\r\n    project.appendChild(createForm());\r\n\r\n    const input = document.querySelector(\".add-task-input\");\r\n    input.focus();\r\n}\r\n\r\nfunction openInput() {\r\n    updateProject();\r\n\r\n    const newProjectBtn = document.querySelector(\".new-project-btn\");\r\n    const projectList = document.querySelector(\".project-list\");\r\n    const inputDiv = document.createElement(\"div\");\r\n    const input = document.createElement(\"input\");\r\n    const submitBtn = document.createElement(\"button\");\r\n    const cancelBtn = document.createElement(\"button\");\r\n\r\n    newProjectBtn.classList.add(\"hidden\");\r\n    inputDiv.classList.add(\"input-div\");\r\n    input.classList.add(\"new-project-input\");\r\n    submitBtn.classList.add(\"submit-btn\");\r\n    cancelBtn.classList.add(\"cancel-btn\");\r\n\r\n    input.setAttribute(\"type\", \"text\");\r\n    input.setAttribute(\"maxlength\", \"20\");\r\n    input.setAttribute(\"placeholder\", \"Project name...\");\r\n    submitBtn.setAttribute(\"type\", \"button\");\r\n\r\n    cancelBtn.textContent = \"Cancel\";\r\n    submitBtn.textContent = \"Add project\";\r\n\r\n    input.addEventListener(\"keydown\", e => {\r\n        if (e.key === \"Enter\") addProject();\r\n        if (e.key === \"Escape\") updateSidebar();\r\n    });\r\n    cancelBtn.addEventListener(\"click\", updateSidebar);\r\n    submitBtn.addEventListener(\"click\", addProject);\r\n\r\n    inputDiv.appendChild(input);\r\n    inputDiv.appendChild(cancelBtn);\r\n    inputDiv.appendChild(submitBtn);\r\n    projectList.appendChild(inputDiv);\r\n\r\n    input.focus();\r\n}\r\n\r\nfunction addProject() {\r\n    const projectName = document.querySelector(\".new-project-input\").value;\r\n    (0,___WEBPACK_IMPORTED_MODULE_0__.createProject)(projectName);\r\n    updateProject();\r\n    updateSidebar();\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/displayController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToProject: () => (/* binding */ addToProject),\n/* harmony export */   createProject: () => (/* binding */ createProject),\n/* harmony export */   getActiveProject: () => (/* binding */ getActiveProject),\n/* harmony export */   getProjects: () => (/* binding */ getProjects),\n/* harmony export */   removeFromProject: () => (/* binding */ removeFromProject),\n/* harmony export */   switchProject: () => (/* binding */ switchProject),\n/* harmony export */   togglePriority: () => (/* binding */ togglePriority)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayController */ \"./src/displayController.js\");\n\r\n\r\n\r\nconst projects = [];\r\nlet inbox = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Inbox\");\r\nlet activeProject = 0;\r\nprojects.push(inbox);\r\n\r\nfunction createProject(name) {\r\n    const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name);\r\n    projects.push(newProject);\r\n    switchProject(projects.length - 1);\r\n}\r\n\r\nfunction switchProject(index) {\r\n    activeProject = index;\r\n}\r\n    \r\nfunction addToProject(task) {\r\n    projects[activeProject].addTask(task);\r\n}\r\n\r\nfunction removeFromProject(index) {\r\n    projects[activeProject].removeTask(index);\r\n}\r\n\r\nfunction togglePriority(index) {\r\n    return projects[activeProject].taskList[index].changePriority();\r\n}\r\n\r\nfunction getActiveProject() {\r\n    return projects[activeProject];\r\n}\r\n\r\nfunction getProjects() {\r\n    return projects;\r\n}\r\n\r\naddToProject(\"One\");\r\naddToProject(\"Two\");\r\naddToProject(\"Three\");\r\ncreateProject(\"Shopping list\");\r\naddToProject(\"Bacon\");\r\naddToProject(\"Lettuce\");\r\naddToProject(\"Tomatoes\");\r\n(0,_displayController__WEBPACK_IMPORTED_MODULE_1__.updateSidebar)();\r\n(0,_displayController__WEBPACK_IMPORTED_MODULE_1__.updateProject)();\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\r\n\r\nclass Project {\r\n    constructor(name) {\r\n        this.name = name;\r\n        this.taskList = [];\r\n    }\r\n\r\n    // get taskList() {\r\n    //     return this._taskList;\r\n    // }\r\n\r\n    // set taskList(tasks) {\r\n    //     this._taskList = tasks;\r\n    // }\r\n\r\n\r\n    addTask(task) {\r\n        const newTask = new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](task);\r\n        this.taskList.push(newTask);\r\n    }\r\n\r\n    removeTask(index) {\r\n        this.taskList.splice(index, 1);\r\n    }\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\r\n    constructor(name) {\r\n        this.name = name;\r\n        this.priority = 0;\r\n        this.dueDate = null;\r\n    }\r\n\r\n    // get name() {\r\n    //     return this._name;\r\n    // }\r\n\r\n    // set name(newName) {\r\n    //     this._name = newName;\r\n    // }\r\n\r\n    // get priority() {\r\n    //     return this._priority;\r\n    // }\r\n\r\n    // set priority(value) {\r\n    //     this._priority = value;\r\n    // }\r\n\r\n    // get date() {\r\n    //     return this._dueDate;\r\n    // }\r\n\r\n    // set dueDate(date) {\r\n    //     this.dueDate = date;\r\n    // }\r\n\r\n    changePriority() {\r\n        // console.log(\"before\", this.priority);\r\n        return this.priority = this.priority === 3 ? 0 : ++this.priority;\r\n    }\r\n\r\n\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/task.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;