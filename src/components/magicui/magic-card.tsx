import { useMotionValue, useMotionTemplate, motion, type MotionStyle } from 'motion/react'
import { useRef, useState, type ReactNode, type MouseEvent } from 'react'
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
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const { left, top } = cardRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - left)
      mouseY.set(e.clientY - top)
    }
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  // Neutral spotlight for background - smooth gradient, no donut
  const spotlight = useMotionTemplate`
    radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 80%)
  `

  // Spotlight mask for border illumination - smooth falloff
  const borderMask = useMotionTemplate`
    radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, black, transparent 100%)
  `

  return (
    <div className={cn('relative overflow-hidden rounded-xl', className)}>
      {/* Dim static border - always visible */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative h-full w-full rounded-xl bg-card"
        style={{
          border: '1px solid transparent',
          backgroundImage: `
            linear-gradient(var(--card), var(--card)),
            linear-gradient(135deg,
              color-mix(in oklch, var(--brand-purple) 15%, transparent),
              color-mix(in oklch, var(--brand-blue) 15%, transparent) 50%,
              color-mix(in oklch, var(--brand-pink) 15%, transparent)
            )
          `,
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        }}
      >
        {/* Background spotlight - behind content */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-xl -z-10"
          animate={{
            opacity: isHovered ? gradientOpacity : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{ background: spotlight } as MotionStyle}
        />

        <div className="relative z-10">
          {children}
        </div>
      </div>

      {/* Bright border layer - revealed by cursor proximity */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl"
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{
          border: '1px solid transparent',
          backgroundImage: `
            linear-gradient(var(--card), var(--card)),
            linear-gradient(135deg,
              var(--brand-purple),
              var(--brand-blue) 50%,
              var(--brand-pink)
            )
          `,
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
          WebkitMaskImage: borderMask,
          maskImage: borderMask,
        } as MotionStyle}
      />
    </div>
  )
}
