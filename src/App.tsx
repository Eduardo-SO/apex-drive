import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useState } from 'react'

import AIRegistrationForm from './components/ai-registration-form'
import CarHero from './components/car-hero'
import { PerformanceChart } from './components/performance-chart'
import RecentCarsGrid from './components/recent-cars-grid'
import SidebarMenu from './components/sidebar-menu'
import SpecsGrid from './components/specs-grid'
import type { CarData } from './types/car.types'

function App() {
  const [currentCar, setCurrentCar] = useState<CarData | null>(null)

  const handleCarDataReceived = (carData: CarData) => {
    setCurrentCar(carData)
  }

  const handleAddNewCar = () => {
    setCurrentCar(null)
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-zinc-950 to-black relative">
      {/* Sidebar */}
      <SidebarMenu />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto">
        {currentCar ? (
          <>
            {/* Header with Add New Car Button */}
            <div className="sticky top-0 z-20 backdrop-blur-xl bg-black/50 border-b border-white/5">
              <div className="flex items-center justify-between px-6 py-4">
                <div>
                  <h2 className="text-sm text-label">Dashboard</h2>
                  <p className="text-xl font-bold text-white">
                    {currentCar.brand} {currentCar.model}
                  </p>
                </div>
                <motion.button
                  onClick={handleAddNewCar}
                  className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-red-600 to-red-700 rounded-lg text-sm text-white hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Plus className="w-5 h-5" />
                  Adicionar Novo Carro
                </motion.button>
              </div>
            </div>

            {/* Car Dashboard */}
            <div className="space-y-0">
              <CarHero car={currentCar} />
              <PerformanceChart data={currentCar.chartData} />
              <SpecsGrid specs={currentCar.specs} />
            </div>
          </>
        ) : (
          <div className="space-y-16 py-10">
            <AIRegistrationForm onCarDataReceived={handleCarDataReceived} />
            <RecentCarsGrid onCarSelect={handleCarDataReceived} />
          </div>
        )}
      </div>

      {/* Ambient Effects */}
      {/* <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      </div> */}

      <div className="relative z-10 text-center py-8 border-t-[0.5px] border-white/5">
        <p
          className="text-white/30 tracking-[0.2em] uppercase"
          style={{ fontFamily: 'monospace', fontSize: '9px' }}
        >
          Automotive Performance Analysis System
        </p>
      </div>
    </div>
  )
}

export default App
