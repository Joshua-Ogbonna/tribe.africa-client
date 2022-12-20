import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux"
import { RootState } from "./rootReducer"
import { RootDispatch } from "./store"

export const UseAppDispatch: () => RootDispatch = useDispatch
export const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector