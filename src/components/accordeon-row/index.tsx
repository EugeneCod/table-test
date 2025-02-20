import { TableRow } from '..';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import s from './accordeon-row.module.scss';

import type { TableRowData } from '../../App';
import { useRef, useState } from 'react';

interface AccordeonRowProps {
  data: TableRowData;
}

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const lineOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Динамика за неделю',
    },
  },
};

export const AccordeonRow = ({ data }: AccordeonRowProps) => {
  const { cellsData, chartData } = data;
  const [isOpen, setIsOpen] = useState(false);
  const chartContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className={s['accordeon-row']}>
      <TableRow
        data={cellsData}
        onClick={() => setIsOpen(prev => !prev)}
      />
      <div
        className={s['collapse-block']}
        style={isOpen ? { height: chartContainerRef?.current?.scrollHeight } : { height: '0px' }}>
        <div ref={chartContainerRef} className={s['chart-container']}>
          <Line options={lineOptions} data={chartData} />
        </div>
      </div>

      
    </div>
  );
};
