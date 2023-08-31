import {configureStore} from '@reduxjs/toolkit';
import {phoneDetailsReducer} from './reducer';

export const store = configureStore ({
  reducer:{
    phoneDetails: phoneDetailsReducer
  }
});

