import { motion } from 'framer-motion'
import { ArrowRight, Calendar, CarFront } from 'lucide-react'
import { useEffect, useState } from 'react'

import { supabase } from '../lib/supabase'
import type { CarData } from '../types/car.types'
import GlassCard from './glass-card'

interface RecentCarsGridProps {
  onCarSelect: (car: CarData) => void
}

interface CarDBRow {
  id: string
  created_at: string
  brand: string
  model: string
  year: number
  image_url: string
  specs: CarData['specs']
  chart_data: CarData['chartData']
}

export default function RecentCarsGrid({ onCarSelect }: RecentCarsGridProps) {
  const [cars, setCars] = useState<CarData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchRecentCars()
  }, [])

  const fetchRecentCars = async () => {
    try {
      const { data, error } = await supabase
        .from('cars')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(6)

      if (error) throw error

      if (data) {
        const mappedCars: CarData[] = data.map((row: CarDBRow) => ({
          brand: row.brand,
          model: row.model,
          year: row.year,
          imageUrl: row.image_url,
          specs: row.specs,
          chartData: row.chart_data,
        }))
        setCars(mappedCars)
      }
    } catch (error) {
      console.error('Error fetching cars:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <GlassCard key={i} className="h-64 animate-pulse">
            <div className="h-full flex flex-col justify-end p-6 space-y-4">
              <div className="h-4 w-1/3 bg-white/10 rounded" />
              <div className="h-6 w-2/3 bg-white/10 rounded" />
            </div>
          </GlassCard>
        ))}
      </div>
    )
  }

  if (cars.length === 0) return null

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 px-1">
        <CarFront className="w-5 h-5 text-red-500" />
        <h2 className="text-xl font-semibold text-white">
          Últimos Lançamentos
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car, index) => (
          <motion.div
            key={`${car.brand}-${car.model}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard
              className="group cursor-pointer relative overflow-hidden h-full hover:border-red-500/30 transition-colors duration-300"
              onClick={() => onCarSelect(car)}
            >
              {/* Background Image / Gradient */}
              <div className="absolute inset-0">
                {car.imageUrl ? (
                  <img
                    src={car.imageUrl}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-linear-to-br from-zinc-800 to-zinc-900" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6 flex flex-col justify-end h-64">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-white/60 text-xs font-medium mb-1">
                    <Calendar className="w-3 h-3" />
                    <span>{car.year}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    <span className="text-white/70 font-normal">
                      {car.brand}
                    </span>{' '}
                    {car.model}
                  </h3>

                  <div className="flex items-center gap-2 text-red-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Ver detalhes <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
