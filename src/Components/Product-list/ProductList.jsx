import React from 'react'
import Products from '../Products/Products'
import './ProductList.css'
import products from '../../data.json'

function ProductList() {
  return (
    <div className='pl'>
        <div className="pl-texts">
        <h1 className="pl-title">Create & inspire.  </h1>
        <p className="pl-desc">
          My social links and Previous done projects
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