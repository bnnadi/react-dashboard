import { getCurrentLanguage } from '../../containers/LanguageSwitcher/config';
const langActions = {
  CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
  ACTIVATE_LANG_MODAL: 'ACTIVATE_LANG_MODAL',
  switchActivation: () => ({
    type: langActions.ACTIVATE_LANG_MODAL
  }),
  changeLanguage: language => {
    return {
      type: langActions.CHANGE_LANGUAGE,
      language: getCurrentLanguage(language)
    };
  }
};
export default langActions;