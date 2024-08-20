//https://api.unsplash.com/photos/users/ashbot/likes?page=1>; rel="prev", <https://api.unsplash.com/photos/users/ashbot/likes?page=5>; rel="last", <https://api.unsplash.com/photos/users/ashbot/likes?page=3
import  { useState } from "react";


const ImageApp=()=>{
    const [search,setSearch]=useState();
    const [data,setData]=useState([])

    const handleSearch=(event)=>{
        setSearch(event.target.value)   //input field me jo bhi hm likhenge usko access krne k liye toh usko hm updated setSearch me store krrhe toh current search me uski value chli jaegi
    }
    //console.log(search);

    const getData=()=>{
        func();
    }

    const API_KEY= 'r5aXB5rqkWafeqCERsBMZ1kM4xsVjLmcooMFVhTf7Tc'
    console.log(API_KEY)
    const func=async ()=>{
        const get=await fetch(`https:/api.unsplash.com/search/photos?page=1&query=${search}&client_id=${API_KEY}`)
        const jsonData=await get.json();
        setData(jsonData.results) 
    }
    //console.log(data)
    
return(
    <>
    <div className="container">
        <h1>PhotoHunt</h1>
    <div className="input">
        <input type="text" placeholder="Search images" onChange={handleSearch}/>
        <button onClick={getData}>Search</button>
    </div>
    <div className="Images">
        {
            data.map((currVal)=>{
                //console.log(currVal.urls.full)
                return(
                    <img key={currVal.id} src={currVal.urls.full} alt={currVal.description}/>
                )
            })
        }
    </div>
    </div>
    </>
)
}
export default ImageApp