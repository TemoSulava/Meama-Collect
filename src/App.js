import { Layout } from 'antd'

import SvgLoader from './components/SvgLoader'
import { useTranslation, Trans } from 'react-i18next'
import { useState, useEffect } from 'react'
import Modal from './components/Modal'

const { Header, Footer, Content } = Layout

function App() {
  const [showLanguageSelector, setShowLanguageSelector] = useState(false)

  const { t, i18n } = useTranslation()

  useEffect(() => {
    const lng = navigator.language
    i18n.changeLanguage(lng)
  }, [])

  const lng = navigator.language

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
              console.log('ok clicked')
              setShowLanguageSelector(false)
            }}
            onCancel={() => {
              console.log('cancel clicked')
              setShowLanguageSelector(false)
            }}
            okText='არჩევა'
            cancelText='დახურვა'
            title='ენა'
            buttonType='ghost'
            shape='circle'
            ghost
          >
           <p>options</p>
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

export default App
