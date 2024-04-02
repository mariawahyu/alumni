import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Pagination,
  InputGroup,
} from "react-bootstrap";

import { semuaKelas } from "../data/index";

const InformasiPage = () => {
  return (
    <div className="informasi-page">
      <div className="informasi min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center">Informasi Alumni</h1>
            </Col>
          </Row>

          <Row className=" mt-5 mb-3 justify-content-end">
            <Col xs="5">
              <InputGroup className="mb-3">
                <Button variant="outline-primary" id="button-addon1">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </Button>
                <Form.Control
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row>
            {semuaKelas.map((kelas) => {
              return (
                <Col key={kelas.id}>
                  <img
                    src={kelas.image}
                    alt="unsplash.com"
                    className="mb-2 rounded"
                  />
                  <h5 className="px-3">{kelas.title}</h5>
                  <div className="icon px-3 ">
                    <i className="fa-regular fa-clock"></i>
                    <p className="m-0">12-12-2024 </p>
                  </div>
                  <p className="px-3">{kelas.title}</p>
                  <div className="pt-2">
                    <p className="px-3">
                      <a href="">Selengkapnya</a>
                    </p>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col className="mt-5 ">
              <Pagination className="justify-content-center">
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default InformasiPage;
