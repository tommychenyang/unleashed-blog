"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Post = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _typeorm = require("typeorm");

var _User = require("./User");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Post = (_dec = (0, _typeorm.Entity)('posts'), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)('increment'), _dec3 = Reflect.metadata("design:type", Number), _dec4 = (0, _typeorm.Column)('varchar'), _dec5 = Reflect.metadata("design:type", String), _dec6 = (0, _typeorm.Column)('text'), _dec7 = Reflect.metadata("design:type", String), _dec8 = (0, _typeorm.CreateDateColumn)(), _dec9 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec10 = (0, _typeorm.UpdateDateColumn)(), _dec11 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec12 = (0, _typeorm.ManyToOne)('User', 'posts'), _dec13 = Reflect.metadata("design:type", typeof _User.User === "undefined" ? Object : _User.User), _dec14 = (0, _typeorm.OneToMany)('Comment', 'post'), _dec15 = Reflect.metadata("design:type", Array), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_BaseEntity) {
  (0, _inherits2["default"])(Post, _BaseEntity);

  var _super = _createSuper(Post);

  function Post() {
    var _this;

    (0, _classCallCheck2["default"])(this, Post);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _initializerDefineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "id", _descriptor, (0, _assertThisInitialized2["default"])(_this));
    (0, _initializerDefineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "title", _descriptor2, (0, _assertThisInitialized2["default"])(_this));
    (0, _initializerDefineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "content", _descriptor3, (0, _assertThisInitialized2["default"])(_this));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "authorId", void 0);
    (0, _initializerDefineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "createdAt", _descriptor4, (0, _assertThisInitialized2["default"])(_this));
    (0, _initializerDefineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateAt", _descriptor5, (0, _assertThisInitialized2["default"])(_this));
    (0, _initializerDefineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "author", _descriptor6, (0, _assertThisInitialized2["default"])(_this));
    (0, _initializerDefineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "comments", _descriptor7, (0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  return Post;
}(_typeorm.BaseEntity), _temp), (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "id", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "title", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "content", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "createdAt", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "updateAt", [_dec10, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "author", [_dec12, _dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "comments", [_dec14, _dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.Post = Post;