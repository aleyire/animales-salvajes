import Animales from "./Animales.js"

class Serpiente extends Animales {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    get sisear() {
    }
}

export default Serpiente
