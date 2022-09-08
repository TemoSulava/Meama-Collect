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

 console.log(data)

 //create recursive function to check all the existing ids in the api

  return (
    <div className='product-container'>
      <div className='action-buttons'>
        <div className='row'>
          <CaretLeftFilled style={{ fontSize: '40px', cursor: 'pointer' }} onClick={history.goBack} />
          <LanguageSelector customStyle='flex-item-style' buttonColor='black-text' />
        </div>
      </div>
      <div className='info-section'>

      </div>
      <div className='description'></div>
      <div className='bottom'></div>
    </div>
  )
}

export default ProductDetails
