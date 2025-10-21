import { forwardRef, useImperativeHandle, useRef, type ReactNode } from 'react'
import confetti from 'canvas-confetti'
import { Button, type ButtonProps } from '@/components/ui/button'

export interface ConfettiRef {
  fire: (options?: confetti.Options) => void
}

interface ConfettiProps {
  className?: string
  onMouseEnter?: () => void
}

export const Confetti = forwardRef<ConfettiRef, ConfettiProps>(
  ({ className, onMouseEnter }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const confettiInstance = useRef<confetti.CreateTypes | null>(null)

    useImperativeHandle(ref, () => ({
      fire: (options = {}) => {
        if (confettiInstance.current) {
          confettiInstance.current(options)
        } else if (canvasRef.current) {
          confettiInstance.current = confetti.create(canvasRef.current, {
            resize: true,
            useWorker: true,
          })
          confettiInstance.current(options)
        }
      },
    }))

    return (
      <canvas
        ref={canvasRef}
        className={className}
        onMouseEnter={onMouseEnter}
      />
    )
  }
)

Confetti.displayName = 'Confetti'

interface ConfettiButtonProps extends ButtonProps {
  children: ReactNode
}

export function ConfettiButton({ children, ...props }: ConfettiButtonProps) {
  const handleClick = () => {
    const duration = 5 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    }, 250)
  }

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  )
}
