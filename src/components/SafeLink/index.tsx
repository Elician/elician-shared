'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export const SafeLink = (propsDefault: any) => {

  const [ props, setProps ] = useState<any>(propsDefault)
  const searchPrams = useSearchParams()

  useEffect(() => {
    setProps({
      ...props,
      href: props.href + '?' + searchPrams.toString()
    })
  }, [])

  return (
    <Link {...props} />
  )
}