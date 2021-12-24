import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import i18n from '../../translations/i18n';

const Languages = () => {

  const lang = i18n.language
  const [langActive, setLangActive] = useState(i18n.language)

  useEffect(() => {
    setLangActive(lang)
  }, [lang])

  const langCookie = Cookies.get('lang')

  if (langCookie !== '' && lang !== langCookie) i18n.changeLanguage(langCookie)

  const changeLanguage = lang => {
    i18n.changeLanguage(lang)
    Cookies.set('lang', lang)
  }

  return (
    <div className="languages">
      <button className={langActive === 'es' ? 'active' : ''} onClick={() => changeLanguage('es')}>ES</button>
      <button className={langActive === 'en' ? 'active' : ''} onClick={() => changeLanguage('en')}>EN</button>
    </div>
  );
};

export default Languages;