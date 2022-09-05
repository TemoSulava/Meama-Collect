import { Button, Drawer as AntDrawer,  Space } from 'antd'
import React, {useEffect, useState} from 'react'

const Drawer = ({placement = 'bottom', showDrawer,  onOk = () => {}, onClose = () => {}  }) => {

    const [show, setShow] = useState(showDrawer)

    console.log(showDrawer)

    useEffect(() => {
      setShow(showDrawer)
    }, [showDrawer])

  return (
    <>
      <Space>
        <Button type='primary' onClick={() => setShow(true)}>
          Open
        </Button>
      </Space>
      <AntDrawer
        placement={placement}
        width={500}
        height='100%'
        onClose={() => {
          onClose()
          setShow(false)
        }}
        onCancel={() => {
          onClose()
          setShow(false)
        }}
        visible={show}
        extra={
          <Space>
            <Button
              onClick={() => {
                onClose()
                setShow(false)
              }}>
              Cancel
            </Button>
            <Button type='primary' onClick={onOk}>
              OK
            </Button>
          </Space>
        }>
        <p>Product Data Goes here</p>
      </AntDrawer>
    </>
  )
}

export default Drawer
