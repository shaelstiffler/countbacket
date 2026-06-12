
import LeftImg from 'url:../assets/img/leftArrow.png';
import rightImg from 'url:../assets/img/rightArrow.png';

import Button from './Button'
import Basket from './Basket'
import { useState } from 'react';
 






const Applecount = () => {

  const totalApple = 12;
const [RightappleCount,setRightappleCount] = useState(0)
const [LeftappleCount,setLeftappleCount] = useState(
  totalApple - RightappleCount
)
 

 const leftcontrol =()=>{

     if(LeftappleCount < 12){
      setRightappleCount(RightappleCount - 1)
      setLeftappleCount(LeftappleCount + 1)
    console.log(RightappleCount)
    console.log(LeftappleCount)
     
   }

  }
   const rightcontrol =()=>{

    if(RightappleCount < 12){
      setRightappleCount(RightappleCount + 1)
      setLeftappleCount(LeftappleCount - 1)
 
    console.log(RightappleCount)
     console.log(LeftappleCount)
    
    }
   
  }

  return <div className='container'>
    
    <div className="left_buket">
      <Basket baketname="colleft" count={LeftappleCount} />
    </div>
    <Button
       onClick={leftcontrol}
      imagtitle="Left Arrow"
      imgurl={LeftImg}
      btnclass="left-btn" >
        Left Button
      </Button>

    <Button
      onClick={rightcontrol}
      imagtitle="Right Arrow"
      imgurl={rightImg}
      btnclass="Right-btn">
        right Arrow
   </Button>

    <div className="right_buket">
      <Basket baketname="colright" count={RightappleCount} />
    </div>

    

    
  </div>


}

export default Applecount