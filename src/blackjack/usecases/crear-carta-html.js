
// Esta función crea un nuevo deck
/**
 * 
 * @param {String} carta ejemplo:['C', 'D', 'H', 'S']
 * @returns {HTMLElement} elemento de imagen de retorno 
 */
export const crearCartaHTML = (carta) => {
    if (!carta) throw new Error('una carta es requerida ')
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
}

