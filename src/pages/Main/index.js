import React, {useEffect} from 'react'
import { Layout } from 'antd'

import projectApis from '../../apis'

import LanguageSelector from '../../applets/LanguageSelector'

import useFetch from '../../customHooks/useFetch'

import SvgLoader from '../../components/SvgLoader'


const { Header, Footer, Content } = Layout

const Main = () => {

  const { data, loading, error } = useFetch(projectApis.PRODUCTS)

     if (error) console.error(error)

     if (loading) return <div>Placeholder loading text...</div>

     const generalData = data && data[0]

     //TODO 1: Use general data in the header along with 3 cards to render vertically.
     //TODO: 2: use rest of the data to render as rows according to the titles in the content body
     //TODO 3(optional): Create filter to filter for the subCategories where accessable

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
