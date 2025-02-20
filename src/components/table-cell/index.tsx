import clsx from 'clsx';

import s from './table-cell.module.scss';

interface TableCellProps {
  value: string | number;
  color?: 'blue' | 'green' | 'red';
  align?: 'left' | 'center' | 'right';
  type?: 'with-percents';
  percents?: number;
}

export const TableCell = (props: TableCellProps) => {
  const { value, color = '', type = '', align = 'left', percents } = props;

  const renderValue = typeof value === 'string' ? value : value.toLocaleString('ru-RU');

  return (
    <div className={clsx(s.td, s[type], s[color], s[align])}>
      <span className={s.value}>{renderValue}</span>
      {!!percents && <span className={clsx(s.percents, s[color])}>{percents}%</span>}
    </div>
  );
};
