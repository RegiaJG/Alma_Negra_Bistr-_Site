import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'gold' | 'wine'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-medium tracking-widest uppercase',
        {
          'bg-base-light text-cream/60 border border-cream/10': variant === 'default',
          'bg-gold/10 text-gold border border-gold/30': variant === 'gold',
          'bg-wine/10 text-wine border border-wine/30': variant === 'wine',
        },
        className
      )}
    >
      {children}
    </span>
  )
}
