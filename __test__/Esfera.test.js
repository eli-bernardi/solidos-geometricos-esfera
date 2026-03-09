const Esfera = require('../models/Esfera')

describe('Teste da versão 1.0.0 - Esfera', () => {
    test('Teste Unitário da Área da Esfera', () => {
        const raio = 5
        const esfera = new Esfera(raio)
        const area = 314.159
        expect(esfera.calcularArea()).toBeCloseTo(area, 3)
    })
    test('Teste Unitário do Volume da Esfera', () => {
        const raio = 5
        const esfera = new Esfera(raio)
        const volume = 523.599
        expect(esfera.calcularVolume()).toBeCloseTo(volume, 3)

    })
})