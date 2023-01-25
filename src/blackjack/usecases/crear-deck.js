import _ from "underscore";

/**
 * 
 * @param    {Array<String>} tiposDeCarta  ['C','D','H','S']
 * @param    {Array<String>} tiposEspeciales ['A','J','Q','K']
 * @returns  {Array<String>} regresa un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

     if (!tiposDeCarta || tiposDeCarta.length===0)
              throw new Error ('TiposDeCarta es obligatorio ,como un arreglo de string');

    if (!tiposEspeciales || tiposEspeciales.length===0)
             throw new Error ('tiposEspeciales es obligatorio ,como un arreglo de string');


    let deck         = [];
    
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    // console.log( deck );
    return deck;
}