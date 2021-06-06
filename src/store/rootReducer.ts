import { combineReducers } from '@reduxjs/toolkit';
import issueListSlice from "./issue/slice";

const rootReducer = combineReducers({
    issues:issueListSlice.reducer,
});

export default rootReducer;