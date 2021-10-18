import React from 'react'
import '../index.css';
import Stars from './Rating.jsx';
import Add from './CardOutfit1.jsx'

const Outfit = (props) =>(
  <div>
    <h6 style={{fontStyle: 'oblique' , color:'gray',paddingLeft:'120px', marginBottom:'70px'}}>OUTFIT LIST</h6>
    <div className="wrapper">
    <Add />
      {props.outfit.map((element,key)=>{
        return(
          <div key={key}>
            {console.log(element)}
            <div className="shadow-md rounded-sm overflow-hidden item" style={{ width: '250px', height: '50vh' }}>
              <div className="relative" onClick={() => props.delete(element.style_id)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 right-0" width="25" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <img src= {element.photos[0].url} className="" alt="" />
                </div>
              </div>

              <div className="p-4">
                <h5 className="text-xs text-gray-600 font-semibold mb-1">{element.category}</h5>
                <p className="text-gray-800 mb-2 font-medium">{element.name}</p>
                <div className="flex item-center justify-between mp-2">
                  <h1 className="text-gray-600 font-italic text-xs">{element.original_price}</h1>
                </div>
                <Stars />
              </div>
        </div>
            </div> 
        )
      })}
  </div>
  </div>
)
export default Outfit