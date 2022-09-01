import React, { useState } from 'react'

import { Button, Modal } from 'antd'

const ModalComponent = ({
  children,
  title,
  buttonStyle,
  buttonText,
  cancelText,
  onOk = () => {},
  onCancel = () => {},
  okText,
  setShowModal,
  show = false,
  noBorder = false,
  icon,
  buttonType = 'primary',
  shape = 'default'
}) => {
  return (
    <>
      <Button
        className={noBorder ? buttonStyle + ' no-border' : buttonStyle}
        shape={shape}
        type={buttonType}
        onClick={setShowModal}>
        <p className='white-text'>{buttonText ? buttonText : icon}</p>
      </Button>
      <Modal
        cancelText={cancelText}
        okText={okText}
        title={title}
        icon={icon}
        shape={shape}
        visible={show}
        onOk={onOk}
        onCancel={onCancel}>
        {children ? children : null}
      </Modal>
    </>
  )
}

export default ModalComponent
