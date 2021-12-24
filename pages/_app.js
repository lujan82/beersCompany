import { useStore } from '../redux/store'
import { Provider as ProviderRedux } from 'react-redux'

// i18n
import { I18nextProvider } from 'react-i18next';
import i18n from '../translations/i18n';

import '../styles/index.scss'

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <I18nextProvider i18n={i18n}>
      <ProviderRedux store={store}>
        <Component {...pageProps} />
      </ProviderRedux>
    </I18nextProvider>
  )
}

export default MyApp
