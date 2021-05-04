import axios from 'axios'
 
export const getGifs = async(category) =>{
    const apikey = 'yGsEUd2oFkyppcVxZBZ5H2aB7uQLZRIf'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${category}&limit=10`
    const resp = await axios(url)
    const {data} = resp.data
    // console.log(data)
    const gifs=data.map(img=>{
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    return gifs
} 