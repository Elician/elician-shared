export const decl = (f1: string, f2: string, f5: string, num?: number) => {
  if (!num) num = 0
  let n = Math.abs(num) % 100
  let n1 = n % 10
  let text = f5

  if (n > 10 && n < 20) text = f5
  if (n1 > 1 && n1 < 5) text = f2
  if (n1 === 1) text = f1

  let regexp = new RegExp('\\{}', 'gi')

  return text.replace(regexp, String(num))
}