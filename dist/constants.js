"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.texts = exports.tagName = exports.isPoliceBarClosed = exports.isPoliceAccepted = exports.defaultPoliceLink = exports.cssPrefix = void 0;
var tagName = 'cookie-police-bar';
exports.tagName = tagName;
var cssPrefix = 'cookiePoliceBar';
exports.cssPrefix = cssPrefix;
var isPoliceAccepted = 'isCookiePoliceAccepted';
exports.isPoliceAccepted = isPoliceAccepted;
var isPoliceBarClosed = 'isCookiePoliceBarClosed';
exports.isPoliceBarClosed = isPoliceBarClosed;
var texts = {
  title: 'Esse Site usa Cookies',
  link: 'Portal de Privacidade.',
  text: 'Esse site utiliza cookies para oferecer uma melhor experiência de navegação, analisar como você interage em nosso site, otimizar o desempenho e personalizar o conteúdo. Ao utilizar este site, você concorda com o uso de cookies. Saiba mais em nosso ',
  acceptButton: 'OK'
};
exports.texts = texts;
var defaultPoliceLink = 'https://www.canaldatransparencia.com.br/cogna/';
exports.defaultPoliceLink = defaultPoliceLink;