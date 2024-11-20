import { ReactNode } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

interface ConvertKitLaunchButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  external?: boolean
}

export function ConvertKitLaunchButton({
  href,
  children,
  variant = 'primary',
  className,
  external = false,
}: ConvertKitLaunchButtonProps) {
  const baseStyles = "inline-block rounded-lg bg-green-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition-colors hover:bg-green-700"
  
  const variants = {
    primary: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
    secondary: 'bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-500',
    outline: 'border-2 border-green-600 text-green-600 hover:bg-green-50 focus:ring-green-500',
  }

  const styles = clsx(baseStyles, variants[variant], className)

  if (external) {
    return (
      <a 
        href={href}
        className={styles}
        target="_blank"
        rel="noopener noreferrer"
        data-commerce
      >
        {children}
        
      </a>
    )
  }

  return (
    <Link href={href} className={styles} data-commerce target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  )
}