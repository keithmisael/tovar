const bootstrap = 'bootstrap'

class BaseComponent extends HTMLElement {

    static css = bootstrap;

    static get observedAttributes() {
        return ["attr-name"]
    }

    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        
        const p = document.createElement('p');
        p.textContent = 'user card';

        this.shadowRoot.append(p)
    }

    get newAttribute() {
        return 'new attr'
    }

    set newAttribute(value) {
        this.setAttribute(value)
    }

    attributeChangedCallback() {

    }
}

class UserCard extends BaseElement {
    render() {
        return html`<div class="container"><p>Hello world</p></div>`
    }
}

customElements.define('user-card', UserCard)