/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/List.js":
/*!*********************!*\
  !*** ./src/List.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var List = /*#__PURE__*/function () {
  function List() {
    _classCallCheck(this, List);

    this.elements = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(element) {
      this.elements.push(element);
    }
  }, {
    key: "has",
    value: function has(element) {
      var index = this.elements.indexOf(element);
      return index > -1;
    }
  }, {
    key: "remove",
    value: function remove(element) {
      var index = this.elements.indexOf(element);

      if (index > -1) {
        this.elements.splice(index, 1);
      }
    }
  }, {
    key: "at",
    value: function at(index) {
      return this.elements[index];
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.elements.length === 0;
    }
  }, {
    key: "sort",
    value: function sort(compareFn) {
      this.elements.sort(compareFn);
    }
  }]);

  return List;
}();

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./src/drawEngine.js":
/*!***************************!*\
  !*** ./src/drawEngine.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DrawEngine = /*#__PURE__*/function () {
  function DrawEngine(graph) {
    _classCallCheck(this, DrawEngine);

    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.w = this.canvas.width;
    this.h = this.canvas.height;
    this.graph = graph;
  }

  _createClass(DrawEngine, [{
    key: "draw",
    value: function draw() {
      var _this = this;

      this.ctx.clearRect(0, 0, this.w, this.h);
      this.ctx.beginPath();
      this.ctx.strokeStyle = '#333333';
      this.ctx.strokeWidth = 2;
      this.graph.edges.forEach(function (edge) {
        return edge.draw(_this.ctx);
      });
      this.ctx.stroke();
      this.ctx.closePath();
      this.ctx.beginPath();
      this.ctx.fillStyle = '#686868';
      var inactiveNodes = this.graph.nodes.filter(function (node) {
        return !node.isActive && !node.isSrc && !node.isDst;
      });
      inactiveNodes.forEach(function (node) {
        return node.draw(_this.ctx);
      });
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.beginPath();
      this.ctx.fillStyle = '#53abdc';
      var activeNodes = this.graph.nodes.filter(function (node) {
        return node.isActive;
      });
      activeNodes.forEach(function (node) {
        return node.draw(_this.ctx);
      });
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.beginPath();
      this.ctx.fillStyle = '#5cdc52';
      var srcNodes = this.graph.nodes.filter(function (node) {
        return node.isSrc;
      });
      srcNodes.forEach(function (node) {
        return node.draw(_this.ctx);
      });
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.beginPath();
      this.ctx.fillStyle = '#dc5d52';
      var dstNodes = this.graph.nodes.filter(function (node) {
        return node.isDst;
      });
      dstNodes.forEach(function (node) {
        return node.draw(_this.ctx);
      });
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.beginPath();
      this.ctx.fillStyle = '#dcd052';
      var pathNodes = this.graph.nodes.filter(function (node) {
        return node.isPath;
      });
      pathNodes.forEach(function (node) {
        return node.draw(_this.ctx);
      });
      this.ctx.fill();
      this.ctx.closePath();
    }
  }]);

  return DrawEngine;
}();

/* harmony default export */ __webpack_exports__["default"] = (DrawEngine);

/***/ }),

/***/ "./src/edge.js":
/*!*********************!*\
  !*** ./src/edge.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Edge = /*#__PURE__*/function () {
  function Edge(a, b, _ref) {
    var id = _ref.id;

    _classCallCheck(this, Edge);

    this.a = a;
    this.b = b;
    this.id = id;
  }

  _createClass(Edge, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.moveTo(this.a.x, this.a.y);
      ctx.lineTo(this.b.x, this.b.y);
    }
  }]);

  return Edge;
}();

/* harmony default export */ __webpack_exports__["default"] = (Edge);

/***/ }),

/***/ "./src/graph.js":
/*!**********************!*\
  !*** ./src/graph.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./src/node.js");
/* harmony import */ var _edge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edge */ "./src/edge.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Graph = /*#__PURE__*/function () {
  function Graph() {
    _classCallCheck(this, Graph);

    this.nodes = [];
    this.edges = [];
    this.lastIdTime = null;
  }

  _createClass(Graph, [{
    key: "newId",
    value: function newId(prefix) {
      var now = Date.now();
      if (now === this.lastIdTime) now++;
      this.lastIdTime = now;
      return "".concat(prefix, "-").concat(now);
    }
  }, {
    key: "addNode",
    value: function addNode(x, y) {
      var node = new _node__WEBPACK_IMPORTED_MODULE_0__["default"](x, y, {
        id: this.newId('node')
      });
      this.nodes.push(node);
      return node;
    }
  }, {
    key: "removeNode",
    value: function removeNode(node) {
      var _this = this;

      var edgesToRemove = this.edges.filter(function (edge) {
        return edge.a === node || edge.b === node;
      });
      edgesToRemove.forEach(function (edge) {
        _this.removeEdge(edge);
      });
      Graph.removeFromArray(this.nodes, node);
    }
  }, {
    key: "addEdge",
    value: function addEdge(a, b) {
      if (a === b) return;
      var edge = new _edge__WEBPACK_IMPORTED_MODULE_1__["default"](a, b, {
        id: this.newId('edge')
      });
      this.edges.push(edge);
      a.addNeighbor(b);
      b.addNeighbor(a);
      return edge;
    }
  }, {
    key: "removeEdge",
    value: function removeEdge(edge) {
      var a = edge.a,
          b = edge.b;
      Graph.removeFromArray(a.neighbors, b);
      Graph.removeFromArray(b.neighbors, a);
      Graph.removeFromArray(this.edges, edge);
    }
  }, {
    key: "hasEdge",
    value: function hasEdge(a, b) {
      return this.edges.filter(function (edge) {
        return edge.a === a && edge.b === b || edge.a === b && edge.b === a;
      })[0];
    }
  }], [{
    key: "removeFromArray",
    value: function removeFromArray(array, element) {
      var index = array.indexOf(element);

      if (index > -1) {
        array.splice(index, 1);
      }
    }
  }]);

  return Graph;
}();

