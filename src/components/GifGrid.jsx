import React from 'react'
import useAxiosGifs from '../hooks/useAxiosGifs'

import GifGridItem from './GifGridItem'
import Loading from './Loading'

const GifGrid = ({category}) => {

    const {data, loading} = useAxiosGifs(category)
    
   
    return (
        <div>
           <h3>{category}</h3> 
           <div className="container">
                
                {loading && <Loading /> }
                
                {data.map(img=>{
                    return <GifGridItem img={img} key={img.id} />
                
                //   return <img key={img.id} src={img.url} alt={img.title} />
                })
                }
           </div>
        </div>
    )
}

export default GifGrid
