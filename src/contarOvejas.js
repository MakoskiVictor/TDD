//Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. 
//Haz una función que devuelva una lista con todas las ovejas que sean de color rojo 
//y que además su nombre contenga tanto las letras n Y a, sin importar el orden, 
//las mayúsculas o espacios.

export const contarOvejas = (ovejas) => {
    if(Array.isArray(ovejas) !== true) throw new Error("The parameter should be an array");
    
    return ovejas.filter((ovejas) => ovejas.color === "rojo" &&
    ovejas.name.match(/[n]/gi) &&
    ovejas.name.match(/[a]/gi));

};