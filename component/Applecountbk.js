
import LeftImg from 'url:../assets/img/leftArrow.png';
import rightImg from 'url:../assets/img/rightArrow.png';

import Button from './Button'
import Basket from './Basket'
 


const totalApple = 12;
let RightappleCount = 0
let LeftappleCount =  totalApple - RightappleCount

console.log(LeftappleCount)



const Applecount = ({ root }) => {

 const leftcontrol =()=>{

     if(LeftappleCount < 12){
     RightappleCount--
    LeftappleCount++
    console.log(RightappleCount)
    console.log(LeftappleCount)
    root.render(<Applecount root={root} />)
   }

  }
   const rightcontrol =()=>{

    if(RightappleCount < 12){
    RightappleCount++
    LeftappleCount--
    console.log(RightappleCount)
     console.log(LeftappleCount)
     root.render(<Applecount root={root} />)
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
      btnclass="left-btn">
        Left Button
      </Button>

    <Button
      onClick={rightcontrol}
      imagtitle="Right Arrow"
      imgurl={rightImg}
      btnclass="Right-btn"

    />

    <div className="right_buket">
      <Basket baketname="colright" count={RightappleCount} />
    </div>

    

    
  </div>


}

export default Applecount