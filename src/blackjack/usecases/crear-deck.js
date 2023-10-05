import _ from 'underscore'


// Esta función crea un nuevo deck
/**
 * 
 * @param {array<String>} tiposDeCarta ejemplo:['C', 'D', 'H', 'S']
 * @param {array<String>} tiposEspeciales ejemplo:['A', 'J', 'Q', 'K']
 * @returns {array<String>}
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    let deck = [];

    if (!tiposDeCarta || tiposDeCarta.length === 0) throw Error('tipos de cartas es obligatorio como un arreglo  de string')

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle(deck);
    return deck;
}
