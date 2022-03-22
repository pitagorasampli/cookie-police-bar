import { css } from './helpers';
import { tagName } from './constants';

export const svgCloseButton = (color) =>
  `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M18 6L6 18M6 6l12 12' stroke='${encodeURIComponent(
    color
  )}' stroke-width='2' stroke-linecap='round'%3E%3C/path%3E%3C/svg%3E%0A")`;

export default css`
  ${tagName},
  ${tagName} * {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, 'Noto Sans', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    z-index: 10000;
  }
  ${tagName} .${tagName}.wrapper {
    padding: 2em;
    background-color: #fafafa;
    left: 0;
    bottom: 0;
    right: 0;
    box-shadow: rgba(0, 0, 0, 0.2) 0 -2px 4px;
    position: fixed;
    color: #8e9294;
  }
  ${tagName} .${tagName}.title-wrapper,
  ${tagName} .${tagName}.text-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  ${tagName} .${tagName}.title-wrapper h3 {
    font-size: 1.17em;
    margin-top: 0;
    margin-bottom: 0.5em;
  }
  ${tagName} .${tagName}.text-wrapper p {
    margin-top: 0;
    margin-right: 1.5em;
    margin-bottom: 1em;
  }
  ${tagName} .${tagName}.text-wrapper a {
    text-decoration: underline;
    background-color: transparent;
    color: #01b6d0;
  }
  ${tagName} .${tagName}.accept-button {
    display: inline-block;
    width: 100%;
    color: white;
    font-size: 1.125em;
    font-weight: bold;
    background: #ffb800;
    border: 0;
    border-radius: 1.25em;
    padding: 0.5em 1em;
    max-width: 15em;
    cursor: pointer;
    margin-right: 3em;
  }
  ${tagName} .${tagName}.close-button {
    background-image: ${svgCloseButton('#8e9294')};
    background-color: transparent;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 1.7em;
    border: 0;
    padding: 1em;
    cursor: pointer;
    height: 1em;
    width: 1em;
  }
  @media (max-width: 767px) {
    ${tagName} .${tagName}.text-wrapper {
      flex-direction: column;
    }
    ${tagName} .${tagName}.text-wrapper p {
      margin-right: 0;
    }
    ${tagName} .${tagName}.accept-button {
      max-width: 100%;
      margin-right: 0;
    }
  }
`;
