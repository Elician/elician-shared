export const diff = <T>(array: T[], other: T[]) => {

  const arr1 = JSON.stringify(array)
  const arr2 = JSON.stringify(other)

  return arr1 === arr2
}