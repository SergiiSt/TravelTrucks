import { createSlice } from '@reduxjs/toolkit';
import { fetchCamperById, fetchCampers } from './operations';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    selectedCamper: null,
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to load campers';
      })
      .addCase(fetchCamperById.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.selectedCamper = action.payload;
        // console.log(state.selectedCamper);
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to load camper';
      });
  },
});

export default campersSlice.reducer;
