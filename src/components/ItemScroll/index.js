import React from 'react'

import { useHistory } from 'react-router-dom'

import Card from '../Card'

import './index.css'

import ScrollContainer from 'react-indiana-drag-scroll'

const ItemScroll = ({
  data,
  style,
  title = 'title placeholder',
  marginLeft = null,
  titleColor = '#ffff',
  className = 'flex-scroll-container'
}) => {
  const history = useHistory()

  const handleRedirect = (productId) => {
    history.push(`/productDetails/${productId}`)
  }

  return (
    <>
      <div style={style}>
        <h2 style={{ color: titleColor, marginLeft, fontSize: 28 }}>{title}</h2>
        <ScrollContainer horizontal className={className}>
          {data?.products.map((item) => (
            <Card
              onClick={() => handleRedirect(item.id)}
              key={item.id}
              descriptionTitle={item.name}
              backgroundColor={item.bgColor}
              description={item.price ? item.price + '₾' : '2₾'}
              hoverable
              coverImage={item.mainPhoto}
            />
          ))}
        </ScrollContainer>
      </div>
    </>
  )
}

export default ItemScroll
