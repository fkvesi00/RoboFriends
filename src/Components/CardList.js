import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {
    //const {id,name,email,address}= robots
    
    const roboArray = robots.map((el,i) =>{
        const {id,name,email,address} = el
        const {street,suite,city} = address
        return <Card key={i} id={id} name={name} email={email} street={street} suite={suite} city={city}/>
    })

    return(
        <div>
           {roboArray}
        </div>
    )
}

export default CardList;