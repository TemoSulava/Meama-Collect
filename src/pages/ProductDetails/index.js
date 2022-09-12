import React from 'react'

import { CaretLeftFilled } from '@ant-design/icons'

import LanguageSelector from '../../applets/LanguageSelector'

import useFetch from '../../customHooks/useFetch'

import UseProjectApis from '../../apis/ApiGenerator'

import { useParams, useHistory } from 'react-router-dom'

import './index.css'

const ProductDetails = ({t, i18n}) => {
  const { productId } = useParams()

  const history = useHistory()

  const { PRODUCTS } = UseProjectApis()

  const { data, loading, error } = useFetch(PRODUCTS, PRODUCTS)

  if (error) console.error(error)

  if (loading) return <div>Placeholder loading text...</div>

  if (!data) return null

  function findProductById(data, id) {
    let queue = [...data]

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

  let product = findProductById(data && data, Number(productId))


  return (
    <div className='product-container'>
      <div className='action-buttons'>
        <div className='row'>
          <CaretLeftFilled style={{ fontSize: '40px', cursor: 'pointer' }} onClick={history.goBack} />
          <LanguageSelector customStyle='flex-item-style' buttonColor='black-text' />
        </div>
      </div>
      <div className='info-section'>
        <div className='left-column'>
          <div className='product-data'>
            <h3 style={{ fontWeight: 'bold' }}>{product?.name}</h3>
            <h3 style={{ fontWeight: 'bold', marginBottom: '40px' }}>{`${product?.price}₾`}</h3>
            <p>{product?.specifications[0]?.name}</p>
            <h3 style={{ fontWeight: 'bold', marginBottom: '40px' }}>{product?.specifications[0]?.value}</h3>
          </div>
        </div>
        <div className='right-column'>
          <img className='product-img' src={product?.mainPhoto} alt='' />
        </div>
      </div>
      <div className='description'>
        <h3 className='descr-title'>{t('langComponent.description')} </h3>
        <p className='descr-text' dangerouslySetInnerHTML={{ __html: product?.description }} />
      </div>
    </div>
  )
}

export default ProductDetails
