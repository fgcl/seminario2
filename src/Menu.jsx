import React from "react"
{/*Hooks useState*/}
import {useState, useEffect} from 'react'
import './App.css'
function Menu({nome}){
    let valor = 0;
    const [first_number, setfirst_number] = useState(0);
    const [second_number, setsecond_number] = useState(0);
    const [result, setresult] = useState(0);

    useEffect(() => {
        setresult(first_number + second_number);
    }, [first_number, second_number]);

    return(
        <div class="c_corbranca">
            <h1>Calculadora</h1>
            <p>Em busca da calculadora automatica.</p>
            <p>{first_number} + {second_number} = {result}</p>
            <button onClick={() => setfirst_number(first_number + 1)}>+</button>
            <span style={{margin: '0 5px'}}></span>
            <button onClick={() => setsecond_number(second_number + 1)}>+</button>
            <p>{nome}</p>
         </div>
    )
}
export default Menu