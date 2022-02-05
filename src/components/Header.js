import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

export default function Header() {
    return (
            // responsive
            <Navbar bg="dark" variant="dark" sticky="top" expand="lg" collapseOnSelect>  
                <Container>
                    <Navbar.Brand href="#home">RESTAURANTS</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        
    )
}
