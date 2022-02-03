import Container from "react-bootstrap/Container";
import SectionLanding from "../components/Section";
import simpleat from "../assets/simpleat.png";
import farmaOnline from "../assets/farmaronline.png";
import tiendamia from "../assets/tiendamia.png";
import HeaderComponent from "../components/Header";
import NavBarComponent from "../components/NavBar";
import FooterComponent from "../components/Footer";
import {
  cardsDataFarmaOnline,
  cardsDataSimpleat,
  cardsDataTiendMia,
} from "../components/utils/sectionsData";

export default function HomePage() {
  return (
    <Container fluid className="px-0">
      <NavBarComponent />
      <HeaderComponent />
      <Container>
        <Container className="mb-5">
          <SectionLanding
            title="Comidas caceras en la puerta de tu Casa"
            subtitle="Estos dias es fundamental comer comida sana, te acercamos comidas caseras freezadas hasta la puerta de tu casa."
            sectionLogo={simpleat}
            cardsData={cardsDataSimpleat}
            storeName="Simpleat"
          />
        </Container>
        <Container className="mb-5">
          <SectionLanding
            title="Descuentos de hasta 50% en Productos de Belleza y Bienestar"
            subtitle="Aplicá el código TURISMOCITY en el checkout para obtener un 10% extra."
            sectionLogo={farmaOnline}
            cardsData={cardsDataFarmaOnline}
            storeName="FarmaOnline"
          />
        </Container>
        <Container className="mb-5">
          <SectionLanding
            title="Comprá en USA desde tu casa"
            subtitle="Tiendamia te trae todo de Amazon, eBay y Walmart a la puerta de tu casa. Comprá como si estuvieses de viaje, ¡pero en pesos y cuotas fijas! Con cuarentena los envios estan pemitidos, y llegan en vuelos de carga."
            sectionLogo={tiendamia}
            cardsData={cardsDataTiendMia}
            storeName="TiendMia"
          />
        </Container>
      </Container>
      <FooterComponent />
    </Container>
  );
}
