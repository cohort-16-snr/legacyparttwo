import React from "react";
import '../index.css';
import Stars from './Rating.jsx';
export default function Cards(props) {
  return (
    <div>
      <h6 style={{ fontStyle: 'oblique', color: 'gray',paddingLeft:'120px',marginBottom:'-70px'}}>RELATED PRODUCTS</h6>
      <div className="wrapper">
        <div>
          <div className="shadow-md rounded-sm overflow-hidden item" style={{ width: '250px', height: '50vh' }}>
            <div className="relative">
              <svg className="absolute top-0 right-0" width="25" height="30" fill="currentColor">
                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
              </svg>
              <div>
                <img src="https://mdbootstrap.com/img/new/standard/city/031.jpg" className="" alt="" />
              </div>
            </div>

            <div className="p-4">
              <h5 className="text-xs text-gray-600 font-semibold mb-1">GATEGORY</h5>
              <p className="text-gray-800 mb-2 font-medium">EXPANDED PRODECT NAME WITH EXTRA TEXT</p>
              <div className="flex item-center justify-between mp-2">
                <h1 className="text-gray-600 font-italic text-xs">$123</h1>
              </div>
              <Stars />
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}
