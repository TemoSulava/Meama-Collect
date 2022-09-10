import React from 'react'

import { CaretLeftFilled } from '@ant-design/icons'

import LanguageSelector from '../../applets/LanguageSelector'

import useFetch from '../../customHooks/useFetch'

import projectApis from '../../apis'

import { useParams, useHistory } from 'react-router-dom'

import './index.css'

const ProductDetails = () => {
  const { productId } = useParams()

  const history = useHistory()

  const { data, loading, error } = useFetch(projectApis.PRODUCTS)

  if (error) console.error(error)

  if (loading) return <div>Placeholder loading text...</div>

  if (!data) return null



 function findProductById(data, id) {
   
   console.log(typeof id)
   let queue = [...data]
   console.log(queue)

   while (queue.length) {
     const current = queue.shift()
     if (current.id === id) {
       return current
     }

     if (current.products?.length) {
       queue.push(...current.products)
     }

     if (current.subCategories?.length) {
       queue.push(...current.subCategories)
     }
   }
 }

 let result = findProductById(data && data, Number(productId))

 console.log(result)

  return (
    <div className='product-container'>
      <div className='action-buttons'>
        <div className='row'>
          <CaretLeftFilled style={{ fontSize: '40px', cursor: 'pointer' }} onClick={history.goBack} />
          <LanguageSelector customStyle='flex-item-style' buttonColor='black-text' />
        </div>
      </div>
      <div className='info-section'></div>
      <div className='description'></div>
      <div className='bottom'></div>
    </div>
  )
}

export default ProductDetails
