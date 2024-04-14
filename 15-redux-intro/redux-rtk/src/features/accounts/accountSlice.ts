import { createAppSlice } from '../../app/createAppSlice';

export type AccountSliceState = typeof initialState;
const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
  isLoading: false,
};

const accountSlice = createAppSlice({
  name: 'account',
  initialState,
  reducers: create => ({
    deposit: create.reducer<number>((state, action) => {
      state.balance += action.payload;
    }),
    withdraw: create.reducer<number>((state, action) => {
      state.balance -= action.payload;
    }),
    requestLoan: create.reducer<{ amount: number; loanPurpose: string }>((state, action) => {
      if (state.loan > 0) return;

      state.loan = action.payload.amount;
      state.loanPurpose = action.payload.loanPurpose;
      state.balance += action.payload.amount;
    }),
    payLoan: create.reducer(state => {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = '';
    }),

    // ================
    depositWithConvertingCurrency: create.asyncThunk<ConvertingCurrencyResp, { amount: number; currency: string }>(
      async ({ amount, currency }) => {
        const resp = await fetch(`https://api.frankfurter.app/latest?amount=${amount}t&from=${currency}&to=USD`);

        return (await resp.json()) as ConvertingCurrencyResp;
      },
      {
        pending: state => {
          state.isLoading = true;
        },
        rejected: state => {
          state.isLoading = false;
        },
        fulfilled: (state, action) => {
          state.isLoading = false;
          state.balance += action.payload.rates.USD;
        },
      }
    ),
  }),
  selectors: {
    selectBalance: account => account.balance,
  },
});

export default accountSlice.reducer;

export const { deposit, withdraw, payLoan, requestLoan, depositWithConvertingCurrency } = accountSlice.actions;

export const { selectBalance } = accountSlice.selectors;

interface ConvertingCurrencyResp {
  rates: {
    USD: number;
  };
}
