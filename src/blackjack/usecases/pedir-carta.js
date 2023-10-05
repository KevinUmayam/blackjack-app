
// Esta función pide una carta
/**
 * 
 * @param {array<String>} deck ejemplo:['2C', '3D', '4H', '1S']
 * @returns {String} retorna una carta de el deck
 */
export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}