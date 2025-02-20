/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */

import s from './App.module.scss';

import { AccordeonRow, TableRow } from './components';
import { ChartData } from 'chart.js';
import { getChartData } from './utils';

const DAY = 86400000;

const dateOptions: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'numeric' };
const languageOptions = 'ru-RU';

const labels = new Array(7)
  .fill('')
  .map((_, index) => {
    return new Date(Date.now() - DAY * index).toLocaleDateString(languageOptions, dateOptions);
  })
  .reverse();

export interface CellsData {
  name: string;
  today: number;
  yesterday: number;
  weekDay: number;
}

export interface TableRowData {
  cellsData: CellsData;
  chartData: ChartData<'line', number[], string>;
}

const tableRowData: TableRowData[] = [
  {
    cellsData: {
      name: 'Выручка, руб.',
      today: 500551,
      yesterday: 480521,
      weekDay: 4805121,
    },
    chartData: getChartData(labels, { min: -1000, max: 1000000 }, 'Выручка, руб.', 500551),
  },
  {
    cellsData: {
      name: 'Наличные',
      today: 300000,
      yesterday: 300000,
      weekDay: 300000,
    },
    chartData: getChartData(labels, { min: 0, max: 500000 }, 'Наличные', 300000),
  },
  {
    cellsData: {
      name: 'Безналичый расчет',
      today: 100000,
      yesterday: 100000,
      weekDay: 100000,
    },
    chartData: getChartData(labels, { min: 0, max: 300000 }, 'Безналичый расчет', 100000),
  },
  {
    cellsData: {
      name: 'Средний чек, руб',
      today: 1300,
      yesterday: 900,
      weekDay: 900,
    },
    chartData: getChartData(labels, { min: 0, max: 3000 }, 'Средний чек, руб', 1300),
  },
  {
    cellsData: {
      name: 'Средний гость, руб',
      today: 1200,
      yesterday: 800,
      weekDay: 800,
    },
    chartData: getChartData(labels, { min: 0, max: 3000 }, 'Средний гость, руб', 1200),
  },
  {
    cellsData: {
      name: 'Удаления из чека (после оплаты), руб',
      today: 1000,
      yesterday: 1100,
      weekDay: 900,
    },
    chartData: getChartData(labels, { min: 0, max: 3000 }, 'Удаления из чека (после оплаты), руб', 1000),
  },
  {
    cellsData: {
      name: 'Удаления из чека (до оплаты), руб',
      today: 1300,
      yesterday: 1300,
      weekDay: 900,
    },
    chartData: getChartData(labels, { min: 0, max: 3000 }, 'Удаления из чека (после оплаты), руб', 1300),
  },
  {
    cellsData: {
      name: 'Количество чеков',
      today: 34,
      yesterday: 30,
      weekDay: 34,
    },
    chartData: getChartData(labels, { min: 10, max: 45 }, 'Количество чеков', 34),
  },
  {
    cellsData: {
      name: 'Количество гостей',
      today: 34,
      yesterday: 36,
      weekDay: 32,
    },
    chartData: getChartData(labels, { min: 10, max: 45 }, 'Количество гостей', 34),
  },
];

const rowHeaderData = ['Показатель', 'Текущий день', 'Вчера', 'Этот день недели'];

function App() {
  return (
    <div className={s.root}>
      <div className={s.table}>
        <TableRow data={rowHeaderData} />
        {tableRowData.map((data, index) => (
          <AccordeonRow key={index} data={data} />
        ))}
      </div>
    </div>
  );
}

export default App;
