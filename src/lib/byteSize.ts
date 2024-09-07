export const byteSize = (bytes: number) => {

  if (bytes / 1024 / 1024 / 1024 >= 1) {
    return (bytes / 1024 / 1024 / 1024).toFixed(2) + ' GB'
  }

  if (bytes / 1024 / 1024 >= 1) {
    return (bytes / 1024 / 1024).toFixed(1) + ' MB'
  }

  if (bytes / 1024 >= 1) {
    return (bytes / 1024).toFixed(0) + ' KB'
  }

  return bytes + ' b'

}