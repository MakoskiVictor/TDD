/* 
    Escribir una funcion que al pasarle un numero:
        -Muestra "fizz" si es multiplo de 3.
        -Muestra "buzz" si es multiplo de 5.
        -Muestra "fizzbuzz" si es multiplo de 3 y 5.
        -Muestra el numero si no es multiplo de ninguno.
*/
export const fizzbuzz = (number) => {
    if(typeof number !== "number") throw new Error("number must be a number")
    if(Number.isNaN(number)) throw new Error("number must be a number")

    if(number % 15 === 0) return "fizzbuzz";
    if(number % 3 === 0) return "fizz";
    if(number % 5 === 0) return "buzz";

    return number;
}