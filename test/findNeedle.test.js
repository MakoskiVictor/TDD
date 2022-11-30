import { describe, expect, it } from 'vitest'
import { findNeedle } from '../src/findNeedle'
/*
Introducción
Encontrar el indice de la primera aparición de un string (needle) dentro de otro (haystack).

Es decir, el objetivo del ejercicio es determinar si el primer string, needle, esta dentro del segundo, haystack,
y en dicho caso, devolver el indice en el que esto ocurre.

Ejemplos
Lo encuentra
needle: redux
haystack: react-redux
output: 6

No lo encuentra
needle: puntual
haystack: pinky
output: -1

En este caso, como el needle no se encuentra en el haystack el valor de salida es -1.

IMPORTANTE
Para la resolución de este ejercicio no se puede utilizar la función preexistente: indexOf( )
*/

describe('findNeedle', () => {
  // ESTE TEST PASO A SER INNECESARIO
  /* it('Should be a function', () => {
    expect(typeof findNeedle).toBe('function')
  }) */
  it('Should recive two params', () => {
    expect(() => findNeedle('asdf')).toThrow(/two params/)
  })
  it('The params should be a string', () => {
    expect(() => findNeedle('marlo', 21)).toThrow(/should be strings/)
    expect(() => findNeedle(['name'], 'Marinete')).toThrow(/should be strings/)
    expect(() => findNeedle({ name: 'Navajo' }, 'Motorola')).toThrow(/should be strings/)
    expect(() => findNeedle('asdf', true)).toThrow(/should be strings/)
  })
  it('Should return -1 if does not have match', () => {
    expect(findNeedle('marlo', 'botan')).toBe(-1)
    expect(findNeedle('juanjo', 'javascript')).toBe(-1)
    expect(findNeedle('typescript', 'botan')).toBe(-1)
  })
  it('Should return 0 if the needle match with the haystack', () => {
    expect(findNeedle('react', 'react')).toBe(0)
  })
  // ESTE TEST PASO A SER INNECESARIO
  /* it('Should return 1 if the needle match with the haystack', () => {
    expect(findNeedle('react-redux', 'redux')).toBe(1)
    expect(findNeedle('typescript', 'script')).toBe(1)
    expect(findNeedle('intersection', 'inter')).toBe(1)
    expect(findNeedle('alreact', 'react')).toBe(1)
  }) */
  it('Should return the number of index if the entire needle it is in the haystack', () => {
    expect(findNeedle('react-redux', 'redux')).toBe(6)
    expect(findNeedle('typescript', 'script')).toBe(4)
    expect(findNeedle('intersection', 'inter')).toBe(0)
    expect(findNeedle('alreact', 'react')).toBe(2)
  })
})
