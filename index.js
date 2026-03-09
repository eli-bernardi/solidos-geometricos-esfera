const rl = require('readline-sync')
const Esfera = require('./models/Esfera')

console.log('------ Cálculo de Área e Volume de uma Esfera -----')
console.log('---------------------------------------------------')

const raio = Number(rl.question('Digite o raio da esfera: '))

let esfera = new Esfera(raio)

let area = esfera.calcularArea()
let volume = esfera.calcularVolume()

console.log(`O valor da área da esfera é: ${area.toFixed(3)}`)
console.log(`O valor do volume da esfera é: ${volume.toFixed(6)}`)