import { useTranslation, Trans } from 'react-i18next'
import { useState, useEffect } from 'react'
import Main from './pages/Main'

function App() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const lng = navigator.language
    i18n.changeLanguage(lng)
  }, [])

  const lng = navigator.language

  return <Main />
}

export default App
