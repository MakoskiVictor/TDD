import { expect, describe, it } from 'vitest'
import { contarOvejas } from '../src/contarOvejas.js'

describe('contarOvejas', () => {
  it('Should be a function', () => {
    expect(typeof contarOvejas).toBe('function')
  })
  it('Should throw an error if parameters are not an array', () => {
    expect(() => contarOvejas('array')).toThrow(/array/)
    expect(() => contarOvejas({})).toThrow(/array/)
    expect(() => contarOvejas(12)).toThrow(/array/)
    expect(() => contarOvejas(null)).toThrow(/array/)
    expect(() => contarOvejas(undefined)).toThrow(/array/)
  })
  it('Should return an array with the name if contains `a` AND `n` and colour is `rojo`', () => {
    expect(contarOvejas([{ name: 'Ki Na Ma', color: 'rojo' }])).toStrictEqual([{ name: 'Ki Na Ma', color: 'rojo' }])
    expect(contarOvejas([{ name: 'Navidad', color: 'rojo' }])).toStrictEqual([{ name: 'Navidad', color: 'rojo' }])
    expect(contarOvejas([{ name: 'Ki Na Ma', color: 'rojo' }, { name: 'Navidad', color: 'rojo' }])).toStrictEqual([{ name: 'Ki Na Ma', color: 'rojo' }, { name: 'Navidad', color: 'rojo' }])
    expect(contarOvejas([{ name: 'Euge', color: 'rojo' }, { name: 'Navidad', color: 'rojo' }, { name: 'Ki Na Ma', color: 'rojo' }])).toStrictEqual([{ name: 'Navidad', color: 'rojo' }, { name: 'Ki Na Ma', color: 'rojo' }])
  })
})
