import React, { useState, useEffect } from 'react'

import { Route, Switch } from 'react-router-dom'


import { Layout } from 'antd'


import LanguageSelector from '../../applets/LanguageSelector'

import useFetch from '../../customHooks/useFetch'

import SvgLoader from '../../components/SvgLoader'
import ItemScroll from '../../components/ItemScroll'
import ProductDetails from '../ProductDetails'

import './index.css'
import UseProjectApis from '../../apis/ApiGenerator'

const { Header, Footer, Content } = Layout

const Main = ({t, i18n}) => {
  const { PRODUCTS } = UseProjectApis()
  const { data, loading, error } = useFetch(PRODUCTS, i18n.language)



 

  if (error) console.error(error)

  if (loading) return <div>Placeholder loading text...</div>

  if (!data) return null

  const coffeeData = data[1]

  const teaData = data[3]?.subCategories[0]

  const coffeecocktails = data[2]?.subCategories[0]

  const cookies = data[6]

  


  return (
    <div className='main-component'>
      <Layout style={{ background: '#fffff' }}>
        <Switch>
          <Route exact path='/productDetails/:productId'>
            <ProductDetails t={t} i18n={i18n} />
          </Route>
        </Switch>
        <Switch>
          <Route exact path='/'>
            <Header className='grid-item-1' style={{ background: '#000000' }}>
              <SvgLoader className='site-logo' type='meama-logo' />
              <SvgLoader className='header-bg' type='header-svg' />
              <LanguageSelector />
              <ItemScroll data={coffeeData} style={{ marginTop: '50px' }} title={t('langComponent.coffeeMenu')} />
            </Header>
            {/*TODO: NEED TO REFACTOR REDUNDANT ItemScroll usage*/}
            <Content style={{ minHeight: 'none' }} className='content-item'>
              <ItemScroll
                data={teaData}
                marginLeft='40px'
                style={{ marginTop: '30%' }}
                title={t('langComponent.tea')}
                titleColor='#00000'
              />
              <ItemScroll
                data={coffeecocktails}
                marginLeft='40px'
                style={{ marginTop: '30%' }}
                title={t('langComponent.cocktails')}
                titleColor='#00000'
              />
              <ItemScroll
                data={cookies}
                marginLeft='40px'
                style={{ marginTop: '30%' }}
                title={t('langComponent.cookies')}
                titleColor='#00000'
              />
              <footer className='footer-component'>
                <div className='footer-container'>
                  <div className='inner'>
                    <div className='row no-spaces'>
                      <div className='left-align'>
                        <div>
                          <p>Contact Us</p>
                          <a style={{fontWeight: 'bold', fontSize: '20px'}} href='tel:08 08'>*08 08</a>
                        </div>
                      </div>
                      <div className='right-align'>
                        <div style={{justifyContent: 'flex-end', top: '-9%'}} className="socials">
                          {/* <a href="https://meama.ge/ka/home" target="_blank">webpage</a>
                          <a href="https://www.instagram.com/meamacollect/" target="_blank">instagram</a>
                          <a href="https://www.facebook.com/MeamaCoffee" target="_blank">fb</a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </Content>
          </Route>
        </Switch>
      </Layout>
    </div>
  )
}

export default Main
