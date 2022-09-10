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

  const findProductById = (array, id) => {
    if (!id) return array


    for (const item of array) {
      console.log(item)
      if (item.id === id) {
        return item
      }

      if (
        'products' in item &&
        item.products.length > 0 &&
        !('subCategories' in item) &&
        item.subCategories.length < 1
      ) {
        return findProductById(item.products, id)
      }
      if (
        'subCategories' in item &&
        item.subCategories.length > 0 &&
        !('products' in item) &&
        item.products.length < 1
      ) {
       return  findProductById(item.subCategories, id)
      }
      if ('products' in item && item.products.length > 0 && 'subCategories' in item && item.subCategories.length > 0) {
       return  findProductById(item.products, id) || findProductById(item.subCategories, id)
      }
    }
  }

  console.log(findProductById(data, 17))
  // console.log(findProductById(data))

  //create recursive function to check all the existing ids in the api

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
