import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

interface ChartDataPoint {
  rpm: number
  hp: number
  torque: number
}

interface PerformanceChartProps {
  data: ChartDataPoint[]
}

export function PerformanceChart({ data }: PerformanceChartProps) {
  return (
    <div className="w-full h-[400px] bg-black/90 rounded-sm border border-white/10 p-6">
      <div className="mb-4">
        <h3 className="text-white/90 tracking-[0.2em] uppercase mb-1">
          Performance
        </h3>
        <div className="h-[0.5px] w-full bg-white/10" />
      </div>

      <ResponsiveContainer width="100%" height="85%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorHp" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffffff" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorTorque" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255, 255, 255, 0.05)"
            vertical={false}
          />

          <XAxis
            dataKey="rpm"
            stroke="rgba(255, 255, 255, 0.4)"
            tick={{
              fill: 'rgba(255, 255, 255, 0.6)',
              fontSize: 11,
              fontFamily: 'monospace',
            }}
            tickLine={{ stroke: 'rgba(255, 255, 255, 0.2)' }}
            axisLine={{ stroke: 'rgba(255, 255, 255, 0.2)' }}
            label={{
              value: 'RPM',
              position: 'insideBottom',
              offset: -5,
              fill: 'rgba(255, 255, 255, 0.5)',
              fontSize: 10,
              fontFamily: 'monospace',
            }}
          />

          <YAxis
            stroke="rgba(255, 255, 255, 0.4)"
            tick={{
              fill: 'rgba(255, 255, 255, 0.6)',
              fontSize: 11,
              fontFamily: 'monospace',
            }}
            tickLine={{ stroke: 'rgba(255, 255, 255, 0.2)' }}
            axisLine={{ stroke: 'rgba(255, 255, 255, 0.2)' }}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              border: '0.5px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '2px',
              fontSize: '11px',
              fontFamily: 'monospace',
            }}
            labelStyle={{
              color: 'rgba(255, 255, 255, 0.7)',
              marginBottom: '4px',
            }}
            itemStyle={{ color: '#ffffff', padding: '2px 0' }}
          />

          <Legend
            wrapperStyle={{
              fontSize: '11px',
              fontFamily: 'monospace',
              paddingTop: '10px',
            }}
            iconType="line"
          />

          <Area
            type="monotone"
            dataKey="hp"
            stroke="#ffffff"
            strokeWidth={1.5}
            fillOpacity={1}
            fill="url(#colorHp)"
            name="Cavalaria (hp)"
          />

          <Area
            type="monotone"
            dataKey="torque"
            stroke="#ef4444"
            strokeWidth={1.5}
            fillOpacity={1}
            fill="url(#colorTorque)"
            name="Torque (Nm)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
