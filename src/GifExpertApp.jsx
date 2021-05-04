import React, { useState } from 'react'
import GifFormApp from './components/GifFormApp'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(["Snoopy"])
    
    return (
        <div>
            <h1>GifExpertApp</h1>
            <GifFormApp setCategories={setCategories}/>
            <hr/>
            <ol>
                {categories.map(category =>{
                    return <GifGrid key={category} category={category} />
                    // return <li key={category}>{category}</li>
                })       
                }
            </ol>
        </div>
    )
}

export default GifExpertApp