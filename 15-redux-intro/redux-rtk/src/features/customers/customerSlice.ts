import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit';

export type CustomerSliceState = typeof initialState;
const initialState = {
  id: '',
  fullName: '',
  nationalID: '',
  createdAt: '',
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName: string, nationalID: string) {
        return {
          payload: { fullName, nationalID, id: nanoid(), createdAt: new Date().toISOString() },
        };
      },
      reducer(state, action: PayloadAction<{ fullName: string; nationalID: string; createdAt: string; id: string }>) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
        state.id = action.payload.id;
      },
    },
    updateName(state, action: PayloadAction<string>) {
      state.fullName = action.payload;
    },
  },

  selectors: {
    selectFullName: customer => customer.fullName,
  },
});

export const { createCustomer, updateName } = customerSlice.actions;

export const { selectFullName } = customerSlice.selectors;

export default customerSlice.reducer;
