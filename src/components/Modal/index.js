import React, { useState } from 'react'

import { Button, Modal } from 'antd'

const ModalComponent = ({
  children,
  title,
  buttonStyle,
  buttonText,
  noBorder = false,
  icon,
  buttonType = 'primary',
  shape = 'default'
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <Button className={noBorder ? buttonStyle + ' no-border': buttonStyle} shape={shape} type={buttonType} onClick={showModal}>
        <p className='white-text'>{buttonText ? buttonText : icon}</p>
      </Button>
      <Modal className='white-text ' title={title} icon={icon} shape={shape} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {children ? children : null}
      </Modal>
    </>
  )
}

export default ModalComponent
