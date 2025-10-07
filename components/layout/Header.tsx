'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronRight } from 'lucide-react'
import { useScroll, motion } from 'motion/react'

const menuItems = [
  { name: 'Accueil', href: '/' },
  { name: 'À Propos', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [menuState, setMenuState] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const { scrollYProgress } = useScroll()
  const pathname = usePathname()

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setScrolled(latest > 0.01)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <header>
      <nav
        data-state={menuState && 'active'}
        className="group fixed z-50 w-full">
        
        {/* Mobile Header */}
        <div className="lg:hidden w-full" data-state={menuState && 'active'}>
          <div className="w-full px-2 mt-2 max-w-full overflow-hidden">
            <motion.div
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className={cn(
                'relative flex items-center justify-between rounded-lg transition-all duration-500 px-2 w-full',
                scrolled 
                  ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 py-1.5 border border-gray-200/50' 
                  : 'bg-white/80 backdrop-blur-md py-2 border border-white/20'
              )}>
              {/* Logo */}
              <Link
                href="/"
                aria-label="home"
                className="flex items-center flex-shrink-0">
                <img 
                  src="/logo.webp" 
                  alt="Superfast Services Logo" 
                  className={cn(
                    'w-auto transition-all duration-300',
                    scrolled ? 'h-6' : 'h-7'
                  )}
                />
              </Link>

              {/* Hamburger Menu */}
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 p-1.5 cursor-pointer rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0 ml-auto">
                <Menu className={cn(
                  "m-auto size-5 duration-300 text-gray-800 transition-all",
                  menuState ? "rotate-180 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
                )} />
                <X className={cn(
                  "absolute inset-0 m-auto size-5 duration-300 text-gray-800 transition-all",
                  menuState ? "rotate-0 scale-100 opacity-100" : "-rotate-180 scale-0 opacity-0"
                )} />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:block">
          <div className={cn(
            'mx-auto max-w-7xl px-6 lg:px-12 transition-all duration-500',
            scrolled ? 'mt-2' : 'mt-4'
          )}>
            <motion.div
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className={cn(
                'relative flex items-center justify-between rounded-2xl lg:rounded-3xl transition-all duration-500 px-6 lg:px-8',
                scrolled 
                  ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 py-3 lg:py-4 border border-gray-200/50' 
                  : 'bg-white/80 backdrop-blur-md py-4 lg:py-5 border border-white/20'
              )}>
              {/* Logo */}
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2 group">
                <Logo scrolled={scrolled} />
              </Link>

              {/* Desktop Navigation */}
              <div>
                <ul className="flex gap-1">
                  {menuItems.map((item, index) => {
                    const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                    return (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className={cn(
                            "relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg inline-block",
                            isActive 
                              ? "text-blue-600 bg-blue-50" 
                              : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                          )}>
                          <span>{item.name}</span>
                          <span className={cn(
                            "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-blue-600 transition-all duration-300",
                            isActive ? "w-3/4" : "w-0"
                          )}></span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* Desktop CTA Buttons */}
              <div className="flex items-center gap-3">
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="border-gray-300 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm px-4">
                  <Link href="/devis">
                    <span>Demander un Devis</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-200 text-sm px-4">
                  <Link href="https://wa.me/+971545116447" target="_blank" rel="noopener noreferrer">
                    <span>WhatsAppez-Nous</span>
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className="lg:hidden">
          <div className={cn(
            "bg-white mb-4 rounded-lg border border-gray-200 mx-2 shadow-xl transition-all duration-300",
            menuState ? "block" : "hidden"
          )}>
            <div className="p-3">
                <ul className="space-y-3 sm:space-y-4">
                  {menuItems.map((item, index) => {
                    const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                    return (
                      <li key={index}>
                        <Link
                          href={item.href}
                          onClick={() => setMenuState(false)}
                          className={cn(
                            "font-medium block py-2 px-3 sm:px-4 rounded-lg transition-all duration-200 w-full text-left text-sm sm:text-base",
                            isActive 
                              ? "text-blue-600 bg-blue-50" 
                              : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                          )}>
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-600/30 text-sm sm:text-base">
                    <Link href="https://wa.me/+971545116447" target="_blank" rel="noopener noreferrer">
                      <span>WhatsAppez-Nous</span>
                      <ChevronRight className="ml-2 w-3.5 sm:w-4 h-3.5 sm:h-4" />
                    </Link>
                  </Button>
                </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
const Logo = ({ className, scrolled }: { className?: string; scrolled?: boolean }) => {
  return (
    <div className={cn('flex items-center gap-2 transition-all duration-300', className)}>
      <img 
        src="/logo.webp" 
        alt="Superfast Services Logo" 
        className={cn(
          'w-auto transition-all duration-300',
          scrolled ? 'h-7 sm:h-8 md:h-9' : 'h-8 sm:h-9 md:h-10'
        )} />
    </div>
  )
}
