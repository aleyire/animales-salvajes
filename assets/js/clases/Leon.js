import Animales from "./Animales.js"

class Leon extends Animales {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    get rugir() {
    }
}

export default Leon
