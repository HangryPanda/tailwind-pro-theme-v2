import { useState, useRef } from 'react'
import confetti from 'canvas-confetti'
import { motion } from 'motion/react'
import { toast } from 'sonner'
import { ChevronRight, ChevronDown, Folder, File, Check, Loader2, AlertCircle, Info, Bell, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ConfettiButton, Confetti, type ConfettiRef } from '@/components/magicui/confetti'
import { BorderBeam } from '@/components/magicui/border-beam'
import { MagicCard } from '@/components/magicui/magic-card'
import { AccordionItem } from '@/components/ui/accordion'

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

// Toggle Badge Component
function ToggleBadge({
  text1,
  text2,
  color1,
  color2,
  hoverColor1,
  hoverColor2,
  ringColor,
  textColor
}: {
  text1: string
  text2: string
  color1: string
  color2: string
  hoverColor1: string
  hoverColor2: string
  ringColor: string
  textColor: string
}) {
  const [isToggled, setIsToggled] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [hasLeftAfterClick, setHasLeftAfterClick] = useState(true)

  const handleClick = () => {
    setIsAnimating(true)
    setHasLeftAfterClick(false)
    setIsToggled(!isToggled)
    setTimeout(() => {
      setIsAnimating(false)
    }, 300)
  }

  const handleMouseLeave = () => {
    setHasLeftAfterClick(true)
  }

  const canHover = !isAnimating && hasLeftAfterClick

  return (
    <div className="relative" onMouseLeave={handleMouseLeave}>
      {isAnimating && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 1, 0], scale: [0.8, 1.1, 1] }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`absolute inset-0 rounded-full ${ringColor} ring-2 ring-offset-2 pointer-events-none`}
        />
      )}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className={`cursor-pointer ${canHover ? 'group' : ''} relative ${isToggled ? color2 : color1} ${canHover ? (isToggled ? hoverColor1 : hoverColor2) : ''} ${textColor} font-semibold text-xs px-3 py-1.5 rounded-full transition-all duration-200 ease-in-out shadow hover:shadow-md`}
      >
        <div className="relative flex items-center justify-center gap-1.5">
          <span className="relative inline-block overflow-hidden h-4">
            {/* text1: starts at center in State 1, moves to above in State 2 */}
            <span className={`block transition-transform duration-300 ${isToggled ? '-translate-y-full' : 'translate-y-0'} ${canHover ? (isToggled ? 'group-hover:translate-y-0' : 'group-hover:-translate-y-full') : ''}`}>
              {text1}
            </span>
            {/* text2: starts below in State 1, moves to center in State 2 */}
            <span className={`absolute inset-0 transition-transform duration-300 ${isToggled ? 'translate-y-0' : 'translate-y-full'} ${canHover ? (isToggled ? 'group-hover:translate-y-full' : 'group-hover:translate-y-0') : ''}`}>
              {text2}
            </span>
          </span>

          {/* Icon: always at 0° in base states, rotates on hover */}
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-200 ${canHover ? (isToggled ? 'group-hover:-rotate-45' : 'group-hover:rotate-45') : ''}`}
            viewBox="0 0 24 24"
          >
            <circle fill="currentColor" r="11" cy="12" cx="12"></circle>
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              stroke="white"
              d="M7.5 16.5L16.5 7.5M16.5 7.5H10.5M16.5 7.5V13.5"
            ></path>
          </svg>
        </div>
      </motion.button>
    </div>
  )
}

export default function ComponentsPage() {
  return (
    <div className="pb-20">
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
              <BorderBeam size={250} duration={12} delay={9} />
            </Card>

            {/* Magic Card */}
            <MagicCard
              gradientColor="#262626"
              gradientOpacity={0.8}
              gradientSize={200}
            >
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
            <MagicCard
              className="md:col-span-2"
              gradientColor="#262626"
              gradientOpacity={0.8}
            >
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

          <Card>
            <CardHeader>
              <CardTitle>Animated Badges</CardTitle>
              <CardDescription>Interactive badges with text flip and icon animations</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer group relative bg-emerald-400 hover:bg-purple-400 text-black font-semibold text-xs px-3 py-1.5 rounded-full transition-all duration-200 ease-in-out shadow hover:shadow-md"
              >
                <div className="relative flex items-center justify-center gap-1.5">
                  <span className="relative inline-block overflow-hidden h-4">
                    <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                      Premium
                    </span>
                    <span className="absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                      Included
                    </span>
                  </span>

                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-45"
                    viewBox="0 0 24 24"
                  >
                    <circle fill="currentColor" r="11" cy="12" cx="12"></circle>
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      stroke="white"
                      d="M7.5 16.5L16.5 7.5M16.5 7.5H10.5M16.5 7.5V13.5"
                    ></path>
                  </svg>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer group relative bg-blue-400 hover:bg-pink-400 text-white font-semibold text-xs px-3 py-1.5 rounded-full transition-all duration-200 ease-in-out shadow hover:shadow-md"
              >
                <div className="relative flex items-center justify-center gap-1.5">
                  <span className="relative inline-block overflow-hidden h-4">
                    <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                      Pro
                    </span>
                    <span className="absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                      Active
                    </span>
                  </span>

                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-45"
                    viewBox="0 0 24 24"
                  >
                    <circle fill="currentColor" r="11" cy="12" cx="12"></circle>
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      d="M7.5 16.5L16.5 7.5M16.5 7.5H10.5M16.5 7.5V13.5"
                    ></path>
                  </svg>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer group relative bg-orange-400 hover:bg-cyan-400 text-black font-semibold text-xs px-3 py-1.5 rounded-full transition-all duration-200 ease-in-out shadow hover:shadow-md"
              >
                <div className="relative flex items-center justify-center gap-1.5">
                  <span className="relative inline-block overflow-hidden h-4">
                    <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                      New
                    </span>
                    <span className="absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                      Try It
                    </span>
                  </span>

                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-45"
                    viewBox="0 0 24 24"
                  >
                    <circle fill="currentColor" r="11" cy="12" cx="12"></circle>
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      stroke="white"
                      d="M7.5 16.5L16.5 7.5M16.5 7.5H10.5M16.5 7.5V13.5"
                    ></path>
                  </svg>
                </div>
              </motion.button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Toggle Badges</CardTitle>
              <CardDescription>Click to toggle between states</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <ToggleBadge
                text1="Premium"
                text2="Included"
                color1="bg-emerald-400"
                color2="bg-purple-400"
                hoverColor1="hover:bg-emerald-400"
                hoverColor2="hover:bg-purple-400"
                ringColor="ring-purple-400"
                textColor="text-black"
              />
              <ToggleBadge
                text1="Pro"
                text2="Active"
                color1="bg-blue-400"
                color2="bg-pink-400"
                hoverColor1="hover:bg-blue-400"
                hoverColor2="hover:bg-pink-400"
                ringColor="ring-pink-400"
                textColor="text-white"
              />
              <ToggleBadge
                text1="New"
                text2="Try It"
                color1="bg-orange-400"
                color2="bg-cyan-400"
                hoverColor1="hover:bg-orange-400"
                hoverColor2="hover:bg-cyan-400"
                ringColor="ring-cyan-400"
                textColor="text-black"
              />
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
                <CardDescription>Accordions nested inside other accordions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <AccordionItem title="Project Information" defaultOpen>
                  <div className="space-y-3 pt-2">
                    <p className="text-sm text-muted-foreground mb-3">
                      Explore the details of this project by expanding the sections below.
                    </p>

                    <AccordionItem title="Features" defaultOpen>
                      <div className="space-y-2">
                        <Badge>8 Themes</Badge>
                        <Badge variant="secondary">Motion Animations</Badge>
                        <Badge variant="outline">Magic UI</Badge>
                      </div>
                    </AccordionItem>

                    <AccordionItem title="Tech Stack">
                      <p className="text-sm text-muted-foreground">
                        Vite + React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui + motion.dev
                      </p>
                    </AccordionItem>

                    <AccordionItem title="Components">
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">100+ production-ready components</p>
                      </div>
                    </AccordionItem>
                  </div>
                </AccordionItem>

                <AccordionItem title="Documentation">
                  <p className="text-sm text-muted-foreground">
                    Complete documentation with examples and best practices for all components.
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

        {/* Tooltips & Toasts */}
        <motion.section variants={itemVariants} className="space-y-6">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span className="text-4xl">💬</span>
            Tooltips & Toast Notifications
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Tooltips */}
            <Card>
              <CardHeader>
                <CardTitle>Tooltips</CardTitle>
                <CardDescription>Hover over elements to see helpful tooltips</CardDescription>
              </CardHeader>
              <CardContent>
                <TooltipProvider>
                  <div className="flex flex-wrap gap-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">
                          <Info className="w-4 h-4 mr-2" />
                          Hover me
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>This is a helpful tooltip!</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="secondary">
                          <Bell className="w-4 h-4 mr-2" />
                          Notifications
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>You have 3 new notifications</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="destructive" size="icon">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Delete item</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Badge variant="outline" className="cursor-help">Premium Feature</Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Upgrade to Pro to unlock this feature</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </TooltipProvider>
              </CardContent>
            </Card>

            {/* Toast Notifications */}
            <Card>
              <CardHeader>
                <CardTitle>Toast Notifications</CardTitle>
                <CardDescription>Click buttons to trigger toast notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="default"
                    onClick={() => toast.success('Success!', {
                      description: 'Your changes have been saved successfully.'
                    })}
                  >
                    Success Toast
                  </Button>

                  <Button
                    variant="destructive"
                    onClick={() => toast.error('Error!', {
                      description: 'Something went wrong. Please try again.'
                    })}
                  >
                    Error Toast
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => toast.info('Info', {
                      description: 'This is an informational message.'
                    })}
                  >
                    Info Toast
                  </Button>

                  <Button
                    variant="secondary"
                    onClick={() => toast.warning('Warning!', {
                      description: 'Please review your input before proceeding.'
                    })}
                  >
                    Warning Toast
                  </Button>

                  <Button
                    onClick={() => toast('Custom Toast', {
                      description: 'This toast has a custom action button.',
                      action: {
                        label: 'Undo',
                        onClick: () => toast.success('Undone!')
                      }
                    })}
                  >
                    With Action
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => {
                      const promise = () => new Promise((resolve) => setTimeout(resolve, 2000))
                      toast.promise(promise(), {
                        loading: 'Loading...',
                        success: 'Data loaded successfully!',
                        error: 'Failed to load data'
                      })
                    }}
                  >
                    Promise Toast
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}
