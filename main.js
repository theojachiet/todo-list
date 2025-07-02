/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 56:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 72:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 113:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 157:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `section {
    flex-grow: 1;
}`, "",{"version":3,"sources":["webpack://./src/styles/section.css"],"names":[],"mappings":"AAAA;IACI,YAAY;AAChB","sourcesContent":["section {\n    flex-grow: 1;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 305:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* GENERAL STYLING */

body {
  background-color: rgba(254,254,254,255);
  color: #333;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 1.2rem;
}

img {
  max-width: 1.8em;
}

button {
    appearance: none;
    outline: none;
    border: none;
    background-color: transparent;
    color: #333;
    font-family: inherit;
}

hr {
    border: 1px solid gray;
}

.container {
  display: flex;
}`, "",{"version":3,"sources":["webpack://./src/styles/general-styling.css"],"names":[],"mappings":"AAAA,oBAAoB;;AAEpB;EACE,uCAAuC;EACvC,WAAW;EACX,oGAAoG;EACpG,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,YAAY;IACZ,6BAA6B;IAC7B,WAAW;IACX,oBAAoB;AACxB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;EACE,aAAa;AACf","sourcesContent":["/* GENERAL STYLING */\n\nbody {\n  background-color: rgba(254,254,254,255);\n  color: #333;\n  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n  font-size: 1.2rem;\n}\n\nimg {\n  max-width: 1.8em;\n}\n\nbutton {\n    appearance: none;\n    outline: none;\n    border: none;\n    background-color: transparent;\n    color: #333;\n    font-family: inherit;\n}\n\nhr {\n    border: 1px solid gray;\n}\n\n.container {\n  display: flex;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 314:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 354:
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 399:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `nav {
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 20px;
    background-color: rgb(251,249,247);
    width: clamp(280px, 20vw, 20vw);
}

/* PROFILE  */

nav .profile {
    display: flex;
    gap: 1em;
    align-items: center;
    padding-bottom: 1em;
    /* border-bottom: 3px solid gray; */
}

nav .profile img {
    border: 2px solid #ddd;
    border-radius: 50%;
}

/* TASKS  */

nav .new-task {
    display: flex;
    align-items: center;
    gap: 1em;
    width: 100%;
    padding-bottom: 1.5em;
}

nav .new-task img {
    border-radius: 50%;
    background-color: rgb(20, 250, 20);
}

nav .sort-options {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-left: 0.5em;
    padding-bottom: 1.5em;
}

nav .sort-options img {
    max-width: 1.5em;
}

nav .sort-options button {
    display: flex;
    align-items: center;
    gap: 1em;
}

/* PROJECTS  */

nav .new-project {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 1em;
    padding-bottom: 1.5em;
}

nav .new-project img {
    border-radius: 50%;
    background-color: rgb(255, 150, 150);
}

nav .projects-list button {
    display: flex;
    gap: 1em;
    align-items: center;
    width: 100%;
}

nav .projects-list {
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-left: 0.5em;
}

nav .projects-list img {
    max-width: 1.5em;
}

/* HOVERS  */

button:hover {
    background-color: gray;
    border-radius: 10px;
}`, "",{"version":3,"sources":["webpack://./src/styles/nav.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,aAAa;IACb,kCAAkC;IAClC,+BAA+B;AACnC;;AAEA,aAAa;;AAEb;IACI,aAAa;IACb,QAAQ;IACR,mBAAmB;IACnB,mBAAmB;IACnB,mCAAmC;AACvC;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA,WAAW;;AAEX;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,WAAW;IACX,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA,cAAc;;AAEd;IACI,aAAa;IACb,WAAW;IACX,mBAAmB;IACnB,QAAQ;IACR,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA,YAAY;;AAEZ;IACI,sBAAsB;IACtB,mBAAmB;AACvB","sourcesContent":["nav {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    gap: 1em;\n    padding: 20px;\n    background-color: rgb(251,249,247);\n    width: clamp(280px, 20vw, 20vw);\n}\n\n/* PROFILE  */\n\nnav .profile {\n    display: flex;\n    gap: 1em;\n    align-items: center;\n    padding-bottom: 1em;\n    /* border-bottom: 3px solid gray; */\n}\n\nnav .profile img {\n    border: 2px solid #ddd;\n    border-radius: 50%;\n}\n\n/* TASKS  */\n\nnav .new-task {\n    display: flex;\n    align-items: center;\n    gap: 1em;\n    width: 100%;\n    padding-bottom: 1.5em;\n}\n\nnav .new-task img {\n    border-radius: 50%;\n    background-color: rgb(20, 250, 20);\n}\n\nnav .sort-options {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    margin-left: 0.5em;\n    padding-bottom: 1.5em;\n}\n\nnav .sort-options img {\n    max-width: 1.5em;\n}\n\nnav .sort-options button {\n    display: flex;\n    align-items: center;\n    gap: 1em;\n}\n\n/* PROJECTS  */\n\nnav .new-project {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    gap: 1em;\n    padding-bottom: 1.5em;\n}\n\nnav .new-project img {\n    border-radius: 50%;\n    background-color: rgb(255, 150, 150);\n}\n\nnav .projects-list button {\n    display: flex;\n    gap: 1em;\n    align-items: center;\n    width: 100%;\n}\n\nnav .projects-list {\n    display: flex;\n    flex-direction: column;\n    gap: 1em;\n    margin-left: 0.5em;\n}\n\nnav .projects-list img {\n    max-width: 1.5em;\n}\n\n/* HOVERS  */\n\nbutton:hover {\n    background-color: gray;\n    border-radius: 10px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 540:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 659:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 825:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 993:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* 1. Use a more-intuitive box-sizing model */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* 2. Remove default margin */
* {
  margin: 0;
}

/* 3. Enable keyword animations */
@media (prefers-reduced-motion: no-preference) {
  html {
    interpolate-size: allow-keywords;
  }
}

body {
  /* 4. Add accessible line-height */
  line-height: 1.5;
  /* 5. Improve text rendering */
  -webkit-font-smoothing: antialiased;
}

/* 6. Improve media defaults */
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

/* 7. Inherit fonts for form controls */
input,
button,
textarea,
select {
  font: inherit;
}

/* 8. Avoid text overflows */
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

/* 9. Improve line wrapping */
p {
  text-wrap: pretty;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  text-wrap: balance;
}

/*
  10. Create a root stacking context
*/
#root,
#__next {
  isolation: isolate;
}`, "",{"version":3,"sources":["webpack://./src/styles/reset.css"],"names":[],"mappings":"AAAA,6CAA6C;AAC7C;;;EAGE,sBAAsB;AACxB;;AAEA,6BAA6B;AAC7B;EACE,SAAS;AACX;;AAEA,iCAAiC;AACjC;EACE;IACE,gCAAgC;EAClC;AACF;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,8BAA8B;EAC9B,mCAAmC;AACrC;;AAEA,8BAA8B;AAC9B;;;;;EAKE,cAAc;EACd,eAAe;AACjB;;AAEA,uCAAuC;AACvC;;;;EAIE,aAAa;AACf;;AAEA,4BAA4B;AAC5B;;;;;;;EAOE,yBAAyB;AAC3B;;AAEA,6BAA6B;AAC7B;EACE,iBAAiB;AACnB;;AAEA;;;;;;EAME,kBAAkB;AACpB;;AAEA;;CAEC;AACD;;EAEE,kBAAkB;AACpB","sourcesContent":["/* 1. Use a more-intuitive box-sizing model */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* 2. Remove default margin */\n* {\n  margin: 0;\n}\n\n/* 3. Enable keyword animations */\n@media (prefers-reduced-motion: no-preference) {\n  html {\n    interpolate-size: allow-keywords;\n  }\n}\n\nbody {\n  /* 4. Add accessible line-height */\n  line-height: 1.5;\n  /* 5. Improve text rendering */\n  -webkit-font-smoothing: antialiased;\n}\n\n/* 6. Improve media defaults */\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\n/* 7. Inherit fonts for form controls */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* 8. Avoid text overflows */\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n/* 9. Improve line wrapping */\np {\n  text-wrap: pretty;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n}\n\n/*\n  10. Create a root stacking context\n*/\n#root,\n#__next {\n  isolation: isolate;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css
var styles_reset = __webpack_require__(993);
;// ./src/styles/reset.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(styles_reset/* default */.A, options);




       /* harmony default export */ const src_styles_reset = (styles_reset/* default */.A && styles_reset/* default */.A.locals ? styles_reset/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/styles/general-styling.css
var general_styling = __webpack_require__(305);
;// ./src/styles/general-styling.css

      
      
      
      
      
      
      
      
      

var general_styling_options = {};

general_styling_options.styleTagTransform = (styleTagTransform_default());
general_styling_options.setAttributes = (setAttributesWithoutAttributes_default());
general_styling_options.insert = insertBySelector_default().bind(null, "head");
general_styling_options.domAPI = (styleDomAPI_default());
general_styling_options.insertStyleElement = (insertStyleElement_default());

var general_styling_update = injectStylesIntoStyleTag_default()(general_styling/* default */.A, general_styling_options);




       /* harmony default export */ const styles_general_styling = (general_styling/* default */.A && general_styling/* default */.A.locals ? general_styling/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/styles/nav.css
var nav = __webpack_require__(399);
;// ./src/styles/nav.css

      
      
      
      
      
      
      
      
      

var nav_options = {};

nav_options.styleTagTransform = (styleTagTransform_default());
nav_options.setAttributes = (setAttributesWithoutAttributes_default());
nav_options.insert = insertBySelector_default().bind(null, "head");
nav_options.domAPI = (styleDomAPI_default());
nav_options.insertStyleElement = (insertStyleElement_default());

var nav_update = injectStylesIntoStyleTag_default()(nav/* default */.A, nav_options);




       /* harmony default export */ const styles_nav = (nav/* default */.A && nav/* default */.A.locals ? nav/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/styles/section.css
var section = __webpack_require__(157);
;// ./src/styles/section.css

      
      
      
      
      
      
      
      
      

var section_options = {};

section_options.styleTagTransform = (styleTagTransform_default());
section_options.setAttributes = (setAttributesWithoutAttributes_default());
section_options.insert = insertBySelector_default().bind(null, "head");
section_options.domAPI = (styleDomAPI_default());
section_options.insertStyleElement = (insertStyleElement_default());

var section_update = injectStylesIntoStyleTag_default()(section/* default */.A, section_options);




       /* harmony default export */ const styles_section = (section/* default */.A && section/* default */.A.locals ? section/* default */.A.locals : undefined);

;// ./src/index.js





console.log('there');
/******/ })()
;
//# sourceMappingURL=main.js.map