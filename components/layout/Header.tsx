'use client'
import React from 'react'
import Link from 'next/link'
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
        <div className={cn(
          'mx-auto max-w-7xl px-6 lg:px-12 transition-all duration-500',
          scrolled ? 'mt-2' : 'mt-4'
        )}>
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={cn(
              'relative flex flex-wrap items-center justify-between gap-6 rounded-2xl lg:rounded-3xl transition-all duration-500 px-6 lg:px-8',
              scrolled 
                ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 py-3 lg:py-4 border border-gray-200/50' 
                : 'bg-white/80 backdrop-blur-md py-4 lg:py-5 border border-white/20'
            )}>
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2 group">
                <Logo scrolled={scrolled} />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden rounded-lg hover:bg-gray-100 transition-colors">
                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-300 text-gray-800" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-300 text-gray-800" />
              </button>

              <div className="hidden lg:block">
                <ul className="flex gap-1">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 rounded-lg hover:bg-blue-50 group inline-block">
                        <span>{item.name}</span>
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-3/4 transition-all duration-300"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-2xl border border-gray-200 p-6 shadow-xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-4 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
              <div className="lg:hidden">
                <ul className="space-y-4">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        onClick={() => setMenuState(false)}
                        className="text-gray-700 hover:text-blue-600 font-medium block py-2 px-4 rounded-lg hover:bg-blue-50 transition-all duration-200 w-full text-left">
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-600/30">
                    <Link href="https://wa.me/+971545116447" target="_blank" rel="noopener noreferrer">
                      <span>WhatsAppez-Nous</span>
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:flex items-center gap-3">
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="border-gray-300 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200">
                  <Link href="/devis">
                    <span>Demander un Devis</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-200">
                  <Link href="https://wa.me/+971545116447" target="_blank" rel="noopener noreferrer">
                    <span>WhatsAppez-Nous</span>
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
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
          scrolled ? 'h-9' : 'h-10'
        )}
      />
    </div>
  )
}
