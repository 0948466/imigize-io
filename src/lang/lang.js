import en from './translate/en.js'
import ru from './translate/ru.js'

let locale

try {
  locale = localStorage.getItem('locale')
} catch (e) {
  console.log(e.message)
}

if (!locale) {
  try {
    locale = (navigator.languages
      ? navigator.languages[0]
      : (navigator.language || navigator.userLanguage)).substr(0, 2).toLowerCase()
  } catch (e) {
    console.log(e)
    locale = 'en'
  }
}

if (locale !== 'ru' && locale !== 'en') {
  locale = 'en'
}

document.querySelector('html').setAttribute('lang', locale)

switch (locale) {
  case 'ru':
    document.title = 'Бесконтактная примерка обуви в интернете'
    break
  default:
    document.title = 'Contactless shoe fitting in on-line shopping'
}

export default {
  locale,
  messages: {
    en,
    ru
  }
}
