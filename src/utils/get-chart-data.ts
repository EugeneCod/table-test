import { ChartData } from 'chart.js';
import faker from 'faker';

export function getChartData(
  labels: string[],
  options: { min: number; max: number },
  name: string,
  currentValue: number,
): ChartData<'line', number[], string> {
  return {
    labels,
    datasets: [
      {
        label: name,
        data: labels.map((_, index) => {
          if (index === labels.length - 1) {
            return currentValue;
          } else {
            return faker.datatype.number(options);
          }
        }),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
}
