import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'outline2'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseClasses =
    'font-bold text-center rounded-full transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variantClasses = {
    primary:
      'w-full px-6 py-3 bg-white text-background shadow-md hover:bg-gray-300 focus:ring-white',
    secondary:
      'w-full px-6 py-3 bg-gray-500 text-white shadow-md hover:bg-gray-600 focus:ring-gray-500',
    outline:
      'w-full px-6 py-3 border-2 border-white text-white bg-background hover:bg-white hover:text-background focus:ring-white',
    outline2:
      'w-full h-11 px-4 py-2 border-2 border-orange-300 text-orange-300 shadow-md hover:bg-orange-300 hover:text-white focus:ring-orange-300',
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  return (
    <button className={classes} {...props}>
      <div className="-mt-1 flex justify-center">{children}</div>
    </button>
  )
}

export default Button
