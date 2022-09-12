import React, { useState, useMemo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'


const getProjectApis = (currentLanguage) => ({
  PRODUCTS: `https://cms.meamacollect.ge/meama-collect/api/client/${currentLanguage}`,
  SUPPORTED_LANGUAGES: 'https://cms.meamacollect.ge/meama-collect/api/client/languages',
  CONTACT_INFO: 'https://cms.meamacollect.ge/meama-collect/api/client/ka/contact-info'
})

const UseProjectApis = () => {
  const { i18n } = useTranslation()

  const projectApis = useMemo(() => getProjectApis(i18n.language.split('-')[0]), [i18n.language])
  return projectApis

}

export default UseProjectApis
