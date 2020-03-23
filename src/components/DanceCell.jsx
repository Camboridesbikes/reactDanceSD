import React from 'react';

const DanceCell = ({dances}) => {
    
    const Dances = dances.map( dance => {
        return(
            <tr>
                <th><a href={dance.link}>{dance.name}</a></th>
                <th>{dance.day}</th>
                <th>{`${dance.startTime}-${dance.endTime}`}</th>
                <th>{dance.where}</th>
                <th>{dance.cost}</th>
            </tr>
        )
    })


    return(
        <>
        <tr>
            <th>Dance</th>
            <th>Day</th>
            <th>Time</th>
            <th>Location</th>
            <th>Cost</th>  
        </tr> 
        {Dances}
        </>     
    );

}

export default DanceCell;