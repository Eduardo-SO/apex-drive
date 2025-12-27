import { motion } from 'framer-motion'
import { Car, Crown, Trophy, Zap } from 'lucide-react'
import { useState } from 'react'

import type { CarCategory } from '../types/car.types'
import GlassCard from './glass-card'

interface Brand {
  name: string
  count: number
}

const categories: { name: CarCategory; icon: typeof Car; color: string }[] = [
  { name: 'Gr.3', icon: Trophy, color: 'text-cyan-400' },
  { name: 'Gr.4', icon: Car, color: 'text-blue-400' },
  { name: 'Supercars', icon: Zap, color: 'text-red-500' },
  { name: 'Hypercars', icon: Crown, color: 'text-yellow-400' },
]

const brands: Brand[] = [
  { name: 'Ferrari', count: 12 },
  { name: 'Porsche', count: 18 },
  { name: 'Lamborghini', count: 8 },
  { name: 'McLaren', count: 6 },
  { name: 'Mercedes-AMG', count: 10 },
  { name: 'BMW M', count: 14 },
  { name: 'Audi Sport', count: 9 },
  { name: 'Nissan', count: 7 },
]

export default function SidebarMenu() {
  const [selectedCategory, setSelectedCategory] =
    useState<CarCategory>('Supercars')
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)

  return (
    <div className="w-72 h-screen fixed left-0 top-0 p-6 overflow-y-auto">
      <GlassCard className="p-6">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-2xl font-black tracking-tighter text-white">
            APEX<span className="text-red-500">DRIVE</span>
          </h1>
          <p className="text-xs text-white/40 mt-1">Performance Database</p>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-label mb-4">Categorias</h2>
          <div className="space-y-2">
            {categories.map(({ name, icon: Icon, color }) => (
              <motion.button
                key={name}
                onClick={() => setSelectedCategory(name)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  selectedCategory === name
                    ? 'bg-white/10 border-[0.5px] border-white/20'
                    : 'hover:bg-white/5'
                }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className={`w-5 h-5 ${color}`} />
                <span className="text-sm font-medium text-white">{name}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Brands */}
        <div>
          <h2 className="text-label mb-4">Marcas</h2>
          <div className="space-y-1">
            {brands.map((brand) => (
              <motion.button
                key={brand.name}
                onClick={() => setSelectedBrand(brand.name)}
                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-md transition-all duration-300 ${
                  selectedBrand === brand.name
                    ? 'bg-red-500/20 border-[0.5px] border-red-500/40'
                    : 'hover:bg-white/5'
                }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-sm text-white/90">{brand.name}</span>
                <span className="text-xs text-white/40">{brand.count}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-xs text-white/30 text-center">
            Gran Turismo Style Dashboard
          </p>
        </div>
      </GlassCard>
    </div>
  )
}
