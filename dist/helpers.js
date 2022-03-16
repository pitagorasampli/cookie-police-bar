"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$ = $;
exports.addEvent = addEvent;
exports.addStyles = addStyles;
exports.createElement = createElement;
exports.css = css;
exports.getAttributes = getAttributes;
exports.isHidden = isHidden;

var _constants = require("./constants");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Helper to activate stylelint
function css(strings) {
  var finalCss = '';

  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  for (var index in strings) {
    finalCss += strings[index] + (values[index] || '');
  }

  return finalCss;
}

function $(query) {
  return document.querySelector(query);
}

function createElement(tagName, _ref) {
  var _ref$attributes = _ref.attributes,
      attributes = _ref$attributes === void 0 ? {} : _ref$attributes,
      _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles,
      _ref$events = _ref.events,
      events = _ref$events === void 0 ? {} : _ref$events;
  var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var element = document.createElement(tagName);

  for (var attr in attributes) {
    element.setAttribute(attr, attributes[attr]);
  }

  for (var event in events) {
    element.addEventListener(event, events[event]);
  }

  for (var style in styles) {
    element.style[style] = styles[style];
  }

  var _iterator = _createForOfIteratorHelper(children),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var child = _step.value;

      if (typeof child === 'string') {
        if (child.trim()[0] === '<') {
          element.innerHTML = child;
          continue;
        }

        child = document.createTextNode(child);
      }

      element.appendChild(child);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return element;
}

function addStyles(styles) {
  $('head').appendChild(createElement('style', {
    attributes: {
      type: 'text/css'
    }
  }, [styles]));
}

function isHidden() {
  var isAccepted = localStorage.getItem(_constants.isPoliceAccepted);
  var isClosed = sessionStorage.getItem(_constants.isPoliceBarClosed);
  return isAccepted || isClosed;
}

function addEvent(event, callback) {
  var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  element.addEventListener(event, callback, options);
}

function getAttributes(el) {
  var attributes = {};

  if (el.hasAttributes()) {
    var elAttributes = Array.from(el.attributes);
    elAttributes.each(function (attr) {
      attributes[attr.name] = attr.value;
    });
  }

  return attributes;
}