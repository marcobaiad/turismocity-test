import Card from "react-bootstrap/Card";
import comida from "../assets/comida.png";

const CardComponent = ({ title, subtitle, price, imgURL }) => {
  return (
    <Card
      className="position-relative px-0 text-white my-1 mx-md-2 mx-lg-3 mx-xl-0 px-2 px-md-0"
      style={{
        width: "254px",
        height: "233px",
        borderRadius: "15px",
        border: "0px",
      }}
    >
      <Card.Img
        className="img-fluid"
        src={imgURL ?? comida}
        style={{ borderRadius: "15px" }}
      />
      <Card.Body className="position-absolute" style={{ bottom: 0, left: 0 }}>
        <Card.Title>{title ?? ""}</Card.Title>
        <Card.Subtitle>{subtitle ?? ""}</Card.Subtitle>
        <Card.Text>{price ? `$ ${price}` : ""}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
