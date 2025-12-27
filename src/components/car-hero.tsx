import { motion } from 'framer-motion'

import type { CarData } from '../types/car.types'

interface CarHeroProps {
  car: CarData
}

export default function CarHero({ car }: CarHeroProps) {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Text - Model Name */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-[12rem] lg:text-[18rem] font-black text-white/5 select-none leading-none tracking-tighter">
          {car.model.toUpperCase()}
        </h1>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-6">
        {/* Car Image Placeholder */}
        <motion.div
          className="w-full max-w-4xl mx-auto mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-linear-to-t from-red-500/20 via-transparent to-transparent blur-3xl" />

            {/* Car Silhouette/Placeholder */}
            <div className="relative h-80 flex items-center justify-center">
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
          </div>
        </motion.div>

        {/* Car Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-2"
        >
          <p className="text-label">Veículo Selecionado</p>
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-white">
            {car.brand} {car.model}
          </h2>
          <p className="text-2xl text-white/60">{car.year}</p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-12 pt-8"
        >
          <div className="text-center">
            <p className="text-label mb-1">Velocidade Máxima</p>
            <p className="text-3xl font-bold text-white">
              {car.specs.performance.max_speed}
            </p>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="text-center">
            <p className="text-label mb-1">0-100 km/h</p>
            <p className="text-3xl font-bold text-white">
              {car.specs.performance.zero_to_hundred}
            </p>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="text-center">
            <p className="text-label mb-1">Peso</p>
            <p className="text-3xl font-bold text-white">
              {car.specs.performance.weight}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent pointer-events-none" />
    </div>
  )
}
