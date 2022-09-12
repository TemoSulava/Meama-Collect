import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: {
          langComponent: {
            select: 'Select',
            close: 'Close',
            lang: 'Select Language',
            loadingData: 'Loading Data... Please Wait...',
            coffeeMenu: 'Coffee Menu',
            tea: 'Tea',
            cocktails: 'Cocktails',
            cookies: 'Cookies',
            description: 'Description'
          }
        }
      },
      ka: {
        translation: {
          langComponent: {
            select: 'არჩევა',
            close: 'დახურვა',
            lang: 'ენის არჩევა',
            loadingData: 'ინფორმაცია იტვირთება... გთხოვთ დაიცადოთ...',
            coffeeMenu: 'ყავის მენიუ',
            tea: 'ჩაი',
            cocktails: 'კოქტეილები',
            Cookies: 'ორცხობილები',
            description: 'აღწერა'
          }
        }
      }
    }
  })

export default i18n
