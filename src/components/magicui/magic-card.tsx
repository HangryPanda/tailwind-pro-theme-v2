import { useMotionValue, useMotionTemplate, motion, type MotionStyle } from 'motion/react'
import { useRef, type ReactNode, type MouseEvent } from 'react'
import { cn } from '@/lib/utils'

interface MagicCardProps {
  children: ReactNode
  className?: string
  gradientSize?: number
  gradientColor?: string
  gradientOpacity?: number
}

export function MagicCard({
  children,
  className,
  gradientSize = 200,
  gradientColor = '#262626',
  gradientOpacity = 0.8,
}: MagicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(-gradientSize)
  const mouseY = useMotionValue(-gradientSize)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const { left, top } = cardRef.current.getBoundingClientRect()
      const x = e.clientX - left
      const y = e.clientY - top
      mouseX.set(x - gradientSize / 2)
      mouseY.set(y - gradientSize / 2)
    }
  }

  const background = useMotionTemplate`
    radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent ${gradientOpacity * 100}%)
  `

  const borderGradient = useMotionTemplate`
    radial-gradient(${gradientSize * 1.5}px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.8), transparent 80%)
  `

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(-gradientSize)
        mouseY.set(-gradientSize)
      }}
      className={cn(
        'group relative overflow-hidden rounded-xl border bg-card',
        className
      )}
    >
      {/* Border glow effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: borderGradient,
          maskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        } as MotionStyle}
      />

      {/* Main gradient effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background } as MotionStyle}
      />
      {children}
    </div>
  )
}
