import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

import  {BrowserRouter as Router} from 'react-router-dom'

import Main from './pages/Main'

function App() {
  const { t, i18n } = useTranslation()


  useEffect(() => {
    const lng = navigator.language
    i18n.changeLanguage(lng)
  }, [])

  const lng = navigator.language


  return (
    <Router>
      <Main t={t} i18n={i18n} />
    </Router>
  ) 
}

export default App
