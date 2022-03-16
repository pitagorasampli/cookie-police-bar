"use strict";

var _constants = require("./constants");

var _helpers = require("./helpers");

var _styles = _interopRequireDefault(require("./styles"));

var _svgClose = _interopRequireDefault(require("./svg-close"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function createTitle() {
  var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _helpers.createElement)('h3', {}, [attributes.title || _constants.texts.title]);
}

function createLink() {
  var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _helpers.createElement)('a', {
    attributes: {
      href: attributes.link || _constants.defaultPoliceLink,
      target: '_blank',
      rel: 'noreferrer'
    },
    styles: {
      color: attributes.linkColor
    }
  }, [attributes.linkText || _constants.texts.link]);
}

function createText() {
  var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return (0, _helpers.createElement)('p', {}, [attributes.text || _constants.texts.text].concat(_toConsumableArray(children)));
}

function createTextWrapper() {
  var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return (0, _helpers.createElement)('div', {
    attributes: {
      class: "".concat(_constants.tagName, " text-wrapper")
    }
  }, children);
}

function createAcceptButton() {
  var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0, _helpers.createElement)('button', {
    attributes: {
      class: "".concat(_constants.tagName, " accept-button")
    },
    styles: {
      backgroundColor: attributes.btnBgColor,
      borderColor: attributes.btnBgColor,
      color: attributes.btnTextColor
    },
    events: {
      click: function click(e) {
        localStorage.setItem(_constants.isPoliceAccepted, 'true');
        events.click && events.click(e);
      }
    }
  }, [attributes.btnText || _constants.texts.acceptButton]);
}

function createCloseButton() {
  var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0, _helpers.createElement)('button', {
    attributes: {
      class: "".concat(_constants.tagName, " close-button")
    },
    styles: {
      color: attributes.closeColor
    },
    events: {
      click: function click(e) {
        sessionStorage.setItem(_constants.isPoliceBarClosed, 'true');
        events.click && events.click(e);
      }
    }
  }, [_svgClose.default]);
}

function createMainWrapper() {
  var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return (0, _helpers.createElement)('div', {
    styles: {
      backgroundColor: attributes.bgColor,
      color: attributes.textColor
    }
  }, children);
}

function load() {
  if ((0, _helpers.isHidden)()) return;
  var mainElement = (0, _helpers.$)(_constants.tagName);
  var attributes = (0, _helpers.getAttributes)(mainElement);

  var removeMainElement = function removeMainElement() {
    return mainElement.remove();
  };

  mainElement.appendChild(createMainWrapper(attributes, [createTextWrapper([createTitle(attributes), createText(attributes, [createLink(attributes)])]), createAcceptButton(attributes, {
    click: removeMainElement
  }), createCloseButton(attributes, {
    click: removeMainElement
  })]));
}

(0, _helpers.addStyles)(_styles.default);
(0, _helpers.addEvent)('DOMContentLoaded', load);