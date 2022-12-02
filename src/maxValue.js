export function MaxValue (values) {
  if (Array.isArray(values) === false) throw new Error('The param should be an array')
  if (values.some(e => Number.isInteger(e) === false)) throw new Error('The arrar should have only integers numbers')
  let maxValue = values[1] - values[0]
  for (let i = 0; i < values.length - 1; i++) {
    for (let x = i + 1; x < values.length; x++) {
      const potencial = values[x] - values[i]
      maxValue = potencial > maxValue ? potencial : maxValue
    }
  }
  return maxValue
}
