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
/******/ 	__webpack_require__.p = "/webpack-demo";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/Food.js":
/*!*********************!*\
  !*** ./lib/Food.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece.js */ "./lib/GamePiece.js");

var Food = function (_GamePiece) {
  _inherits(Food, _GamePiece);

  function Food(x, y, height, width, color) {
    _classCallCheck(this, Food);

    var _this = _possibleConstructorReturn(this, (Food.__proto__ || Object.getPrototypeOf(Food)).call(this, x, y, height, width, color));

    _this.x = x;
    _this.y = y;
    return _this;
  }

  _createClass(Food, [{
    key: 'createFood',
    value: function createFood() {

      this.x = Math.floor(Math.random() * 30) * 20;
      this.y = Math.floor(Math.random() * 30) * 20;
    }
  }]);

  return Food;
}(GamePiece);

module.exports = Food;

/***/ }),

/***/ "./lib/Game.js":
/*!*********************!*\
  !*** ./lib/Game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Snake = __webpack_require__(/*! ./Snake.js */ "./lib/Snake.js");
var Food = __webpack_require__(/*! ./Food.js */ "./lib/Food.js");

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.gameOver = false;
    this.score = 0;
    this.highScore = 92;
    this.snake = new Snake(50, 50, 20, 20, 'rgb(255, 0, 0)', 0);
    this.food = new Food(350, 20, 20, 20, 'rgb(0, 255, 0)');
  }

  _createClass(Game, [{
    key: 'startGame',
    value: function startGame() {
      this.snake.die = false;
      this.snake.makeInitialSnake();
    }
  }, {
    key: 'animate',
    value: function animate(context) {
      this.snake.drawSnakeBody(context);
      this.snake.move();
      this.food.draw(context);
      this.eatFood();
      this.snake.checkEatItself(context);
      this.snake.checkInBounds(context);
    }
  }, {
    key: 'eatFood',
    value: function eatFood() {
      if (this.snake.head.isCollidingWith(this.food)) {
        this.score += 1;
        this.food.createFood();
        this.snake.growSnake();
      }
    }
  }]);

  return Game;
}();

module.exports = Game;

/***/ }),

/***/ "./lib/GamePiece.js":
/*!**************************!*\
  !*** ./lib/GamePiece.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function GamePiece(x, y) {
    var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
    var width = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 20;
    var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'brown';

    _classCallCheck(this, GamePiece);

    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
  }

  _createClass(GamePiece, [{
    key: 'isCollidingWith',
    value: function isCollidingWith(object) {
      return !(this.x + this.width < object.x || this.y + this.height < object.y || this.x > object.x + object.width || this.y > object.y + object.height);
    }
  }, {
    key: 'draw',
    value: function draw(context) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          color = this.color;


      context.fillStyle = color;
      context.beginPath();
      context.fillRect(x, y, width, height);
      context.closePath();
    }
  }]);

  return GamePiece;
}();

/***/ }),

/***/ "./lib/Snake.js":
/*!**********************!*\
  !*** ./lib/Snake.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece.js */ "./lib/GamePiece.js");

