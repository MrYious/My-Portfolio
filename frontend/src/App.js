import { CssBaseline, Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Home from './components/Home';
import { MyData } from './MyData';
import Navbar from './components/Navbar';
import { ThemeModeContext } from './providers/ThemeModeContext';
import { useState } from 'react';

export default function App() {
  //State for the current mode [dark or light]
  const [mode, setMode] = useState('dark');

  //Object for the value of the ThemeModeContext
  const themeMode = {
    toggleThemeMode: () => {
      setMode((prev) => prev === 'light'? 'dark': 'light')
    }
  };

  //Theme for MUI ThemeContext
  const theme = createTheme({
    palette: {
      mode,
    },
    components: {
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            h1: 'h2',
            h2: 'h2',
            h3: 'h2',
            h4: 'h2',
            h5: 'h2',
            h6: 'h2',
            subtitle1: 'h2',
            subtitle2: 'h2',
            body1: 'span',
            body2: 'span',
          },
        },
      },
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


  return (<>
    <ThemeModeContext.Provider value={themeMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Grid
          container
        >
          <Navbar />
          <Home intro={MyData.intro}/>
          {/* <Home intro={MyData.intro}/> */}
          {/* ABOUT */}
          {/* SKILLS */}
          {/* PROJECTS */}
          {/* CONTACT */}
          {/* FOOTER */}
        </Grid>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  </>);
}

