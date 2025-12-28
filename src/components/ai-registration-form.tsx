import { motion } from 'framer-motion'
import { Search, Sparkles } from 'lucide-react'
import { useState } from 'react'

import type { CarData } from '../types/car.types'
import GlassCard from './glass-card'

interface AIRegistrationFormProps {
  onCarDataReceived: (carData: CarData) => void
}

export default function AIRegistrationForm({
  onCarDataReceived,
}: AIRegistrationFormProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return

    setIsLoading(true)

    // Simular processamento de IA com delay de 2.5s
    await new Promise((resolve) => setTimeout(resolve, 2500))

    // Dados simulados - Ferrari F40
    const mockCarData: CarData = {
      imageUrl: 'https://i.ibb.co/39tX9R3f/f40.png',
      brand: 'Ferrari',
      model: 'F40',
      year: 1987,
      specs: {
        engine: {
          type: 'V8 Twin-Turbo',
          displacement: '2.9L',
          position: 'Mid-Engine',
        },
        transmission: {
          type: 'Manual',
          gears: 5,
          drive: 'RWD',
        },
        cooling: {
          radiator: 'Dual-core aluminum',
          intercooler: 'Behr air-to-air',
        },
        performance: {
          max_speed: '324 km/h',
          zero_to_hundred: '4.1s',
          weight: '1100 kg',
        },
      },
      chartData: [
        { rpm: 1000, hp: 80, torque: 250 },
        { rpm: 2000, hp: 150, torque: 320 },
        { rpm: 3000, hp: 220, torque: 400 },
        { rpm: 4000, hp: 300, torque: 420 },
        { rpm: 5000, hp: 380, torque: 426 },
        { rpm: 6000, hp: 450, torque: 426 },
        { rpm: 7000, hp: 478, torque: 426 },
        { rpm: 7500, hp: 478, torque: 410 },
      ],
    }

    setIsLoading(false)
    onCarDataReceived(mockCarData)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full max-w-2xl"
        >
          <GlassCard className="p-12">
            <div className="space-y-8">
              {/* Header Skeleton */}
              <div className="space-y-4">
                <div className="h-8 bg-white/10 rounded skeleton" />
                <div className="h-4 w-3/4 bg-white/10 rounded skeleton" />
              </div>

              {/* Specs Skeleton */}
              <div className="grid grid-cols-3 gap-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="space-y-3">
                    <div className="h-4 bg-white/10 rounded skeleton" />
                    <div className="h-6 bg-white/10 rounded skeleton" />
                  </div>
                ))}
              </div>

              {/* Chart Skeleton */}
              <div className="space-y-3">
                <div className="h-6 w-1/3 bg-white/10 rounded skeleton" />
                <div className="h-64 bg-white/10 rounded skeleton" />
              </div>

              {/* Loading Text */}
              <div className="flex items-center justify-center gap-3 pt-4">
                <Sparkles className="w-5 h-5 text-red-400 animate-pulse" />
                <p className="text-sm text-white/80">Processando com IA...</p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl text-center"
      >
        <GlassCard className="p-12 glow-red">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="p-6 rounded-full bg-linear-to-br from-red-500/20 to-blue-500/20 border-[0.5px] border-red-500/30">
              <Sparkles className="w-12 h-12 text-red-400" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight text-white mb-4">
            Cadastro Inteligente
          </h1>
          <p className="text-white/60 mb-10">
            Digite o modelo do veículo e deixe a IA buscar todas as
            especificações técnicas
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Digite o modelo do carro..."
                className="w-full bg-white/5 border-[0.5px] border-white/20 rounded-lg pl-12 pr-4 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-all duration-300"
              />
            </div>

            <motion.button
              type="submit"
              disabled={!searchQuery.trim()}
              className="w-full bg-linear-to-r from-red-500 to-red-600 text-white font-semibold py-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                Processar com IA
              </span>
            </motion.button>
          </form>

          {/* Hint */}
          <p className="text-xs text-white/30 mt-8">
            Exemplos: Ferrari F40, Porsche 911 GT3, Lamborghini Aventador
          </p>
        </GlassCard>
      </motion.div>
    </div>
  )
}
