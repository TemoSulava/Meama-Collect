import React from 'react'

import Card from '../Card'

import './index.css'

import ScrollContainer from 'react-indiana-drag-scroll'

const ItemScroll = ({data, title='title placeholder', className = 'flex-scroll-container'}) => {
  console.log(data)
  return (
    <>
      <h2 style={{ color: '#ffff', fontSize: 28 }}>{title}</h2>
      <ScrollContainer horizontal className={className}>
        {data?.products.map((item) => (
          <Card key={item.id} descriptionTitle={item.name} description='2₾' hoverable coverImage={item.mainPhoto} />
        ))}
      </ScrollContainer>
    </>
  )
}

export default ItemScroll