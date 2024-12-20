import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts'

const COLORS = ['#4A90E2', '#9775FA', '#FF6B6B', '#FAB005', '#40C057']

export function Statistics ({ type, title, data }) {
  return (
    <Card className='w-full bg-white shadow-sm'>
      <CardHeader>
        <CardTitle className='text-lg font-medium'>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {type === 'bar' ? (
          <ResponsiveContainer width='100%' height={300}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray='3 3' vertical={false} />
              <XAxis dataKey='name' />
              <YAxis />
              <Bar dataKey='value' fill='#9775FA' radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <ResponsiveContainer width='100%' height={300}>
            <PieChart>
              <Pie
                data={data}
                cx='50%'
                cy='50%'
                labelLine={true}
                label={({ name }) => name}
                outerRadius={100}
                fill='#8884d8'
                dataKey='value'
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  )
}
