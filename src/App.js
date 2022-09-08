import { useTranslation, Trans } from 'react-i18next'
import { useState, useEffect } from 'react'

import  {BrowserRouter as Router} from 'react-router-dom'

import Main from './pages/Main'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const lng = navigator.language
    i18n.changeLanguage(lng)
  }, [])

  const lng = navigator.language

  return (
    <Router>
      <Main />
    </Router>
  ) 
}

export default App
