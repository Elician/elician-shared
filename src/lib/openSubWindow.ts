export const openSubWindow = (request: string, width: number = 1400, height: number = 990, target: string = 'paySystem') => {
  const x = window.screen.width / 2 - width / 2
  const y = window.screen.height / 2 - height / 2
  const params = `
      scrollbars=no,
      resizable=no,
      status=no,
      location=no,
      toolbar=no,
      menubar=no,
      width=${width},
      height=${height},
      left=${x},
      top=${y}
    `

  window.open(request, target, params)
}