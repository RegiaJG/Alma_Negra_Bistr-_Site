import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-body font-medium tracking-widest uppercase transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:opacity-50',
          {
            'bg-gold text-base hover:bg-gold-light': variant === 'primary',
            'border border-gold text-gold hover:bg-gold hover:text-base': variant === 'outline',
            'bg-wine text-cream hover:bg-wine/80': variant === 'secondary',
            'text-cream hover:text-gold': variant === 'ghost',
          },
          {
            'px-4 py-2 text-xs': size === 'sm',
            'px-6 py-3 text-sm': size === 'md',
            'px-8 py-4 text-sm': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
