
const Basket =({count,baketname})=>{
    return  <aside className={baketname}>  {count}
        {/* { count === 12 ? 'full' : 'Not Full'} */}
          { count === 12 && 'Full' }
          { count === 0 && 'empity' }
     </aside>
}

export default  Basket