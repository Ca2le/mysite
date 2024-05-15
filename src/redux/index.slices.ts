import { combineSlices } from '@reduxjs/toolkit'
import loading from './loading.slice'
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import windowSize from './windowSize.slice' 
import pager from './pager.slice'

export const combinedSlices = combineSlices({ loading, windowSize, pager })

export const store = configureStore({
    reducer: combinedSlices
})

export type RootState = ReturnType<typeof combinedSlices>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


