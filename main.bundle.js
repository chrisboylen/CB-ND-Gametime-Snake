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

function submitNewScore() {
  var score = document.querySelector('.score-list');
  var userName = document.querySelector('.player-score-input').value;
  var myScore = game.score;
  var node = document.createElement('LI');
  node.innerHTML = userName + '................' + myScore;
  score.appendChild(node);
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0Zvb2QuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWVQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvU25ha2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIkdhbWVQaWVjZSIsInJlcXVpcmUiLCJGb29kIiwieCIsInkiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibW9kdWxlIiwiZXhwb3J0cyIsIlNuYWtlIiwiR2FtZSIsImdhbWVPdmVyIiwic2NvcmUiLCJoaWdoU2NvcmUiLCJzbmFrZSIsImZvb2QiLCJkaWUiLCJtYWtlSW5pdGlhbFNuYWtlIiwiY29udGV4dCIsImRyYXdTbmFrZUJvZHkiLCJtb3ZlIiwiZHJhdyIsImVhdEZvb2QiLCJjaGVja0VhdEl0c2VsZiIsImNoZWNrSW5Cb3VuZHMiLCJoZWFkIiwiaXNDb2xsaWRpbmdXaXRoIiwiY3JlYXRlRm9vZCIsImdyb3dTbmFrZSIsIm9iamVjdCIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImZpbGxSZWN0IiwiY2xvc2VQYXRoIiwidGFpbCIsIm5ld1RhaWwiLCJkaXJlY3Rpb24iLCJkZWFkIiwiaSIsImJsb2NrIiwicHVzaCIsImZvckVhY2giLCJzaGlmdCIsImxlbmd0aCIsImNoYW5nZURpcmVjdGlvbiIsImN1cnJlbnRUYWlsIiwibmV3QmxvY2siLCJ1bnNoaWZ0IiwiY2xlYXJSZWN0IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Q29udGV4dCIsImdhbWUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwia2V5UHJlc3MiLCJsb2NhdGlvbiIsInJlbG9hZCIsImdhbWVMb29wIiwiaW5uZXJUZXh0IiwiY2hlY2tHYW1lT3ZlciIsImtleWJvYXJkIiwiZXZlbnQiLCJrZXlDb2RlIiwiZGlzcGxheUhlYWRlckJveCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImhpZGVXZWxjb21lU2NyZWVuIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic3RhcnRHYW1lIiwic3VibWl0U2NvcmUiLCJzZXRUaW1lb3V0IiwiYW5pbWF0ZSIsInN1Ym1pdEJ1dHRvbiIsInN1Ym1pdE5ld1Njb3JlIiwidXNlck5hbWUiLCJ2YWx1ZSIsIm15U2NvcmUiLCJub2RlIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFJQSxZQUFZLG1CQUFBQyxDQUFRLDBDQUFSLENBQWhCOztJQUVNQyxJOzs7QUFDSixnQkFBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCQyxNQUFsQixFQUEwQkMsS0FBMUIsRUFBaUNDLEtBQWpDLEVBQXdDO0FB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QUFsQjtBQUNELEUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi93ZWJwYWNrLWRlbW9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCJ2YXIgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UuanMnKTtcblxuY2xhc3MgRm9vZCBleHRlbmRzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKSB7XG4gICAgc3VwZXIoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IpO1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGNyZWF0ZUZvb2QoKSB7XG5cbiAgICB0aGlzLnggPSAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzApICogMjApO1xuICAgIHRoaXMueSA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzMCkgKiAyMCk7XG4gIH1cbn1cblxuICAgIFxuICAgIFxuIFxuXG5tb2R1bGUuZXhwb3J0cyA9IEZvb2Q7IiwiY29uc3QgU25ha2UgPSByZXF1aXJlKCcuL1NuYWtlLmpzJyk7XG5jb25zdCBGb29kID0gcmVxdWlyZSgnLi9Gb29kLmpzJyk7XG5cblxuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLmhpZ2hTY29yZSA9IDkyO1xuICAgIHRoaXMuc25ha2UgPSBuZXcgU25ha2UoNTAsIDUwLCAyMCwgMjAsICdyZ2IoMjU1LCAwLCAwKScsIDApO1xuICAgIHRoaXMuZm9vZCA9IG5ldyBGb29kKDM1MCwgMjAsIDIwLCAyMCwgJ3JnYigwLCAyNTUsIDApJyk7XG4gIH1cblxuICBzdGFydEdhbWUoKSB7XG4gICAgdGhpcy5zbmFrZS5kaWUgPSBmYWxzZTtcbiAgICB0aGlzLnNuYWtlLm1ha2VJbml0aWFsU25ha2UoKTtcbiAgfVxuXG4gIGFuaW1hdGUoY29udGV4dCkge1xuICAgIHRoaXMuc25ha2UuZHJhd1NuYWtlQm9keShjb250ZXh0KTtcbiAgICB0aGlzLnNuYWtlLm1vdmUoKTtcbiAgICB0aGlzLmZvb2QuZHJhdyhjb250ZXh0KTtcbiAgICB0aGlzLmVhdEZvb2QoKTtcbiAgICB0aGlzLnNuYWtlLmNoZWNrRWF0SXRzZWxmKGNvbnRleHQpO1xuICAgIHRoaXMuc25ha2UuY2hlY2tJbkJvdW5kcyhjb250ZXh0KTtcbiAgfVxuXG4gIGVhdEZvb2QoKSB7XG4gICAgaWYgKHRoaXMuc25ha2UuaGVhZC5pc0NvbGxpZGluZ1dpdGgodGhpcy5mb29kKSkge1xuICAgICAgdGhpcy5zY29yZSArPSAxO1xuICAgICAgdGhpcy5mb29kLmNyZWF0ZUZvb2QoKTtcbiAgICAgIHRoaXMuc25ha2UuZ3Jvd1NuYWtlKCk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsiLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCA9IDIwLCB3aWR0aCA9IDIwLCBjb2xvciA9ICdicm93bicpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgfVxuXG4gIGlzQ29sbGlkaW5nV2l0aChvYmplY3QpIHtcbiAgICByZXR1cm4gIShcbiAgICAgIHRoaXMueCArIHRoaXMud2lkdGggPCBvYmplY3QueCB8fFxuICAgICAgdGhpcy55ICsgdGhpcy5oZWlnaHQgPCBvYmplY3QueSB8fFxuICAgICAgdGhpcy54ID4gb2JqZWN0LnggKyBvYmplY3Qud2lkdGggfHxcbiAgICAgIHRoaXMueSA+IG9iamVjdC55ICsgb2JqZWN0LmhlaWdodFxuICAgICk7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yIH0gPSB0aGlzO1xuXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQuZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgfVxufTtcblxuIiwidmFyIEdhbWVQaWVjZSA9IHJlcXVpcmUoJy4vR2FtZVBpZWNlLmpzJyk7XG5cbmNsYXNzIFNuYWtlIGV4dGVuZHMgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0ID0gMjAsIHdpZHRoID0gMjAsIGNvbG9yKSB7XG4gICAgc3VwZXIoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IpO1xuICAgIHRoaXMuaGVhZCA9IG51bGw7XG4gICAgdGhpcy50YWlsID0gW107XG4gICAgdGhpcy5uZXdUYWlsID0gdGhpcy50YWlsWzBdO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gJ3JpZ2h0JztcbiAgICB0aGlzLmRlYWQgPSBmYWxzZTtcbiAgfVxuXG4gIG1ha2VJbml0aWFsU25ha2UoKSB7XG4gICAgZm9yIChsZXQgaSA9IDIwOyBpIDwgMTAwOyBpICs9IDIwKSB7XG4gICAgICBsZXQgYmxvY2sgPSBuZXcgR2FtZVBpZWNlKGksIDIwKTtcblxuICAgICAgdGhpcy50YWlsLnB1c2goYmxvY2spO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRyYXdTbmFrZUJvZHkoY29udGV4dCkge1xuICAgIHRoaXMudGFpbC5mb3JFYWNoKChibG9jaykgPT4ge1xuICAgICAgYmxvY2suZHJhdyhjb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgdGhpcy5uZXdUYWlsID0gdGhpcy50YWlsLnNoaWZ0KCk7XG4gICAgdGhpcy5oZWFkID0gdGhpcy50YWlsW3RoaXMudGFpbC5sZW5ndGggLSAxXTtcbiAgICBcbiAgICBzd2l0Y2ggKHRoaXMuZGlyZWN0aW9uKSB7XG4gICAgY2FzZSAnbGVmdCc6XG4gICAgICB0aGlzLm5ld1RhaWwueCA9IHRoaXMuaGVhZC54IC0gMjA7XG4gICAgICB0aGlzLm5ld1RhaWwueSA9IHRoaXMuaGVhZC55O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndXAnOlxuICAgICAgdGhpcy5uZXdUYWlsLnkgPSB0aGlzLmhlYWQueSAtIDIwO1xuICAgICAgdGhpcy5uZXdUYWlsLnggPSB0aGlzLmhlYWQueDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgIHRoaXMubmV3VGFpbC54ID0gdGhpcy5oZWFkLnggKyAyMDtcbiAgICAgIHRoaXMubmV3VGFpbC55ID0gdGhpcy5oZWFkLnk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdkb3duJzpcbiAgICAgIHRoaXMubmV3VGFpbC55ID0gdGhpcy5oZWFkLnkgKyAyMDtcbiAgICAgIHRoaXMubmV3VGFpbC54ID0gdGhpcy5oZWFkLng7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy50YWlsLnB1c2godGhpcy5uZXdUYWlsKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNoYW5nZURpcmVjdGlvbihjaGFuZ2VEaXJlY3Rpb24pIHtcbiAgICBpZiAoY2hhbmdlRGlyZWN0aW9uICE9IHRoaXMuZGlyZWN0aW9uKSB7XG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IGNoYW5nZURpcmVjdGlvbjtcbiAgICB9XG4gIH1cblxuICBncm93U25ha2UoKSB7XG4gICAgbGV0IGN1cnJlbnRUYWlsID0gdGhpcy50YWlsWzBdO1xuXG4gICAgc3dpdGNoICh0aGlzLmNoYW5nZURpcmVjdGlvbikge1xuICAgIGNhc2UgJ2xlZnQnOiBcbiAgICAgIHRoaXMueCA9IGN1cnJlbnRUYWlsLnggKyAyMDtcbiAgICAgIHRoaXMueSA9IGN1cnJlbnRUYWlsLnk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd1cCc6IFxuICAgICAgdGhpcy54ID0gY3VycmVudFRhaWwueDtcbiAgICAgIHRoaXMueSA9IGN1cnJlbnRUYWlsLnkgKyAyMDsgXG4gICAgICBicmVhaztcbiAgICBjYXNlICdyaWdodCc6IFxuICAgICAgdGhpcy54ID0gY3VycmVudFRhaWwueCAtIDIwO1xuICAgICAgdGhpcy55ID0gY3VycmVudFRhaWwueTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Rvd24nOiBcbiAgICAgIHRoaXMueCA9IGN1cnJlbnRUYWlsLng7XG4gICAgICB0aGlzLnkgPSBjdXJyZW50VGFpbC55IC0gMjA7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgbGV0IG5ld0Jsb2NrID0gbmV3IEdhbWVQaWVjZShjdXJyZW50VGFpbC54LCBjdXJyZW50VGFpbC55LCAyMCwgMjApO1xuICAgIFxuICAgIHRoaXMudGFpbC51bnNoaWZ0KG5ld0Jsb2NrKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuIFxuICBjaGVja0luQm91bmRzKCkge1xuICAgIGlmICh0aGlzLmhlYWQueCArIDIwID09PSAwIHx8IHRoaXMuaGVhZC54IC0gMjAgPT09IDYwMCkge1xuICAgICAgdGhpcy5kZWFkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaGVhZC55ICsgMjAgPT09IDAgfHwgdGhpcy5oZWFkLnkgLSAyMCA9PT0gNjAwKSB7XG4gICAgICB0aGlzLmRlYWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrRWF0SXRzZWxmKGNvbnRleHQpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFpbC5sZW5ndGggLSAyOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmhlYWQueCA9PT0gdGhpcy50YWlsW2ldLnggJiZcbiAgICAgICAgdGhpcy5oZWFkLnkgPT09IHRoaXMudGFpbFtpXS55KSB7XG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIDYwMCwgNjAwKTtcbiAgICAgICAgdGhpcy5kZWFkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTbmFrZTsiLCJjb25zdCBHYW1lID0gcmVxdWlyZSgnLi9HYW1lLmpzJyk7XG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZScpO1xuY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNvbnRleHQpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleVByZXNzKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJldHJ5LWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctZ2FtZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xufSk7XG5cblxuY29uc3QgZ2FtZUxvb3AgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItc2NvcmUnKS5pbm5lclRleHQgPSBnYW1lLnNjb3JlO1xuICBjaGVja0dhbWVPdmVyKCk7XG59O1xuXG5jb25zdCBrZXlib2FyZCA9IHtcbiAgNjU6ICgpID0+IGdhbWUuc25ha2UuZGlyZWN0aW9uICE9PSBcbiAgJ3JpZ2h0JyA/IGdhbWUuc25ha2UuZGlyZWN0aW9uID0gJ2xlZnQnIDogZ2FtZS5zbmFrZS5kaXJlY3Rpb24sXG4gIDg3OiAoKSA9PiBnYW1lLnNuYWtlLmRpcmVjdGlvbiAhPT0gXG4gICdkb3duJyA/IGdhbWUuc25ha2UuZGlyZWN0aW9uID0gJ3VwJyA6IGdhbWUuc25ha2UuZGlyZWN0aW9uLCBcbiAgNjg6ICgpID0+IGdhbWUuc25ha2UuZGlyZWN0aW9uICE9PSBcbiAgJ2xlZnQnID8gZ2FtZS5zbmFrZS5kaXJlY3Rpb24gPSAncmlnaHQnIDogZ2FtZS5zbmFrZS5kaXJlY3Rpb24sXG4gIDgzOiAoKSA9PiBnYW1lLnNuYWtlLmRpcmVjdGlvbiAhPT0gXG4gICd1cCcgPyBnYW1lLnNuYWtlLmRpcmVjdGlvbiA9ICdkb3duJyA6IGdhbWUuc25ha2UuZGlyZWN0aW9uLFxufTtcblxuZnVuY3Rpb24ga2V5UHJlc3MoZXZlbnQpIHtcbiAgaWYgKGtleWJvYXJkW2V2ZW50LmtleUNvZGVdKSB7XG4gICAga2V5Ym9hcmRbZXZlbnQua2V5Q29kZV0oKTtcbiAgfVxufVxuXG5jb25zdCBkaXNwbGF5SGVhZGVyQm94ID0gKCkgPT4gXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItYm94JykuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvd24nKTtcblxuXG5jb25zdCBoaWRlV2VsY29tZVNjcmVlbiA9ICgpID0+IFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VsY29tZS1zY3JlZW4nKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1nYW1lJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgZGlzcGxheUhlYWRlckJveCgpO1xuICBoaWRlV2VsY29tZVNjcmVlbigpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICBnYW1lLnN0YXJ0R2FtZSgpO1xufSk7XG5cbmNvbnN0IGNoZWNrR2FtZU92ZXIgPSAoKSA9PiB7XG4gIGlmIChnYW1lLnNuYWtlLmRlYWQpIHtcbiAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLW92ZXInKS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93bicpO1xuICAgIHN1Ym1pdFNjb3JlKCk7XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICBnYW1lLmFuaW1hdGUoY29udGV4dCk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICAgIH0sIDEyMCk7XG4gIH1cbn07XG5cbmNvbnN0IHN1Ym1pdFNjb3JlID0gKCkgPT4ge1xuICBpZiAoZ2FtZS5zY29yZSA+PSBnYW1lLmhpZ2hTY29yZSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWdoLXNjb3JlLWlucHV0JykuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvd24nKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQteW91ci1zY29yZScpLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3duJyk7XG4gIH1cbn07XG5cbmNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtYnV0dG9uJyk7XG5cbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBzdWJtaXROZXdTY29yZSgpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LWJ1dHRvbicpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbn0pO1xuXG5mdW5jdGlvbiBzdWJtaXROZXdTY29yZSgpIHtcbiAgY29uc3Qgc2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmUtbGlzdCcpO1xuICBsZXQgdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXNjb3JlLWlucHV0JykudmFsdWU7XG4gIGxldCBteVNjb3JlID0gZ2FtZS5zY29yZTtcbiAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0xJJyk7XG4gIG5vZGUuaW5uZXJIVE1MID0gYCR7dXNlck5hbWV9Li4uLi4uLi4uLi4uLi4uLiR7bXlTY29yZX1gO1xuICBzY29yZS5hcHBlbmRDaGlsZChub2RlKTtcbn07XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=