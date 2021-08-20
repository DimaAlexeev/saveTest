import { TimerReduser } from "./redusers/TimerReduser";
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, createStore } from 'redux';
const Reduser = combineReducers(
    {
        time:TimerReduser
    }
)

export const store = createStore(Reduser,composeWithDevTools());