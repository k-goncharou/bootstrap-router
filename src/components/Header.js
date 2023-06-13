import React from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar, NavbarBrand} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import logo from './images.png'
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {Route, Routes} from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Store from "../pages/Store";

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <NavbarBrand href="/">
                        <img src={logo} alt="logo"
                             className="d-inline-block align-top"
                             width="30px"
                             height="30px"/>

                    </NavbarBrand>

                    <NavbarToggle area-control="responsive-navbar-nav"/>
                    <NavbarCollapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                            <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                            <Nav.Link to="/contacts" as={NavLink}>Contacts</Nav.Link>
                            <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>

                        </Nav>

                        <Form inline="true">
                            <FormControl
                                inline="true"
                                type="text"
                                className="me-sm-2"
                            />
                            <Button variant="outline-info"
                            className="me-auto"
                            inline="true">
                                Search
                            </Button>
                        </Form>

                    </NavbarCollapse>
                </Container>

            </Navbar>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contact/>}/>
                <Route path="/store" element={<Store/>}/>
            </Routes>
        </>
    );
};

export default Header;