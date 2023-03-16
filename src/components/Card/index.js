import React, { useState } from 'react'
import Star from '../Star';
const Card = () => {
    const initialState = {
        firstName:"John",
        lastname:"Doe",
        phone:"+1 (719) 555-1212",
        email:"test@example.com",
        isFavorite:false
    }
const [contact, setContact] = useState(initialState);
// function toggleFavorit(){
//     setContact(prevState=>{
//         return {
//             ...prevState,
//             isFavorite : !prevState.isFavorite
//         }
//     })
 
// }
function toggleFavorit(){
    setContact(prevState =>({
        ...prevState,
        isFavorite: !prevState.isFavorite
    }))
}
  return (
    <main>
        <article style={{display:'flex',alignItems:'center', flexDirection:'column'}}>
            {/* <div onClick={toggleFavorit}>
           {starIcon}
            </div> */}
            <Star 
            isFilled={contact.isFavorite}
            toggleFavorit={toggleFavorit}/>
            <h2>name:{contact.firstName} {contact.lastname}</h2>
            <p>phone:{contact.phone}</p>
            <p>email:{contact.email}</p>
        </article>
    </main>
  )
}

export default Card