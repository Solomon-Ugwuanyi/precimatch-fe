import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

export default function MyNav() {
    return (
        <div>
            <Navbar className="bg-dark" expand="lg">
                <div className="container">
                    <Navbar.Brand style={{ color: 'white' }} href="#home"><img src="././assets/logo1.png"></img><strong>PreciMatch</strong></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto ">
                            <Nav.Link href="#home">About</Nav.Link>
                            <Nav.Link href="#link">Talents</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-3" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>

                </div>

            </Navbar>
        </div>
    )
}
