import React from 'react'
import './Products.css'
// import image from '../../assets/work1.png';
function Products({img , link}) {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>

        <a href={link} target="_blank" rel="noreferrer">
        <img src={require(`../../assets/${img}`)} alt="" className="p-img" />
      </a>
      {/* <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a> */}
    </div>
  )
}

export default Products