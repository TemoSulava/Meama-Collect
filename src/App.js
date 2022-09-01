import { Layout } from 'antd'

import SvgLoader from './components/SvgLoader'
import { useTranslation, Trans } from 'react-i18next'
import { useState, useEffect } from 'react'
import Modal from './components/Modal'
import useFetch from './customHooks/useFetch'
import projectApis from './apis'

const { Header, Footer, Content } = Layout

function App() {
  const [showLanguageSelector, setShowLanguageSelector] = useState(false)

  const { t, i18n } = useTranslation()

  const { data, loading, error } = useFetch(projectApis.SUPPORTED_LANGUAGES)

   useEffect(() => {
     const lng = navigator.language
     i18n.changeLanguage(lng)
   }, [])

  if (error) console.error(error)

  if (loading) return <div>Placeholder loading text...</div>

 
  console.log(data)

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
              setShowLanguageSelector(false)
            }}
            onCancel={() => {
              setShowLanguageSelector(false)
            }}
            okText='არჩევა'
            cancelText='დახურვა'
            title='ენა'
            buttonType='ghost'
            shape='circle'
            ghost>

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
