class UserCard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({
            mode: "open"
        });
        const p = document.createElement("p");
        p.textContent = "user card";
        this.shadowRoot.appendChild(p);
    }
}
customElements.define("user-card", UserCard);

//# sourceMappingURL=index.32ae5292.js.map
