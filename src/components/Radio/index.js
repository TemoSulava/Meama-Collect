import React from 'react'
import {  Radio } from 'antd'


const RadioComponent = ({data, onChange, value, className}) => {
  return (
    <div className={className}>
      {data?.map((language) => (
        <>
          <img key={language.id} src={language.imageUrl} alt='Language' />
          <Radio.Group onChange={onChange} value={value}>
            <Radio key={language.id} value={language.name}>
              {language.name}
            </Radio>
          </Radio.Group>
        </>
      ))}
    </div>
  )
}

export default RadioComponent