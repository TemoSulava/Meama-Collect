

 const currentLanguage = navigator.language === 'en-US' ? 'en' : 'ka'

 console.log('api lang', currentLanguage)

 const projectApis = {
   PRODUCTS: `https://cms.meamacollect.ge/meama-collect/api/client/${currentLanguage}`,
   SUPPORTED_LANGUAGES: 'https://cms.meamacollect.ge/meama-collect/api/client/languages',
   CONTACT_INFO: 'https://cms.meamacollect.ge/meama-collect/api/client/ka/contact-info'
 }

export default projectApis