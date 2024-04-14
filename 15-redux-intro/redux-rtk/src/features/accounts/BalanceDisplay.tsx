import { useAppSelector } from '../../app/hooks';
import { selectBalance } from './accountSlice';

function formatCurrency(value: number | bigint) {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

function BalanceDisplay() {
  const balance = useAppSelector(selectBalance);

  return <div className="balance">{formatCurrency(balance)}</div>;
}

export default BalanceDisplay;
