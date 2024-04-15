import { configureStore } from '@reduxjs/toolkit';
import char_generator from './char_generator';
import games from './games';
//import {thunkMiddleware} from 'redux-thunk';
import { thunk } from 'redux-thunk'

// const store = configureStore({
//     reducer: {
//         generator
//     },
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware)
// });

const store = configureStore({
    reducer: {
        char_generator
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({thunk})
});

export default store;