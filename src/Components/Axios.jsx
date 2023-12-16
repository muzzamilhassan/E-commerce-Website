import React, { useState } from 'react'
import axios from 'axios'
const Axios = () => {
    const [data,setData]=useState([])
    const getdata = ()=>{
        axios.get("https://countriesnow.space/api/v0.1/countries")
        .then((res)=>{
           setData(res.data.data)
           console.log(res.data.data);
        })
    }
  return (
    <div>
        <button
        onClick={()=>{
            getdata()
        }}>new</button>
       <div className="container">
        <div className="row">
            {
                data.map((e)=>{
                  return(
                    <div className="col-4">
                    <div className="card" style={{width: "18rem;"}}>
                        <div className="card-body">
                            <h5 className="card-title">{e.country}</h5>
                            <p className="card-text">{e.cities}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                  )
                })
            }
        </div>
       </div>
    </div>
  )
}

export default Axios





// const countryList = []
// useEffect(()=>{
//     getcountry("https://countriesnow.space/api/v0.1/countries")
// },[])
// const getcountry = async (URL)=>{
//     try {
//         await axios.get(URL).then((res)=>{
          
//             // console.log(res.data.data);
//             res.data.data.map((item)=>{
//                 countryList.push(item.country)
//             })
           
//         })
//     } catch (error) {
//         console.log(error.message);
//     }
// }
