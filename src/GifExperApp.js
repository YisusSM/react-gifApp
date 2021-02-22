import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    

    const [categories, setCategories] = useState([ 'Jujutsu Kaisen' ] )


return (
<>
    <h2>GiftExpertApp</h2>
    <AddCategory setCategories = {setCategories}/> 
    <hr />

    
    <ol>
        {
            categories.map( category => {
                return <GifGrid 
                category = {category} 
                key = {category} 
                /> 
            } )
        }
    </ol>
</>

)}