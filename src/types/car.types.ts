export interface CarEngine {
  type: string
  displacement: string
  position: string
}

export interface CarTransmission {
  type: string
  gears: number
  drive: string
}

export interface CarCooling {
  radiator: string
  intercooler: string
}

export interface CarPerformance {
  max_speed: string
  zero_to_hundred: string
  weight: string
}

export interface CarSpecs {
  engine: CarEngine
  transmission: CarTransmission
  cooling: CarCooling
  performance: CarPerformance
}

export interface ChartDataPoint {
  rpm: number
  hp: number
  torque: number
}

export interface CarData {
  brand: string
  model: string
  year: number
  specs: CarSpecs
  chartData: ChartDataPoint[]
}

export type CarCategory = 'Gr.3' | 'Gr.4' | 'Supercars' | 'Hypercars'

export interface CarBrand {
  name: string
  logo?: string
}
