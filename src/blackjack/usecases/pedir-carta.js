

/**
 * 
 * @param {Array<String>} deck    - Recibe un deck de cartas
 * @returns {String} Retorna una Carta del deck - [5H,6S,JD] 
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw new Error ('No hay cartas en el deck');

    }
    
    const carta = deck.pop();
    return carta;
}