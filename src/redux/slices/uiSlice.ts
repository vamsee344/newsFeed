import { createSlice } from '@reduxjs/toolkit';

type UIState = {
  isOffline: boolean;
};

const initialState: UIState = {
  isOffline: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setOffline(state, action) {
      state.isOffline = action.payload;
    },
  },
});

export const { setOffline } = uiSlice.actions;

export default uiSlice.reducer;
