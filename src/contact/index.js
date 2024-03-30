class Contact extends HTMLElement {
    constructor() {
        super()
        //  ----
        this.shadow = this.attachShadow({mode: "open" })
        this.container = document.createElement("div")
        this.photo = document.createElement("img")
        //  ----
        
        //  ----
        //  grab URL Parameters
        this.params = new URLSearchParams(window.location.search)
        for (const [key, value] of this.params) {
            this.params [key] = value
        }
        console.log(this.params.photo)
        //  ----
        
        
        //  element container
        //  ----
        this.container.setAttribute("class", "container")
        
        //  ----
        this.photo.setAttribute("class", "photo")
        //  ----
        this.isActive = false
        

        this.menu = document.createElement("div")
        this.menu.animate([
            { background: "green" },
            { background: "blue" }
        ])
        this.menu.setAttribute("class", "menu")
        
        this.button1 = document.createElement("button")
        this.button2 = document.createElement("button")
        this.button3 = document.createElement("button")
        //  ----
        
        style = document.createElement("style")
        style.textContent = `
            .container {
                position: fixed;
                bottom: 0; right: 0;
                
                margin: 1rem;
                display: grid;
                grid-template-columns: 1fr auto;
                grid-template-areas:
                    "menu"
                    "avatar";

                width: fit-content;
                padding: unset;
                * {
                    margin: unset;
                    padding: unset;
                }
            }

            .photo {
                grid-area: avatar;
                background: pink;
                height: 2rem;
                width: 2rem;

                border-radius: 1rem;

                justify-self: flex-end;
            }

            .menu {
                display: flex;
                flex-direction: column;
                width: 8rem;
                margin-bottom: 0.5rem;

                button {
                    background: blue;
                    border: unset;
                    padding: 0.75rem;

                    display: flex;
                    gap: 0.5rem;

                    align-items: center;
                }
                .icon {
                    background: red;
                    height: 1rem;
                    width: 1rem;
                }
            }

            .button 
        `
        this.shadow.appendChild(style)
        
    }
    
    connectedCallback() {
        this.render()
    }

    disconnectedCallback() {
        console.log("discconnected")
    }
    
    adoptedCallback() {
        console.log("adopted")
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log("name: ", name)
        console.log("value: ", oldValue)
        console.log("value: ", newValue)
    }

    render() {
        this.photo.setAttribute("src", "data:image/jpeg;base64,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")
        this.photo.addEventListener("click", (e) => this.toggleMenu())


        //  this.button1.innerHTML = `<i class="icon"></i><div>Hello</div>`
        //  this.button2.innerHTML = `<i class="icon"></i><div>Hello</div>`
        //  this.button3.innerHTML = `<i class="icon"></i><div>Hello</div>`
        this.container.appendChild(this.photo)
        this.shadow.appendChild(this.container)
    }


    toggleMenu() {
        this.isActive = !this.isActive;
        if (this.isActive) {
            // Dynamically create or show menu
            this.createOrShowMenu();
        } else {
            // Hide menu
            if (this.menu) this.menu.style.display = "none";
        }
    }

    createOrShowMenu() {
        // Check if menu already created
        if (!this.menu.hasChildNodes()) {
            // Dynamically create menu items if not already created
            const button1 = document.createElement("button");
            const button2 = document.createElement("button");
            const button3 = document.createElement("button");
            // Configure your buttons here
            button1.innerHTML = "Messages"
            button1.addEventListener("click", () => window.location.href = "messages://" )
            // Append buttons to menu
            this.menu.appendChild(button1);
            this.menu.appendChild(button2);
            this.menu.appendChild(button3);
        }
        // Show menu
        this.menu.style.display = "";
        // Append menu if it's not already in the shadow DOM
        if (!this.menu.isConnected) {
            this.container.appendChild(this.menu);
        }
    }

}

customElements.define("contact-me", Contact)