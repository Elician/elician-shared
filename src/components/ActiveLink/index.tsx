'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LinkProps } from 'next/dist/client/link'
import { ReactNode } from 'react'
import { clsx } from 'clsx'

interface ActiveLinkProps extends LinkProps {
  className?: string,
  activeClassName?: string,
  end?: boolean,
  children?: ReactNode
}

export const ActiveLink = (props: ActiveLinkProps) => {

  const path = usePathname()

  const isActive = props.end ? path === props.href : path.startsWith(props.href.toString())

  return (
    <Link
      className={clsx(
        props.className,
        isActive && props.activeClassName
      )}
      href={props.href}
      prefetch={props.prefetch}
      scroll={props.scroll}
      as={props.as}
      locale={props.locale}
      onClick={props.onClick}
    >{props.children}</Link>
  )
}