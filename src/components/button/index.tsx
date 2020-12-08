import React from 'react'
import { Colors } from '../../definitions'

interface ButtonProps {
  color: Colors
  span: 2 | 3 | 4 | 5 | 6
  onClick: (event?: React.MouseEvent) => void
  className?: string
}

export const Button: React.FC<ButtonProps> = ({
  color,
  span,
  onClick,
  children,
  className,
}) => {
  const spanClass = (() => {
    if (span === 2) return 'col-span-2 sm:col-span-1'
    if (span === 3) return 'col-span-3'
    if (span === 4) return 'col-span-4'
    if (span === 5) return 'col-span-5'
    if (span === 6) return 'col-span-6 sm:col-span-7'
  })()

  const colorClasses = (() => {
    switch (color) {
      case Colors.purple:
        return 'text-white bg-purple-500 hover:bg-purple-700 focus:ring-purple-500'
      case Colors.pink:
        return 'text-white bg-pink-500 hover:bg-pink-700 focus:ring-pink-500'
      case Colors.white:
        return 'text-red-400 bg-white focus:ring-red-400'
      case Colors.red:
        return 'text-white bg-red-400 hover:bg-red-500 focus:ring-red-400'
    }
  })()

  return (
    <button
      type='button'
      className={`${spanClass} inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-lg font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 ${colorClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
