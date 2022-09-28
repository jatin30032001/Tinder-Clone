import React from 'react'
import './TinderCards.css'
import { useState } from 'react';
import TinderCard from 'react-tinder-card'

const TinderCards = () => {

const [people , setPeople] = useState([

    {
        name :"Elon Musk",
        url : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
    },

    {
        name :"Jhonny Sins",
        url :"https://media.wired.com/photos/6019cab23453f789506008d0/master/pass/Sec_Bezos_1036084400.jpg"
    }

 ]);

 const swiped =(direction , nameToDelete)=>{
    console.log("removing"+ nameToDelete);
    // setLastDirection(direction);  
 };
 const outofFrame=(name) =>{
    console.log(name +"left the screen"); 
 }

  return (
    <div className='tinderCards'>
        <div className="tinderCards_cardContainer">
      {people.map((person) =>(
<TinderCard className='swipe'
key={person.name}
preventSwipe = {["up","down"]}
onSwipe={(dir) => swiped(dir , person.name)}
onCardLeftScreen={()=>outofFrame(person.name)}  >

<div style={{backgroundImage: `url(${person.url})`}}
  className="card"
>
    <h3>{person.name}</h3>
</div>
     

</TinderCard>
      ))}
      </div>
    </div> 
  )
}

export default TinderCards
