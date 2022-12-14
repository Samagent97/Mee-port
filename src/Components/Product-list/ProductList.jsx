import React from 'react'
import Products from '../Products/Products'
import './ProductList.css'
import products from '../../data.json'

function ProductList() {
  return (
    <div className='pl'>
        <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. Mr Carty </h1>
        <p className="pl-desc">
          Check into past works and see of what help i can be to you 
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
            //<p key={item.id}> {item.img}</p>
            <Products link={item.link} key={item.id} img={item.img} />
        ))}
        
        
        {/* {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))} */}
      </div>
        </div>
  )
}

export default ProductList