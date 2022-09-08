import React from 'react'

import { useParams } from 'react-router-dom'

import './index.css'

//<button onClick={history.goBack}>Back</button> - to be used to go back to the main page

const ProductDetails = () => {
  const { productId } = useParams()

  return (
    <div className='product-container'>
      <div className='top-bar'></div>
      <div className="info-section"></div>
      <div className="description"></div>
      <div className="bottom"></div>
    </div>
  )
}

export default ProductDetails
