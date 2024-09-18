import { useTheme } from '@emotion/react';
import { IconButton } from '@mui/material';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import { CiLight } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineDarkMode } from "react-icons/md";
import { ColorModeContext, tokens } from '../theme/Theme.js';
import './Navbar.css';
function Navbars() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Navbar
      expand="lg"
      className="nav"
      style={{
        backgroundColor: colors.blue[5],
        color: colors.gray[6],
      }}
    >
      <Container fluid className="nav-container" style={{display:'flex',justifyContent:'space-between'}}>
        <Navbar.Brand
          href="#"
          className="nav-brand"
          style={{ color: colors.gray[6] }}
        >
          HRM
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 nav-bar"
            style={{ maxHeight: "100px", backgroundColor: colors.blue[5] }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{ color: colors.gray[6] }}>
              Home
            </Nav.Link>
            <Nav.Link href="#action2" style={{ color: colors.gray[6] }}>
              Task
            </Nav.Link>
            <NavDropdown
              title="Link"
              id="navbarScrollingDropdown"
              style={{ backgroundColor: colors.blue[5] }}
            >
              <NavDropdown.Item
                href="#action3"
                style={{ color: colors.gray[6] }}
              >
                Auth
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action4"
                style={{ color: colors.gray[6] }}
              >
                Login
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="#action5"
                style={{ color: colors.gray[6] }}
              >
                Registrer
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled style={{ color: colors.gray[6] }}>
              Multilevel
            </Nav.Link>
            <div className="dark">
              <MdOutlineDarkMode></MdOutlineDarkMode>
              <IoIosNotifications></IoIosNotifications>
            </div>
          </Nav>
        </Navbar.Collapse>
        <div className="Sections">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <MdOutlineDarkMode />
          ) : (
            <CiLight />
          )}
        </IconButton>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navbars;