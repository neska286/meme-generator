import React, { useState } from 'react'

const Box = ({on,handleToggle,id}) => {
//    const[onBox,setOnBox]=useState(on)
    const styles = {
        backgroundColor: on ? '#222222':'transparent'
        }

  return (
    <div  style={styles} className='box' onClick={(e)=>handleToggle(id)}></div>
  )
}

export default Box
