import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import CardComponent from "../Card";

const SectionLanding = ({
  title,
  subtitle,
  sectionLogo,
  cardsData,
  storeName,
  linkToStorage,
}) => {
  return (
    <Container>
      <Row className="justify-content-between">
        <Col
          xs={12}
          md={7}
          className="order-2 order-lg-1"
          style={{ color: "#1D4D8B" }}
        >
          <h2 style={{ fontSize: "23px" }}>
            {title ?? "Comidas caceras en la puerta de tu Casa"}
          </h2>
          <p style={{ fontSize: "16px" }}>
            {subtitle ??
              "Estos dias es fundamental comer comida sana, te acercamos comidas caseras freezadas hasta la puerta de tu casa."}
          </p>
        </Col>
        <div
          className="order-1 order-md-2"
          style={{ width: "269px", height: "104px" }}
        >
          <img src={sectionLogo} alt={storeName} className="img-fluid" />
        </div>
      </Row>
      <Row className="justify-content-center justify-content-lg-start justify-content-xl-around flex-wrap">
        {cardsData?.map((card, index) => (
          <CardComponent key={index} {...card} />
        ))}
      </Row>
      <Row className="justify-content-center mt-5">
        <a
          href={linkToStorage}
          target="_blank"
          rel="noreferrer"
          style={{
            width: "360px",
            background: "#4285F4",
            borderRadius: "50px",
            fontSize: "20px",
            color: "white",
            textDecoration: "none",
            textAlign: "center",
            padding: "11px 28px",
          }}
        >
          Ver Mas Opciones en{" "}
          <span style={{ fontWeight: 700 }}>{storeName}</span>
        </a>
      </Row>
      <hr
        style={{ backgroundColor: "#BAC6D3", height: "1px", marginTop: "51px" }}
      />
    </Container>
  );
};

export default SectionLanding;
