'use client'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export default function PartnersSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6">
            <p className="text-end !text-gray-800 text-sm text-muted-foreground">Nos partenaires de confiance</p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider
              speedOnHover={20}
              speed={40}
              gap={112}>
              <div className="flex items-center justify-center h-12">
                <div className="text-2xl font-bold text-gray-800">EPI Group</div>
              </div>
              <div className="flex items-center justify-center h-12">
                <div className="text-2xl font-bold text-gray-400">Dubai Logistics</div>
              </div>
              <div className="flex items-center justify-center h-12">
                <div className="text-2xl font-bold text-gray-400">China Trade</div>
              </div>
              <div className="flex items-center justify-center h-12">
                <div className="text-2xl font-bold text-gray-400">Turkey Export</div>
              </div>
              <div className="flex items-center justify-center h-12">
                <div className="text-2xl font-bold text-gray-400">Africa Connect</div>
              </div>
              <div className="flex items-center justify-center h-12">
                <div className="text-2xl font-bold text-gray-400">Euro Partners</div>
              </div>
            </InfiniteSlider>

            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
