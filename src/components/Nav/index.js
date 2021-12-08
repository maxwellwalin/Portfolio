// dependencies
import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import './style.css'

export default function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="/">Maxwell Walin</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#aboutMe" className="col-6">About Me</Nav.Link>
                        <Nav.Link href="#portfolio" className="col-6">Portfolio</Nav.Link>
                        <Nav.Link href="#contactMe" className="col-6">Contact</Nav.Link>
                        <Nav.Link href="#resume" className="col-6">Resume</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link href="https://www.linkedin.com/in/maxwell-walin/" target="_blank" className="icon fa fa-linkedin fa-2x" rel="noreferrer" />
                        <Nav.Link href="https://github.com/maxwellwalin" target="_blank" className="icon fa fa-github fa-2x" rel="noreferrer" />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}