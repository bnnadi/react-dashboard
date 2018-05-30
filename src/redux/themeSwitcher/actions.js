import { getCurrentTheme } from '../../containers/ThemeSwitcher/config';
const themeActions = {
  CHANGE_THEME: 'CHANGE_THEME',
  SWITCH_ACTIVATION: 'SWITCH_ACTIVATION',
  switchActivation: () => ({
    type: themeActions.SWITCH_ACTIVATION
  }),
  changeTheme: (attribute, themeName) => {
    const theme = getCurrentTheme(attribute, themeName);
    if (attribute === 'layoutTheme') {
      document.getElementsByClassName(
        'ndeputaContent'
      )[0].style.backgroundColor =
        theme.backgroundColor;
    }
    return {
      type: themeActions.CHANGE_THEME,
      attribute,
      theme
    };
  }
};
export default themeActions;