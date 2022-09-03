import React, { useState } from 'react'

import Modal from '../../components/Modal'
import Radio from '../../components/Radio'
import SvgLoader from '../../components/SvgLoader'

import useFetch from '../../customHooks/useFetch'

import projectApis from '../../apis'



const LanguageSelector = () => {
  const [showLanguageSelector, setShowLanguageSelector] = useState(false)
  const [langRadioValue, setLangRadioValue] = useState(null)

  const { data, loading, error } = useFetch(projectApis.SUPPORTED_LANGUAGES)

  const revertToInitialState = () => {
    setShowLanguageSelector(false)
    setLangRadioValue(null)
  }

  const handleRadioChange = (e) => {
    setLangRadioValue(e.target.value)
  }

  if (error) console.error(error)

  if (loading) return <div>Placeholder loading text...</div>

  return (
    <Modal
      icon={<SvgLoader type='language-menu' />}
      buttonStyle='lang'
      noBorder
      setShowModal={() => setShowLanguageSelector(true)}
      show={showLanguageSelector}
      onOk={() => {
        revertToInitialState()
      }}
      onCancel={() => {
        revertToInitialState()
      }}
      okText='არჩევა'
      cancelText='დახურვა'
      title='ენა'
      buttonType='ghost'
      shape='circle'
      ghost>
      <Radio className='flex-container' value={langRadioValue} onChange={handleRadioChange} data={data} />
    </Modal>
  )
}

export default LanguageSelector
