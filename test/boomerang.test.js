import { describe, expect, it } from 'vitest'
import { boomerang } from '../src/boomerang.js'
/*
 * Enunciado: Crea una función que retorne el número total de bumeranes de un array de números
 * enteros e imprima cada uno de ellos.
 * - Un bumerán (búmeran, boomerang) es una secuencia formada por 3 números seguidos, en el que el
 *   primero y el último son iguales, y el segundo es diferente. Por ejemplo [2, 1, 2].
 * - En el array [2, 1, 2, 3, 3, 4, 2, 4] hay 2 bumeranes ([2, 1, 2] y [4, 2, 4]).
 */

describe('boomerang', () => {
  it('Should ba a function', () => {
    expect(typeof boomerang).toBe('function')
  })
  it('Should throw an error if the argument is not an array', () => {
    expect(() => boomerang({})).toThrow(/array/)
    expect(() => boomerang('asd')).toThrow(/array/)
    expect(() => boomerang(0)).toThrow(/array/)
    expect(() => boomerang(undefined)).toThrow(/array/)
    expect(() => boomerang(null)).toThrow(/array/)
  })
  it('Props should have at lest 3 characters', () => {
    expect(() => boomerang([1])).toThrow(/at least 3 elements/)
    expect(() => boomerang([1, 2])).toThrow(/at least 3 elements/)
    expect(() => boomerang([3])).toThrow(/at least 3 elements/)
  })
  it('The array must be composed by numbers', () => {
    expect(() => boomerang([1, 'mario', 4])).toThrow(/numbers/)
    expect(() => boomerang([1, null, 4])).toThrow(/numbers/)
    expect(() => boomerang([1, false, 4, 6])).toThrow(/numbers/)
  })
  it('Should return a number', () => {
    expect(boomerang([3, 4, 5])).toBe(0)
    expect(boomerang([6, 7, 8])).toBe(0)
  })
  it('Should return 1 if props have one boomerang', () => {
    expect(boomerang([1, 2, 1])).toBe(1)
    expect(boomerang([4, 2, 4])).toBe(1)
  })
  it('Should return a number equal to number of boomerangs', () => {
    expect(boomerang([2, 1, 2, 3, 3, 4, 2, 4])).toBe(2)
    expect(boomerang([2, 1, 2, 3, 3, 4, 2, 4, 5, 0, 5])).toBe(3)
  })
})
