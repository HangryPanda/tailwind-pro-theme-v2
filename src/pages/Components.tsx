import { useState, useRef } from 'react'
import confetti from 'canvas-confetti'
import { motion } from 'motion/react'
import { ChevronRight, ChevronDown, Folder, File, Check, Loader2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ConfettiButton, Confetti, type ConfettiRef } from '@/components/magicui/confetti'
import { BorderBeam } from '@/components/magicui/border-beam'
import { MagicCard } from '@/components/magicui/magic-card'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'

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

// File Tree Component
interface TreeNode {
  name: string
  type: 'folder' | 'file'
  children?: TreeNode[]
}

const fileTree: TreeNode[] = [
  {
    name: 'src',
    type: 'folder',
    children: [
      {
        name: 'components',
        type: 'folder',
        children: [
          { name: 'Button.tsx', type: 'file' },
          { name: 'Card.tsx', type: 'file' },
          { name: 'Badge.tsx', type: 'file' },
        ]
      },
      {
        name: 'magicui',
        type: 'folder',
        children: [
          { name: 'confetti.tsx', type: 'file' },
          { name: 'border-beam.tsx', type: 'file' },
          { name: 'magic-card.tsx', type: 'file' },
        ]
      },
      { name: 'App.tsx', type: 'file' },
      { name: 'index.css', type: 'file' },
    ]
  },
  {
    name: 'public',
    type: 'folder',
    children: [
      { name: 'vite.svg', type: 'file' },
    ]
  },
]