var Snake = function (_GamePiece) {
  _inherits(Snake, _GamePiece);

  function Snake(x, y) {
    var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
    var width = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 20;
    var color = arguments[4];

    _classCallCheck(this, Snake);

    var _this = _possibleConstructorReturn(this, (Snake.__proto__ || Object.getPrototypeOf(Snake)).call(this, x, y, height, width, color));

    _this.head = null;
    _this.tail = [];
    _this.newTail = _this.tail[0];
    _this.direction = 'right';
    _this.dead = false;
    return _this;
  }

  _createClass(Snake, [{
    key: 'makeInitialSnake',
    value: function makeInitialSnake() {
      for (var i = 20; i < 100; i += 20) {
        var block = new GamePiece(i, 20);

        this.tail.push(block);
      }
      return this;
    }
  }, {
    key: 'drawSnakeBody',
    value: function drawSnakeBody(context) {
      this.tail.forEach(function (block) {
        block.draw(context);
      });
    }
  }, {
    key: 'move',
    value: function move() {
      this.newTail = this.tail.shift();
      this.head = this.tail[this.tail.length - 1];

      switch (this.direction) {
        case 'left':
          this.newTail.x = this.head.x - 20;
          this.newTail.y = this.head.y;
          break;
        case 'up':
          this.newTail.y = this.head.y - 20;
          this.newTail.x = this.head.x;
          break;
        case 'right':
          this.newTail.x = this.head.x + 20;
          this.newTail.y = this.head.y;
          break;
        case 'down':
          this.newTail.y = this.head.y + 20;
          this.newTail.x = this.head.x;
          break;
      }
      this.tail.push(this.newTail);
      return this;
    }
  }, {
    key: 'changeDirection',
    value: function changeDirection(_changeDirection) {
      if (_changeDirection != this.direction) {
        this.direction = _changeDirection;
      }
    }
  }, {
    key: 'growSnake',
    value: function growSnake() {
      var currentTail = this.tail[0];

      switch (this.changeDirection) {
        case 'left':
          this.x = currentTail.x + 20;
          this.y = currentTail.y;
          break;
        case 'up':
          this.x = currentTail.x;
          this.y = currentTail.y + 20;
          break;
        case 'right':
          this.x = currentTail.x - 20;
          this.y = currentTail.y;
          break;
        case 'down':
          this.x = currentTail.x;
          this.y = currentTail.y - 20;
          break;
      }
      var newBlock = new GamePiece(currentTail.x, currentTail.y, 20, 20);

      this.tail.unshift(newBlock);
      return this;
    }
  }, {
    key: 'checkInBounds',
    value: function checkInBounds() {
      if (this.head.x + 20 === 0 || this.head.x - 20 === 600) {
        this.dead = true;
      } else if (this.head.y + 20 === 0 || this.head.y - 20 === 600) {
        this.dead = true;
      }
    }
  }, {
    key: 'checkEatItself',
    value: function checkEatItself(context) {
      for (var i = 0; i < this.tail.length - 2; i++) {
        if (this.head.x === this.tail[i].x && this.head.y === this.tail[i].y) {
          context.clearRect(0, 0, 600, 600);
          this.dead = true;
        }
      }
    }
  }]);

  return Snake;
}(GamePiece);

module.exports = Snake;

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Game = __webpack_require__(/*! ./Game.js */ "./lib/Game.js");
var canvas = document.querySelector('#game');
var context = canvas.getContext('2d');
var game = new Game(context);

window.addEventListener('keydown', keyPress);

document.querySelector('.retry-button').addEventListener('click', function () {
  location.reload();
});

document.querySelector('.new-game').addEventListener('click', function () {
  location.reload();
});

var gameLoop = function gameLoop() {
  document.querySelector('.player-score').innerText = game.score;
  checkGameOver();
};

var keyboard = {
  65: function _() {
    return game.snake.direction !== 'right' ? game.snake.direction = 'left' : game.snake.direction;
  },
  87: function _() {
    return game.snake.direction !== 'down' ? game.snake.direction = 'up' : game.snake.direction;
  },
  68: function _() {
    return game.snake.direction !== 'left' ? game.snake.direction = 'right' : game.snake.direction;
  },
  83: function _() {
    return game.snake.direction !== 'up' ? game.snake.direction = 'down' : game.snake.direction;
  }
};

function keyPress(event) {
  if (keyboard[event.keyCode]) {
    keyboard[event.keyCode]();
  }
}

var displayHeaderBox = function displayHeaderBox() {
  return document.querySelector('.header-box').classList.toggle('shown');
};

var hideWelcomeScreen = function hideWelcomeScreen() {
  return document.querySelector('.welcome-screen').classList.toggle('hide');
};

document.querySelector('.start-game').addEventListener('click', function () {
  displayHeaderBox();
  hideWelcomeScreen();
  requestAnimationFrame(gameLoop);
  game.startGame();
});

var checkGameOver = function checkGameOver() {
  if (game.snake.dead) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    document.querySelector('.game-over').classList.toggle('shown');
    submitScore();
    return;
  } else {
    window.setTimeout(function () {
      context.clearRect(0, 0, canvas.width, canvas.height);
      game.animate(context);
      requestAnimationFrame(gameLoop);
    }, 120);
  }
};

var submitScore = function submitScore() {
  if (game.score >= game.highScore) {
    document.querySelector('.high-score-input').classList.toggle('shown');
  } else {
    document.querySelector('.input-your-score').classList.toggle('shown');
  }
};

var submitButton = document.querySelector('.submit-button');

submitButton.addEventListener('click', function () {
  submitNewScore();
  document.querySelector('.submit-button').classList.toggle('hide');
});

