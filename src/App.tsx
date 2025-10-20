import { useState } from 'react'
import { motion } from 'motion/react'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Sparkles, Palette, Layers, Zap, Code, Star, Heart } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100
    }
  }
}

function App() {
  const [liked, setLiked] = useState(false)

  const features = [
    { icon: Palette, title: '8 Beautiful Themes', description: 'From calm to focus, each crafted for a specific mood', gradient: 'from-[var(--brand-blue)] to-[var(--brand-purple)]' },
    { icon: Layers, title: 'shadcn/ui Integration', description: 'Built on the best component library for React', gradient: 'from-[var(--brand-purple)] to-[var(--brand-pink)]' },
    { icon: Zap, title: 'Motion.dev Animations', description: 'Smooth, performant animations out of the box', gradient: 'from-[var(--brand-green)] to-[var(--brand-blue)]' },
    { icon: Code, title: 'Tailwind CSS v4', description: 'Latest version with oklch color space', gradient: 'from-[var(--brand-orange)] to-[var(--brand-red)]' },
  ]

  const brandColors = [
    { name: 'Blue', var: '--brand-blue', description: 'Primary accent' },
    { name: 'Purple', var: '--brand-purple', description: 'Highlight' },
    { name: 'Green', var: '--brand-green', description: 'Success' },
    { name: 'Pink', var: '--brand-pink', description: 'Creative' },
    { name: 'Orange', var: '--brand-orange', description: 'Warm' },
    { name: 'Red', var: '--brand-red', description: 'Alert' },
  ]

  const systemColors = [
    { name: 'Background', class: 'bg-background text-foreground border border-border' },
    { name: 'Card', class: 'bg-card text-card-foreground border border-border' },
    { name: 'Primary', class: 'bg-primary text-primary-foreground' },
    { name: 'Secondary', class: 'bg-secondary text-secondary-foreground' },
    { name: 'Muted', class: 'bg-muted text-muted-foreground' },
    { name: 'Accent', class: 'bg-accent text-accent-foreground' },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeSwitcher />

      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden px-6 pt-20 pb-16 sm:pt-32 sm:pb-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Ambient color orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: 'var(--brand-blue)' }} />
        <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15" style={{ background: 'var(--brand-purple)' }} />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ background: 'var(--brand-pink)' }} />

        <div className="mx-auto max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-8 border"
            style={{
              background: 'linear-gradient(90deg, var(--brand-blue) 0%, var(--brand-purple) 100%)',
              borderColor: 'var(--brand-blue)',
              color: 'white',
              boxShadow: '0 0 20px rgba(var(--brand-blue), 0.3)'
            }}
          >
            <Sparkles className="w-4 h-4" />
            ProTheme v2.0 - Now with 8 Themes
          </motion.div>

          <motion.h1
            className="text-5xl font-bold tracking-tight sm:text-7xl mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              background: 'linear-gradient(135deg, var(--brand-blue) 0%, var(--brand-purple) 50%, var(--brand-pink) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Professional Design System
          </motion.h1>

          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            A complete, production-ready design system built with Tailwind CSS v4, shadcn/ui, and motion.dev.
            Features 8 beautiful themes, 100+ components, and best-in-class accessibility.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="gap-2" style={{
                background: 'var(--brand-blue)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1), 0 0 20px var(--brand-blue)/20'
              }}>
                <Star className="w-4 h-4" />
                Get Started
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="gap-2 border-2" style={{
                borderColor: 'var(--brand-purple)',
                color: 'var(--brand-purple)'
              }}>
                <Code className="w-4 h-4" />
                View on GitHub
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Grid */}
      <motion.section
        className="px-6 py-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="mx-auto max-w-6xl">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to build stunning UIs
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Built with the latest web technologies and designed for modern applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const colors = [
                { main: '--brand-blue', glow: 'rgba(69, 169, 249, 0.15)' },
                { main: '--brand-purple', glow: 'rgba(176, 132, 235, 0.15)' },
                { main: '--brand-green', glow: 'rgba(25, 249, 216, 0.15)' },
                { main: '--brand-orange', glow: 'rgba(255, 184, 108, 0.15)' },
              ];
              const color = colors[index];

              return (
                <motion.div key={index} variants={itemVariants}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card
                      className="h-full overflow-hidden relative group border-2 transition-all duration-300"
                      style={{
                        borderColor: 'var(--border)',
                        boxShadow: `0 4px 20px rgba(0, 0, 0, 0.05)`
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = `var(${color.main})`;
                        e.currentTarget.style.boxShadow = `0 8px 30px ${color.glow}, 0 0 0 1px var(${color.main})`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border)';
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
                      }}
                    >
                      {/* Subtle gradient background on hover */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `radial-gradient(circle at top right, var(${color.main})/5, transparent 70%)`
                        }}
                      />
                      <CardHeader className="relative">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 relative"
                          style={{
                            background: `var(${color.main})/10`,
                            boxShadow: `0 0 20px var(${color.main})/20`
                          }}
                        >
                          <feature.icon className="w-6 h-6" style={{ color: `var(${color.main})` }} />
                        </div>
                        <CardTitle>{feature.title}</CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Color Palette Showcase */}
      <motion.section
        className="px-6 py-24 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Subtle background gradient */}
        <div className="absolute inset-0 opacity-5" style={{
          background: 'radial-gradient(circle at 20% 50%, var(--brand-blue), transparent 50%), radial-gradient(circle at 80% 50%, var(--brand-pink), transparent 50%)'
        }} />

        <div className="mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Dynamic Color System
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Six carefully curated brand colors that intelligently adapt across all 8 themes using oklch color space.
              Watch them transform as you switch themes.
            </p>
          </div>

          {/* Color palette cards with subtle borders */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 mb-16">
            {brandColors.map((color, index) => (
              <motion.div
                key={color.name}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="relative group cursor-pointer"
                >
                  {/* Glow effect on hover */}
                  <div
                    className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
                    style={{ background: `var(${color.var})` }}
                  />
                  <div
                    className="relative rounded-xl p-8 text-center border-2 transition-all duration-300"
                    style={{
                      backgroundColor: `var(${color.var})/5`,
                      borderColor: `var(${color.var})/20`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `var(${color.var})`;
                      e.currentTarget.style.backgroundColor = `var(${color.var})/10`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = `var(${color.var})/20`;
                      e.currentTarget.style.backgroundColor = `var(${color.var})/5`;
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-full mx-auto mb-3"
                      style={{
                        backgroundColor: `var(${color.var})`,
                        boxShadow: `0 4px 14px var(${color.var})/40`
                      }}
                    />
                    <div className="font-bold text-sm" style={{ color: `var(${color.var})` }}>
                      {color.name}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{color.description}</div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* System colors with gradient borders */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-2">System Palette</h3>
              <p className="text-sm text-muted-foreground">Semantic colors that maintain hierarchy across themes</p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {systemColors.map((color, index) => (
                <motion.div
                  key={color.name}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`${color.class} rounded-xl p-6 text-center transition-shadow hover:shadow-lg`}>
                    <div className="font-semibold text-sm">{color.name}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Component Showcase */}
      <motion.section
        className="px-6 py-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="mx-auto max-w-6xl">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Components in Action
            </h2>
            <p className="mt-4 text-muted-foreground">
              Interactive examples of our component library
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <motion.div variants={itemVariants}>
              <Card className="border-l-4" style={{ borderLeftColor: 'var(--brand-blue)' }}>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--brand-blue)' }} />
                    <CardTitle>Buttons & Actions</CardTitle>
                  </div>
                  <CardDescription>Multiple variants for every use case</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-3">
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline" className="border-2" style={{ borderColor: 'var(--brand-purple)', color: 'var(--brand-purple)' }}>
                    Outlined
                  </Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button size="sm">Small</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon" style={{ background: 'var(--brand-green)' }}>
                    <Star className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="border-l-4" style={{ borderLeftColor: 'var(--brand-purple)' }}>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--brand-purple)' }} />
                    <CardTitle>Badges & Labels</CardTitle>
                  </div>
                  <CardDescription>Semantic colors and variants</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-2" style={{ borderColor: 'var(--brand-blue)', color: 'var(--brand-blue)' }}>
                    New
                  </Badge>
                  <Badge variant="outline" className="border-2" style={{ borderColor: 'var(--brand-green)', color: 'var(--brand-green)' }}>
                    Active
                  </Badge>
                  <Badge variant="outline" className="border-2" style={{ borderColor: 'var(--brand-orange)', color: 'var(--brand-orange)' }}>
                    Pending
                  </Badge>
                  <Badge variant="outline" className="border-2" style={{ borderColor: 'var(--brand-red)', color: 'var(--brand-red)' }}>
                    Critical
                  </Badge>
                  <Badge variant="outline" className="border-2" style={{ borderColor: 'var(--brand-purple)', color: 'var(--brand-purple)' }}>
                    Pro
                  </Badge>
                  <Badge variant="secondary">Standard</Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-2">
              <Card
                className="relative overflow-hidden border-2 transition-all duration-300"
                style={{
                  borderColor: 'var(--border)',
                  background: `radial-gradient(circle at top left, var(--brand-blue)/3, transparent 50%), radial-gradient(circle at bottom right, var(--brand-pink)/3, transparent 50%)`
                }}
              >
                {/* Decorative gradient border on hover */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="absolute inset-0" style={{
                    background: 'linear-gradient(135deg, var(--brand-blue), var(--brand-purple), var(--brand-pink))',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude',
                    padding: '2px'
                  }} />
                </div>

                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--brand-blue)' }} />
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--brand-purple)' }} />
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--brand-pink)' }} />
                    </div>
                    <CardTitle>Interactive Elements</CardTitle>
                  </div>
                  <CardDescription>
                    Hover effects and micro-interactions powered by motion.dev
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This card demonstrates smooth animations, color transitions, and interactive feedback.
                    Try hovering over elements and switching themes to see the seamless color adaptations.
                  </p>
                </CardContent>
                <CardFooter className="gap-3">
                  <Button variant="outline" className="border-2" style={{ borderColor: 'var(--brand-blue)', color: 'var(--brand-blue)' }}>
                    Cancel
                  </Button>
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={() => setLiked(!liked)}
                      className="gap-2 transition-all duration-300"
                      style={{
                        background: liked ? 'var(--brand-pink)' : 'var(--brand-blue)',
                        boxShadow: liked ? '0 4px 20px var(--brand-pink)/30' : '0 4px 20px var(--brand-blue)/30'
                      }}
                    >
                      <motion.div
                        animate={{ scale: liked ? [1, 1.3, 1] : 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
                      </motion.div>
                      {liked ? 'Liked!' : 'Like'}
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="relative border-t px-6 py-12" style={{ borderTopColor: 'var(--border)' }}>
        {/* Subtle gradient accent line */}
        <div className="absolute top-0 left-0 right-0 h-0.5" style={{
          background: 'linear-gradient(90deg, transparent, var(--brand-blue), var(--brand-purple), var(--brand-pink), transparent)'
        }} />

        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--brand-blue)' }} />
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--brand-purple)' }} />
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--brand-green)' }} />
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--brand-pink)' }} />
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--brand-orange)' }} />
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--brand-red)' }} />
            </div>

            <p className="text-sm text-muted-foreground">
              Built with Tailwind CSS v4, React, shadcn/ui, and motion.dev
            </p>

            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="outline" className="border-2" style={{ borderColor: 'var(--brand-blue)', color: 'var(--brand-blue)' }}>
                Portfolio Ready
              </Badge>
              <Badge variant="outline" className="border-2" style={{ borderColor: 'var(--brand-purple)', color: 'var(--brand-purple)' }}>
                8 Themes
              </Badge>
              <Badge variant="outline" className="border-2" style={{ borderColor: 'var(--brand-green)', color: 'var(--brand-green)' }}>
                100+ Components
              </Badge>
              <Badge variant="outline" className="border-2" style={{ borderColor: 'var(--brand-orange)', color: 'var(--brand-orange)' }}>
                oklch Colors
              </Badge>
              <Badge variant="outline" className="border-2" style={{ borderColor: 'var(--brand-pink)', color: 'var(--brand-pink)' }}>
                Smooth Animations
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
