import { useTheme } from '@emotion/react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import { MdOutlineDarkMode } from "react-icons/md";
import { tokens } from '../theme/Theme.js';
import './Navbar.css';
function Navbars() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Navbar
      expand="lg"
      className="nav"
      style={{
        backgroundColor: colors.primary[500],
        color: colors.grey[100],
      }}
    >
      <Container fluid>
        <Navbar.Brand
          href="#"
          className="nav-brand"
          style={{ color: colors.grey[100] }}
        >
          HRM
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 nav-bar"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{ color: colors.grey[100] }}>
              Home
            </Nav.Link>
            <Nav.Link href="#action2" style={{ color: colors.grey[100] }}>
              Task
            </Nav.Link>
            <NavDropdown
              title="Link"
              id="navbarScrollingDropdown"
              style={{ backgroundColor: colors.grey[100] }}
            >
              <NavDropdown.Item
                href="#action3"
                style={{ color: colors.grey[100] }}
              >
                Auth
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action4"
                style={{ color: colors.grey[100] }}
              >
                Login
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="#action5"
                style={{ color: colors.grey[100] }}
              >
                Registrer
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled style={{ color: colors.grey[100] }}>
              Multilevel
            </Nav.Link>
          </Nav>
          <div className="Sections">
            <MdOutlineDarkMode></MdOutlineDarkMode>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;