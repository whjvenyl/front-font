import { html, render } from "https://unpkg.com/lit-html?module";

const htmlTemplate = () => html`
  <style>
    .svg {
	  width: 100%;
	  display: block;
    }
  </style>
  <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C115.3 0 0 115.3 0 256s115.3 256 256 256 256-115.3 256-256S396.7 0 256 0z" fill="#ff8c2e"/><path d="M512 256c0 140.7-115.3 256-256 256V0c140.7 0 256 115.3 256 256z" fill="#e26b1b"/><path d="M256 31C131.8 31 31 131.8 31 256s100.8 225 225 225 225-100.8 225-225S380.2 31 256 31z" fill="#fedbab"/><path d="M481 256c0 124.2-100.8 225-225 225V31c124.2 0 225 100.8 225 225z" fill="#fec478"/><path d="M419.801 187.301c2.699-26.1-6.301-52.202-25.201-71.1C376 97.599 349.6 88.6 323.8 91.3c-16.5-20.4-41.4-32.401-67.8-32.401S204.699 70.901 188.2 91.3c-26.1-2.701-52.2 6.299-70.8 24.901-18.9 18.898-27.9 45-25.201 71.1-20.4 16.199-32.399 41.1-32.399 67.5 0 26.699 11.999 51.599 32.399 67.798-2.699 26.102 6.301 52.202 25.201 71.102 18.6 18.6 44.7 27.599 70.8 24.899 16.5 20.4 41.4 32.401 67.8 32.401S307.301 439 323.8 418.6c26.1 2.701 52.2-6.299 70.8-24.899 18.9-18.9 27.9-45 25.201-71.102 20.4-16.199 32.399-41.1 32.399-67.798-.001-26.4-12-51.301-32.399-67.5z" fill="#fea832"/><path d="M452.199 254.801c0 26.699-11.999 51.599-32.399 67.798 2.699 26.102-6.301 52.202-25.201 71.102-18.6 18.6-44.7 27.599-70.8 24.899C307.301 438.999 282.4 451 256 451V58.9c26.4 0 51.301 12.001 67.8 32.401 25.8-2.701 52.2 6.299 70.8 24.901 18.9 18.898 27.9 45 25.201 71.1 20.399 16.198 32.398 41.099 32.398 67.499z" fill="#fe9923"/><g fill="#fec478"><path d="M432.265 346.381l-154.073-66.035 11.807-27.569 154.072 66.036z"/><path d="M319.354 452.655L253.935 289.12l27.861-11.133 65.42 163.535z"/></g><g fill="#fedbab"><path d="M190.565 446.693l-27.568-11.806 67.383-157.222 27.568 11.807z"/><path d="M80.102 341.884l-11.133-27.862 153.384-61.362 11.132 27.861z"/><path d="M222.748 257.436L65.219 189.921l11.806-27.568 157.53 67.514z"/><path d="M230.922 233.705L164.491 67.606l27.862-11.132 66.43 166.098z"/></g><g fill="#fec478"><path d="M280.932 234.042l-27.569-11.807L322.65 60.297l27.569 11.807z"/><path d="M289.252 257.436l-11.807-27.569 155.567-66.679 11.806 27.568z"/></g><path d="M256 211c-24.901 0-45 20.099-45 45s20.099 45 45 45 45-20.099 45-45-20.099-45-45-45z" fill="#fedbab"/><path d="M301 256c0 24.901-20.099 45-45 45v-90c24.901 0 45 20.099 45 45z" fill="#fec478"/></svg>
`;

class LetterO extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    render(htmlTemplate(), this._shadowRoot);
  }
}

window.customElements.define("letter-o", LetterO);
