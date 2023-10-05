import { pedirCarta, valorCarta, crearCartaHTML } from './'
/**
 * 
 * turno de computadora 
 * @param {Number} puntosMinimos puntos minimos que necesita la computadora para ganar
 * @param {HTMLElement} puntosHTML elemento html para mostrar puntos 
 * @param {HTMLElement} divCartasComputadora elemento html para mostrar las cartas 
 * @param {Array<String>} deck 
 */
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {
    if (!puntosMinimos) throw new Error('puntosMinimos son requeridos ')
    if (!puntosHTML) throw new Error('puntosHTML es requerido')
    if (!divCartasComputadora) throw new Error('divCartasComputadora es requerido')
    // if (!deck) throw new Error('un deck es requeridos')

    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        // TODO: crear carta

        const imgCarta = crearCartaHTML(carta)
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}