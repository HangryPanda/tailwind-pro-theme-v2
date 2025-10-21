import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Palette, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const darkThemes = [
  { name: 'Default Dark', class: '', description: 'Professional dark theme', mood: 'neutral' },
  { name: 'Dark', class: 't-dark', description: 'Deep contrast', mood: 'neutral' },
  { name: 'Calm', class: 't-calm', description: 'Soft blues & greens', mood: 'calming' },
  { name: 'Zen', class: 't-zen', description: 'Earth tones & sage', mood: 'calming' },
  { name: 'Focus', class: 't-focus', description: 'Minimal distractions', mood: 'calming' },
  { name: 'Warm', class: 't-warm', description: 'Cozy amber tones', mood: 'calming' },
  { name: 'Nord', class: 't-nord', description: 'Arctic color palette', mood: 'calming' },
  { name: 'Vibrant Dark', class: 't-vibrant-dark', description: 'High saturation colors', mood: 'stimulating' },
  { name: 'Energetic Dark', class: 't-energetic-dark', description: 'Neon accents', mood: 'stimulating' },
  { name: 'Bold Dark', class: 't-bold-dark', description: 'Maximum contrast', mood: 'stimulating' },
]

const lightThemes = [
  { name: 'Light', class: 't-light', description: 'Clean and bright', mood: 'neutral' },
  { name: 'Calm Light', class: 't-calm-light', description: 'Soft sky & gentle blue', mood: 'calming' },
  { name: 'Zen Light', class: 't-zen-light', description: 'Warm earth & beige', mood: 'calming' },
  { name: 'Serene', class: 't-serene', description: 'Peaceful lavender', mood: 'calming' },
  { name: 'Energetic', class: 't-vibrant', description: 'Cool high-energy tones', mood: 'stimulating' },
  { name: 'Vibrant', class: 't-energetic', description: 'Warm bright colors', mood: 'stimulating' },
  { name: 'Bold', class: 't-bold', description: 'Maximum impact', mood: 'stimulating' },
]

const allThemes = [...darkThemes, ...lightThemes]

export function ThemeSwitcher() {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const switchTheme = (index: number) => {
    setCurrentThemeIndex(index)
    const theme = allThemes[index]

    // Remove all theme classes
    allThemes.forEach(t => {
      if (t.class) document.documentElement.classList.remove(t.class)
    })

    // Add new theme class if not default
    if (theme.class) {
      document.documentElement.classList.add(theme.class)
    }
  }

  const currentTheme = allThemes[currentThemeIndex]
  const isDark = currentThemeIndex < darkThemes.length

  return (
    <>
      {/* Toggle Button - Ultra Compact */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-6 z-50 p-2 rounded-lg border shadow-md bg-card/95 backdrop-blur-sm transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title={`Theme: ${currentTheme.name}`}
      >
        <Palette className="w-4 h-4" style={{ color: 'var(--brand-purple)' }} />
      </motion.button>

      {/* Theme Switcher Panel - Ultra Compact */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="fixed top-16 right-6 z-50 w-52 bg-card/95 backdrop-blur-sm p-3 rounded-lg border shadow-xl"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <span className="text-xs">{isDark ? '🌙' : '☀️'}</span>
                <div className="text-xs font-semibold text-foreground">Themes</div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-0.5 hover:bg-accent rounded transition-colors"
                title="Close"
              >
                <X className="w-3 h-3" />
              </button>
            </div>

            {/* Dark Themes */}
            <div className="mb-2">
              <div className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1">
                Dark
              </div>
              <div className="grid grid-cols-2 gap-1">
                {darkThemes.map((theme, index) => (
                  <button
                    key={theme.name}
                    onClick={() => switchTheme(index)}
                    className={`text-[10px] px-2 py-1 rounded transition-all ${
                      currentThemeIndex === index
                        ? 'bg-primary text-primary-foreground font-medium'
                        : 'bg-secondary/50 hover:bg-secondary text-secondary-foreground'
                    }`}
                    title={theme.description}
                  >
                    {theme.name.replace(' Dark', '')}
                  </button>
                ))}
              </div>
            </div>

            {/* Light Themes */}
            <div>
              <div className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1">
                Light
              </div>
              <div className="grid grid-cols-2 gap-1">
                {lightThemes.map((theme, index) => {
                  const globalIndex = darkThemes.length + index
                  return (
                    <button
                      key={theme.name}
                      onClick={() => switchTheme(globalIndex)}
                      className={`text-[10px] px-2 py-1 rounded transition-all ${
                        currentThemeIndex === globalIndex
                          ? 'bg-primary text-primary-foreground font-medium'
                          : 'bg-secondary/50 hover:bg-secondary text-secondary-foreground'
                      }`}
                      title={theme.description}
                    >
                      {theme.name.replace(' Light', '')}
                    </button>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}