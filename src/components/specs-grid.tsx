import { motion } from 'framer-motion'

import type { CarSpecs } from '../types/car.types'
import GlassCard from './glass-card'

interface SpecsGridProps {
  specs: CarSpecs
}

interface SpecCardProps {
  title: string
  iconSrc?: string
  items: { label: string; value: string | number }[]
  delay: number
}

function SpecCard({ title, items, delay }: SpecCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <GlassCard className="p-6 h-full" hoverEffect>
        <div className="flex items-center gap-3 mb-6">
          <h3 className="text-xs font-bold tracking-wide uppercase text-white/70">
            {title}
          </h3>
        </div>

        <div className="h-px bg-white/10 my-6"></div>

        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-2 xl:flex-row xl:justify-between"
            >
              <p className="text-xs text-label mb-1 text-white/40">
                {item.label}
              </p>
              <p className="text-sm text-white/90">{item.value}</p>
            </div>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  )
}

export default function SpecsGrid({ specs }: SpecsGridProps) {
  const engineItems = [
    { label: 'Tipo', value: specs.engine.type },
    { label: 'Cilindrada', value: specs.engine.displacement },
    { label: 'Posição', value: specs.engine.position },
  ]

  const transmissionItems = [
    { label: 'Tipo', value: specs.transmission.type },
    { label: 'Marchas', value: `${specs.transmission.gears} velocidades` },
    { label: 'Tração', value: specs.transmission.drive },
  ]

  const coolingItems = [
    { label: 'Radiador', value: specs.cooling.radiator },
    { label: 'Intercooler', value: specs.cooling.intercooler },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-12">
      <SpecCard title="Motor" items={engineItems} delay={0.2} />
      <SpecCard title="Transmissão" items={transmissionItems} delay={0.3} />
      <SpecCard title="Arrefecimento" items={coolingItems} delay={0.4} />
    </div>
  )
}
