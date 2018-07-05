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
    this.highScore = 0;
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
  if (game.score >= 92) {
    document.querySelector('.score-input').classList.toggle('shown');
  } else {
    document.querySelector('.input-your-score').classList.toggle('shown');
  }
};

var submitButton = document.querySelector('.submit-button');

submitButton.addEventListener('click', function () {
  submitNewScore();
  document.querySelector('.submit-button').classList.toggle('hide');
  this.reset();
});

var submitNewScore = function submitNewScore() {
  var userName = document.querySelector('.player-score-input').value;
  var myScore = game.score;
  var newScore = '<li>' + userName + '....................' + myScore + '</li>';

  $('.score-list').append(newScore);
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0Zvb2QuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWVQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvU25ha2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIkdhbWVQaWVjZSIsInJlcXVpcmUiLCJGb29kIiwieCIsInkiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibW9kdWxlIiwiZXhwb3J0cyIsIlNuYWtlIiwiR2FtZSIsImdhbWVPdmVyIiwic2NvcmUiLCJoaWdoU2NvcmUiLCJzbmFrZSIsImZvb2QiLCJkaWUiLCJtYWtlSW5pdGlhbFNuYWtlIiwiY29udGV4dCIsImRyYXdTbmFrZUJvZHkiLCJtb3ZlIiwiZHJhdyIsImVhdEZvb2QiLCJjaGVja0VhdEl0c2VsZiIsImNoZWNrSW5Cb3VuZHMiLCJoZWFkIiwiaXNDb2xsaWRpbmdXaXRoIiwiY3JlYXRlRm9vZCIsImdyb3dTbmFrZSIsIm9iamVjdCIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImZpbGxSZWN0IiwiY2xvc2VQYXRoIiwidGFpbCIsIm5ld1RhaWwiLCJkaXJlY3Rpb24iLCJkZWFkIiwiaSIsImJsb2NrIiwicHVzaCIsImZvckVhY2giLCJzaGlmdCIsImxlbmd0aCIsImNoYW5nZURpcmVjdGlvbiIsImN1cnJlbnRUYWlsIiwibmV3QmxvY2siLCJ1bnNoaWZ0IiwiY2xlYXJSZWN0IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Q29udGV4dCIsImdhbWUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwia2V5UHJlc3MiLCJsb2NhdGlvbiIsInJlbG9hZCIsImdhbWVMb29wIiwiaW5uZXJUZXh0IiwiY2hlY2tHYW1lT3ZlciIsImtleWJvYXJkIiwiZXZlbnQiLCJrZXlDb2RlIiwiZGlzcGxheUhlYWRlckJveCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImhpZGVXZWxjb21lU2NyZWVuIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic3RhcnRHYW1lIiwic3VibWl0U2NvcmUiLCJzZXRUaW1lb3V0IiwiYW5pbWF0ZSIsInN1Ym1pdEJ1dHRvbiIsInN1Ym1pdE5ld1Njb3JlIiwicmVzZXQiLCJ1c2VyTmFtZSIsInZhbHVlIiwibXlTY29yZSIsIm5ld1Njb3JlIiwiJCIsImFwcGVuZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBSUEsWUFBWSxtQkFBQUMsQ0FBUSwwQ0FBUixDQUFoQjs7SUFFTUMsSTs7O0FBQ0osZ0JBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQkMsTUFBbEIsRUFBMEJDLEtBQTFCLEVBQWlDQyxLQUFqQyxFQUF3QztBQUFBOztBQUFBLDRHQUNoQ0os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S29CLE9BQUwsQ0FBYXZELE9BQWI7QUFDQW1ELDRCQUFzQlYsUUFBdEI7QUFDRCxLQUpELEVBSUcsR0FKSDtBQUtEO0FBQ0YsQ0FiRDs7QUFlQSxJQUFNWSxjQUFjLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixNQUFJbEIsS0FBS3pDLEtBQUwsSUFBYyxFQUFsQixFQUFzQjtBQUNwQnNDLGFBQVNDLGFBQVQsQ0FBdUIsY0FBdkIsRUFBdUNlLFNBQXZDLENBQWlEQyxNQUFqRCxDQUF3RCxPQUF4RDtBQUNELEdBRkQsTUFFTztBQUNMakIsYUFBU0MsYUFBVCxDQUF1QixtQkFBdkIsRUFBNENlLFNBQTVDLENBQXNEQyxNQUF0RCxDQUE2RCxPQUE3RDtBQUNEO0FBQ0YsQ0FORDs7QUFRQSxJQUFNTyxlQUFleEIsU0FBU0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBckI7O0FBRUF1QixhQUFhbkIsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsWUFBVztBQUNoRG9CO0FBQ0F6QixXQUFTQyxhQUFULENBQXVCLGdCQUF2QixFQUF5Q2UsU0FBekMsQ0FBbURDLE1BQW5ELENBQTBELE1BQTFEO0FBQ0EsT0FBS1MsS0FBTDtBQUNELENBSkQ7O0FBT0EsSUFBTUQsaUJBQWlCLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLE1BQUlFLFdBQVczQixTQUFTQyxhQUFULENBQXVCLHFCQUF2QixFQUE4QzJCLEtBQTdEO0FBQ0EsTUFBSUMsVUFBVTFCLEtBQUt6QyxLQUFuQjtBQUNBLE1BQUlvRSxvQkFBa0JILFFBQWxCLDRCQUFpREUsT0FBakQsVUFBSjs7QUFFQUUsSUFBRSxhQUFGLEVBQWlCQyxNQUFqQixDQUF3QkYsUUFBeEI7QUFDRCxDQU5ELEMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9pbmRleC5qc1wiKTtcbiIsInZhciBHYW1lUGllY2UgPSByZXF1aXJlKCcuL0dhbWVQaWVjZS5qcycpO1xuXG5jbGFzcyBGb29kIGV4dGVuZHMgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IpIHtcbiAgICBzdXBlcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcik7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgY3JlYXRlRm9vZCgpIHtcblxuICAgIHRoaXMueCA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzMCkgKiAyMCk7XG4gICAgdGhpcy55ID0gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMwKSAqIDIwKTtcbiAgfVxufVxuXG4gICAgXG4gICAgXG4gXG5cbm1vZHVsZS5leHBvcnRzID0gRm9vZDsiLCJjb25zdCBTbmFrZSA9IHJlcXVpcmUoJy4vU25ha2UuanMnKTtcbmNvbnN0IEZvb2QgPSByZXF1aXJlKCcuL0Zvb2QuanMnKTtcblxuXG5jbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIHRoaXMuaGlnaFNjb3JlID0gMDtcbiAgICB0aGlzLnNuYWtlID0gbmV3IFNuYWtlKDUwLCA1MCwgMjAsIDIwLCAncmdiKDI1NSwgMCwgMCknLCAwKTtcbiAgICB0aGlzLmZvb2QgPSBuZXcgRm9vZCgzNTAsIDIwLCAyMCwgMjAsICdyZ2IoMCwgMjU1LCAwKScpO1xuICB9XG5cbiAgc3RhcnRHYW1lKCkge1xuICAgIHRoaXMuc25ha2UuZGllID0gZmFsc2U7XG4gICAgdGhpcy5zbmFrZS5tYWtlSW5pdGlhbFNuYWtlKCk7XG4gIH1cblxuICBhbmltYXRlKGNvbnRleHQpIHtcbiAgICB0aGlzLnNuYWtlLmRyYXdTbmFrZUJvZHkoY29udGV4dCk7XG4gICAgdGhpcy5zbmFrZS5tb3ZlKCk7XG4gICAgdGhpcy5mb29kLmRyYXcoY29udGV4dCk7XG4gICAgdGhpcy5lYXRGb29kKCk7XG4gICAgdGhpcy5zbmFrZS5jaGVja0VhdEl0c2VsZihjb250ZXh0KTtcbiAgICB0aGlzLnNuYWtlLmNoZWNrSW5Cb3VuZHMoY29udGV4dCk7XG4gIH1cblxuICBlYXRGb29kKCkge1xuICAgIGlmICh0aGlzLnNuYWtlLmhlYWQuaXNDb2xsaWRpbmdXaXRoKHRoaXMuZm9vZCkpIHtcbiAgICAgIHRoaXMuc2NvcmUgKz0gMTtcbiAgICAgIHRoaXMuZm9vZC5jcmVhdGVGb29kKCk7XG4gICAgICB0aGlzLnNuYWtlLmdyb3dTbmFrZSgpO1xuICAgIH1cbiAgfVxufVxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lOyIsIm1vZHVsZS5leHBvcnRzID0gY2xhc3MgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0ID0gMjAsIHdpZHRoID0gMjAsIGNvbG9yID0gJ2Jyb3duJykge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICB9XG5cbiAgaXNDb2xsaWRpbmdXaXRoKG9iamVjdCkge1xuICAgIHJldHVybiAhKFxuICAgICAgdGhpcy54ICsgdGhpcy53aWR0aCA8IG9iamVjdC54IHx8XG4gICAgICB0aGlzLnkgKyB0aGlzLmhlaWdodCA8IG9iamVjdC55IHx8XG4gICAgICB0aGlzLnggPiBvYmplY3QueCArIG9iamVjdC53aWR0aCB8fFxuICAgICAgdGhpcy55ID4gb2JqZWN0LnkgKyBvYmplY3QuaGVpZ2h0XG4gICAgKTtcbiAgfVxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGNvbnN0IHsgeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IgfSA9IHRoaXM7XG5cbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICB9XG59O1xuXG4iLCJ2YXIgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UuanMnKTtcblxuY2xhc3MgU25ha2UgZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQgPSAyMCwgd2lkdGggPSAyMCwgY29sb3IpIHtcbiAgICBzdXBlcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcik7XG4gICAgdGhpcy5oZWFkID0gbnVsbDtcbiAgICB0aGlzLnRhaWwgPSBbXTtcbiAgICB0aGlzLm5ld1RhaWwgPSB0aGlzLnRhaWxbMF07XG4gICAgdGhpcy5kaXJlY3Rpb24gPSAncmlnaHQnO1xuICAgIHRoaXMuZGVhZCA9IGZhbHNlO1xuICB9XG5cbiAgbWFrZUluaXRpYWxTbmFrZSgpIHtcbiAgICBmb3IgKGxldCBpID0gMjA7IGkgPCAxMDA7IGkgKz0gMjApIHtcbiAgICAgIGxldCBibG9jayA9IG5ldyBHYW1lUGllY2UoaSwgMjApO1xuXG4gICAgICB0aGlzLnRhaWwucHVzaChibG9jayk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZHJhd1NuYWtlQm9keShjb250ZXh0KSB7XG4gICAgdGhpcy50YWlsLmZvckVhY2goKGJsb2NrKSA9PiB7XG4gICAgICBibG9jay5kcmF3KGNvbnRleHQpO1xuICAgIH0pO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICB0aGlzLm5ld1RhaWwgPSB0aGlzLnRhaWwuc2hpZnQoKTtcbiAgICB0aGlzLmhlYWQgPSB0aGlzLnRhaWxbdGhpcy50YWlsLmxlbmd0aCAtIDFdO1xuICAgIFxuICAgIHN3aXRjaCAodGhpcy5kaXJlY3Rpb24pIHtcbiAgICBjYXNlICdsZWZ0JzpcbiAgICAgIHRoaXMubmV3VGFpbC54ID0gdGhpcy5oZWFkLnggLSAyMDtcbiAgICAgIHRoaXMubmV3VGFpbC55ID0gdGhpcy5oZWFkLnk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd1cCc6XG4gICAgICB0aGlzLm5ld1RhaWwueSA9IHRoaXMuaGVhZC55IC0gMjA7XG4gICAgICB0aGlzLm5ld1RhaWwueCA9IHRoaXMuaGVhZC54O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncmlnaHQnOlxuICAgICAgdGhpcy5uZXdUYWlsLnggPSB0aGlzLmhlYWQueCArIDIwO1xuICAgICAgdGhpcy5uZXdUYWlsLnkgPSB0aGlzLmhlYWQueTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Rvd24nOlxuICAgICAgdGhpcy5uZXdUYWlsLnkgPSB0aGlzLmhlYWQueSArIDIwO1xuICAgICAgdGhpcy5uZXdUYWlsLnggPSB0aGlzLmhlYWQueDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLnRhaWwucHVzaCh0aGlzLm5ld1RhaWwpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2hhbmdlRGlyZWN0aW9uKGNoYW5nZURpcmVjdGlvbikge1xuICAgIGlmIChjaGFuZ2VEaXJlY3Rpb24gIT0gdGhpcy5kaXJlY3Rpb24pIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gY2hhbmdlRGlyZWN0aW9uO1xuICAgIH1cbiAgfVxuXG4gIGdyb3dTbmFrZSgpIHtcbiAgICBsZXQgY3VycmVudFRhaWwgPSB0aGlzLnRhaWxbMF07XG5cbiAgICBzd2l0Y2ggKHRoaXMuY2hhbmdlRGlyZWN0aW9uKSB7XG4gICAgY2FzZSAnbGVmdCc6IFxuICAgICAgdGhpcy54ID0gY3VycmVudFRhaWwueCArIDIwO1xuICAgICAgdGhpcy55ID0gY3VycmVudFRhaWwueTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3VwJzogXG4gICAgICB0aGlzLnggPSBjdXJyZW50VGFpbC54O1xuICAgICAgdGhpcy55ID0gY3VycmVudFRhaWwueSArIDIwOyBcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3JpZ2h0JzogXG4gICAgICB0aGlzLnggPSBjdXJyZW50VGFpbC54IC0gMjA7XG4gICAgICB0aGlzLnkgPSBjdXJyZW50VGFpbC55O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZG93bic6IFxuICAgICAgdGhpcy54ID0gY3VycmVudFRhaWwueDtcbiAgICAgIHRoaXMueSA9IGN1cnJlbnRUYWlsLnkgLSAyMDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBsZXQgbmV3QmxvY2sgPSBuZXcgR2FtZVBpZWNlKGN1cnJlbnRUYWlsLngsIGN1cnJlbnRUYWlsLnksIDIwLCAyMCk7XG4gICAgXG4gICAgdGhpcy50YWlsLnVuc2hpZnQobmV3QmxvY2spO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gXG4gIGNoZWNrSW5Cb3VuZHMoKSB7XG4gICAgaWYgKHRoaXMuaGVhZC54ICsgMjAgPT09IDAgfHwgdGhpcy5oZWFkLnggLSAyMCA9PT0gNjAwKSB7XG4gICAgICB0aGlzLmRlYWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5oZWFkLnkgKyAyMCA9PT0gMCB8fCB0aGlzLmhlYWQueSAtIDIwID09PSA2MDApIHtcbiAgICAgIHRoaXMuZGVhZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tFYXRJdHNlbGYoY29udGV4dCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YWlsLmxlbmd0aCAtIDI7IGkrKykge1xuICAgICAgaWYgKHRoaXMuaGVhZC54ID09PSB0aGlzLnRhaWxbaV0ueCAmJlxuICAgICAgICB0aGlzLmhlYWQueSA9PT0gdGhpcy50YWlsW2ldLnkpIHtcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgNjAwLCA2MDApO1xuICAgICAgICB0aGlzLmRlYWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNuYWtlOyIsImNvbnN0IEdhbWUgPSByZXF1aXJlKCcuL0dhbWUuanMnKTtcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lJyk7XG5jb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jb25zdCBnYW1lID0gbmV3IEdhbWUoY29udGV4dCk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5UHJlc3MpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmV0cnktYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgbG9jYXRpb24ucmVsb2FkKCk7XG59KTtcblxuXG5jb25zdCBnYW1lTG9vcCA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1zY29yZScpLmlubmVyVGV4dCA9IGdhbWUuc2NvcmU7XG4gIGNoZWNrR2FtZU92ZXIoKTtcbn07XG5cbmNvbnN0IGtleWJvYXJkID0ge1xuICA2NTogKCkgPT4gZ2FtZS5zbmFrZS5kaXJlY3Rpb24gIT09IFxuICAncmlnaHQnID8gZ2FtZS5zbmFrZS5kaXJlY3Rpb24gPSAnbGVmdCcgOiBnYW1lLnNuYWtlLmRpcmVjdGlvbixcbiAgODc6ICgpID0+IGdhbWUuc25ha2UuZGlyZWN0aW9uICE9PSBcbiAgJ2Rvd24nID8gZ2FtZS5zbmFrZS5kaXJlY3Rpb24gPSAndXAnIDogZ2FtZS5zbmFrZS5kaXJlY3Rpb24sIFxuICA2ODogKCkgPT4gZ2FtZS5zbmFrZS5kaXJlY3Rpb24gIT09IFxuICAnbGVmdCcgPyBnYW1lLnNuYWtlLmRpcmVjdGlvbiA9ICdyaWdodCcgOiBnYW1lLnNuYWtlLmRpcmVjdGlvbixcbiAgODM6ICgpID0+IGdhbWUuc25ha2UuZGlyZWN0aW9uICE9PSBcbiAgJ3VwJyA/IGdhbWUuc25ha2UuZGlyZWN0aW9uID0gJ2Rvd24nIDogZ2FtZS5zbmFrZS5kaXJlY3Rpb24sXG59O1xuXG5mdW5jdGlvbiBrZXlQcmVzcyhldmVudCkge1xuICBpZiAoa2V5Ym9hcmRbZXZlbnQua2V5Q29kZV0pIHtcbiAgICBrZXlib2FyZFtldmVudC5rZXlDb2RlXSgpO1xuICB9XG59XG5cbmNvbnN0IGRpc3BsYXlIZWFkZXJCb3ggPSAoKSA9PiBcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1ib3gnKS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93bicpO1xuXG5cbmNvbnN0IGhpZGVXZWxjb21lU2NyZWVuID0gKCkgPT4gXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWxjb21lLXNjcmVlbicpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWdhbWUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBkaXNwbGF5SGVhZGVyQm94KCk7XG4gIGhpZGVXZWxjb21lU2NyZWVuKCk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gIGdhbWUuc3RhcnRHYW1lKCk7XG59KTtcblxuY29uc3QgY2hlY2tHYW1lT3ZlciA9ICgpID0+IHtcbiAgaWYgKGdhbWUuc25ha2UuZGVhZCkge1xuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtb3ZlcicpLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3duJyk7XG4gICAgc3VibWl0U2NvcmUoKTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIGdhbWUuYW5pbWF0ZShjb250ZXh0KTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gICAgfSwgMTIwKTtcbiAgfVxufTtcblxuY29uc3Qgc3VibWl0U2NvcmUgPSAoKSA9PiB7XG4gIGlmIChnYW1lLnNjb3JlID49IDkyKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlLWlucHV0JykuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvd24nKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQteW91ci1zY29yZScpLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3duJyk7XG4gIH1cbn07XG5cbmNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtYnV0dG9uJyk7XG5cbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBzdWJtaXROZXdTY29yZSgpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LWJ1dHRvbicpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgdGhpcy5yZXNldCgpO1xufSk7XG5cblxuY29uc3Qgc3VibWl0TmV3U2NvcmUgPSAoKSA9PiB7XG4gIGxldCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItc2NvcmUtaW5wdXQnKS52YWx1ZTtcbiAgbGV0IG15U2NvcmUgPSBnYW1lLnNjb3JlO1xuICBsZXQgbmV3U2NvcmUgPSBgPGxpPiR7dXNlck5hbWV9Li4uLi4uLi4uLi4uLi4uLi4uLi4ke215U2NvcmV9PC9saT5gO1xuXG4gICQoJy5zY29yZS1saXN0JykuYXBwZW5kKG5ld1Njb3JlKTtcbn07XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=