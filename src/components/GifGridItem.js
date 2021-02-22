import React from 'react'
import '../../src/index.css';

export const GifGridItem = ( { id, title, url } ) => {

    
    return (
        <div className = "card animate__animated animate__bounce animate__fadeInLeft">
           <img src = { url } alt = { title } />
           <p> { title } </p>
        </div>
    )
}
