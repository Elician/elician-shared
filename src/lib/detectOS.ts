'use client'

export const detectOS = () => {
  const platform = window.navigator.platform.toLowerCase()

  if (platform.includes('mac')) return 'mac'
  if (platform.includes('win')) return 'win'
  if (/linux/.test(platform)) return 'lin'

  return 'Unknown'
}

export default detectOS