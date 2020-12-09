import React from 'react'

const Recipe = ({title , calories , image , ingredients}) => {
    return (
        <div className='items'>
            <h3 className='title'>Title : {title}</h3>

              <ol className='listdata'>  
            {
                   ingredients.map((recipe)=>(
                       <li className='list_item'>
                       {recipe.text}
                       
                       </li>
                   ))
              }
              
            </ol>

            
            <p>Calories : {calories}</p>
            <img src={image} alt="" className='image' />
            
        </div>
    )
}

export default Recipe
