import { Navbar, Container, Nav, } from 'react-bootstrap'


  const MyNav = () => ( 
    <Navbar bg="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav  className="me-auto">
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Start</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )


export default MyNav

