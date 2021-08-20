

const timer={
    startTimer:false,
    result:null,
    time:0,
}
const ACTION = "ACTION"
const RESULT = "RESULT"
const TIME = "TIME"

export const TimerReduser = (state = timer,action)=>{
    switch(action.type){
        case ACTION:
            return {...state, startTimer:action.state}
        case RESULT:
            return {...state, result:action.state}
        default:
            return state
    }
}


export const actionTimer = (state) => ({type:ACTION, state})
export const saveResult = (state) => ({type:RESULT, state})