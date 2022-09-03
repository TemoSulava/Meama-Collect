import React from 'react'
import { Layout } from 'antd'

import LanguageSelector from '../../applets/LanguageSelector'

import SvgLoader from '../../components/SvgLoader'


const { Header, Footer, Content } = Layout

const Main = () => {
  return (
    <div className='main-component'>
      <Layout>
        <Header className='grid-item-1' style={{ background: '#000000' }}>
          <SvgLoader className='site-logo' type='meama-logo' />
          <SvgLoader className='header-bg' type='header-svg' />
          <LanguageSelector />
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
