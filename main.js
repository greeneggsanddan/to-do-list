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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayProject: () => (/* binding */ displayProject),\n/* harmony export */   displayProjectList: () => (/* binding */ displayProjectList)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\r\n\r\n\r\nfunction displayProjectList(projects) {\r\n    const sidebarDiv = document.createElement(\"div\");\r\n    sidebarDiv.classList.add(\"project-list\");\r\n    \r\n    projects.forEach(project => {\r\n        const projectBtn = document.createElement(\"div\");\r\n        const dotDiv = document.createElement(\"div\");\r\n        const projectName = document.createElement(\"p\");\r\n\r\n        projectBtn.classList.add(\"sidebar-btn\");\r\n        dotDiv.classList.add(\"dot\");\r\n        projectName.classList.add(\"project-name\");\r\n\r\n        projectName.textContent = project.name;\r\n\r\n        projectBtn.appendChild(dotDiv);\r\n        projectBtn.appendChild(projectName);\r\n        sidebarDiv.appendChild(projectBtn);\r\n    });\r\n\r\n    return sidebarDiv;\r\n}\r\n\r\nfunction displayProject(project) {\r\n    const projectContainer = document.createElement(\"div\");\r\n    const projectTitle = document.createElement(\"h2\");\r\n\r\n    projectContainer.classList.add(\"project-container\");\r\n    projectTitle.classList.add(\"project-title\");\r\n\r\n    projectTitle.textContent = project.name;\r\n    \r\n    projectContainer.appendChild(projectTitle);\r\n    projectContainer.appendChild(createTasks(project));\r\n\r\n    return projectContainer;\r\n}\r\n\r\nfunction createTasks(project) {\r\n    const tasks = document.createElement(\"div\");\r\n    tasks.classList.add(\"tasks-container\");\r\n\r\n    project.taskList.forEach(task => {\r\n        const taskDiv = document.createElement(\"div\");\r\n        const checkbox = document.createElement(\"div\");\r\n        const taskName = document.createElement(\"p\");\r\n\r\n        taskDiv.classList.add(\"task-div\");\r\n        checkbox.classList.add(\"checkbox\");\r\n        taskName.classList.add(\"task-name\");\r\n\r\n        taskName.textContent = task.name;\r\n\r\n        taskDiv.appendChild(checkbox);\r\n        taskDiv.appendChild(taskName);\r\n        tasks.appendChild(taskDiv);\r\n    });\r\n\r\n    return tasks;\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/displayController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayController */ \"./src/displayController.js\");\n\r\n\r\n\r\nconst projects = [];\r\nlet inbox = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Inbox\");\r\nlet activeProject = 0;\r\nprojects.push(inbox);\r\n\r\nfunction createProject(name) {\r\n    const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name);\r\n    projects.push(newProject);\r\n}\r\n\r\nfunction switchProject(index) {\r\n    activeProject = index;\r\n}\r\n    \r\nfunction addToProject(task) {\r\n    projects[activeProject].addTask(task);\r\n}\r\n\r\nfunction removeFromProject(index) {\r\n    projects[activeProject].removeTask(index);\r\n}\r\n\r\nfunction printTasks() {\r\n    projects[activeProject].taskList.forEach(task => {\r\n        console.log(task.name);\r\n    });\r\n}\r\n\r\nconst mainDiv = document.querySelector(\".main\");\r\nconst sidebar = document.querySelector(\".sidebar\");\r\n\r\naddToProject(\"One\");\r\naddToProject(\"Two\");\r\naddToProject(\"Three\");\r\ncreateProject(\"Shopping list\");\r\nswitchProject(1);\r\naddToProject(\"Bacon\");\r\naddToProject(\"Lettuce\");\r\naddToProject(\"Tomatoes\");\r\nsidebar.appendChild((0,_displayController__WEBPACK_IMPORTED_MODULE_1__.displayProjectList)(projects));\r\nmainDiv.appendChild((0,_displayController__WEBPACK_IMPORTED_MODULE_1__.displayProject)(projects[activeProject]));\r\nprintTasks();\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;