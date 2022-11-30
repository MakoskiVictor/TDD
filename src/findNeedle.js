export function findNeedle (haystack, needle) {
  if (!haystack || !needle) throw new Error('Shoul recive two params')
  if (typeof haystack !== 'string' || typeof needle !== 'string') throw new Error('The params should be strings')
  if (needle === haystack) return 0
  let word = ''
  let count = []
  for (let i = 0; i < haystack.length; i++) {
    for (let x = 0; x < needle.length; x++) {
      if (word === needle) {
        break
      }
      if (haystack[i] === needle[x]) {
        word = word + needle[x]
        count.push(i)
        i++
      } else {
        word = ''
        count = []
        x++
      }
    }
  }
  if (word === needle) return count[0]
  if (word !== needle) return -1
}
