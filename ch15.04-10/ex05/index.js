// 透明度を設定できるよう変更
customElements.define("inline-circle", class InlineCircle extends HTMLElement {
    connectedCallback() {
        this.style.display = "inline-block";
        this.style.borderRadius = "50%";
        this.style.border = "solid black 1px";
        this.style.transform = "translateY(10%)";

        if (!this.style.width) {
            this.style.width = "0.8em";
            this.style.height = "0.8em";
        }
    }

    static get observedAttributes() {return ["diameter", "color", "transparency"]; }

    attributeChangedCallback(name, _oldValue, newValue) {
        switch(name) {
            case "diameter":
                this.style.width = newValue;
                this.style.height = newValue;
                break;
            case "color":
                this.style.backgroundColor = newValue;
                break;
            case "transparency":
                this.style.opacity = newValue;
                break;
        }
    }

    get diameter() { return this.getAttribute("diameter"); }
    set diameter(diameter) {return this.setAttribute("diameter", diameter);}
    get color() { return this.getAttribute("color"); }
    set color(color) { return this.setAttribute("color", color); }
    get transparency() { return this.getAttribute("transparency"); }
    set transparency(transparency) { return this.setAttribute("transparency", transparency); }
})
