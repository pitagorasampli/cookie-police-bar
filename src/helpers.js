import { isPoliceAccepted, isPoliceBarClosed } from './constants';

// Helper to activate stylelint
export function css(strings, ...values) {
  let finalCss = '';
  for (let index in strings) {
    finalCss += strings[index] + (values[index] || '');
  }
  return finalCss;
}

export function $(query) {
  return document.querySelector(query);
}

export function createElement(
  tagName,
  { attributes = {}, styles = {}, events = {} },
  children = []
) {
  const element = document.createElement(tagName);
  for (let attr in attributes) {
    element.setAttribute(attr, attributes[attr]);
  }
  for (let event in events) {
    element.addEventListener(event, events[event]);
  }
  for (let style in styles) {
    element.style[style] = styles[style];
  }
  for (let child of children) {
    if (typeof child === 'string') {
      if (child.trim()[0] === '<') {
        element.innerHTML = child;
        continue;
      }
      child = document.createTextNode(child);
    }
    element.appendChild(child);
  }
  return element;
}

export function addStyles(styles) {
  $('head').appendChild(
    createElement(
      'style',
      {
        attributes: {
          type: 'text/css',
        },
      },
      [styles]
    )
  );
}

export function isHidden() {
  const isAccepted = localStorage.getItem(isPoliceAccepted);
  const isClosed = sessionStorage.getItem(isPoliceBarClosed);
  return isAccepted || isClosed;
}

export function addEvent(event, callback, element = document, options = false) {
  element.addEventListener(event, callback, options);
}

export function getAttributes(el) {
  const attributes = {};
  if (el.hasAttributes()) {
    const elAttributes = Array.from(el.attributes);
    elAttributes.each((attr) => {
      attributes[attr.name] = attr.value;
    });
  }
  return attributes;
}
