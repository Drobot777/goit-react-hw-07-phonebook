import {createSlice} from '@reduxjs/toolkit';
const appState = {
  contacts: [],
  filter: '',
};

const phoneSlice = createSlice ({
  name: 'phone',
  initialState: appState,

  reducers: {
    addPhone (state, action) {
      state.contacts.push (action.payload);
    },
    setFilter (state, action) {
      state.filter = action.payload;
    },
    deletePhone (state, action) {
      state.contacts = state.contacts.filter (
        contact => contact.id !== action.payload
      );
    },
  },
});

export const {addPhone, deletePhone, setFilter} = phoneSlice.actions;
export const selectContactsDetails = state => state.phoneDetails.contacts;
export const selectFilterDetails = state => state.phoneDetails.filter;
export const phoneDetailsReducer = phoneSlice.reducer;
