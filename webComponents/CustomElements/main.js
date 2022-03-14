const template = document.createElement("section");
template.innerHTML= `
<style>
    .texto {
        color: red;
    }
    p {
        color: blue;
    }
</style>
<h1 class="texto">Hola mundo en rojo!!</h1>
<p>Texto ejemplo</p>
`

class myElement extends HTMLElement {
    constructor (){
        super(); /* Obtenemos acceso a todos los elementos y metodos de la clase heredada */
        this.p = document.createElement("p"); /* Se crea la etiqueta(aunn no se verá en DOM) */
        console.log("Hola munda")
    }
    connectedCallback() { /* Mandaran los elementos al DOM */
        this.p.textContent = "Hola mundo!!"
        this.appendChild(this.p);
        this.appendChild(template)
    }
}
customElements.define("my-element", myElement) /* Define que la clase se convertira en una etiqueta del HTML */