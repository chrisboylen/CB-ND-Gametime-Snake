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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0Zvb2QuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWVQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvU25ha2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIkdhbWVQaWVjZSIsInJlcXVpcmUiLCJGb29kIiwieCIsInkiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibW9kdWxlIiwiZXhwb3J0cyIsIlNuYWtlIiwiR2FtZSIsImdhbWVPdmVyIiwic2NvcmUiLCJoaWdoU2NvcmUiLCJzbmFrZSIsImZvb2QiLCJkaWUiLCJtYWtlSW5pdGlhbFNuYWtlIiwiY29udGV4dCIsImRyYXdTbmFrZUJvZHkiLCJtb3ZlIiwiZHJhdyIsImVhdEZvb2QiLCJjaGVja0VhdEl0c2VsZiIsImNoZWNrSW5Cb3VuZHMiLCJoZWFkIiwiaXNDb2xsaWRpbmdXaXRoIiwiY3JlYXRlRm9vZCIsImdyb3dTbmFrZSIsIm9iamVjdCIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImZpbGxSZWN0IiwiY2xvc2VQYXRoIiwidGFpbCIsIm5ld1RhaWwiLCJkaXJlY3Rpb24iLCJkZWFkIiwiaSIsImJsb2NrIiwicHVzaCIsImZvckVhY2giLCJzaGlmdCIsImxlbmd0aCIsImNoYW5nZURpcmVjdGlvbiIsImN1cnJlbnRUYWlsIiwibmV3QmxvY2siLCJ1bnNoaWZ0IiwiY2xlYXJSZWN0IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Q29udGV4dCIsImdhbWUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwia2V5UHJlc3MiLCJsb2NhdGlvbiIsInJlbG9hZCIsImdhbWVMb29wIiwiaW5uZXJUZXh0IiwiY2hlY2tHYW1lT3ZlciIsImtleWJvYXJkIiwiZXZlbnQiLCJrZXlDb2RlIiwiZGlzcGxheUhlYWRlckJveCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImhpZGVXZWxjb21lU2NyZWVuIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic3RhcnRHYW1lIiwic3VibWl0U2NvcmUiLCJzZXRUaW1lb3V0IiwiYW5pbWF0ZSIsInN1Ym1pdEJ1dHRvbiIsInN1Ym1pdE5ld1Njb3JlIiwidXNlck5hbWUiLCJ2YWx1ZSIsIm15U2NvcmUiLCJub2RlIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFJQSxZQUFZLG1CQUFBQyxDQUFRLDBDQUFSLENBQWhCOztJQUVNQyxJOzs7QUFDSixnQkFBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCQyxNQUFsQixFQUEwQkMsS0FBMUIsRUFBaUNDLEtBQWpDLEVBQXdDO0FB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RSxXQUFOLENBQWtCSCxJQUFsQjtBQUNELENBUkQsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3dlYnBhY2stZGVtb1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9pbmRleC5qc1wiKTtcbiIsInZhciBHYW1lUGllY2UgPSByZXF1aXJlKCcuL0dhbWVQaWVjZS5qcycpO1xuXG5jbGFzcyBGb29kIGV4dGVuZHMgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IpIHtcbiAgICBzdXBlcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcik7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgY3JlYXRlRm9vZCgpIHtcblxuICAgIHRoaXMueCA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzMCkgKiAyMCk7XG4gICAgdGhpcy55ID0gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMwKSAqIDIwKTtcbiAgfVxufVxuXG4gICAgXG4gICAgXG4gXG5cbm1vZHVsZS5leHBvcnRzID0gRm9vZDsiLCJjb25zdCBTbmFrZSA9IHJlcXVpcmUoJy4vU25ha2UuanMnKTtcbmNvbnN0IEZvb2QgPSByZXF1aXJlKCcuL0Zvb2QuanMnKTtcblxuXG5jbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIHRoaXMuaGlnaFNjb3JlID0gOTI7XG4gICAgdGhpcy5zbmFrZSA9IG5ldyBTbmFrZSg1MCwgNTAsIDIwLCAyMCwgJ3JnYigyNTUsIDAsIDApJywgMCk7XG4gICAgdGhpcy5mb29kID0gbmV3IEZvb2QoMzUwLCAyMCwgMjAsIDIwLCAncmdiKDAsIDI1NSwgMCknKTtcbiAgfVxuXG4gIHN0YXJ0R2FtZSgpIHtcbiAgICB0aGlzLnNuYWtlLmRpZSA9IGZhbHNlO1xuICAgIHRoaXMuc25ha2UubWFrZUluaXRpYWxTbmFrZSgpO1xuICB9XG5cbiAgYW5pbWF0ZShjb250ZXh0KSB7XG4gICAgdGhpcy5zbmFrZS5kcmF3U25ha2VCb2R5KGNvbnRleHQpO1xuICAgIHRoaXMuc25ha2UubW92ZSgpO1xuICAgIHRoaXMuZm9vZC5kcmF3KGNvbnRleHQpO1xuICAgIHRoaXMuZWF0Rm9vZCgpO1xuICAgIHRoaXMuc25ha2UuY2hlY2tFYXRJdHNlbGYoY29udGV4dCk7XG4gICAgdGhpcy5zbmFrZS5jaGVja0luQm91bmRzKGNvbnRleHQpO1xuICB9XG5cbiAgZWF0Rm9vZCgpIHtcbiAgICBpZiAodGhpcy5zbmFrZS5oZWFkLmlzQ29sbGlkaW5nV2l0aCh0aGlzLmZvb2QpKSB7XG4gICAgICB0aGlzLnNjb3JlICs9IDE7XG4gICAgICB0aGlzLmZvb2QuY3JlYXRlRm9vZCgpO1xuICAgICAgdGhpcy5zbmFrZS5ncm93U25ha2UoKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lOyIsIm1vZHVsZS5leHBvcnRzID0gY2xhc3MgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0ID0gMjAsIHdpZHRoID0gMjAsIGNvbG9yID0gJ2Jyb3duJykge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICB9XG5cbiAgaXNDb2xsaWRpbmdXaXRoKG9iamVjdCkge1xuICAgIHJldHVybiAhKFxuICAgICAgdGhpcy54ICsgdGhpcy53aWR0aCA8IG9iamVjdC54IHx8XG4gICAgICB0aGlzLnkgKyB0aGlzLmhlaWdodCA8IG9iamVjdC55IHx8XG4gICAgICB0aGlzLnggPiBvYmplY3QueCArIG9iamVjdC53aWR0aCB8fFxuICAgICAgdGhpcy55ID4gb2JqZWN0LnkgKyBvYmplY3QuaGVpZ2h0XG4gICAgKTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGNvbnN0IHsgeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IgfSA9IHRoaXM7XG5cbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICB9XG59O1xuXG4iLCJ2YXIgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UuanMnKTtcblxuY2xhc3MgU25ha2UgZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQgPSAyMCwgd2lkdGggPSAyMCwgY29sb3IpIHtcbiAgICBzdXBlcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcik7XG4gICAgdGhpcy5oZWFkID0gbnVsbDtcbiAgICB0aGlzLnRhaWwgPSBbXTtcbiAgICB0aGlzLm5ld1RhaWwgPSB0aGlzLnRhaWxbMF07XG4gICAgdGhpcy5kaXJlY3Rpb24gPSAncmlnaHQnO1xuICAgIHRoaXMuZGVhZCA9IGZhbHNlO1xuICB9XG5cbiAgbWFrZUluaXRpYWxTbmFrZSgpIHtcbiAgICBmb3IgKGxldCBpID0gMjA7IGkgPCAxMDA7IGkgKz0gMjApIHtcbiAgICAgIGxldCBibG9jayA9IG5ldyBHYW1lUGllY2UoaSwgMjApO1xuXG4gICAgICB0aGlzLnRhaWwucHVzaChibG9jayk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZHJhd1NuYWtlQm9keShjb250ZXh0KSB7XG4gICAgdGhpcy50YWlsLmZvckVhY2goKGJsb2NrKSA9PiB7XG4gICAgICBibG9jay5kcmF3KGNvbnRleHQpO1xuICAgIH0pO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICB0aGlzLm5ld1RhaWwgPSB0aGlzLnRhaWwuc2hpZnQoKTtcbiAgICB0aGlzLmhlYWQgPSB0aGlzLnRhaWxbdGhpcy50YWlsLmxlbmd0aCAtIDFdO1xuICAgIFxuICAgIHN3aXRjaCAodGhpcy5kaXJlY3Rpb24pIHtcbiAgICBjYXNlICdsZWZ0JzpcbiAgICAgIHRoaXMubmV3VGFpbC54ID0gdGhpcy5oZWFkLnggLSAyMDtcbiAgICAgIHRoaXMubmV3VGFpbC55ID0gdGhpcy5oZWFkLnk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd1cCc6XG4gICAgICB0aGlzLm5ld1RhaWwueSA9IHRoaXMuaGVhZC55IC0gMjA7XG4gICAgICB0aGlzLm5ld1RhaWwueCA9IHRoaXMuaGVhZC54O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncmlnaHQnOlxuICAgICAgdGhpcy5uZXdUYWlsLnggPSB0aGlzLmhlYWQueCArIDIwO1xuICAgICAgdGhpcy5uZXdUYWlsLnkgPSB0aGlzLmhlYWQueTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Rvd24nOlxuICAgICAgdGhpcy5uZXdUYWlsLnkgPSB0aGlzLmhlYWQueSArIDIwO1xuICAgICAgdGhpcy5uZXdUYWlsLnggPSB0aGlzLmhlYWQueDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLnRhaWwucHVzaCh0aGlzLm5ld1RhaWwpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2hhbmdlRGlyZWN0aW9uKGNoYW5nZURpcmVjdGlvbikge1xuICAgIGlmIChjaGFuZ2VEaXJlY3Rpb24gIT0gdGhpcy5kaXJlY3Rpb24pIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gY2hhbmdlRGlyZWN0aW9uO1xuICAgIH1cbiAgfVxuXG4gIGdyb3dTbmFrZSgpIHtcbiAgICBsZXQgY3VycmVudFRhaWwgPSB0aGlzLnRhaWxbMF07XG5cbiAgICBzd2l0Y2ggKHRoaXMuY2hhbmdlRGlyZWN0aW9uKSB7XG4gICAgY2FzZSAnbGVmdCc6IFxuICAgICAgdGhpcy54ID0gY3VycmVudFRhaWwueCArIDIwO1xuICAgICAgdGhpcy55ID0gY3VycmVudFRhaWwueTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3VwJzogXG4gICAgICB0aGlzLnggPSBjdXJyZW50VGFpbC54O1xuICAgICAgdGhpcy55ID0gY3VycmVudFRhaWwueSArIDIwOyBcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3JpZ2h0JzogXG4gICAgICB0aGlzLnggPSBjdXJyZW50VGFpbC54IC0gMjA7XG4gICAgICB0aGlzLnkgPSBjdXJyZW50VGFpbC55O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZG93bic6IFxuICAgICAgdGhpcy54ID0gY3VycmVudFRhaWwueDtcbiAgICAgIHRoaXMueSA9IGN1cnJlbnRUYWlsLnkgLSAyMDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBsZXQgbmV3QmxvY2sgPSBuZXcgR2FtZVBpZWNlKGN1cnJlbnRUYWlsLngsIGN1cnJlbnRUYWlsLnksIDIwLCAyMCk7XG4gICAgXG4gICAgdGhpcy50YWlsLnVuc2hpZnQobmV3QmxvY2spO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gXG4gIGNoZWNrSW5Cb3VuZHMoKSB7XG4gICAgaWYgKHRoaXMuaGVhZC54ICsgMjAgPT09IDAgfHwgdGhpcy5oZWFkLnggLSAyMCA9PT0gNjAwKSB7XG4gICAgICB0aGlzLmRlYWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5oZWFkLnkgKyAyMCA9PT0gMCB8fCB0aGlzLmhlYWQueSAtIDIwID09PSA2MDApIHtcbiAgICAgIHRoaXMuZGVhZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tFYXRJdHNlbGYoY29udGV4dCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YWlsLmxlbmd0aCAtIDI7IGkrKykge1xuICAgICAgaWYgKHRoaXMuaGVhZC54ID09PSB0aGlzLnRhaWxbaV0ueCAmJlxuICAgICAgICB0aGlzLmhlYWQueSA9PT0gdGhpcy50YWlsW2ldLnkpIHtcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgNjAwLCA2MDApO1xuICAgICAgICB0aGlzLmRlYWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNuYWtlOyIsImNvbnN0IEdhbWUgPSByZXF1aXJlKCcuL0dhbWUuanMnKTtcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lJyk7XG5jb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jb25zdCBnYW1lID0gbmV3IEdhbWUoY29udGV4dCk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5UHJlc3MpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmV0cnktYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgbG9jYXRpb24ucmVsb2FkKCk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1nYW1lJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgbG9jYXRpb24ucmVsb2FkKCk7XG59KTtcblxuXG5jb25zdCBnYW1lTG9vcCA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1zY29yZScpLmlubmVyVGV4dCA9IGdhbWUuc2NvcmU7XG4gIGNoZWNrR2FtZU92ZXIoKTtcbn07XG5cbmNvbnN0IGtleWJvYXJkID0ge1xuICA2NTogKCkgPT4gZ2FtZS5zbmFrZS5kaXJlY3Rpb24gIT09IFxuICAncmlnaHQnID8gZ2FtZS5zbmFrZS5kaXJlY3Rpb24gPSAnbGVmdCcgOiBnYW1lLnNuYWtlLmRpcmVjdGlvbixcbiAgODc6ICgpID0+IGdhbWUuc25ha2UuZGlyZWN0aW9uICE9PSBcbiAgJ2Rvd24nID8gZ2FtZS5zbmFrZS5kaXJlY3Rpb24gPSAndXAnIDogZ2FtZS5zbmFrZS5kaXJlY3Rpb24sIFxuICA2ODogKCkgPT4gZ2FtZS5zbmFrZS5kaXJlY3Rpb24gIT09IFxuICAnbGVmdCcgPyBnYW1lLnNuYWtlLmRpcmVjdGlvbiA9ICdyaWdodCcgOiBnYW1lLnNuYWtlLmRpcmVjdGlvbixcbiAgODM6ICgpID0+IGdhbWUuc25ha2UuZGlyZWN0aW9uICE9PSBcbiAgJ3VwJyA/IGdhbWUuc25ha2UuZGlyZWN0aW9uID0gJ2Rvd24nIDogZ2FtZS5zbmFrZS5kaXJlY3Rpb24sXG59O1xuXG5mdW5jdGlvbiBrZXlQcmVzcyhldmVudCkge1xuICBpZiAoa2V5Ym9hcmRbZXZlbnQua2V5Q29kZV0pIHtcbiAgICBrZXlib2FyZFtldmVudC5rZXlDb2RlXSgpO1xuICB9XG59XG5cbmNvbnN0IGRpc3BsYXlIZWFkZXJCb3ggPSAoKSA9PiBcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1ib3gnKS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93bicpO1xuXG5cbmNvbnN0IGhpZGVXZWxjb21lU2NyZWVuID0gKCkgPT4gXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWxjb21lLXNjcmVlbicpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWdhbWUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBkaXNwbGF5SGVhZGVyQm94KCk7XG4gIGhpZGVXZWxjb21lU2NyZWVuKCk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gIGdhbWUuc3RhcnRHYW1lKCk7XG59KTtcblxuY29uc3QgY2hlY2tHYW1lT3ZlciA9ICgpID0+IHtcbiAgaWYgKGdhbWUuc25ha2UuZGVhZCkge1xuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtb3ZlcicpLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3duJyk7XG4gICAgc3VibWl0U2NvcmUoKTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIGdhbWUuYW5pbWF0ZShjb250ZXh0KTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gICAgfSwgMTIwKTtcbiAgfVxufTtcblxuY29uc3Qgc3VibWl0U2NvcmUgPSAoKSA9PiB7XG4gIGlmIChnYW1lLnNjb3JlID49IGdhbWUuaGlnaFNjb3JlKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZ2gtc2NvcmUtaW5wdXQnKS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93bicpO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC15b3VyLXNjb3JlJykuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvd24nKTtcbiAgfVxufTtcblxuY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC1idXR0b24nKTtcblxuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIHN1Ym1pdE5ld1Njb3JlKCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtYnV0dG9uJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xufSk7XG5cbmNvbnN0IHN1Ym1pdE5ld1Njb3JlID0gKCkgPT4ge1xuICBjb25zdCBzY29yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZS1saXN0Jyk7XG4gIGxldCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItc2NvcmUtaW5wdXQnKS52YWx1ZTtcbiAgbGV0IG15U2NvcmUgPSBnYW1lLnNjb3JlO1xuICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTEknKTtcblxuICBub2RlLmlubmVySFRNTCA9IGAke3VzZXJOYW1lfS4uLi4uLi4uLi4uLi4uLi4ke215U2NvcmV9YDtcbiAgc2NvcmUuYXBwZW5kQ2hpbGQobm9kZSk7XG59O1xuXG4iXSwic291cmNlUm9vdCI6IiJ9