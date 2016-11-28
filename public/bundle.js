webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(3);

	var _phaser = __webpack_require__(5);

	var _phaser2 = _interopRequireDefault(_phaser);

	var _Boot = __webpack_require__(8);

	var _Boot2 = _interopRequireDefault(_Boot);

	var _Splash = __webpack_require__(10);

	var _Splash2 = _interopRequireDefault(_Splash);

	var _Game = __webpack_require__(12);

	var _Game2 = _interopRequireDefault(_Game);

	var _Map = __webpack_require__(14);

	var _Map2 = _interopRequireDefault(_Map);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	console.log('Test_test');

	var Game = function (_Phaser$Game) {
	  _inherits(Game, _Phaser$Game);

	  function Game() {
	    _classCallCheck(this, Game);

	    var width = document.documentElement.clientWidth > 1024 ? 1024 : document.documentElement.clientWidth;
	    var height = document.documentElement.clientHeight > 1024 ? 1024 : document.documentElement.clientHeight;

	    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, width, height, _phaser2.default.AUTO, 'content', null));

	    _this.state.add('Map', _Map2.default, false);
	    //this.state.add('Boot', BootState, false)
	    //this.state.add('Splash', SplashState, false)
	    //this.state.add('Game', GameState, false)

	    _this.state.start('Map');
	    return _this;
	  }

	  return Game;
	}(_phaser2.default.Game);

	window.game = new Game();

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _phaser = __webpack_require__(5);

	var _phaser2 = _interopRequireDefault(_phaser);

	var _webfontloader = __webpack_require__(9);

	var _webfontloader2 = _interopRequireDefault(_webfontloader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _class = function (_Phaser$State) {
	  _inherits(_class, _Phaser$State);

	  function _class() {
	    _classCallCheck(this, _class);

	    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	  }

	  _createClass(_class, [{
	    key: 'init',
	    value: function init() {
	      this.stage.backgroundColor = '#EDEEC9';
	      this.fontsReady = false;
	      this.fontsLoaded = this.fontsLoaded.bind(this);
	    }
	  }, {
	    key: 'preload',
	    value: function preload() {
	      _webfontloader2.default.load({
	        google: {
	          families: ['Nunito']
	        },
	        active: this.fontsLoaded
	      });

	      var text = this.add.text(this.world.centerX, this.world.centerY, 'loading fonts', { font: '16px Arial', fill: '#dddddd', align: 'center' });
	      text.anchor.setTo(0.5, 0.5);

	      this.load.image('loaderBg', './assets/images/loader-bg.png');
	      this.load.image('loaderBar', './assets/images/loader-bar.png');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.fontsReady) {
	        this.state.start('Splash');
	      }
	    }
	  }, {
	    key: 'fontsLoaded',
	    value: function fontsLoaded() {
	      this.fontsReady = true;
	    }
	  }]);

	  return _class;
	}(_phaser2.default.State);

	exports.default = _class;

