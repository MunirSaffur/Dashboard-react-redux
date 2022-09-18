
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../asstes/images/logo.svg';
import accountIcon from '../asstes/images/icons/Account_Filled.svg';
import cardStroke from '../asstes/images/icons/Card_Stroke.svg';
import functionStroke from '../asstes/images/icons/Function_Stroke.svg';
import compaignsIcon from '../asstes/images/icons/Campaigns_Filled.svg';
import {  Avatar, Flex, Box, Text, AvatarBadge  } from '@chakra-ui/react'
import { logInState } from '../features/dataCenter/dataSlice'
import { useSelector } from 'react-redux';

function Header() {
  const loginState = useSelector(logInState)
  const menuItems = ["Menu 1","Menu 2","Menu 3","Menu 4","Menu 5","Menu 6",]

  return (
    <Navbar expand="lg" className='px-3 mb-4' >
      <Container fluid>
        <Navbar.Brand href="#" className='me-5'><img src={logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px', alignItems: "center" }}
            navbarScroll
          >
            <img src={accountIcon} />
            <NavDropdown title="Hesaplar" className='me-4'>
              {menuItems.map(item=>(<NavDropdown.Item key={menuItems.indexOf(item)}>{item}</NavDropdown.Item>))}
              
            </NavDropdown>
            <Nav.Link href="#" className='me-4'><img src={cardStroke} className="d-inline-block" /> Kartlar</Nav.Link>
            <Nav.Link href="#" className='me-4'><img src={functionStroke} className="d-inline-block" /> Işlemler</Nav.Link>
            <Nav.Link href="#" className='me-4'><img src={compaignsIcon} className="d-inline-block" /> Kampanyalar</Nav.Link>
          </Nav>
          <Flex>
            <Avatar size='md' src='https://bit.ly/sage-adebayo'>
            <AvatarBadge boxSize='1em' bg='green' style={{top:"0"}} />
            </Avatar>
            <Box ml='3'>
              <Text fontWeight='bold'>
                { loginState.username !== "" ? loginState.username : localStorage.getItem("username")}
              </Text>
              <Text fontSize='sm'>
                { loginState.userType !== "" ? loginState.userType : localStorage.getItem("userType") }
                </Text>
            </Box>
          </Flex>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;