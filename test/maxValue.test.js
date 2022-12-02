import { describe, expect, it } from 'vitest'
import { MaxValue } from '../src/maxValue.js'
/*
Introducción
Se nos presenta un arreglo de enteros, estos representan el valor de una acción con el pasar del tiempo.
¿El objetivo del ejercicio? Encontrar cuál es la máxima ganancia posible de comprar a un horario y vender
 a otro después.

Ejemplo
acciones: [4, 3, 2, 5, 11]
mayor ganancia: 9

Esta ganancia la obtenemos comprando la acción cuando su valor es de 2 y vendiéndola cuando a 11.
*/

describe('MaxValue', () => {
  it('Should be a function', () => {
    expect(typeof MaxValue).toBe('function')
  })
  it('Should throw an error if no have an array for argument', () => {
    expect(() => MaxValue({})).toThrow(/array/)
    expect(() => MaxValue('Mario')).toThrow(/array/)
    expect(() => MaxValue(23)).toThrow(/array/)
    expect(() => MaxValue(true)).toThrow(/array/)
  })
  it('The array should have integer numbers', () => {
    expect(() => MaxValue([1, 2, 'qwe', 6])).toThrow(/integers numbers/)
    expect(() => MaxValue([1, 2, { age: 21 }, 6])).toThrow(/integers numbers/)
    expect(() => MaxValue([1, 2, true, 6])).toThrow(/integers numbers/)
    expect(() => MaxValue([1, 2, 2.5, 6])).toThrow(/integers numbers/)
  })
  it('Should return the maximum profit', () => {
    expect(MaxValue([4, 3, 2, 5, 11])).toBe(9)
    expect(MaxValue([14, 41, 3, 5, 1])).toBe(27)
  })
})