/***/ },
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _phaser = __webpack_require__(5);

	var _phaser2 = _interopRequireDefault(_phaser);

	var _utils = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _class = function (_Phaser$State) {
	  _inherits(_class, _Phaser$State);

	  function _class() {
	    _classCallCheck(this, _class);

	    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	  }

	  _createClass(_class, [{
	    key: 'init',
	    value: function init() {}
	  }, {
	    key: 'preload',
	    value: function preload() {
	      this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg');
	      this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar');
	      (0, _utils.centerGameObjects)([this.loaderBg, this.loaderBar]);

	      this.load.setPreloadSprite(this.loaderBar);
	      //
	      // load your assets
	      //
	      this.load.image('mushroom', 'assets/images/mushroom2.png');
	    }
	  }, {
	    key: 'create',
	    value: function create() {
	      this.state.start('Game');
	    }
	  }]);

	  return _class;
	}(_phaser2.default.State);

	exports.default = _class;

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var centerGameObjects = exports.centerGameObjects = function centerGameObjects(objects) {
	  objects.forEach(function (object) {
	    object.anchor.setTo(0.5);
	  });
	};

	var setResponsiveWidth = exports.setResponsiveWidth = function setResponsiveWidth(sprite, percent, parent) {
	  var percentWidth = (sprite.texture.width - parent.width / (100 / percent)) * 100 / sprite.texture.width;
	  sprite.width = parent.width / (100 / percent);
	  sprite.height = sprite.texture.height - sprite.texture.height * percentWidth / 100;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _phaser = __webpack_require__(5);

	var _phaser2 = _interopRequireDefault(_phaser);

	var _Mushroom = __webpack_require__(13);

	var _Mushroom2 = _interopRequireDefault(_Mushroom);

	var _utils = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* globals __DEV__ */


	var _class = function (_Phaser$State) {
	  _inherits(_class, _Phaser$State);

	  function _class() {
	    _classCallCheck(this, _class);

	    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	  }

	  _createClass(_class, [{
	    key: 'init',
	    value: function init() {}
	  }, {
	    key: 'preload',
	    value: function preload() {}
	  }, {
	    key: 'create',
	    value: function create() {
	      var banner = this.add.text(this.game.world.centerX, this.game.height - 30, 'TEST PHASER APP');
	      banner.font = 'Nunito';
	      banner.fontSize = 40;
	      banner.fill = '#77BFA3';
	      banner.anchor.setTo(0.5);

	      this.mushroom = new _Mushroom2.default({
	        game: this.game,
	        x: this.game.world.centerX,
	        y: this.game.world.centerY,
	        asset: 'mushroom'
	      });

	      // set the sprite width to 30% of the game width
	      (0, _utils.setResponsiveWidth)(this.mushroom, 30, this.game.world);
	      this.game.add.existing(this.mushroom);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (true) {
	        this.game.debug.spriteInfo(this.mushroom, 32, 32);
	      }
	    }
	  }]);

	  return _class;
	}(_phaser2.default.State);

	exports.default = _class;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _phaser = __webpack_require__(5);

	var _phaser2 = _interopRequireDefault(_phaser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _class = function (_Phaser$Sprite) {
	  _inherits(_class, _Phaser$Sprite);

	  function _class(_ref) {
	    var game = _ref.game,
	        x = _ref.x,
	        y = _ref.y,
	        asset = _ref.asset;

	    _classCallCheck(this, _class);

	    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, game, x, y, asset));

	    _this.game = game;
	    _this.anchor.setTo(0.9);
	    return _this;
	  }

	  _createClass(_class, [{
	    key: 'update',
	    value: function update() {
	      this.angle += 2;
	    }
	  }]);

	  return _class;
	}(_phaser2.default.Sprite);

	exports.default = _class;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _phaser = __webpack_require__(5);

	var _phaser2 = _interopRequireDefault(_phaser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* globals __DEV__ */


	var _class = function (_Phaser$State) {
	    _inherits(_class, _Phaser$State);

	    function _class() {
	        _classCallCheck(this, _class);

	        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	    }

	    _createClass(_class, [{
	        key: 'init',
	        value: function init() {}
	    }, {
	        key: 'preload',
	        value: function preload() {
	            this.game.load.tilemap('level', './assets/level/level_map.json', null, _phaser2.default.Tilemap.TILED_JSON);
	            this.game.load.image('tiles', './assets/level/tile_map.png');
	            this.game.load.spritesheet('player', './assets/images/betty2.png', 16, 16);
	        }
	    }, {
	        key: 'create',
	        value: function create() {
	            this.game.stage.backgroundColor = '#787878';

	            //  The 'mario' key here is the Loader key given in game.load.tilemap
	            var map = this.game.add.tilemap('level');

	            //  The first parameter is the tileset name, as specified in the Tiled map editor (and in the tilemap json file)
	            //  The second parameter maps this name to the Phaser.Cache key 'tiles'
	            map.addTilesetImage('tile_map', 'tiles');

	            //  Creates a layer from the World1 layer in the map data.
	            //  A Layer is effectively like a Phaser.Sprite, so is added to the display list.
	            var layer = map.createLayer('Tile Layer 1');

	            //  This resizes the game world to match the layer dimensions
	            layer.resizeWorld();

	            var player = game.add.sprite(48, 48, 'player', 1);
	            player.animations.add('left', [8, 9], 10, true);
	            player.animations.add('right', [1, 2], 10, true);
	            player.animations.add('up', [11, 12, 13], 10, true);
	            player.animations.add('down', [4, 5, 6], 10, true);

	            game.physics.enable(player, _phaser2.default.Physics.ARCADE);

	            player.body.setSize(10, 14, 2, 1);
	        }
	    }, {
	        key: 'render',
	        value: function render() {}
	    }]);

	    return _class;
	}(_phaser2.default.State);

	exports.default = _class;

/***/ }
]);