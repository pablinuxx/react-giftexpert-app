import React, { useState } from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from './GifGrid'

const GiftExpertApp = () => {
   const [categories, setCategories] = useState(['Death Note'])


       return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories= { setCategories } />
            <hr/>

            <ol>
                {
                    categories.map( category =>
                    <GifGrid 
                    key = { category }
                    category = { category}
                     />     
                    )
                }
            </ol>
        </>
    )
}

export default GiftExpertApp
