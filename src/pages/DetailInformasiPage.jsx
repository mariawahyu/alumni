import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Pagination,
  InputGroup,
  Card,
} from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";

function DetailInformasiPage() {
  return (
    <div className="detail-page">
      <div className="informasi min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center">Informasi Alumni</h1>
            </Col>
          </Row>
          <Row>
            <Card>
              <Card.Img
                variant="top"
                src={HeroImage}
                className="card-img"
                fluid
              />
              <Card.Body>
                <Card.Text>
                  <h2 className="mt-3">Ini Judul</h2>
                  <div className="icon ">
                    <i className="fa-regular fa-clock"></i>
                    <p className="m-0">12-12-2024 </p>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sunt, nemo inventore. Alias quam architecto, velit aperiam
                    perspiciatis natus, eos porro corporis molestias quo ad
                    deleniti cumque quibusdam culpa sequi rerum.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default DetailInformasiPage;
