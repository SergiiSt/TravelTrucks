// import { createSelector } from '@reduxjs/toolkit';

export const selectCampers = state => state.campers.items;

export const selectCamperById = state => state.campers.selectedCamper;
