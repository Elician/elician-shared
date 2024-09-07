export const decision = (n: number) => {
  let i = 0
  if (n % 1 !== 0) {
    do {
      n = n * 10
      i++
    } while (n % 1 !== 0)
  }
  return i
}