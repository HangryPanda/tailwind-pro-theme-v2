import { Outlet } from 'react-router-dom'
import { Navigation } from './Navigation'
import { ThemeSwitcher } from './ThemeSwitcher'
import { Toaster } from '@/components/ui/sonner'

export function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <ThemeSwitcher />
      <Toaster />
      <main className="pt-20">
        <Outlet />
      </main>
    </div>
  )
}
