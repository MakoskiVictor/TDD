import { describe, expect, it, } from "vitest";
import { fizzbuzz } from "../src/fizzbuzz.js";

/* 
    Escribir una funcion que al pasarle un numero:
        -Muestra "fizz" si es multiplo de 3.
        -Muestra "buzz" si es multiplo de 5.
        -Muestra "fizzbuzz" si es multiplo de 3 y 5.
        -Muestra el numero si no es multiplo de ninguno.
*/

describe("fizzbuzz", () => {

    //ESTE TEST YA NO TIENE SENTIDO

    /* it("should be a function", () => {
        expect(typeof fizzbuzz).toBe("function")
    }) */

    it("Should throw an error if not number is provided as parameter", () => {
        expect(() => fizzbuzz()).toThrow()
    })

    it("Should throw an specific error if not number is provided as parameter", () => {
        expect(() => fizzbuzz()).toThrow(/number/)
        //() => se hace para los throws
    })
    it("Should throw an message if not number is provided", ()=>{
        expect(() => fizzbuzz(NaN)).toThrow(/number/)
    })
    it("should return 1 if 1 is provided", () =>{
        expect(fizzbuzz(1)).toBe(1)
    })
    it("Should return 2 if 2 if provided", () => {
        expect(fizzbuzz(2)).toBe(2)
    })
    it("Should return `fizz` if the number provided is 3", () => {
        expect(fizzbuzz(3)).toBe("fizz")
    })
    it("Should return `fizz` if the number provided is multiple of 3", () => {
        expect(fizzbuzz(6)).toBe("fizz")
        expect(fizzbuzz(9)).toBe("fizz")
        expect(fizzbuzz(12)).toBe("fizz")
    })
    it("should return `buzz` if number provided is 5", () => {
        expect(fizzbuzz(5)).toBe("buzz")
    })
    it("should return `buzz` if number provided is multiple of 5", () => {
        expect(fizzbuzz(10)).toBe("buzz")
        expect(fizzbuzz(20)).toBe("buzz")
        expect(fizzbuzz(50)).toBe("buzz")
    })
    it("should return `fizzbuzz` if number provided is multiple of 15", () => {
        expect(fizzbuzz(15)).toBe("fizzbuzz")
    })

})