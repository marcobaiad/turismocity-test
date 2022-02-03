import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import dataFiscal from "../../assets/dataFiscal.png";

const currentDate = new Date();

export default function FooterComponent() {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#2C5FA1",
        fontSize: "14px",
        lineHeight: "28px",
      }}
    >
      <Container>
        <Row className="justify-content-between aling-items-center pt-5 p-lg-5 text-white">
          <Col xs={12} md={6} className="mb-3 mb-md-0">
            <Row className="justify-content-center justify-content-lg-around flex-md-nowrap">
              <Col xs={12} md={6}>
                <ul className="list-unstyled">
                  <li role="button" className="fw-bold">
                    Sobre TurismoCity.com
                  </li>
                  <li role="button">Quienes somos</li>
                  <li role="button">Feriados Nacionales</li>
                  <li role="button">Afiliados</li>
                  <li role="button">Promocionar Hotel</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <ul className="list-unstyled">
                  <li role="button" className="fw-bold">
                    Soporte
                  </li>
                  <li role="button">Pregutnas frecuentes</li>
                  <li role="button">Contacto</li>
                  <li role="button">Política de Privacidad</li>
                  <li role="button">Términos y Condiciones</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} className="mb-3 mb-md-0">
            <Row className="justify-content-center justify-content-lg-end align-items-center flex-nowrap">
              Copyright {currentDate?.getFullYear()} Turismocity.
              <br /> Todos los derechos reservados.
              <img
                src={dataFiscal}
                alt="Data Fiscal"
                style={{ width: "90px", height: "100px" }}
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
