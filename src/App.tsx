import { useState } from 'react'
import './App.css'
import { accessToLocalStorage } from './helpers/accessToLocalStorage';
import { lightTheme, localStorageGetAction, localStorageThemeKey } from './helpers/constants';
import { themeDark, themeLight } from './theme/theme';
import { ThemeContext, ThemeProvider } from 'styled-components';

function App() {
  const theme = accessToLocalStorage({ key: localStorageThemeKey, action: localStorageGetAction }) || lightTheme;
  const [themeState, setThemeState] = useState(theme);
  const themeContext = themeState === lightTheme ? themeLight : themeDark;

  return (
    <ThemeContext.Provider value={{ themeState, setThemeState }}>
      <ThemeProvider theme={themeContext}>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App
