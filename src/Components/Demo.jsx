// // import React, { useState } from 'react'
// // const Demo = () => {
// //   const [open,setOpen]=useState(false)
// //   let menu = [ 'home',"contact" , "aboutus" , 'login']
// //   return (
// //     <div>
// //       <div className='logo'>
// //         <img src="https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg" alt="logo" 
// //         onClick={()=>setOpen(!open)}/>
// //         {
// //           open &&
// //           (<ul>
// //           {
// //             menu.map((menu)=>(
// //               <li key={menu}
// //               onClick={()=>setOpen(false)}>{menu}</li>
// //             ))
// //           }
// //         </ul>)
// //         }
// //       </div>
// //     </div>
// //   )
// // }

// // export default Demo;
// import React, { useState } from 'react'

// const Demo = () => {
//   const[button,setButton]=useState(false)
//   const[closeSection,setCloseSection]=useState(0)
//   const[closeSectionitem,setCloseSectionitem]=useState("Categery")
//   const click =()=>{
//     setButton(!button)
//   }
//   const close=(index,name)=>{
//     setCloseSection(index)
//     setButton(false)
//     setCloseSectionitem(name)

//   }
//   return (
//     <div>
//       <div>
//         <span onClick={click}>{closeSectionitem}</span>
//         {
//           button &&
//           <ul>
//         <li onClick={()=>{
//           close(0,'home')
//         }}
//         className={`${closeSection===0 ? 'active': ''}`}
//         >home</li>
//         <li onClick={()=>{
//           close(1,'contact')
//         }}
//         className={`${closeSection===1 ? 'active': ''}`}
//         >contact</li>
//         <li onClick={()=>{
//           close(2,'aboutus')
//         }}
//         className={`${closeSection===2 ? 'active': ''}`}
//         >aboutus</li>
//         <li onClick={()=>{
//           close(3,'contactus')
//         }}
//         className={`${closeSection===3 ? 'active': ''}`}
//         >contactus</li>
//         <li onClick={()=>{
//           close(4,'gallery')
//         }}
//         className={`${closeSection===4 ? 'active': ''}`}
//         >gallery</li>
//         <li onClick={()=>{
//           close(5,'gellery')
//         }}
//         className={`${closeSection===5 ? 'active': ''}`}
//         >gallery</li>
//         <li onClick={()=>{
//           close(6,'gallery')
//         }}
//         className={`${closeSection===6 ? 'active': ''}`}
//         >gallery</li>
//       </ul>
//         }
//       </div>
      
//     </div>
//   )
// }

// export default Demo;


// Read more option 

// import React, { useState } from 'react'

// const Demo = () => {
//   const StleData = {
//     WebkitLineClamp:4,
//     WebkitBoxOrient:'vertical',
//     overflow:'hidden',
//     display:'-webkit-box'
//   }
//   const [isopen,setIsopen]=useState(false)
//   return (
//     <div style={{border:'1px solid red',width:'300px'}}>
//       <p style={isopen ? null : StleData}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, possimus eveniet eius aut amet quis, ipsam ea voluptas impedit, asperiores sed modi velit! Odit expedita itaque, rerum tenetur minima aliquid.</p>
//       <button onClick={()=>{setIsopen(!isopen)}}>{isopen ? 'Read less...': 'Read more...'}</button>
//     </div>
//   )
// }

// export default Demo



import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}