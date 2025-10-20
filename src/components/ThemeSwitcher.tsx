import { useState } from 'react'
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
  { name: 'Vibrant', class: 't-vibrant', description: 'High energy colors', mood: 'stimulating' },
  { name: 'Energetic', class: 't-energetic', description: 'Bright & bold', mood: 'stimulating' },
  { name: 'Bold', class: 't-bold', description: 'Maximum impact', mood: 'stimulating' },
]

const allThemes = [...darkThemes, ...lightThemes]

export function ThemeSwitcher() {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0)

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
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-4 bg-card/95 backdrop-blur-sm p-5 rounded-xl border shadow-lg max-w-lg">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-foreground">
          Theme Switcher
        </div>
        <div className="text-xs text-muted-foreground">
          {isDark ? '🌙 Dark' : '☀️ Light'} • {currentTheme.mood}
        </div>
      </div>

      {/* Dark Themes */}
      <div className="space-y-2">
        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Dark Themes
        </div>
        <div className="grid grid-cols-3 gap-2">
          {darkThemes.map((theme, index) => (
            <Button
              key={theme.name}
              variant={currentThemeIndex === index ? "default" : "outline"}
              size="sm"
              onClick={() => switchTheme(index)}
              className="text-xs h-9 px-2"
              title={theme.description}
            >
              {theme.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Light Themes */}
      <div className="space-y-2">
        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Light Themes
        </div>
        <div className="grid grid-cols-3 gap-2">
          {lightThemes.map((theme, index) => {
            const globalIndex = darkThemes.length + index
            return (
              <Button
                key={theme.name}
                variant={currentThemeIndex === globalIndex ? "default" : "outline"}
                size="sm"
                onClick={() => switchTheme(globalIndex)}
                className="text-xs h-9 px-2"
                title={theme.description}
              >
                {theme.name}
              </Button>
            )
          })}
        </div>
      </div>

      <div className="text-xs text-muted-foreground border-t pt-3">
        <div className="font-medium text-foreground mb-1">{currentTheme.name}</div>
        {currentTheme.description}
      </div>
    </div>
  )
}