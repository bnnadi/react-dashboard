import React from 'react';
import { Provider } from 'react-redux';
import { store, history } from './redux/store';
import PublicRoutes from './router';
import { ThemeProvider } from 'styled-components';
import { LocaleProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import themes from './settings/themes';
import AppLocale from './languageProvider';
import config, {
  getCurrentLanguage
} from './containers/LanguageSwitcher/config';
import { themeConfig } from './settings';
import AppHolder from './appStyle';
import Boot from './redux/boot';

const currentAppLocale = AppLocale[getCurrentLanguage(config.defaultLanguage || 'english').locale];

const App = () => (
  <LocaleProvider locale={currentAppLocale.antd}>
    <IntlProvider locale={currentAppLocale.locale} messages={currentAppLocale.messages}>
      <ThemeProvider theme={themes[themeConfig.theme]}>
        <AppHolder>
          <Provider store={store}>
            <PublicRoutes history={history} />
          </Provider>
        </AppHolder>
      </ThemeProvider>
    </IntlProvider>
  </LocaleProvider>
);
Boot()
  .then(() => App())
  .catch(error => console.log(error))
export default App;
export { AppLocale };
