import React from 'react';

function Learning (props){
    return(
        <div>
           <h1>I enjoyed learning using Foodstuff </h1>
           <h1> Students view about teaching level is {props.TeachingQuality}</h1>
           <h1> Teaching by asking questions to each other is {props.TeachingApproach}</h1>
           <h2> Feeling Awesome</h2>
        </div>
    )
}

export default Learning;