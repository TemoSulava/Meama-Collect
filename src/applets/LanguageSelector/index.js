import React, { useState, useEffect } from 'react'

import { useTranslation } from 'react-i18next'


import Modal from '../../components/Modal'
import Radio from '../../components/Radio'
import SvgLoader from '../../components/SvgLoader'

import useFetch from '../../customHooks/useFetch'

import projectApis from '../../apis'



const LanguageSelector = ({customStyle = 'lang', buttonColor}) => {
  const [showLanguageSelector, setShowLanguageSelector] = useState(false)
  const [langRadioValue, setLangRadioValue] = useState(null)


  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }


  const { data, loading, error } = useFetch(projectApis.SUPPORTED_LANGUAGES, i18n.language)

  const revertToInitialState = () => {
    setShowLanguageSelector(false)
    setLangRadioValue(null)
  }


  const handleRadioChange = (e) => {
    setLangRadioValue(e.target.value)
  }

  if (error) console.error(error)

  if (loading) return <div>{t('langComponent.loadingData')}</div>

  return (
    <Modal
      icon={<SvgLoader type='language-menu' />}
      buttonStyle={customStyle}
      noBorder
      buttonColor={buttonColor}
      setShowModal={() => setShowLanguageSelector(true)}
      show={showLanguageSelector}
      onOk={() => {
        revertToInitialState()
        changeLanguage(langRadioValue)
      }}
      onCancel={() => {
        revertToInitialState()
      }}
      okText={t('langComponent.select')}
      cancelText={t('langComponent.close')}
      title={t('langComponent.lang')}
      buttonType='ghost'
      shape='circle'>
      <Radio className='flex-container' value={langRadioValue} onChange={handleRadioChange} data={data} />
    </Modal>
  )
}

export default LanguageSelector
