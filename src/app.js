import Contact from "./contact"

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('app')


    let contact = document.createElement("contact-me")
    contact.setAttribute("data-photo", "")
    root.appendChild(contact)
})