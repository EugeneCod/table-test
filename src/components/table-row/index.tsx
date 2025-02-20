import s from './table-row.module.scss';
import { TableCell } from '..';
import type { CellsData } from '../../App';

interface TableRowProps {
  data: CellsData | string[];
  onClick?: () => void;
}

export const TableRow = (props: TableRowProps) => {
  const { data, onClick } = props;

  if (Array.isArray(data)) {
    return (
      <div className={s.tr}>
        {data.map((value, index) => (
          <TableCell key={index} value={value} align="center" />
        ))}
      </div>
    );
  }

  const { name, today, yesterday, weekDay } = data;

  const dailyDynamicsPercents = Math.round(100 - (yesterday * 100) / today);
  const isUpwardDaylyTrend = dailyDynamicsPercents >= 0;
  const isUpwardWeekDayTrend = today >= weekDay;
  const isEqualWeekDayIndicator = today === weekDay;

  return (
    <div onClick={onClick} className={s.tr}>
      <TableCell value={name} />
      <TableCell value={today} color="blue" align="right" />
      <TableCell
        value={yesterday}
        type="with-percents"
        percents={dailyDynamicsPercents}
        color={isUpwardDaylyTrend ? 'green' : 'red'}
        align="right"
      />
      <TableCell
        value={weekDay}
        color={isUpwardWeekDayTrend ? (isEqualWeekDayIndicator ? undefined : 'green') : 'red'}
        align="right"
      />
    </div>
  );
};
