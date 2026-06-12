import { useState } from "react"

import style from "./Comman.module.css"

console.log(style)

export default  function counter (){

    // const passKey = useState(0)
    // const count = passKey[0]
    const [count,setCount] = useState(0)
    
    return (
        <>
        <h2>Hello counTer Text </h2>
        <h3>{count}</h3>
        <button className={style.btn} onClick={()=>{setCount(count + 1)}}> Add Value</button>
        </>
    )
    
}