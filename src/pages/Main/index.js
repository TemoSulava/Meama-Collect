import React, { useEffect } from 'react'
import { Layout } from 'antd'

import projectApis from '../../apis'

import LanguageSelector from '../../applets/LanguageSelector'

import useFetch from '../../customHooks/useFetch'

import SvgLoader from '../../components/SvgLoader'

import ItemScroll from '../../components/ItemScroll'

const { Header, Footer, Content } = Layout

const Main = () => {
  const { data, loading, error } = useFetch(projectApis.PRODUCTS)

  if (error) console.error(error)

  if (loading) return <div>Placeholder loading text...</div>

  if(!data) return null

  console.log(data)
  
  const coffeeData = data[1]

  //TODO 3(optional): Create filter to filter for the subCategories where accessable

  return (
    <div className='main-component'>
      <Layout>
        <Header className='grid-item-1' style={{ background: '#000000' }}>
          <SvgLoader className='site-logo' type='meama-logo' />
          <SvgLoader className='header-bg' type='header-svg' />
          <LanguageSelector />
          <ItemScroll data={coffeeData} title='ყავის მენიუ' />
        </Header>
        <Content className='grid-item-2'></Content>
        <Footer className='grid-item-3' style={{ background: 'green' }}>
          Footer
        </Footer>
      </Layout>
    </div>
  )
}

export default Main
