import { describe, it, expect } from 'vitest';
import { container } from '../src/container.js';

/* Enunciado: Dado un array de números enteros positivos, donde cada uno representa unidades
* de bloques apilados, debemos calcular cuantas unidades de agua quedarán atrapadas entre ellos.
*
* - Ejemplo: Dado el array [4, 0, 3, 6, 1, 3].
*
*        ⏹
*        ⏹
*   ⏹💧💧⏹
*   ⏹💧⏹⏹💧⏹
*   ⏹💧⏹⏹💧⏹
*   ⏹💧⏹⏹⏹⏹
*
*   Representando bloque con ⏹︎ y agua con 💧, quedarán atrapadas 7 unidades de agua.
*   Suponemos que existe un suelo impermeable en la parte inferior que retiene el agua.*/


describe('container', () => {
    it('Should ba a funtion', () => {
        expect(typeof container).toBe('function')
    })
    it('Should throw an error if do not have an Array for props', () => {
        expect(() => container({})).toThrow(/array/)
        expect(() => container(undefined)).toThrow(/array/)
        expect(() => container(false)).toThrow(/array/)
        expect(() => container(0)).toThrow(/array/)
        expect(() => container("cristian")).toThrow(/array/)
    })
    it('Should have numbers for elements of array', () => {
        expect(() => container([1, 2, false])).toThrow(/numbers/)
        expect(() => container([2, 'asd', 5])).toThrow(/numbers/)
        expect(() => container([9, {age: 32}, 7])).toThrow(/numbers/)
    })
    it('The elements of array must be whole and positive numbers', () => {
        expect(() => container([1, 3, -3])).toThrow(/whole and positives/)
        expect(() => container([1, 2.5, 9])).toThrow(/whole and positives/)
        expect(() => container([2, 3.5, -4])).toThrow(/whole and positives/)
    })
    it('Should return a number', () => {
        expect(container([1])).toBe(0)
    })
    it('Should return a number of contained water droplets in small containter', () => {
        expect(container([4, 0, 3])).toBe(3)
    })
    it('Should return a number of contained water droplets', () => {
        expect(container([4, 0, 3, 6, 1, 3])).toBe(7)
    })
});