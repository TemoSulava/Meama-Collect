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

  
  const coffeeData = data[1]

  const teaData = data[3].subCategories[0]

  console.log(teaData)
  //TODO 3(optional): Create filter to filter for the subCategories where accessable

  return (
    <div className='main-component'>
      <Layout>
        <Header className='grid-item-1' style={{ background: '#000000' }}>
          <SvgLoader className='site-logo' type='meama-logo' />
          <SvgLoader className='header-bg' type='header-svg' />
          <LanguageSelector />
          <ItemScroll data={coffeeData} style={{ marginTop: '50px' }} title='ყავის მენიუ' />
        </Header>
        <Content className='content-item'>
          <ItemScroll data={teaData} marginLeft = '40px' style={{ marginTop: '200px' }} title='ჩაი' titleColor='#00000' />
        </Content>
        <Footer className='grid-item-3' style={{ background: 'grey' }}>
          Footer
        </Footer>
      </Layout>
    </div>
  )
}
  
export default Main
