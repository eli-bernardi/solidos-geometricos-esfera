class Esfera {
    constructor(raio) {
        this.raio = raio
    }
    calcularArea() {
        return Math.PI * 4 * this.raio * this.raio
    }
    calcularVolume() {
        return (4 / 3) * Math.PI * this.raio * this.raio * this.raio
    }
}

module.exports = Esfera