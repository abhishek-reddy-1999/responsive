import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './component/Sidebar/Sidebar.jsx';
import Navbars from './component/Navbar/Navbar.jsx'
import { ThemeProvider } from '@emotion/react';
import { tokens,useMode,ColorModeContext } from './component/theme/Theme.js';

function App() {

  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  return (
    <>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
     <div className='wrapper'>
      <Sidebar></Sidebar>
      <div class='container-fluid'>
        <Navbars></Navbars>
      <main className='main p-3' style={{backgroundColor: colors.grey[500],
      color: colors.grey[100],}}>
            <h4>Main</h4>
        </main>
        <footer style={{backgroundColor: colors.grey[500],
      color: colors.grey[100],}}>
          <h3>Fotter</h3>
          </footer>
          </div>
      </div>
      </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  )
}

export default App