/* harmony default export */ __webpack_exports__["default"] = (Graph);

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graph */ "./src/graph.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List */ "./src/List.js");
/* harmony import */ var _drawEngine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drawEngine */ "./src/drawEngine.js");
/* globals Vue */




new Vue({
  el: '#app',
  data: {
    mode: 'add_node',
    graph: new _graph__WEBPACK_IMPORTED_MODULE_1__["default"](),
    selectedNodes: []
  },
  mounted: function mounted() {
    this.drawEngine = new _drawEngine__WEBPACK_IMPORTED_MODULE_3__["default"](this.graph);
    this.canvas = document.getElementById('canvas');
  },
  methods: {
    onChangeModeClick: function onChangeModeClick(mode) {
      this.mode = mode;
    },
    onFindPathClick: function onFindPathClick() {
      this.findPath();
    },
    onCanvasClick: function onCanvasClick(e) {
      switch (this.mode) {
        case 'add_node':
          this.addNode(e);
          break;

        case 'select_node':
          this.selectNode(e, 'isActive');
          break;

        case 'toggle_edge':
          this.toggleEdge(e);
          break;

        case 'remove_node':
          this.removeNode(e);
          break;

        case 'set_src_node':
          this.selectNode(e, 'isSrc');
          break;

        case 'set_dst_node':
          this.selectNode(e, 'isDst');
          break;

        default:
          break;
      }

      this.drawEngine.draw();
    },
    onKeyDown: function onKeyDown(e) {
      switch (e.key) {
        case 'a':
          this.onChangeModeClick('add_node');
          break;

        case 'd':
        case 'r':
          this.onChangeModeClick('remove_node');
          break;

        case 's':
          this.onChangeModeClick('select_node');
          break;

        case 'e':
          this.onChangeModeClick('toggle_edge');
          break;

        case 'm':
        case 'g':
          this.onChangeModeClick('move_node');
          break;

        case ',':
          this.onChangeModeClick('set_src_node');
          break;

        case '.':
          this.onChangeModeClick('set_dst_node');
          break;

        case 'f':
        case ' ':
          this.findPath();
          break;

        default:
          break;
      }
    },
    onCanvasMouseDown: function onCanvasMouseDown(e) {
      switch (this.mode) {
        case 'move_node':
          this.beginMove(e);
          break;

        default:
          break;
      }

      this.drawEngine.draw();
    },
    beginMove: function beginMove(e) {
      this.selectNode(e, 'isActive');
      this.canvas.addEventListener('mousemove', this.moveNode);
      this.canvas.addEventListener('mouseup', this.endMove);
      this.canvas.addEventListener('mouseleave', this.endMove);
    },
    endMove: function endMove() {
      this.canvas.removeEventListener('mousemove', this.moveNode);
      this.canvas.removeEventListener('mouseup', this.endMove);
      this.canvas.removeEventListener('mouseleave', this.endMove);
    },
    eachNode: function eachNode(e, allCallback, activeCallback, inactiveCallback) {
      var activeNode = null;
      this.graph.nodes.forEach(function (node) {
        allCallback && allCallback(node);

        if (!activeNode && node.checkCollision(e.offsetX, e.offsetY)) {
          activeNode = node;
          activeCallback && activeCallback(node);
        } else {
          inactiveCallback && inactiveCallback(node);
        }
      });
      return activeNode;
    },
    addNode: function addNode(e) {
      this.graph.addNode(e.offsetX, e.offsetY);
      this.selectNode(e, 'isActive');
    },
    selectNode: function selectNode(e, flag) {
      var _this = this;

      this.selectedNodes = [];
      this.eachNode(e, null, function (activeNode) {
        _this.selectedNodes.push(activeNode);

        activeNode.setFlag(flag, true);
      }, function (inactiveNode) {
        inactiveNode.setFlag(flag, false);
      });
    },
    toggleEdge: function toggleEdge(e) {
      var _this2 = this;

      this.eachNode(e, null, function (activeNode) {
        _this2.selectedNodes.forEach(function (selectedNode) {
          var edge = _this2.graph.hasEdge(selectedNode, activeNode);

          if (edge) {
            _this2.graph.removeEdge(edge);
          } else {
            _this2.graph.addEdge(selectedNode, activeNode);
          }
        });
      });
    },
    removeNode: function removeNode(e) {
      this.graph.removeNode(this.eachNode(e));
    },
    moveNode: function moveNode(e) {
      this.selectedNodes.forEach(function (selectedNode) {
        selectedNode.setPosition(e.offsetX, e.offsetY);
      });
      this.drawEngine.draw();
    },
    findPath: function findPath() {
      var srcNode = null,
          dstNode = null,
          openList = new _List__WEBPACK_IMPORTED_MODULE_2__["default"](),
          closeList = new _List__WEBPACK_IMPORTED_MODULE_2__["default"](),
          path = [],
          iterations = 0;
      this.graph.nodes.forEach(function (node) {
        node.setReferer(null);
        node.setFlag('isPath', false);
        node.setFlag('isActive', false);
        if (node.isSrc) srcNode = node;
        if (node.isDst) dstNode = node;
      });

      if (!srcNode) {
        console.warn('No source node'); // eslint-disable-line no-console

        return;
      }

      if (!dstNode) {
        console.warn('No target node'); // eslint-disable-line no-console

        return;
      }

      srcNode.setFGH(dstNode);
      openList.add(srcNode);

      var _loop = function _loop() {
        iterations++;
        openList.sort(function (a, b) {
          return a.f - b.f;
        });
        var currentNode = openList.at(0);
        openList.remove(currentNode);
        closeList.add(currentNode);
        currentNode.neighbors.forEach(function (node) {
          if (closeList.has(node)) return;

          if (openList.has(node)) {
            if (node.checkIsBetterFGH(currentNode)) {
              node.setReferer(currentNode);
              node.setFGH(dstNode);
            }

            return;
          }

          node.setReferer(currentNode);
          node.setFGH(dstNode);
          openList.add(node);
        });
      };

      while (!openList.isEmpty()) {
        _loop();
      }

      console.log('Iteration: ', iterations); // eslint-disable-line no-console

      if (closeList.has(dstNode)) {
        var referer = dstNode;

        while (referer) {
          if (!referer.isDst && !referer.isSrc) referer.setFlag('isPath', true);
          path.push(referer);
          referer = referer.referer;
        }

        path.reverse();
        console.log('Path length: ', dstNode.g); // eslint-disable-line no-console

        console.dir(path); // eslint-disable-line no-console

        this.drawEngine.draw();
      } else {
        console.warn('No path to target node'); // eslint-disable-line no-console
      }
    }
  }
});

