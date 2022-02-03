import { Container } from "react-bootstrap";
import fondo_cuarentena from "../../assets/fondo_cuarentena.png";

export default function HeaderComponent() {
  return (
    <Container
      fluid
      className="mb-3  px-0"
      style={{
        backgroundImage: `url(${fondo_cuarentena})`,
        objectFit: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        className="position-relative"
        style={{
          minHeight: "300px",
        }}
      >
        <h1
          className="position-absolute text-white"
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            left: "3rem",
            top: "25%",
          }}
        >
          Ofertas para aprovechar <br />
          desde tu casa
        </h1>
      </Container>
      {/* <img
        src={fondo_cuarentena}
        // className="img-fluid"
        style={{ minHeight: "100%", objectFit: "contain" }}
      /> */}
    </Container>
  );
}
