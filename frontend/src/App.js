import { CssBaseline, Grid, useMediaQuery } from '@mui/material';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';

import About from './components/About';
import Home from './components/Home';
import { MyData } from './data/MyData';
import Navbar from './components/Navbar';
import { ThemeModeContext } from './providers/ThemeModeContext';
import { useState } from 'react';

export default function App() {
  //State for the current mode [dark or light]
  const [mode, setMode] = useState('dark');

  //Theme for MUI ThemeContext
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

  //Object for the value of the ThemeModeContext
  const themeMode = {
    toggleThemeMode: () => {
      setMode((prev) => prev === 'light'? 'dark': 'light')
    }
  };

  return <>Hello</>

  // return (<>
  //   <ThemeModeContext.Provider value={themeMode}>
  //     <ThemeProvider theme={theme}>
  //       <CssBaseline/>
  //       {/* ROOT */}
  //       <Grid container className='selector' direction={"column"}>
  //         {/* <Navbar small={small} />
  //         <Home intro={MyData.intro} />
  //         <About about={MyData.about} />
  //         <Skill skills={MyData.skills}/> */}
  //         {/* PROJECTS */}
  //         {/* CONTACT */}
  //         {/* FOOTER */}
  //       </Grid>
  //     </ThemeProvider>
  //   </ThemeModeContext.Provider>
  // </>);
}