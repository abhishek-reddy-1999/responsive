import { ThemeProvider } from '@emotion/react';
import './App.css';
import Navbars from './component/Navbar/Navbar.jsx';
import Sidebar from './component/Sidebar/Sidebar.jsx';
import { ColorModeContext, tokens, useMode } from './component/theme/Theme.js';

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
      <main className='main p-3' style={{backgroundColor: colors.blue[5],
      color: colors.gray[6],}}>
            <h4>Main</h4>
        </main>
        <footer style={{backgroundColor: colors.blue[5],
      color: colors.gray[6],}}>
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
