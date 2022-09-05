import React, { useEffect } from 'react'
import { Layout } from 'antd'

import projectApis from '../../apis'

import LanguageSelector from '../../applets/LanguageSelector'

import useFetch from '../../customHooks/useFetch'

import SvgLoader from '../../components/SvgLoader'

import ItemScroll from '../../components/ItemScroll'

import './index.css'

const { Header, Footer, Content } = Layout

const Main = () => {
  const { data, loading, error } = useFetch(projectApis.PRODUCTS)

  if (error) console.error(error)

  if (loading) return <div>Placeholder loading text...</div>

  if(!data) return null
  console.log(data && data)


  
  const coffeeData = data[1]

  const teaData = data[3]?.subCategories[0]

  const coffeecocktails = data[2]?.subCategories[0]

  const cookies = data[6]


  return (
    <div className='main-component'>
      <Layout style={{ background: '#fffff' }}>
        <Header className='grid-item-1' style={{ background: '#000000' }}>
          <SvgLoader className='site-logo' type='meama-logo' />
          <SvgLoader className='header-bg' type='header-svg' />
          <LanguageSelector />
          <ItemScroll data={coffeeData} style={{ marginTop: '50px' }} title='ყავის მენიუ' />
        </Header>
        {/*TODO: NEED TO REFACTOR REDUNDANT ItemScroll usage*/}
        <Content style={{ minHeight: 'none' }} className='content-item'>
          <ItemScroll data={teaData} marginLeft='40px' style={{ marginTop: '30%' }} title='ჩაი' titleColor='#00000' />
          <ItemScroll
            data={coffeecocktails}
            marginLeft='40px'
            style={{ marginTop: '30%' }}
            title='კოქტეილები'
            titleColor='#00000'
          />
          <ItemScroll
            data={cookies}
            marginLeft='40px'
            style={{ marginTop: '30%' }}
            title='ორცხობილები'
            titleColor='#00000'
          />
        </Content>
      </Layout>
    </div>
  )
}
  
export default Main
