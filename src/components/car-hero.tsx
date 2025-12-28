import { motion } from 'framer-motion'

import type { CarData } from '../types/car.types'

interface CarHeroProps {
  car: CarData
}

export default function CarHero({ car }: CarHeroProps) {
  return (
    <div className="relative pt-40 pb-12 flex items-center justify-center overflow-hidden">
      {/* Background Text - Model Name */}
      <motion.div
        className="absolute inset-0 flex justify-center pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-[12rem] lg:text-[18rem] font-black text-white/5 select-none leading-none tracking-tighter">
          {car.model.toUpperCase()}
        </h1>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-6 w-full">
        {/* Car Image Placeholder */}

        <motion.div
          className="w-full max-w-4xl mx-auto -mb-18"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-linear-to-t from-red-500/20 via-transparent to-transparent blur-3xl" />

            {car.imageUrl ? (
              <img src={car.imageUrl} alt={car.model} className="mx-auto" />
            ) : (
              <div className="relative h-80 flex items-center justify-center">
                {/* Car Silhouette/Placeholder */}
                <div className="text-white/10">
                  <svg
                    className="w-96 h-96"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Car Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-2 text-white"
        >
          <div className="inline-block">
            <div className="flex items-baseline gap-3 mb-2">
              <h1 className="text-white tracking-[0.2em] uppercase text-5xl monospace font-light">
                {car.brand}
              </h1>
              <span className="text-white/40 text-sm monospace font-light">
                {car.year}
              </span>
            </div>
            <h2 className="text-white/90 tracking-[0.5em] uppercase text-2xl monospace font-light">
              {car.model}
            </h2>
            <div className="mt-4 h-[0.5px] w-full bg-linear-to-r from-transparent via-white/30 to-transparent" />
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-between gap-12 pt-8 w-full"
        >
          <div className="w-full bg-black/40 border-[0.5px] border-white/10 rounded-sm p-5 hover:border-white/20 transition-all duration-300">
            <h4 className="text-white/60 tracking-[0.15em] uppercase mb-2 pb-2 border-white/10 text-xs monospace font-light">
              Velocidade Máxima
            </h4>

            <span className="text-white/90 tracking-wide text-3xl monospace font-light">
              {car.specs.performance.max_speed}
            </span>
          </div>

          <div className="w-full bg-black/40 border-[0.5px] border-white/10 rounded-sm p-5 hover:border-white/20 transition-all duration-300">
            <h4 className="text-white/60 tracking-[0.15em] uppercase mb-2 pb-2 border-white/10 text-xs monospace font-light">
              0-100 km/h
            </h4>

            <span className="text-white/90 tracking-wide text-3xl monospace font-light">
              {car.specs.performance.zero_to_hundred}
            </span>
          </div>

          <div className="w-full bg-black/40 border-[0.5px] border-white/10 rounded-sm p-5 hover:border-white/20 transition-all duration-300">
            <h4 className="text-white/60 tracking-[0.15em] uppercase mb-2 pb-2 border-white/10 text-xs monospace font-light">
              Peso
            </h4>

            <span className="text-white/90 tracking-wide text-3xl monospace font-light">
              {car.specs.performance.weight}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