/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Node = /*#__PURE__*/function () {
  function Node(x, y, _ref) {
    var id = _ref.id,
        neighbors = _ref.neighbors;

    _classCallCheck(this, Node);

    this.x = x;
    this.y = y;
    this.id = id;
    this.neighbors = neighbors || [];
    this.isActive = false;
    this.isPath = false;
    this.isSrc = false;
    this.isDst = false;
    this.f = 0;
    this.g = 0;
    this.h = 0;
    this.referer = null;
  }

  _createClass(Node, [{
    key: "addNeighbor",
    value: function addNeighbor(node) {
      this.neighbors.push(node);
    }
  }, {
    key: "setFlag",
    value: function setFlag(flag, flagState) {
      if (flag === 'isActive') {
        if (flagState) {
          this.isPath = false;
          this.isSrc = false;
          this.isDst = false;
        }
      }

      this[flag] = flagState;
    }
  }, {
    key: "setPosition",
    value: function setPosition(x, y) {
      this.x = x;
      this.y = y;
    }
  }, {
    key: "checkCollision",
    value: function checkCollision(x, y) {
      return Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2)) < 5;
    }
  }, {
    key: "checkDistance",
    value: function checkDistance(node) {
      return Math.sqrt(Math.pow(this.x - node.x, 2) + Math.pow(this.y - node.y, 2));
    }
  }, {
    key: "setReferer",
    value: function setReferer(referer) {
      this.referer = referer;
    }
  }, {
    key: "setFGH",
    value: function setFGH(targetNode) {
      if (!this.referer) {
        this.g = 0;
      } else {
        this.g = this.referer.g + this.checkDistance(this.referer);
      }

      this.h = this.checkDistance(targetNode);
      this.f = this.g + this.h;
    }
  }, {
    key: "checkIsBetterFGH",
    value: function checkIsBetterFGH(referer) {
      var g = referer.g + this.checkDistance(referer);
      return g + this.h < this.f;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.moveTo(this.x, this.y);
      ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI);
    }
  }]);

  return Node;
}();

