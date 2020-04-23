import React from 'react'
import { IntlProvider } from "react-intl"
import messages_de from "../i18n/de.json"
import messages_dk from "../i18n/dk.json"
import messages_en from "../i18n/en.json"
import messages_es from "../i18n/es.json"
import messages_fr from "../i18n/fr.json"
import messages_it from "../i18n/it.json"
import messages_pt from "../i18n/pt.json"
import messages_ru from "../i18n/ru.json"

import App from "./App";

/* addLocaleData(arLocaleData);
addLocaleData(esLocaleData); */

const messages = {
  'de': messages_de,
  'dk': messages_dk,
  'en': messages_en,
  'es': messages_es,
  'fr': messages_fr,
  'it': messages_it,
  'pt': messages_pt,
  'ru': messages_ru
}

export const AppWrapper = props => {
  console.log(messages[props.locale])
  return (
    <IntlProvider locale={props.locale} messages={messages[props.locale]}>
      <App />
    </IntlProvider>
  )
}

export default AppWrapper;