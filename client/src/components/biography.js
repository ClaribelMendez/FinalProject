import React from 'react'
import { useState } from 'react'

function Biography(props){
     const [names, setNames] = useState(props.name)
    console.log(names[0])
     fetch(`theaudiodb.com/api/v1/json/2/search.php?s=${names[1]}`)
           .then(
         (response) => {
           response.json().then((data) => {
                console.log(data)
           });
         }
       );
  return (
    <div>
      
    </div>
  )
}

export default Biography