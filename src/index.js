import {
  tagName,
  isPoliceAccepted,
  isPoliceBarClosed,
  texts,
  defaultPoliceLink,
} from './constants';
import {
  addStyles,
  isHidden,
  addEvent,
  $,
  getAttributes,
  createElement,
} from './helpers';
import globalStyles, { svgCloseButton } from './styles';

function createTitle(attributes = {}) {
  return createElement('h3', {}, [attributes.title || texts.title]);
}

function createLink(attributes = {}) {
  return createElement(
    'a',
    {
      attributes: {
        href: attributes.link || defaultPoliceLink,
        target: '_blank',
        rel: 'noreferrer',
      },
      styles: {
        color: attributes.linkcolor,
      },
    },
    [attributes.linktext || texts.link]
  );
}

function createText(attributes = {}, children = []) {
  return createElement('p', {}, [attributes.text || texts.text, ...children]);
}

function createTitleWrapper(children = []) {
  return createElement(
    'div',
    {
      attributes: {
        class: `${tagName} title-wrapper`,
      },
    },
    children
  );
}

function createTextWrapper(children = []) {
  return createElement(
    'div',
    {
      attributes: {
        class: `${tagName} text-wrapper`,
      },
    },
    children
  );
}

function createAcceptButton(attributes = {}, events = {}) {
  return createElement(
    'button',
    {
      attributes: {
        class: `${tagName} accept-button`,
      },
      styles: {
        backgroundColor: attributes.btnbgcolor,
        borderColor: attributes.btnbgcolor,
        color: attributes.btntextcolor,
        borderRadius: attributes.btnborderradius,
      },
      events: {
        click: (e) => {
          localStorage.setItem(isPoliceAccepted, 1);
          events.click && events.click(e);
        },
      },
    },
    [attributes.btntext || texts.acceptButton]
  );
}

function createCloseButton(attributes = {}, events = {}) {
  return createElement('button', {
    attributes: {
      class: `${tagName} close-button`,
      'aria-label': 'Fechar',
    },
    styles: {
      backgroundImage:
        attributes.closecolor && svgCloseButton(attributes.closecolor),
    },
    events: {
      click: (e) => {
        sessionStorage.setItem(isPoliceBarClosed, 1);
        events.click && events.click(e);
      },
    },
  });
}

function createMainWrapper(attributes = {}, children = []) {
  return createElement(
    'div',
    {
      styles: {
        backgroundColor: attributes.bgcolor,
        color: attributes.textcolor,
      },
      attributes: {
        class: `${tagName} wrapper`,
      },
    },
    children
  );
}

function load() {
  if (isHidden()) return;

  const mainElement = $(tagName);
  const attributes = getAttributes(mainElement);
  const removeMainElement = () => mainElement.remove();

  mainElement.appendChild(
    createMainWrapper(attributes, [
      createTitleWrapper([
        createTitle(attributes),
        createCloseButton(attributes, { click: removeMainElement }),
      ]),
      createTextWrapper([
        createText(attributes, [' ', createLink(attributes)]),
        createAcceptButton(attributes, { click: removeMainElement }),
      ]),
    ])
  );
}

addStyles(globalStyles);
addEvent('DOMContentLoaded', load);