/* harmony default export */ __webpack_exports__["default"] = (Node);

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdFbmdpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9ub2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL21haW4uc2Nzcz9jYmI3Il0sIm5hbWVzIjpbIkxpc3QiLCJlbGVtZW50cyIsImVsZW1lbnQiLCJwdXNoIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwibGVuZ3RoIiwiY29tcGFyZUZuIiwic29ydCIsIkRyYXdFbmdpbmUiLCJncmFwaCIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwidyIsIndpZHRoIiwiaCIsImhlaWdodCIsImNsZWFyUmVjdCIsImJlZ2luUGF0aCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlV2lkdGgiLCJlZGdlcyIsImZvckVhY2giLCJlZGdlIiwiZHJhdyIsInN0cm9rZSIsImNsb3NlUGF0aCIsImZpbGxTdHlsZSIsImluYWN0aXZlTm9kZXMiLCJub2RlcyIsImZpbHRlciIsIm5vZGUiLCJpc0FjdGl2ZSIsImlzU3JjIiwiaXNEc3QiLCJmaWxsIiwiYWN0aXZlTm9kZXMiLCJzcmNOb2RlcyIsImRzdE5vZGVzIiwicGF0aE5vZGVzIiwiaXNQYXRoIiwiRWRnZSIsImEiLCJiIiwiaWQiLCJtb3ZlVG8iLCJ4IiwieSIsImxpbmVUbyIsIkdyYXBoIiwibGFzdElkVGltZSIsInByZWZpeCIsIm5vdyIsIkRhdGUiLCJOb2RlIiwibmV3SWQiLCJlZGdlc1RvUmVtb3ZlIiwicmVtb3ZlRWRnZSIsInJlbW92ZUZyb21BcnJheSIsImFkZE5laWdoYm9yIiwibmVpZ2hib3JzIiwiYXJyYXkiLCJWdWUiLCJlbCIsImRhdGEiLCJtb2RlIiwic2VsZWN0ZWROb2RlcyIsIm1vdW50ZWQiLCJkcmF3RW5naW5lIiwibWV0aG9kcyIsIm9uQ2hhbmdlTW9kZUNsaWNrIiwib25GaW5kUGF0aENsaWNrIiwiZmluZFBhdGgiLCJvbkNhbnZhc0NsaWNrIiwiZSIsImFkZE5vZGUiLCJzZWxlY3ROb2RlIiwidG9nZ2xlRWRnZSIsInJlbW92ZU5vZGUiLCJvbktleURvd24iLCJrZXkiLCJvbkNhbnZhc01vdXNlRG93biIsImJlZ2luTW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb3ZlTm9kZSIsImVuZE1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZWFjaE5vZGUiLCJhbGxDYWxsYmFjayIsImFjdGl2ZUNhbGxiYWNrIiwiaW5hY3RpdmVDYWxsYmFjayIsImFjdGl2ZU5vZGUiLCJjaGVja0NvbGxpc2lvbiIsIm9mZnNldFgiLCJvZmZzZXRZIiwiZmxhZyIsInNldEZsYWciLCJpbmFjdGl2ZU5vZGUiLCJzZWxlY3RlZE5vZGUiLCJoYXNFZGdlIiwiYWRkRWRnZSIsInNldFBvc2l0aW9uIiwic3JjTm9kZSIsImRzdE5vZGUiLCJvcGVuTGlzdCIsImNsb3NlTGlzdCIsInBhdGgiLCJpdGVyYXRpb25zIiwic2V0UmVmZXJlciIsImNvbnNvbGUiLCJ3YXJuIiwic2V0RkdIIiwiYWRkIiwiZiIsImN1cnJlbnROb2RlIiwiYXQiLCJyZW1vdmUiLCJoYXMiLCJjaGVja0lzQmV0dGVyRkdIIiwiaXNFbXB0eSIsImxvZyIsInJlZmVyZXIiLCJyZXZlcnNlIiwiZyIsImRpciIsImZsYWdTdGF0ZSIsIk1hdGgiLCJzcXJ0IiwicG93IiwidGFyZ2V0Tm9kZSIsImNoZWNrRGlzdGFuY2UiLCJhcmMiLCJQSSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNB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QUFLQyxDQUFoQixFQUFtQixLQUFLQyxDQUF4QjtBQUNBcEMsU0FBRyxDQUFDd0gsR0FBSixDQUFRLEtBQUtyRixDQUFiLEVBQWdCLEtBQUtDLENBQXJCLEVBQXdCLENBQXhCLEVBQTJCLENBQTNCLEVBQThCLElBQUkrRSxJQUFJLENBQUNNLEVBQXZDO0FBQ0Q7Ozs7OztBQUdZOUUsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUN0RUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4uanNcIik7XG4iLCJjbGFzcyBMaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5lbGVtZW50cyA9IFtdO1xuICB9XG5cbiAgYWRkKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gIH1cblxuICBoYXMoZWxlbWVudCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5lbGVtZW50cy5pbmRleE9mKGVsZW1lbnQpO1xuICAgIHJldHVybiBpbmRleCA+IC0xO1xuICB9XG5cbiAgcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZWxlbWVudHMuaW5kZXhPZihlbGVtZW50KTtcbiAgICBpZiggaW5kZXggPiAtMSApIHtcbiAgICAgIHRoaXMuZWxlbWVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cblxuICBhdChpbmRleCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRzW2luZGV4XTtcbiAgfVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudHMubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgc29ydChjb21wYXJlRm4pIHtcbiAgICB0aGlzLmVsZW1lbnRzLnNvcnQoY29tcGFyZUZuKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0O1xuIiwiY2xhc3MgRHJhd0VuZ2luZSB7XG4gIGNvbnN0cnVjdG9yKGdyYXBoKSB7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMudyA9IHRoaXMuY2FudmFzLndpZHRoO1xuICAgIHRoaXMuaCA9IHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICB0aGlzLmdyYXBoID0gZ3JhcGg7XG4gIH1cblxuICBkcmF3KCkge1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLncsIHRoaXMuaCk7XG5cbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjMzMzMzMzJztcbiAgICB0aGlzLmN0eC5zdHJva2VXaWR0aCA9IDI7XG4gICAgdGhpcy5ncmFwaC5lZGdlcy5mb3JFYWNoKGVkZ2UgPT4gZWRnZS5kcmF3KHRoaXMuY3R4KSk7XG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnIzY4Njg2OCc7XG4gICAgY29uc3QgaW5hY3RpdmVOb2RlcyA9IHRoaXMuZ3JhcGgubm9kZXMuZmlsdGVyKG5vZGUgPT4gIW5vZGUuaXNBY3RpdmUgJiYgIW5vZGUuaXNTcmMgJiYgIW5vZGUuaXNEc3QpO1xuICAgIGluYWN0aXZlTm9kZXMuZm9yRWFjaChub2RlID0+IG5vZGUuZHJhdyh0aGlzLmN0eCkpO1xuICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjNTNhYmRjJztcbiAgICBjb25zdCBhY3RpdmVOb2RlcyA9IHRoaXMuZ3JhcGgubm9kZXMuZmlsdGVyKG5vZGUgPT4gbm9kZS5pc0FjdGl2ZSk7XG4gICAgYWN0aXZlTm9kZXMuZm9yRWFjaChub2RlID0+IG5vZGUuZHJhdyh0aGlzLmN0eCkpO1xuICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjNWNkYzUyJztcbiAgICBjb25zdCBzcmNOb2RlcyA9IHRoaXMuZ3JhcGgubm9kZXMuZmlsdGVyKG5vZGUgPT4gbm9kZS5pc1NyYyk7XG4gICAgc3JjTm9kZXMuZm9yRWFjaChub2RlID0+IG5vZGUuZHJhdyh0aGlzLmN0eCkpO1xuICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjZGM1ZDUyJztcbiAgICBjb25zdCBkc3ROb2RlcyA9IHRoaXMuZ3JhcGgubm9kZXMuZmlsdGVyKG5vZGUgPT4gbm9kZS5pc0RzdCk7XG4gICAgZHN0Tm9kZXMuZm9yRWFjaChub2RlID0+IG5vZGUuZHJhdyh0aGlzLmN0eCkpO1xuICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjZGNkMDUyJztcbiAgICBjb25zdCBwYXRoTm9kZXMgPSB0aGlzLmdyYXBoLm5vZGVzLmZpbHRlcihub2RlID0+IG5vZGUuaXNQYXRoKTtcbiAgICBwYXRoTm9kZXMuZm9yRWFjaChub2RlID0+IG5vZGUuZHJhdyh0aGlzLmN0eCkpO1xuICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcmF3RW5naW5lO1xuIiwiY2xhc3MgRWRnZSB7XG4gIGNvbnN0cnVjdG9yKGEsIGIsIHsgaWQgfSkge1xuICAgIHRoaXMuYSA9IGE7XG4gICAgdGhpcy5iID0gYjtcbiAgICB0aGlzLmlkID0gaWQ7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGN0eC5tb3ZlVG8odGhpcy5hLngsIHRoaXMuYS55KTtcbiAgICBjdHgubGluZVRvKHRoaXMuYi54LCB0aGlzLmIueSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRnZTtcbiIsImltcG9ydCBOb2RlIGZyb20gJy4vbm9kZSc7XG5pbXBvcnQgRWRnZSBmcm9tICcuL2VkZ2UnO1xuXG5jbGFzcyBHcmFwaCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubm9kZXMgPSBbXTtcbiAgICB0aGlzLmVkZ2VzID0gW107XG4gICAgdGhpcy5sYXN0SWRUaW1lID0gbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVGcm9tQXJyYXkoYXJyYXksIGVsZW1lbnQpIHtcbiAgICBjb25zdCBpbmRleCA9IGFycmF5LmluZGV4T2YoZWxlbWVudCk7XG4gICAgaWYoIGluZGV4ID4gLTEgKSB7XG4gICAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIG5ld0lkKHByZWZpeCkge1xuICAgIGxldCBub3cgPSBEYXRlLm5vdygpO1xuICAgIGlmKCBub3cgPT09IHRoaXMubGFzdElkVGltZSApIG5vdysrO1xuXG4gICAgdGhpcy5sYXN0SWRUaW1lID0gbm93O1xuICAgIHJldHVybiBgJHtwcmVmaXh9LSR7bm93fWA7XG4gIH1cblxuICBhZGROb2RlKHgsIHkpIHtcbiAgICBjb25zdCBub2RlID0gbmV3IE5vZGUoeCwgeSwge1xuICAgICAgaWQ6IHRoaXMubmV3SWQoJ25vZGUnKSxcbiAgICB9KTtcblxuICAgIHRoaXMubm9kZXMucHVzaChub2RlKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcmVtb3ZlTm9kZShub2RlKSB7XG4gICAgY29uc3QgZWRnZXNUb1JlbW92ZSA9IHRoaXMuZWRnZXMuZmlsdGVyKGVkZ2UgPT4gKFxuICAgICAgZWRnZS5hID09PSBub2RlIHx8IGVkZ2UuYiA9PT0gbm9kZVxuICAgICkpO1xuICAgIGVkZ2VzVG9SZW1vdmUuZm9yRWFjaChlZGdlID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlRWRnZShlZGdlKTtcbiAgICB9KTtcblxuICAgIEdyYXBoLnJlbW92ZUZyb21BcnJheSh0aGlzLm5vZGVzLCBub2RlKTtcbiAgfVxuXG4gIGFkZEVkZ2UoYSwgYikge1xuICAgIGlmKCBhID09PSBiICkgcmV0dXJuO1xuXG4gICAgY29uc3QgZWRnZSA9IG5ldyBFZGdlKGEsIGIsIHtcbiAgICAgIGlkOiB0aGlzLm5ld0lkKCdlZGdlJyksXG4gICAgfSk7XG5cbiAgICB0aGlzLmVkZ2VzLnB1c2goZWRnZSk7XG5cbiAgICBhLmFkZE5laWdoYm9yKGIpO1xuICAgIGIuYWRkTmVpZ2hib3IoYSk7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2UoZWRnZSkge1xuICAgIGNvbnN0IHthLCBifSA9IGVkZ2U7XG5cbiAgICBHcmFwaC5yZW1vdmVGcm9tQXJyYXkoYS5uZWlnaGJvcnMsIGIpO1xuICAgIEdyYXBoLnJlbW92ZUZyb21BcnJheShiLm5laWdoYm9ycywgYSk7XG5cbiAgICBHcmFwaC5yZW1vdmVGcm9tQXJyYXkodGhpcy5lZGdlcywgZWRnZSk7XG4gIH1cblxuICBoYXNFZGdlKGEsIGIpIHtcbiAgICByZXR1cm4gdGhpcy5lZGdlcy5maWx0ZXIoZWRnZSA9PiAoXG4gICAgICAoIGVkZ2UuYSA9PT0gYSAmJiBlZGdlLmIgPT09IGIgKSB8fCAoIGVkZ2UuYSA9PT0gYiAmJiBlZGdlLmIgPT09IGEgKVxuICAgICkpWzBdO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JhcGg7XG4iLCIvKiBnbG9iYWxzIFZ1ZSAqL1xuaW1wb3J0ICcuL3Njc3MvbWFpbi5zY3NzJztcbmltcG9ydCBHcmFwaCBmcm9tICcuL2dyYXBoJztcbmltcG9ydCBMaXN0IGZyb20gJy4vTGlzdCc7XG5pbXBvcnQgRHJhd0VuZ2luZSBmcm9tICcuL2RyYXdFbmdpbmUnO1xuXG5uZXcgVnVlKHtcbiAgZWw6ICcjYXBwJyxcbiAgZGF0YToge1xuICAgIG1vZGU6ICdhZGRfbm9kZScsXG4gICAgZ3JhcGg6IG5ldyBHcmFwaCgpLFxuICAgIHNlbGVjdGVkTm9kZXM6IFtdLFxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZHJhd0VuZ2luZSA9IG5ldyBEcmF3RW5naW5lKHRoaXMuZ3JhcGgpO1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25DaGFuZ2VNb2RlQ2xpY2sobW9kZSkge1xuICAgICAgdGhpcy5tb2RlID0gbW9kZTtcbiAgICB9LFxuICAgIG9uRmluZFBhdGhDbGljaygpIHtcbiAgICAgIHRoaXMuZmluZFBhdGgoKTtcbiAgICB9LFxuICAgIG9uQ2FudmFzQ2xpY2soZSkge1xuICAgICAgc3dpdGNoICh0aGlzLm1vZGUpIHtcbiAgICAgICAgY2FzZSAnYWRkX25vZGUnOlxuICAgICAgICAgIHRoaXMuYWRkTm9kZShlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc2VsZWN0X25vZGUnOlxuICAgICAgICAgIHRoaXMuc2VsZWN0Tm9kZShlLCAnaXNBY3RpdmUnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndG9nZ2xlX2VkZ2UnOlxuICAgICAgICAgIHRoaXMudG9nZ2xlRWRnZShlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVtb3ZlX25vZGUnOlxuICAgICAgICAgIHRoaXMucmVtb3ZlTm9kZShlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc2V0X3NyY19ub2RlJzpcbiAgICAgICAgICB0aGlzLnNlbGVjdE5vZGUoZSwgJ2lzU3JjJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3NldF9kc3Rfbm9kZSc6XG4gICAgICAgICAgdGhpcy5zZWxlY3ROb2RlKGUsICdpc0RzdCcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OiBicmVhaztcbiAgICAgIH1cbiAgICAgIHRoaXMuZHJhd0VuZ2luZS5kcmF3KCk7XG4gICAgfSxcbiAgICBvbktleURvd24oZSkge1xuICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICBjYXNlICdhJzpcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlTW9kZUNsaWNrKCdhZGRfbm9kZScpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgY2FzZSAncic6XG4gICAgICAgICAgdGhpcy5vbkNoYW5nZU1vZGVDbGljaygncmVtb3ZlX25vZGUnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgdGhpcy5vbkNoYW5nZU1vZGVDbGljaygnc2VsZWN0X25vZGUnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZSc6XG4gICAgICAgICAgdGhpcy5vbkNoYW5nZU1vZGVDbGljaygndG9nZ2xlX2VkZ2UnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbSc6XG4gICAgICAgIGNhc2UgJ2cnOlxuICAgICAgICAgIHRoaXMub25DaGFuZ2VNb2RlQ2xpY2soJ21vdmVfbm9kZScpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcsJzpcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlTW9kZUNsaWNrKCdzZXRfc3JjX25vZGUnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnLic6XG4gICAgICAgICAgdGhpcy5vbkNoYW5nZU1vZGVDbGljaygnc2V0X2RzdF9ub2RlJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2YnOlxuICAgICAgICBjYXNlICcgJzpcbiAgICAgICAgICB0aGlzLmZpbmRQYXRoKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25DYW52YXNNb3VzZURvd24oZSkge1xuICAgICAgc3dpdGNoICh0aGlzLm1vZGUpIHtcbiAgICAgICAgY2FzZSAnbW92ZV9ub2RlJzpcbiAgICAgICAgICB0aGlzLmJlZ2luTW92ZShlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDogYnJlYWs7XG4gICAgICB9XG4gICAgICB0aGlzLmRyYXdFbmdpbmUuZHJhdygpO1xuICAgIH0sXG4gICAgYmVnaW5Nb3ZlKGUpIHtcbiAgICAgIHRoaXMuc2VsZWN0Tm9kZShlLCAnaXNBY3RpdmUnKTtcbiAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW92ZU5vZGUpO1xuICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuZW5kTW92ZSk7XG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5lbmRNb3ZlKTtcbiAgICB9LFxuICAgIGVuZE1vdmUoKSB7XG4gICAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdmVOb2RlKTtcbiAgICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmVuZE1vdmUpO1xuICAgICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuZW5kTW92ZSk7XG4gICAgfSxcbiAgICBlYWNoTm9kZShlLCBhbGxDYWxsYmFjaywgYWN0aXZlQ2FsbGJhY2ssIGluYWN0aXZlQ2FsbGJhY2spIHtcbiAgICAgIGxldCBhY3RpdmVOb2RlID0gbnVsbDtcbiAgICAgIHRoaXMuZ3JhcGgubm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgYWxsQ2FsbGJhY2sgJiYgYWxsQ2FsbGJhY2sobm9kZSk7XG4gICAgICAgIGlmICghYWN0aXZlTm9kZSAmJiBub2RlLmNoZWNrQ29sbGlzaW9uKGUub2Zmc2V0WCwgZS5vZmZzZXRZKSkge1xuICAgICAgICAgIGFjdGl2ZU5vZGUgPSBub2RlO1xuICAgICAgICAgIGFjdGl2ZUNhbGxiYWNrICYmIGFjdGl2ZUNhbGxiYWNrKG5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGluYWN0aXZlQ2FsbGJhY2sgJiYgaW5hY3RpdmVDYWxsYmFjayhub2RlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gYWN0aXZlTm9kZTtcbiAgICB9LFxuICAgIGFkZE5vZGUoZSkge1xuICAgICAgdGhpcy5ncmFwaC5hZGROb2RlKGUub2Zmc2V0WCwgZS5vZmZzZXRZKTtcbiAgICAgIHRoaXMuc2VsZWN0Tm9kZShlLCAnaXNBY3RpdmUnKTtcbiAgICB9LFxuICAgIHNlbGVjdE5vZGUoZSwgZmxhZykge1xuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVzID0gW107XG4gICAgICB0aGlzLmVhY2hOb2RlKGUsIG51bGwsIGFjdGl2ZU5vZGUgPT4ge1xuICAgICAgICB0aGlzLnNlbGVjdGVkTm9kZXMucHVzaChhY3RpdmVOb2RlKTtcbiAgICAgICAgYWN0aXZlTm9kZS5zZXRGbGFnKGZsYWcsIHRydWUpO1xuICAgICAgfSwgaW5hY3RpdmVOb2RlID0+IHtcbiAgICAgICAgaW5hY3RpdmVOb2RlLnNldEZsYWcoZmxhZywgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICB0b2dnbGVFZGdlKGUpIHtcbiAgICAgIHRoaXMuZWFjaE5vZGUoZSwgbnVsbCwgYWN0aXZlTm9kZSA9PiB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWROb2Rlcy5mb3JFYWNoKHNlbGVjdGVkTm9kZSA9PiB7XG4gICAgICAgICAgY29uc3QgZWRnZSA9IHRoaXMuZ3JhcGguaGFzRWRnZShzZWxlY3RlZE5vZGUsIGFjdGl2ZU5vZGUpO1xuICAgICAgICAgIGlmIChlZGdlKSB7XG4gICAgICAgICAgICB0aGlzLmdyYXBoLnJlbW92ZUVkZ2UoZWRnZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGguYWRkRWRnZShzZWxlY3RlZE5vZGUsIGFjdGl2ZU5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHJlbW92ZU5vZGUoZSkge1xuICAgICAgdGhpcy5ncmFwaC5yZW1vdmVOb2RlKHRoaXMuZWFjaE5vZGUoZSkpO1xuICAgIH0sXG4gICAgbW92ZU5vZGUoZSkge1xuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVzLmZvckVhY2goc2VsZWN0ZWROb2RlID0+IHtcbiAgICAgICAgc2VsZWN0ZWROb2RlLnNldFBvc2l0aW9uKGUub2Zmc2V0WCwgZS5vZmZzZXRZKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5kcmF3RW5naW5lLmRyYXcoKTtcbiAgICB9LFxuICAgIGZpbmRQYXRoKCkge1xuICAgICAgbGV0IHNyY05vZGUgPSBudWxsLCBkc3ROb2RlID0gbnVsbCxcbiAgICAgICAgb3Blbkxpc3QgPSBuZXcgTGlzdCgpLFxuICAgICAgICBjbG9zZUxpc3QgPSBuZXcgTGlzdCgpLFxuICAgICAgICBwYXRoID0gW10sIGl0ZXJhdGlvbnMgPSAwO1xuXG4gICAgICB0aGlzLmdyYXBoLm5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIG5vZGUuc2V0UmVmZXJlcihudWxsKTtcbiAgICAgICAgbm9kZS5zZXRGbGFnKCdpc1BhdGgnLCBmYWxzZSk7XG4gICAgICAgIG5vZGUuc2V0RmxhZygnaXNBY3RpdmUnLCBmYWxzZSk7XG4gICAgICAgIGlmIChub2RlLmlzU3JjKSBzcmNOb2RlID0gbm9kZTtcbiAgICAgICAgaWYgKG5vZGUuaXNEc3QpIGRzdE5vZGUgPSBub2RlO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICghc3JjTm9kZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ05vIHNvdXJjZSBub2RlJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghZHN0Tm9kZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ05vIHRhcmdldCBub2RlJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNyY05vZGUuc2V0RkdIKGRzdE5vZGUpO1xuICAgICAgb3Blbkxpc3QuYWRkKHNyY05vZGUpO1xuXG4gICAgICB3aGlsZSAoIW9wZW5MaXN0LmlzRW1wdHkoKSkge1xuICAgICAgICBpdGVyYXRpb25zKys7XG5cbiAgICAgICAgb3Blbkxpc3Quc29ydCgoYSwgYikgPT4gKGEuZiAtIGIuZikpO1xuICAgICAgICBjb25zdCBjdXJyZW50Tm9kZSA9IG9wZW5MaXN0LmF0KDApO1xuXG4gICAgICAgIG9wZW5MaXN0LnJlbW92ZShjdXJyZW50Tm9kZSk7XG4gICAgICAgIGNsb3NlTGlzdC5hZGQoY3VycmVudE5vZGUpO1xuXG4gICAgICAgIGN1cnJlbnROb2RlLm5laWdoYm9ycy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgIGlmIChjbG9zZUxpc3QuaGFzKG5vZGUpKSByZXR1cm47XG4gICAgICAgICAgaWYgKG9wZW5MaXN0Lmhhcyhub2RlKSkge1xuICAgICAgICAgICAgaWYgKG5vZGUuY2hlY2tJc0JldHRlckZHSChjdXJyZW50Tm9kZSkpIHtcbiAgICAgICAgICAgICAgbm9kZS5zZXRSZWZlcmVyKGN1cnJlbnROb2RlKTtcbiAgICAgICAgICAgICAgbm9kZS5zZXRGR0goZHN0Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIG5vZGUuc2V0UmVmZXJlcihjdXJyZW50Tm9kZSk7XG4gICAgICAgICAgbm9kZS5zZXRGR0goZHN0Tm9kZSk7XG4gICAgICAgICAgb3Blbkxpc3QuYWRkKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2coJ0l0ZXJhdGlvbjogJywgaXRlcmF0aW9ucyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgaWYgKGNsb3NlTGlzdC5oYXMoZHN0Tm9kZSkpIHtcbiAgICAgICAgbGV0IHJlZmVyZXIgPSBkc3ROb2RlO1xuICAgICAgICB3aGlsZSAocmVmZXJlcikge1xuICAgICAgICAgIGlmICghcmVmZXJlci5pc0RzdCAmJiAhcmVmZXJlci5pc1NyYykgcmVmZXJlci5zZXRGbGFnKCdpc1BhdGgnLCB0cnVlKTtcbiAgICAgICAgICBwYXRoLnB1c2gocmVmZXJlcik7XG4gICAgICAgICAgcmVmZXJlciA9IHJlZmVyZXIucmVmZXJlcjtcbiAgICAgICAgfVxuICAgICAgICBwYXRoLnJldmVyc2UoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1BhdGggbGVuZ3RoOiAnLCBkc3ROb2RlLmcpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS5kaXIocGF0aCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgICB0aGlzLmRyYXdFbmdpbmUuZHJhdygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdObyBwYXRoIHRvIHRhcmdldCBub2RlJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgfVxuICAgIH0sXG4gIH1cbn0pO1xuIiwiY2xhc3MgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHsgaWQsIG5laWdoYm9ycyB9KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLm5laWdoYm9ycyA9IG5laWdoYm9ycyB8fCBbXTtcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5pc1BhdGggPSBmYWxzZTtcbiAgICB0aGlzLmlzU3JjID0gZmFsc2U7XG4gICAgdGhpcy5pc0RzdCA9IGZhbHNlO1xuICAgIHRoaXMuZiA9IDA7XG4gICAgdGhpcy5nID0gMDtcbiAgICB0aGlzLmggPSAwO1xuICAgIHRoaXMucmVmZXJlciA9IG51bGw7XG4gIH1cblxuICBhZGROZWlnaGJvcihub2RlKSB7XG4gICAgdGhpcy5uZWlnaGJvcnMucHVzaChub2RlKTtcbiAgfVxuXG4gIHNldEZsYWcoZmxhZywgZmxhZ1N0YXRlKSB7XG4gICAgaWYgKGZsYWcgPT09ICdpc0FjdGl2ZScpIHtcbiAgICAgIGlmIChmbGFnU3RhdGUpIHtcbiAgICAgICAgdGhpcy5pc1BhdGggPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1NyYyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRHN0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpc1tmbGFnXSA9IGZsYWdTdGF0ZTtcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBjaGVja0NvbGxpc2lvbih4LCB5KSB7XG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh0aGlzLnggLSB4LCAyKSArIE1hdGgucG93KHRoaXMueSAtIHksIDIpKSA8IDU7XG4gIH1cblxuICBjaGVja0Rpc3RhbmNlKG5vZGUpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHRoaXMueCAtIG5vZGUueCwgMikgKyBNYXRoLnBvdyh0aGlzLnkgLSBub2RlLnksIDIpKTtcbiAgfVxuXG4gIHNldFJlZmVyZXIocmVmZXJlcikge1xuICAgIHRoaXMucmVmZXJlciA9IHJlZmVyZXI7XG4gIH1cblxuICBzZXRGR0godGFyZ2V0Tm9kZSkge1xuICAgIGlmICghdGhpcy5yZWZlcmVyKSB7XG4gICAgICB0aGlzLmcgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmcgPSB0aGlzLnJlZmVyZXIuZyArIHRoaXMuY2hlY2tEaXN0YW5jZSh0aGlzLnJlZmVyZXIpO1xuICAgIH1cbiAgICB0aGlzLmggPSB0aGlzLmNoZWNrRGlzdGFuY2UodGFyZ2V0Tm9kZSk7XG4gICAgdGhpcy5mID0gdGhpcy5nICsgdGhpcy5oO1xuICB9XG5cbiAgY2hlY2tJc0JldHRlckZHSChyZWZlcmVyKSB7XG4gICAgY29uc3QgZyA9IHJlZmVyZXIuZyArIHRoaXMuY2hlY2tEaXN0YW5jZShyZWZlcmVyKTtcbiAgICByZXR1cm4gKGcgKyB0aGlzLmgpIDwgdGhpcy5mO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjdHgubW92ZVRvKHRoaXMueCwgdGhpcy55KTtcbiAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCA1LCAwLCAyICogTWF0aC5QSSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm9kZTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=