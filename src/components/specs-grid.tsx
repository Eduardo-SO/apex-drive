import { motion } from 'framer-motion'

import { propertiesInfo } from '@/data/properties-info'

import type { CarSpecs } from '../types/car.types'
import GlassCard from './glass-card'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

interface SpecsGridProps {
  specs: CarSpecs
}

interface SpecCardProps {
  title: string
  iconSrc?: string
  items: { label: string; value: string | number; info?: string }[]
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
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  key={item.label}
                  className="flex flex-col gap-2 xl:flex-row xl:justify-between"
                >
                  <p className="text-xs text-label mb-1 text-white/40">
                    {item.label}
                  </p>
                  <p className="text-xs text-white/90">{item.value}</p>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs w-96 line-height-relaxed text-white/90">
                  {item.info}
                </p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  )
}

export default function SpecsGrid({ specs }: SpecsGridProps) {
  const engineItems = [
    {
      label: 'Tipo',
      value: specs.engine.type,
      info: propertiesInfo.motor.type,
    },
    {
      label: 'Cilindrada',
      value: specs.engine.displacement,
      info: propertiesInfo.motor.displacement,
    },
    {
      label: 'Posição',
      value: specs.engine.position,
      info: propertiesInfo.motor.position,
    },
  ]

  const transmissionItems = [
    {
      label: 'Tipo',
      value: specs.transmission.type,
      info: propertiesInfo.transmissao.type,
    },
    {
      label: 'Marchas',
      value: `${specs.transmission.gears} velocidades`,
      info: propertiesInfo.transmissao.gears,
    },
    {
      label: 'Tração',
      value: specs.transmission.drive,
      info: propertiesInfo.transmissao.drive,
    },
  ]

  const coolingItems = [
    {
      label: 'Radiador',
      value: specs.cooling.radiator,
      info: propertiesInfo.arrefecimento.radiator,
    },
    {
      label: 'Intercooler',
      value: specs.cooling.intercooler,
      info: propertiesInfo.arrefecimento.intercooler,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
      <SpecCard title="Motor" items={engineItems} delay={0.2} />
      <SpecCard title="Transmissão" items={transmissionItems} delay={0.3} />
      <SpecCard title="Arrefecimento" items={coolingItems} delay={0.4} />
    </div>
  )
}
