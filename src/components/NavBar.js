import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import turismoCityLogo from "../assets/Slogan.png";
import { Link } from "react-router-dom";

export default function NavBarComponent() {
  return (
    <Navbar className="py-0" style={{ backgroundColor: "#1D4D8B" }} expand="lg">
      <Container className="mb-2">
        <Col xs={6} md={2}>
          <Link to="/" style={{ width: "154px", height: "59px" }}>
            <img
              src={turismoCityLogo}
              alt="Brand TurismoCity"
              className="img-fluid"
            />
          </Link>
        </Col>
        <Navbar.Toggle
          className="order-2 ms-auto"
          aria-controls="basic-navbar-nav"
        >
          <span className="navbar-toggler-icon">
            <i
              className="fas fa-bars"
              style={{ color: "#fff", fontSize: "28px" }}
            ></i>
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse className="order-3" id="basic-navbar-nav">
          <Col className="mx-lg-auto" xs={12} lg={6}>
            <Nav
              className="justify-content-lg-start"
              style={{ fontSize: "13px" }}
            >
              <Link
                to="/"
                className="mx-lg-1 text-right text-lg-center text-white text-decoration-none"
              >
                <i className="fas fa-plane me-2 me-lg-0"></i>
                Vuelos
              </Link>
              <Link
                to="/"
                className="mx-lg-1 text-right text-lg-center text-white text-decoration-none"
              >
                <i className="fas fa-hotel me-2 me-lg-0"></i>
                Hoteles
              </Link>
              <Link
                to="/"
                className="mx-lg-1 text-right text-lg-center text-white text-decoration-none"
              >
                <i className="fas fa-home me-2 me-lg-0"></i>
                Alquileres
              </Link>
              <Link
                to="/"
                className="mx-lg-1 text-right text-lg-center text-white text-decoration-none"
              >
                <i className="fas fa-suitcase me-2 me-lg-0"></i>
                Paquetes
              </Link>
              <Col className="mx-lg-1 text-right text-lg-center text-white">
                <i className="fas fa-medkit me-2 me-lg-0"></i>
                <Link
                  to="/"
                  className="text-white text-decoration-none text-nowrap"
                >
                  Seguro de Viajes
                </Link>
              </Col>
              <Link
                to="/"
                className="mx-lg-1 text-right text-lg-center text-white text-decoration-none"
              >
                <i className="fas fa-medkit me-2 me-lg-0"></i>
                Micros
              </Link>
              <Link
                to="/"
                className="col mx-lg-1 text-white text-decoration-none text-right text-lg-center"
              >
                <i className="fas fa-car me-2 me-lg-0"></i>
                Autos
              </Link>
              <Link
                to="/"
                className="mx-lg-1 text-right text-lg-center text-white text-decoration-none"
              >
                <i className="fas fa-bullhorn me-2 me-lg-0"></i>
                Blog
              </Link>
            </Nav>
          </Col>
          <Col xs={12} lg={3} className="align-items-center">
            <Row className="justify-content-center">
              <Col className="mx-lg-1">
                <Link
                  to="/"
                  className="text-white text-nowrap text-decoration-none"
                >
                  AR (ARS)
                </Link>
              </Col>
              <Col className="mx-lg-1">
                <Link to="/" className="text-white text-decoration-none">
                  <i class="fas fa-user me-2 me-lg-2"></i>
                  Ingresar
                </Link>
              </Col>
            </Row>
          </Col>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
