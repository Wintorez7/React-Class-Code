import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, Legend } from 'recharts';

const data = [
  {
    name: 'Boys',
    count: 110,
    fill: '#FF8042', // Changed to match the legend color
  },
  {
    name: 'Girls',
    count: 90,
    fill: '#0088FE', // Changed to match the legend color
  },
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

function CountRadialCharts() {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
      {/* Chart Container */}
      <div style={{ width: 350, height: 250 }}>
        <ResponsiveContainer >
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="90%"
            barSize={20}
            data={data}
          >
            <RadialBar minAngle={15} background clockWise dataKey="count" />
            <Legend
              iconSize={10}
              layout="vertical"
              verticalAlign="middle"
              wrapperStyle={style}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      {/* Footer Section */}
      <div className="flex justify-around items-center py-4 w-full">
        {/* Boys */}
        <div className="flex flex-col items-center">
          <div className="h-4 w-4 rounded-full bg-orange-500"></div>
          <h1 className="text-2xl text-slate-600 font-semibold">110</h1>
          <p className="text-gray-500">Boys (55%)</p>
        </div>

        {/* Girls */}
        <div className="flex flex-col items-center">
          <div className="h-4 w-4 rounded-full bg-blue-400"></div>
          <h1 className="text-2xl text-slate-600 font-semibold">90</h1>
          <p className="text-gray-500">Girls (45%)</p>
        </div>
      </div>
    </div>
  );
}

export default CountRadialCharts;
