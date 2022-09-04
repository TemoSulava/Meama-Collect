import { Card as AntCard } from 'antd'
import React from 'react'
const { Meta } = AntCard

const Card = ({
  description,
  descriptionTitle,
  metaClassName = null,
  backgroundColor = null,
  cardClassName,
  coverImage = null,
  imageAltText = 'image desc',
  size = 'small',
  hoverable = false,
  style = { width: 110, background: '#E8E8E8', backgroundColor: 'transparent', border: 'none' }
}) => (
  <AntCard
    className={cardClassName}
    hoverable={hoverable}
    style={style}
    size={size}
    cover={
      coverImage ? (
        <img
          alt={imageAltText}
          style={{ maxWidth: '100%', maxHeight: '100%' }}
          src={coverImage}
        />
      ) : null
    }>
    {description ? <Meta title={descriptionTitle} className={metaClassName} description={description} /> : null}
  </AntCard>
)

export default Card
