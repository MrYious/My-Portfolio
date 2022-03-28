import { CssBaseline, Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Home from './components/Home';
import { MyData } from './data/MyData';
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
          className='selector'
          direction={"column"}
        >
          <Grid container item xs={12} direction={"column"} sx={{backgroundColor: ""}}>
            <Navbar />
            <Home intro={MyData.intro} />
          </Grid>
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

