import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { nytApi } from '../api';
import BookmarksSlice from '../features/bookmarks/slice';

export const store = configureStore({
  reducer: {
    [nytApi.reducerPath]: nytApi.reducer,
    bookmarks: BookmarksSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(nytApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch; //
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
