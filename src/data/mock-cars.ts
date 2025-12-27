import type { CarData } from '../types/car.types'

export const mockCars: CarData[] = [
  {
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
  },
  {
    brand: 'Porsche',
    model: '911 GT3',
    year: 2023,
    specs: {
      engine: {
        type: 'Flat-6 Naturally Aspirated',
        displacement: '4.0L',
        position: 'Rear-Engine',
      },
      transmission: {
        type: 'PDK',
        gears: 7,
        drive: 'RWD',
      },
      cooling: {
        radiator: 'Triple-core aluminum',
        intercooler: 'N/A',
      },
      performance: {
        max_speed: '320 km/h',
        zero_to_hundred: '3.4s',
        weight: '1435 kg',
      },
    },
    chartData: [
      { rpm: 1000, hp: 90, torque: 280 },
      { rpm: 2000, hp: 160, torque: 340 },
      { rpm: 3000, hp: 240, torque: 380 },
      { rpm: 4000, hp: 320, torque: 410 },
      { rpm: 5000, hp: 390, torque: 430 },
      { rpm: 6000, hp: 450, torque: 450 },
      { rpm: 7000, hp: 490, torque: 460 },
      { rpm: 8000, hp: 510, torque: 469 },
      { rpm: 9000, hp: 502, torque: 430 },
    ],
  },
]
