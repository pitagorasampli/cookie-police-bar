import { css } from './helpers';
import { tagName } from './constants';

export default css`
  ${tagName},
  ${tagName} * {
    box-sizing: border-box;
  }

  ${tagName} .${tagName}.wrapper {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    padding: 2rem;
    background-color: rgb(250, 250, 250);
    left: 0px;
    bottom: 0px;
    box-shadow: rgb(0 0 0 / 20%) 0px -2px 4px;
    color: rgb(142, 146, 148);
    position: fixed;
    height: 12.5rem;
    z-index: 20;
    animation: 3s linear 0s 1 normal both running imganim;
  }

  ${tagName} .${tagName}.text-wrapper {
    margin-right: 0.625rem;
  }

  ${tagName} .${tagName}.text-wrapper > h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    margin-top: 0px;
    margin-bottom: 0.5rem;
  }
  ${tagName} .${tagName}.text-wrapper > p {
    margin-top: 0px;
    margin-bottom: 1rem;
  }
  ${tagName} .${tagName}.text-wrapper > p > a {
    text-decoration: none;
    background-color: transparent;
    color: rgb(1, 182, 208);
  }
  ${tagName} .${tagName}.text-wrapper > p > a:hover {
    text-decoration: underline;
  }
  ${tagName} .${tagName}.accept-button {
    cursor: pointer;
    width: 30%;
    align-self: center;
    margin-right: 3.25rem;
    margin-top: 0.5rem;
    margin-bottom: 0.0625rem;
    -webkit-box-align: center;
    align-items: center;
    color: white;
    font-size: 1.125rem;
    font-weight: bold;
    line-height: 1.5;
    background: rgb(255, 184, 0);
    border: 0.046875rem solid rgb(255, 184, 0);
    border-radius: 1.25rem;
    padding: 0.5rem;
    cursor: pointer;
    text-decoration: none !important;
  }
  ${tagName} .${tagName}.close-button {
    cursor: pointer;
    background: transparent;
    border: 0.0625rem solid transparent;
    border-radius: 3rem;
    color: rgb(142, 146, 148);
    display: inline-block;
    font-weight: bold;
    line-height: 1.5;
    outline: 0px;
    font-size: 1.7rem;
    padding: 0px 0.5rem;
    margin-right: -0.5rem;
    margin-top: -0.25rem;
    margin-bottom: 6.25rem;
    text-align: center !important;
    text-transform: none;
  }
  ${tagName} .${tagName}.close-button > svg {
    height: auto;
    width: 1.7rem;
  }
`;
