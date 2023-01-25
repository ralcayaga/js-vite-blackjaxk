
/**
 * Obtiene le valor de la carta
 * @param {String} carta  - Carta se ingresa - [5H]
 * @returns {Number}      - Retorna el valor de la carta ingresada [5H]--> 5
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}