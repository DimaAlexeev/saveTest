import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { actionTimer } from '../store/redusers/TimerReduser';
import play from './img/play.png'
import pause from './img/pause.png'
import './index.css'
 
const actionInterval = (setTimer, setStart) => {
   
    const time = setInterval(() => {
        setTimer(state => state + 1);
        setStart(state=>{
            return state||clearInterval(time)
        })
    }, 1000)

}
const Start = (dispatch,setStart,setTimer) =>{
    dispatch(actionTimer(true));
    setStart(true)
    actionInterval(setTimer, setStart)
}
const Pause = (dispatch,setStart) =>{
      setStart(false) 
    dispatch(actionTimer(false));
}

const Timer = () => {
    const dispatch = useDispatch()
    const [timer, setTimer] = useState(0)
    const [start, setStart] = useState(false)
     
    console.log("Timer", "one")
    return (
        <div className="Timer">
            <span className="Timer-number">{timer}</span>
             
             <img 
             src={start?pause:play}
             className="Timer-img-play"
             onClick={() => {
                start ? Pause(dispatch,setStart) : Start(dispatch,setStart,setTimer)
                  }} /> 
            
             
               
        </div>
    )
}
export default Timer