import { CssBaseline, Grid, useMediaQuery } from '@mui/material';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';

import About from './components/About';
import Home from './components/Home';
import { MyData } from './data/MyData';
import Skill from './components/Skill';
import { ThemeModeContext } from './providers/ThemeModeContext';
import { useState } from 'react';

export default function App() {
  const [mode, setMode] = useState('dark');

  let theme = createTheme({
    palette: {
      mode,
      ...( mode === 'light'
      ? {
        // Light Mode
        primary: {
          main: '#bf360c',
        },
        background: {
          default: "#c7c7c7",
          paper: "#b0b0b0",
        }
      }
      : {
        // Dark Mode
        primary: {
          main: '#ff6434',
        },
        background: {
          default: "#121212",
          paper: "#000000"
        }
      })
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 480,
        md: 770,
        lg: 1025,
        xl: 1536,
      },
    },
  });

  theme = responsiveFontSizes(theme);
  const small = useMediaQuery(theme.breakpoints.down('md'));

  const themeMode = {
    toggleThemeMode: () => {
      setMode((prev) => prev === 'light'? 'dark': 'light')
    }
  };

  return (<>
    <ThemeModeContext.Provider value={themeMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        {/* ROOT */}
        <Grid container className='selector' direction={"column"}>
          <Home intro={MyData.intro} small={small}/>
          <About about={MyData.about} />
          <Skill skills={MyData.skills}/>
          {/* PROJECTS */}
          {/* CONTACT */}
          {/* FOOTER */}
        </Grid>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  </>);
}