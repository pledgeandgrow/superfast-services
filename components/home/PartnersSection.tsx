'use client'
import { motion } from 'motion/react';
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export default function PartnersSection() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 border-y border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:flex-row gap-6 sm:gap-8">
          <div className="md:min-w-[200px] text-center md:text-right md:border-r md:border-gray-300 md:pr-8">
            <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Ils nous font confiance
            </p>
          </div>
          <div className="relative flex-1 py-4 sm:py-6">
            <InfiniteSlider
              speedOnHover={20}
              speed={40}
              gap={80}>
              <div className="flex items-center justify-center h-10 sm:h-12">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">EPI Group</div>
              </div>
              <div className="flex items-center justify-center h-10 sm:h-12">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors">Dubai Logistics</div>
              </div>
              <div className="flex items-center justify-center h-10 sm:h-12">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors">China Trade</div>
              </div>
              <div className="flex items-center justify-center h-10 sm:h-12">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors">Turkey Export</div>
              </div>
              <div className="flex items-center justify-center h-10 sm:h-12">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors">Africa Connect</div>
              </div>
              <div className="flex items-center justify-center h-10 sm:h-12">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors">Euro Partners</div>
              </div>
            </InfiniteSlider>

            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
