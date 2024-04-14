import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { deposit, depositWithConvertingCurrency, payLoan, requestLoan, withdraw } from './accountSlice';

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [currentLoanPurpose, setCurrentLoanPurpose] = useState('');
  const [currency, setCurrency] = useState('USD');

  const { balance, isLoading, loan, loanPurpose } = useAppSelector(store => store.account);

  const dispatch = useAppDispatch();

  function handleDeposit() {
    if (!depositAmount) return;

    if (currency === 'USD') {
      dispatch(deposit(+depositAmount));
    } else {
      dispatch(depositWithConvertingCurrency({ amount: +depositAmount, currency }));
    }

    setDepositAmount('');
    setCurrency('USD');
  }

  function handleWithdrawal() {
    if (!withdrawalAmount) return;

    dispatch(withdraw(+withdrawalAmount));
    setWithdrawalAmount('');
  }

  function handleRequestLoan() {
    if (!loanAmount || !currentLoanPurpose) return;

    dispatch(requestLoan({ amount: +loanAmount, loanPurpose: currentLoanPurpose }));

    setLoanAmount('');
    setCurrentLoanPurpose('');
  }

  function handlePayLoan() {
    dispatch(payLoan());
  }

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input type="number" min="0" value={depositAmount} onChange={e => setDepositAmount(e.target.value)} />
          <select value={currency} onChange={e => setCurrency(e.target.value)}>
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          <button onClick={handleDeposit} disabled={isLoading}>
            Deposit {depositAmount}
          </button>
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type="number"
            min="0"
            max={balance}
            value={withdrawalAmount}
            onChange={e => setWithdrawalAmount(e.target.value)}
          />
          <button disabled={balance === 0} onClick={handleWithdrawal}>
            Withdraw {withdrawalAmount}
          </button>
        </div>

        <div>
          <label>Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={e => setLoanAmount(e.target.value)}
            placeholder="Loan amount"
          />
          <input
            value={currentLoanPurpose}
            onChange={e => setCurrentLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
          />
          <button onClick={handleRequestLoan}>Request loan</button>
        </div>

        <div>
          <span>
            Pay back ${loan} ({loanPurpose})
          </span>
          <button onClick={handlePayLoan}>Pay loan</button>
        </div>
      </div>
    </div>
  );
}

export default AccountOperations;