var submitNewScore = function submitNewScore() {
  var score = document.querySelector('.score-list');
  var userName = document.querySelector('.player-score-input').value;
  var myScore = game.score;
  var node = document.createElement('LI');
  node.innerHTML = userName + '................' + myScore;
  score.appendChild(node);
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0Zvb2QuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWVQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvU25ha2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIkdhbWVQaWVjZSIsInJlcXVpcmUiLCJGb29kIiwieCIsInkiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibW9kdWxlIiwiZXhwb3J0cyIsIlNuYWtlIiwiR2FtZSIsImdhbWVPdmVyIiwic2NvcmUiLCJoaWdoU2NvcmUiLCJzbmFrZSIsImZvb2QiLCJkaWUiLCJtYWtlSW5pdGlhbFNuYWtlIiwiY29udGV4dCIsImRyYXdTbmFrZUJvZHkiLCJtb3ZlIiwiZHJhdyIsImVhdEZvb2QiLCJjaGVja0VhdEl0c2VsZiIsImNoZWNrSW5Cb3VuZHMiLCJoZWFkIiwiaXNDb2xsaWRpbmdXaXRoIiwiY3JlYXRlRm9vZCIsImdyb3dTbmFrZSIsIm9iamVjdCIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImZpbGxSZWN0IiwiY2xvc2VQYXRoIiwidGFpbCIsIm5ld1RhaWwiLCJkaXJlY3Rpb24iLCJkZWFkIiwiaSIsImJsb2NrIiwicHVzaCIsImZvckVhY2giLCJzaGlmdCIsImxlbmd0aCIsImNoYW5nZURpcmVjdGlvbiIsImN1cnJlbnRUYWlsIiwibmV3QmxvY2siLCJ1bnNoaWZ0IiwiY2xlYXJSZWN0IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Q29udGV4dCIsImdhbWUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwia2V5UHJlc3MiLCJsb2NhdGlvbiIsInJlbG9hZCIsImdhbWVMb29wIiwiaW5uZXJUZXh0IiwiY2hlY2tHYW1lT3ZlciIsImtleWJvYXJkIiwiZXZlbnQiLCJrZXlDb2RlIiwiZGlzcGxheUhlYWRlckJveCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImhpZGVXZWxjb21lU2NyZWVuIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic3RhcnRHYW1lIiwic3VibWl0U2NvcmUiLCJzZXRUaW1lb3V0IiwiYW5pbWF0ZSIsInN1Ym1pdEJ1dHRvbiIsInN1Ym1pdE5ld1Njb3JlIiwidXNlck5hbWUiLCJ2YWx1ZSIsIm15U2NvcmUiLCJub2RlIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFJQSxZQUFZLG1CQUFBQyxDQUFRLDBDQUFSLENBQWhCOztJQUVNQyxJOzs7QUFDSixnQkFBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCQyxNQUFsQixFQUEwQkMsS0FBMUIsRUFBaUNDLEtBQWpDLEVBQXdDO0FB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LFdBQU4sQ0FBa0JILElBQWxCO0FBQ0QsQ0FQRCxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvd2VicGFjay1kZW1vXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2luZGV4LmpzXCIpO1xuIiwidmFyIEdhbWVQaWVjZSA9IHJlcXVpcmUoJy4vR2FtZVBpZWNlLmpzJyk7XG5cbmNsYXNzIEZvb2QgZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcikge1xuICAgIHN1cGVyKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKTtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBjcmVhdGVGb29kKCkge1xuXG4gICAgdGhpcy54ID0gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMwKSAqIDIwKTtcbiAgICB0aGlzLnkgPSAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzApICogMjApO1xuICB9XG59XG5cbiAgICBcbiAgICBcbiBcblxubW9kdWxlLmV4cG9ydHMgPSBGb29kOyIsImNvbnN0IFNuYWtlID0gcmVxdWlyZSgnLi9TbmFrZS5qcycpO1xuY29uc3QgRm9vZCA9IHJlcXVpcmUoJy4vRm9vZC5qcycpO1xuXG5cbmNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5oaWdoU2NvcmUgPSA5MjtcbiAgICB0aGlzLnNuYWtlID0gbmV3IFNuYWtlKDUwLCA1MCwgMjAsIDIwLCAncmdiKDI1NSwgMCwgMCknLCAwKTtcbiAgICB0aGlzLmZvb2QgPSBuZXcgRm9vZCgzNTAsIDIwLCAyMCwgMjAsICdyZ2IoMCwgMjU1LCAwKScpO1xuICB9XG5cbiAgc3RhcnRHYW1lKCkge1xuICAgIHRoaXMuc25ha2UuZGllID0gZmFsc2U7XG4gICAgdGhpcy5zbmFrZS5tYWtlSW5pdGlhbFNuYWtlKCk7XG4gIH1cblxuICBhbmltYXRlKGNvbnRleHQpIHtcbiAgICB0aGlzLnNuYWtlLmRyYXdTbmFrZUJvZHkoY29udGV4dCk7XG4gICAgdGhpcy5zbmFrZS5tb3ZlKCk7XG4gICAgdGhpcy5mb29kLmRyYXcoY29udGV4dCk7XG4gICAgdGhpcy5lYXRGb29kKCk7XG4gICAgdGhpcy5zbmFrZS5jaGVja0VhdEl0c2VsZihjb250ZXh0KTtcbiAgICB0aGlzLnNuYWtlLmNoZWNrSW5Cb3VuZHMoY29udGV4dCk7XG4gIH1cblxuICBlYXRGb29kKCkge1xuICAgIGlmICh0aGlzLnNuYWtlLmhlYWQuaXNDb2xsaWRpbmdXaXRoKHRoaXMuZm9vZCkpIHtcbiAgICAgIHRoaXMuc2NvcmUgKz0gMTtcbiAgICAgIHRoaXMuZm9vZC5jcmVhdGVGb29kKCk7XG4gICAgICB0aGlzLnNuYWtlLmdyb3dTbmFrZSgpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7IiwibW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQgPSAyMCwgd2lkdGggPSAyMCwgY29sb3IgPSAnYnJvd24nKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gIH1cblxuICBpc0NvbGxpZGluZ1dpdGgob2JqZWN0KSB7XG4gICAgcmV0dXJuICEoXG4gICAgICB0aGlzLnggKyB0aGlzLndpZHRoIDwgb2JqZWN0LnggfHxcbiAgICAgIHRoaXMueSArIHRoaXMuaGVpZ2h0IDwgb2JqZWN0LnkgfHxcbiAgICAgIHRoaXMueCA+IG9iamVjdC54ICsgb2JqZWN0LndpZHRoIHx8XG4gICAgICB0aGlzLnkgPiBvYmplY3QueSArIG9iamVjdC5oZWlnaHRcbiAgICApO1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgY29uc3QgeyB4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvciB9ID0gdGhpcztcblxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LmZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gIH1cbn07XG5cbiIsInZhciBHYW1lUGllY2UgPSByZXF1aXJlKCcuL0dhbWVQaWVjZS5qcycpO1xuXG5jbGFzcyBTbmFrZSBleHRlbmRzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCA9IDIwLCB3aWR0aCA9IDIwLCBjb2xvcikge1xuICAgIHN1cGVyKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKTtcbiAgICB0aGlzLmhlYWQgPSBudWxsO1xuICAgIHRoaXMudGFpbCA9IFtdO1xuICAgIHRoaXMubmV3VGFpbCA9IHRoaXMudGFpbFswXTtcbiAgICB0aGlzLmRpcmVjdGlvbiA9ICdyaWdodCc7XG4gICAgdGhpcy5kZWFkID0gZmFsc2U7XG4gIH1cblxuICBtYWtlSW5pdGlhbFNuYWtlKCkge1xuICAgIGZvciAobGV0IGkgPSAyMDsgaSA8IDEwMDsgaSArPSAyMCkge1xuICAgICAgbGV0IGJsb2NrID0gbmV3IEdhbWVQaWVjZShpLCAyMCk7XG5cbiAgICAgIHRoaXMudGFpbC5wdXNoKGJsb2NrKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkcmF3U25ha2VCb2R5KGNvbnRleHQpIHtcbiAgICB0aGlzLnRhaWwuZm9yRWFjaCgoYmxvY2spID0+IHtcbiAgICAgIGJsb2NrLmRyYXcoY29udGV4dCk7XG4gICAgfSk7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIHRoaXMubmV3VGFpbCA9IHRoaXMudGFpbC5zaGlmdCgpO1xuICAgIHRoaXMuaGVhZCA9IHRoaXMudGFpbFt0aGlzLnRhaWwubGVuZ3RoIC0gMV07XG4gICAgXG4gICAgc3dpdGNoICh0aGlzLmRpcmVjdGlvbikge1xuICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgdGhpcy5uZXdUYWlsLnggPSB0aGlzLmhlYWQueCAtIDIwO1xuICAgICAgdGhpcy5uZXdUYWlsLnkgPSB0aGlzLmhlYWQueTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3VwJzpcbiAgICAgIHRoaXMubmV3VGFpbC55ID0gdGhpcy5oZWFkLnkgLSAyMDtcbiAgICAgIHRoaXMubmV3VGFpbC54ID0gdGhpcy5oZWFkLng7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdyaWdodCc6XG4gICAgICB0aGlzLm5ld1RhaWwueCA9IHRoaXMuaGVhZC54ICsgMjA7XG4gICAgICB0aGlzLm5ld1RhaWwueSA9IHRoaXMuaGVhZC55O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZG93bic6XG4gICAgICB0aGlzLm5ld1RhaWwueSA9IHRoaXMuaGVhZC55ICsgMjA7XG4gICAgICB0aGlzLm5ld1RhaWwueCA9IHRoaXMuaGVhZC54O1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMudGFpbC5wdXNoKHRoaXMubmV3VGFpbCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjaGFuZ2VEaXJlY3Rpb24oY2hhbmdlRGlyZWN0aW9uKSB7XG4gICAgaWYgKGNoYW5nZURpcmVjdGlvbiAhPSB0aGlzLmRpcmVjdGlvbikge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSBjaGFuZ2VEaXJlY3Rpb247XG4gICAgfVxuICB9XG5cbiAgZ3Jvd1NuYWtlKCkge1xuICAgIGxldCBjdXJyZW50VGFpbCA9IHRoaXMudGFpbFswXTtcblxuICAgIHN3aXRjaCAodGhpcy5jaGFuZ2VEaXJlY3Rpb24pIHtcbiAgICBjYXNlICdsZWZ0JzogXG4gICAgICB0aGlzLnggPSBjdXJyZW50VGFpbC54ICsgMjA7XG4gICAgICB0aGlzLnkgPSBjdXJyZW50VGFpbC55O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndXAnOiBcbiAgICAgIHRoaXMueCA9IGN1cnJlbnRUYWlsLng7XG4gICAgICB0aGlzLnkgPSBjdXJyZW50VGFpbC55ICsgMjA7IFxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncmlnaHQnOiBcbiAgICAgIHRoaXMueCA9IGN1cnJlbnRUYWlsLnggLSAyMDtcbiAgICAgIHRoaXMueSA9IGN1cnJlbnRUYWlsLnk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdkb3duJzogXG4gICAgICB0aGlzLnggPSBjdXJyZW50VGFpbC54O1xuICAgICAgdGhpcy55ID0gY3VycmVudFRhaWwueSAtIDIwO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGxldCBuZXdCbG9jayA9IG5ldyBHYW1lUGllY2UoY3VycmVudFRhaWwueCwgY3VycmVudFRhaWwueSwgMjAsIDIwKTtcbiAgICBcbiAgICB0aGlzLnRhaWwudW5zaGlmdChuZXdCbG9jayk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiBcbiAgY2hlY2tJbkJvdW5kcygpIHtcbiAgICBpZiAodGhpcy5oZWFkLnggKyAyMCA9PT0gMCB8fCB0aGlzLmhlYWQueCAtIDIwID09PSA2MDApIHtcbiAgICAgIHRoaXMuZGVhZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmhlYWQueSArIDIwID09PSAwIHx8IHRoaXMuaGVhZC55IC0gMjAgPT09IDYwMCkge1xuICAgICAgdGhpcy5kZWFkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBjaGVja0VhdEl0c2VsZihjb250ZXh0KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhaWwubGVuZ3RoIC0gMjsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5oZWFkLnggPT09IHRoaXMudGFpbFtpXS54ICYmXG4gICAgICAgIHRoaXMuaGVhZC55ID09PSB0aGlzLnRhaWxbaV0ueSkge1xuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCA2MDAsIDYwMCk7XG4gICAgICAgIHRoaXMuZGVhZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU25ha2U7IiwiY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZS5qcycpO1xuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWUnKTtcbmNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShjb250ZXh0KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlQcmVzcyk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXRyeS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBsb2NhdGlvbi5yZWxvYWQoKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWdhbWUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBsb2NhdGlvbi5yZWxvYWQoKTtcbn0pO1xuXG5cbmNvbnN0IGdhbWVMb29wID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXNjb3JlJykuaW5uZXJUZXh0ID0gZ2FtZS5zY29yZTtcbiAgY2hlY2tHYW1lT3ZlcigpO1xufTtcblxuY29uc3Qga2V5Ym9hcmQgPSB7XG4gIDY1OiAoKSA9PiBnYW1lLnNuYWtlLmRpcmVjdGlvbiAhPT0gXG4gICdyaWdodCcgPyBnYW1lLnNuYWtlLmRpcmVjdGlvbiA9ICdsZWZ0JyA6IGdhbWUuc25ha2UuZGlyZWN0aW9uLFxuICA4NzogKCkgPT4gZ2FtZS5zbmFrZS5kaXJlY3Rpb24gIT09IFxuICAnZG93bicgPyBnYW1lLnNuYWtlLmRpcmVjdGlvbiA9ICd1cCcgOiBnYW1lLnNuYWtlLmRpcmVjdGlvbiwgXG4gIDY4OiAoKSA9PiBnYW1lLnNuYWtlLmRpcmVjdGlvbiAhPT0gXG4gICdsZWZ0JyA/IGdhbWUuc25ha2UuZGlyZWN0aW9uID0gJ3JpZ2h0JyA6IGdhbWUuc25ha2UuZGlyZWN0aW9uLFxuICA4MzogKCkgPT4gZ2FtZS5zbmFrZS5kaXJlY3Rpb24gIT09IFxuICAndXAnID8gZ2FtZS5zbmFrZS5kaXJlY3Rpb24gPSAnZG93bicgOiBnYW1lLnNuYWtlLmRpcmVjdGlvbixcbn07XG5cbmZ1bmN0aW9uIGtleVByZXNzKGV2ZW50KSB7XG4gIGlmIChrZXlib2FyZFtldmVudC5rZXlDb2RlXSkge1xuICAgIGtleWJvYXJkW2V2ZW50LmtleUNvZGVdKCk7XG4gIH1cbn1cblxuY29uc3QgZGlzcGxheUhlYWRlckJveCA9ICgpID0+IFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWJveCcpLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3duJyk7XG5cblxuY29uc3QgaGlkZVdlbGNvbWVTY3JlZW4gPSAoKSA9PiBcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlbGNvbWUtc2NyZWVuJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtZ2FtZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIGRpc3BsYXlIZWFkZXJCb3goKTtcbiAgaGlkZVdlbGNvbWVTY3JlZW4oKTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgZ2FtZS5zdGFydEdhbWUoKTtcbn0pO1xuXG5jb25zdCBjaGVja0dhbWVPdmVyID0gKCkgPT4ge1xuICBpZiAoZ2FtZS5zbmFrZS5kZWFkKSB7XG4gICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1vdmVyJykuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvd24nKTtcbiAgICBzdWJtaXRTY29yZSgpO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgZ2FtZS5hbmltYXRlKGNvbnRleHQpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgICB9LCAxMjApO1xuICB9XG59O1xuXG5jb25zdCBzdWJtaXRTY29yZSA9ICgpID0+IHtcbiAgaWYgKGdhbWUuc2NvcmUgPj0gZ2FtZS5oaWdoU2NvcmUpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlnaC1zY29yZS1pbnB1dCcpLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3duJyk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LXlvdXItc2NvcmUnKS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93bicpO1xuICB9XG59O1xuXG5jb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LWJ1dHRvbicpO1xuXG5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgc3VibWl0TmV3U2NvcmUoKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC1idXR0b24nKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG59KTtcblxuY29uc3Qgc3VibWl0TmV3U2NvcmUgPSAoKSA9PiB7XG4gIGNvbnN0IHNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlLWxpc3QnKTtcbiAgbGV0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1zY29yZS1pbnB1dCcpLnZhbHVlO1xuICBsZXQgbXlTY29yZSA9IGdhbWUuc2NvcmU7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdMSScpO1xuICBub2RlLmlubmVySFRNTCA9IGAke3VzZXJOYW1lfS4uLi4uLi4uLi4uLi4uLi4ke215U2NvcmV9YDtcbiAgc2NvcmUuYXBwZW5kQ2hpbGQobm9kZSk7XG59O1xuXG4iXSwic291cmNlUm9vdCI6IiJ9