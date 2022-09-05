import React from "react";
import 'tachyons'

const Card = ({id,name,email,street,suite,city}) => {
    return (
         <div key={id-1} className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org//${id}?size=200x200`} alt='roboFriends' />
            <div>
                <h2><b>Name:</b> {name}</h2>
                <p><b>Email:</b> {email}</p>
                <p><b>Street:</b> {street}</p>
                <p><b>Suite:</b> {suite}</p>
                <p><b>City:</b> {city}</p>
            </div>
         </div>
    )
}

export default Card;