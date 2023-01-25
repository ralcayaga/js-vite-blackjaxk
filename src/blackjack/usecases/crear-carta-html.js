

/**
 * 
 * @param {String} carta - Carta que debe ser creada en HTML
 * @param {HTMLImageElement}  - Imagen de carta que le toco
 */

export const crearCartaHTML = (carta )=>{

    if (!carta )
    throw new Error ('Parametro carta es obligatorio');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');


    return imgCarta;


}