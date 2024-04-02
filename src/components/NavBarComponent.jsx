
import {Navbar, Container, Nav} from "react-bootstrap";
import {navLinks} from "../data/index.js";
import {NavLink} from "react-router-dom";

const NavBarComponent = () => {
    

    return (
    <div>
        <Navbar expand="lg" fixed="top">
        <Container>
            <Navbar.Brand href="#home" className="fs-3 fw-bold brand"><i className="fa-solid fa-graduation-cap me-1"></i>SIPAlu</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="mx-auto text-center">
                {navLinks.map((link) => {
                    return(
                    <div className="nav-link" key={link.id}>
                        <NavLink to={link.path} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} end>{link.text}</NavLink>
                    </div>
                    );
                })}
            </Nav>
            <div className="text-center">
            <button className="btn btn-outline-light rounded-1">Login</button>
            </div>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default NavBarComponent;