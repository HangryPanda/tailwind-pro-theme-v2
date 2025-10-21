import { Link, useLocation } from 'react-router-dom'
import { motion } from 'motion/react'
import { Home, Layers } from 'lucide-react'

export function Navigation() {
  const location = useLocation()

  const links = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/components', label: 'Components', icon: Layers },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-lg" style={{ borderColor: 'var(--border)' }}>
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--brand-blue)' }} />
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--brand-purple)' }} />
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--brand-pink)' }} />
            </div>
            <span className="font-bold text-lg">ProTheme</span>
          </div>

          <div className="flex items-center gap-1">
            {links.map((link) => {
              const Icon = link.icon
              const isActive = location.pathname === link.path

              return (
                <Link key={link.path} to={link.path}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors"
                    style={{
                      color: isActive ? 'var(--brand-blue)' : 'var(--foreground)',
                      backgroundColor: isActive ? 'var(--brand-blue)/10' : 'transparent',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'var(--accent)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'transparent'
                      }
                    }}
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 rounded-lg"
                        style={{
                          border: '2px solid var(--brand-blue)',
                          backgroundColor: 'var(--brand-blue)/5',
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
