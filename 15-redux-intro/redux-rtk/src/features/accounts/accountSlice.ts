import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export type AccountSliceState = typeof initialState;
const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
  isLoading: false,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    deposit(state, action: PayloadAction<number>) {
      state.balance += action.payload;
    },
    withdraw(state, action: PayloadAction<number>) {
      state.balance -= action.payload;
    },
    requestLoan(state, action: PayloadAction<{ amount: number; loanPurpose: string }>) {
      if (state.loan > 0) return;

      state.loan = action.payload.amount;
      state.loanPurpose = action.payload.loanPurpose;
      state.balance += action.payload.amount;
    },
    payLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(depositWithConvertingCurrency.pending, state => {
        state.isLoading = true;
      })
      .addCase(depositWithConvertingCurrency.fulfilled, (state, action) => {
        state.isLoading = false;
        state.balance += action.payload.rates.USD;
      })
      .addCase(depositWithConvertingCurrency.rejected, state => {
        state.isLoading = false;
      });
  },
  selectors: {
    selectBalance: account => account.balance,
  },
});

export default accountSlice.reducer;

export const { deposit, withdraw, payLoan, requestLoan } = accountSlice.actions;

export const { selectBalance } = accountSlice.selectors;

interface ConvertingCurrencyResp {
  rates: {
    USD: number;
  };
}
export const depositWithConvertingCurrency = createAsyncThunk<
  ConvertingCurrencyResp,
  { amount: number; currency: string }
>('account/convertingCurrency', async ({ amount, currency }) => {
  const resp = await fetch(`https://api.frankfurter.app/latest?amount=${amount}t&from=${currency}&to=USD`);

  return (await resp.json()) as ConvertingCurrencyResp;
});
