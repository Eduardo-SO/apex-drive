import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hoverEffect?: boolean
}

export default function GlassCard({
  children,
  className = '',
  hoverEffect = false,
}: GlassCardProps) {
  const baseClasses =
    'bg-black/60 backdrop-blur-xl border-[0.5px] border-white/10 rounded-lg p-4'

  if (hoverEffect) {
    return (
      <motion.div
        className={`${baseClasses} ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        whileHover={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderColor: 'rgba(255, 255, 255, 0.15)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      className={`${baseClasses} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
