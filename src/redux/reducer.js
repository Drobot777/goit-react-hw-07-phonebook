import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchContactsAxios, deleteContactAxios, addContactAxios} from 'appi';

export const fetchContacts = createAsyncThunk (
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await fetchContactsAxios ();
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue (err.message);
    }
  }
);

export const addContact = createAsyncThunk (
  'contacts/addContact',
  async (idPost, thunkAPI) => {
    try {
      const response = await addContactAxios (idPost);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue (err.message);
    }
  }
);
export const deleteContact = createAsyncThunk (
  'contacts/deleteContact',
  async (idPost, thunkAPI) => {
    try {
      const response = await deleteContactAxios (idPost);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue (err.message);
    }
  }
);

const appState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const phoneSlice = createSlice ({
  name: 'phone',
  initialState: appState,

  reducers: {
    setFilter (state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase (fetchContacts.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase (fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase (fetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addCase (addContact.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase (addContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items.push (action.payload);
      })
      .addCase (addContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addCase (deleteContact.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase (deleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = state.contacts.items.filter (
          contact => contact.id !== action.payload.id
        );
      })
      .addCase (deleteContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      });
  },
});

export const {addPhone, deletePhone, setFilter} = phoneSlice.actions;
export const selectContactsDetails = state => state.phoneDetails.contacts.items;
export const selectFilterDetails = state => state.phoneDetails.filter;
export const selectIsLoading = state => state.phoneDetails.contacts.isLoading;
export const selectError = state => state.phoneDetails.contacts.error;
export const phoneDetailsReducer = phoneSlice.reducer;