function TreeItem({ node, level = 0 }: { node: TreeNode; level?: number }) {
  const [isOpen, setIsOpen] = useState(level === 0)

  return (
    <div>
      <div
        className="flex items-center gap-2 px-2 py-1.5 hover:bg-accent rounded-md cursor-pointer text-sm"
        style={{ paddingLeft: `${level * 12 + 8}px` }}
        onClick={() => node.type === 'folder' && setIsOpen(!isOpen)}
      >
        {node.type === 'folder' ? (
          <>
            {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            <Folder className="w-4 h-4 text-primary" />
          </>
        ) : (
          <>
            <div className="w-4" />
            <File className="w-4 h-4 text-muted-foreground" />
          </>
        )}
        <span>{node.name}</span>
      </div>
      {node.type === 'folder' && isOpen && node.children && (
        <div>
          {node.children.map((child, index) => (
            <TreeItem key={index} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

// Accordion Component using motion
function AccordionItem({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-accent/50 hover:bg-accent transition-colors text-left"
      >
        <span className="font-medium">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="p-4">
          {children}
        </div>
      </motion.div>
    </div>
  )
}

// Button State Demos
function ButtonStates() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    setSuccess(false)
    setError(false)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Random success/error
    if (Math.random() > 0.5) {
      setLoading(false)
      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
    } else {
      setLoading(false)
      setError(true)
      setTimeout(() => setError(false), 3000)
    }
  }

  return (
    <div className="flex gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button disabled>Disabled</Button>
      <Button onClick={handleClick} disabled={loading}>
        {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
        {success && <Check className="w-4 h-4 mr-2" />}
        {error && <AlertCircle className="w-4 h-4 mr-2" />}
        {loading ? 'Loading...' : success ? 'Success!' : error ? 'Error!' : 'Click Me'}
      </Button>
    </div>
  )
}

// Confetti Demos
function ConfettiDemos() {
  const confettiRef = useRef<ConfettiRef>(null)

  const fireStars = () => {
    const defaults = {
      spread: 360,
      ticks: 50,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      colors: ['var(--brand-orange)', 'var(--brand-pink)', 'var(--brand-purple)', 'var(--brand-blue)'],
    }

    const shoot = () => {
      confetti({
        ...defaults,
        particleCount: 40,
        scalar: 1.2,
        shapes: ['star'],
      })

      confetti({
        ...defaults,
        particleCount: 10,
        scalar: 0.75,
        shapes: ['circle'],
      })
    }

    setTimeout(shoot, 0)
    setTimeout(shoot, 100)
    setTimeout(shoot, 200)
  }

  const fireSideCannons = () => {
    const end = Date.now() + 3 * 1000
    const colors = ['var(--brand-purple)', 'var(--brand-pink)', 'var(--brand-orange)', 'var(--brand-blue)']

    const frame = () => {
      if (Date.now() > end) return

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      })
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      })

      requestAnimationFrame(frame)
    }

    frame()
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <Button onClick={fireStars}>Stars ⭐</Button>
        <Button onClick={fireSideCannons} variant="secondary">Side Cannons 🎊</Button>
        <ConfettiButton variant="outline">Fireworks 🎆</ConfettiButton>
      </div>

      <div
        className="relative h-[300px] rounded-lg border bg-accent/20 flex items-center justify-center cursor-pointer overflow-hidden"
        onMouseEnter={() => confettiRef.current?.fire({})}
      >
        <span className="text-4xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Hover for Confetti!
        </span>
        <Confetti
          ref={confettiRef}
          className="absolute top-0 left-0 z-0 size-full"
        />
      </div>
    </div>
  )
}

export function ComponentsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <ThemeSwitcher />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container max-w-7xl mx-auto px-4 py-16 space-y-16"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Advanced Component Library
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing motion animations, Magic UI effects, state management, and interactive components
          </p>
        </motion.div>

        {/* Magic UI Section */}
        <motion.section variants={itemVariants} className="space-y-6">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span className="text-4xl">✨</span>
            Magic UI Components
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Border Beam Card */}
            <Card className="relative overflow-hidden">
              <CardHeader>
                <CardTitle>Border Beam Effect</CardTitle>
                <CardDescription>Animated gradient border that flows around the card</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This card features an animated gradient beam that travels along its border, creating a dynamic and eye-catching effect.
                </p>
              </CardContent>
              <BorderBeam duration={12} size={150} />
            </Card>

            {/* Magic Card */}
            <MagicCard gradientColor="var(--brand-purple)" gradientOpacity={0.3}>
              <CardHeader>
                <CardTitle>Magic Card</CardTitle>
                <CardDescription>Interactive gradient spotlight effect</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Hover over this card to see a beautiful gradient spotlight that follows your cursor, adding depth and interactivity.
                </p>
              </CardContent>
            </MagicCard>

            {/* Magic Card Login Form */}
            <MagicCard className="md:col-span-2">
              <CardHeader className="border-b">
                <CardTitle>Login Form with Magic Card</CardTitle>
                <CardDescription>Experience the interactive gradient effect on a functional form</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="name@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="••••••••" />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="border-t pt-6">
                <Button className="w-full">Sign In</Button>
              </CardFooter>
            </MagicCard>
          </div>
        </motion.section>

        {/* Confetti Section */}
        <motion.section variants={itemVariants} className="space-y-6">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span className="text-4xl">🎉</span>
            Confetti Effects
          </h2>

          <Card>
            <CardHeader>
              <CardTitle>Canvas Confetti</CardTitle>
              <CardDescription>Multiple confetti animations and triggers</CardDescription>
            </CardHeader>
            <CardContent>
              <ConfettiDemos />
            </CardContent>
          </Card>
        </motion.section>

        {/* Buttons & States */}
        <motion.section variants={itemVariants} className="space-y-6">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span className="text-4xl">🔘</span>
            Button States & Variants
          </h2>

          <Card>
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
              <CardDescription>All available button styles and states</CardDescription>
            </CardHeader>
            <CardContent>
              <ButtonStates />
            </CardContent>
          </Card>
        </motion.section>

        {/* Accordions */}
        <motion.section variants={itemVariants} className="space-y-6">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span className="text-4xl">📋</span>
            Accordions with Motion
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <AccordionItem title="What is Tailwind CSS?" defaultOpen>
                <p className="text-sm text-muted-foreground">
                  Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML.
                </p>
              </AccordionItem>

              <AccordionItem title="What is Motion?">
                <p className="text-sm text-muted-foreground">
                  Motion is a production-ready animation and gesture library for React, providing smooth and performant animations with a simple API.
                </p>
              </AccordionItem>

              <AccordionItem title="What is shadcn/ui?">
                <p className="text-sm text-muted-foreground">
                  shadcn/ui is a collection of re-usable components built with Radix UI and Tailwind CSS that you can copy and paste into your apps.
                </p>
              </AccordionItem>
            </div>

            {/* Nested Accordion in Card */}
            <Card>
              <CardHeader>
                <CardTitle>Nested Accordions</CardTitle>
                <CardDescription>Accordions within a card component</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <AccordionItem title="Features" defaultOpen>
                  <div className="space-y-2">
                    <Badge>17 Themes</Badge>
                    <Badge variant="secondary">Motion Animations</Badge>
                    <Badge variant="outline">Magic UI</Badge>
                  </div>
                </AccordionItem>

                <AccordionItem title="Tech Stack">
                  <p className="text-sm text-muted-foreground">
                    Vite + React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui + motion.dev
                  </p>
                </AccordionItem>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Sidebar Navigation */}
        <motion.section variants={itemVariants} className="space-y-6">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span className="text-4xl">📁</span>
            File Tree Navigation
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle className="text-base">Project Files</CardTitle>
                <CardDescription className="text-xs">Expandable file tree structure</CardDescription>
              </CardHeader>
              <CardContent className="p-2">
                {fileTree.map((node, index) => (
                  <TreeItem key={index} node={node} />
                ))}
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>File Preview</CardTitle>
                <CardDescription>Click on a file in the tree to preview its contents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-accent/20 rounded-lg p-4 font-mono text-sm">
                  <div className="text-muted-foreground">
                    // Select a file from the tree to view its contents
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Form Example */}
        <motion.section variants={itemVariants} className="space-y-6">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span className="text-4xl">📝</span>
            Advanced Form
          </h2>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
              <CardDescription>Form with field groups and validation states</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email-form">Email</Label>
                <Input id="email-form" type="email" placeholder="john.doe@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your message here..."
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Submit</Button>
            </CardFooter>
          </Card>
        </motion.section>
      </motion.div>
    </div>
  )
}
