import { pedirCarta , valorCarta, crearCartaHTML} from './';



/**
 * Funcion que realiza el turno de la computadora 
 * @param {Number} puntosMinimos - Puntos minimos a sobrepasar por la computadora
 * @param {HTMLElement} puntosHTML -Elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora - Elementos HTML para mostrar las cartas
 * @param {Array<String>} deck   - Deck con las cartas
 */

export const turnoComputadora = ( puntosMinimos,puntosHTML, divCartasComputadora,deck=[] ) => {

    if (!puntosMinimos )
    throw new Error ('puntosMinimos son obligatorio');

    if (!puntosHTML )
    throw new Error ('puntosHTML son obligatorio');

    if (!deck || deck.length===0)
   throw new Error ('deck es obligatorio ,como un arreglo de string');

   let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        // const imgCarta = document.createElement('img');
        // imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        // imgCarta.classList.add('carta');

        const imgCarta = crearCartaHTML(carta); 

        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}


