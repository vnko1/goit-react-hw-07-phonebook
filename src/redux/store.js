import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './index';

const customMiddleware = store => {
  return next => {
    return action => {
      if (typeof action === 'function') {
        return action(store.dispatch);
      }
      next(action);
    };
  };
};

export const store = configureStore({
  reducer: { contacts: contactsReducer, filter: filterReducer },
  middleware: [customMiddleware],
});
