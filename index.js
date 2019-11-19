

import React, { Component, useState, useRef } from 'react';
import {ReactDom} from 'react-dom';
class HelloReact extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <p>
          Hello From Encapsulated React Component
        </p>
      </div>
    );
  }
};

class HelloWebComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    ReactDOM.render(<HelloReact />, this);
  }
  disconnectedCallback(){
    ReactDOM.unmountComponentAtNode(this);
  }
};

customElements.define('hello-web-component', HelloWebComponent);
const webCmp = document.createElement('hello-web-component');
document.body.appendChild(webCmp);