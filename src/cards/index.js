import './index.css';
import img3 from './img/img3.png'
import img4 from './img/img4.png'
import img6 from './img/img6.png'
import img7 from './img/img7.png'
import img8 from './img/img8.png'
import img9 from './img/img9.png'
import imgBack from './img/imgBack.png'
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
const Cards=()=>{
     
    const [list, setList] = useState([
        ["img3",img3,false],
        ["img4",img4,false],
        ["img6",img6,false],
        ["img7",img7,false],
        ["img8",img8,false],
        ["img9",img9,false],
        ["img3",img3,false],
        ["img4",img4,false],
        ["img6",img6,false],
        ["img7",img7,false],
        ["img8",img8,false],
        ["img9",img9,false],
    ]);
   
    useEffect(()=>{
       list.sort(()=>Math.random()-0.5)
       setList([...list])
    },[])

  
    return(
        <div className="Cards">
            { list.map((val,key)=>(
                <div className="Cards-block" key={key}>
                    <img
                        src={val[2]?val[1]:imgBack}
                        id={key} 
                        onClick={
                                (data)=>showCart(setList,data)
                            }/>  
                </div>
            ))}
            
        </div>
    )
}
const showCart = (setList,data) =>{
     
                   
        setList((state)=> {
             state.forEach((v,k)=>{
                
                if(data.target.id == k){  
                    state[k][2] = true
                    
                }
            })
            
            return[...state]
        })
    
}
export default Cards;