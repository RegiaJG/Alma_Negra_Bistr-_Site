import { TextareaHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={id}
            className="text-xs font-medium tracking-widest uppercase text-cream/50"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          className={cn(
            'w-full bg-transparent border-b border-cream/20 py-3 px-0 text-cream placeholder:text-cream/25 focus:outline-none focus:border-gold transition-colors duration-300 font-body resize-none',
            className
          )}
          {...props}
        />
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export { Textarea }
