
import { ThemeProvider } from '@mui/system';
import { useCallback, useState, useMemo, useContext, createContext } from 'react';

import { LightTheme } from './../themes/Light';
import { DarkTheme } from './../themes/Dark';
import { Box } from '@mui/material';


interface IThemeContextData {
    themeName: 'light' | 'dark';
    toggleTheme: () => void;
}


const ThemeContext = createContext({} as IThemeContextData);


export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};



interface IAppThemeProvider {
    children: React.ReactNode
}

export const AppThemeProvider: React.FC<IAppThemeProvider> = ({ children }) => {
    
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');


  const toggleTheme = useCallback(() => {
    setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
  },[]);


  const theme = useMemo(() => {
    if(themeName === 'light') return LightTheme;

    return DarkTheme;
  }, [themeName]);


  return(
    <ThemeContext.Provider value = {{themeName, toggleTheme}}>
      <ThemeProvider theme={theme}>
        <Box width='100vw' height='100vh' bgcolor={theme.palette.background.default}>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};