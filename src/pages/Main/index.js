import React, { useState, useEffect } from 'react'
import { Layout } from 'antd'

import Modal from '../../components/Modal'
import Radio from '../../components/Radio'
import SvgLoader from '../../components/SvgLoader'

import projectApis from '../../apis'

import useFetch from '../../customHooks/useFetch'

const { Header, Footer, Content } = Layout

const Main = () => {
  const [showLanguageSelector, setShowLanguageSelector] = useState(false)
  const [langRadioValue, setLangRadioValue] = useState(null)

  const { data, loading, error } = useFetch(projectApis.SUPPORTED_LANGUAGES)

  const handleRadioChange = (e) => {
    setLangRadioValue(e.target.value)
  }

  if (error) console.error(error)

  if (loading) return <div>Placeholder loading text...</div>

  return (
    <div className='main-component'>
      <Layout>
        <Header className='grid-item-1' style={{ background: '#000000' }}>
          <SvgLoader className='site-logo' type='meama-logo' />
          <SvgLoader className='header-bg' type='header-svg' />
          <Modal
            icon={<SvgLoader type='language-menu' />}
            buttonStyle='lang'
            noBorder
            setShowModal={() => setShowLanguageSelector(true)}
            show={showLanguageSelector}
            onOk={() => {
              setShowLanguageSelector(false)
              setLangRadioValue(null)
            }}
            onCancel={() => {
              setShowLanguageSelector(false)
              setLangRadioValue(null)
            }}
            okText='არჩევა'
            cancelText='დახურვა'
            title='ენა'
            buttonType='ghost'
            shape='circle'
            ghost>
            <Radio className='flex-container' value={langRadioValue} onChange={handleRadioChange} data={data} />
          </Modal>
        </Header>
        <Content className='grid-item-2'>Content</Content>
        <Footer className='grid-item-3' style={{ background: 'green' }}>
          Footer
        </Footer>
      </Layout>
    </div>
  )
}

export default Main
