import { Container, Row, Col, InputGroup, Form, Button, FloatingLabel } from "react-bootstrap";

function CariAlumniPage() {
  return (
    <div className="cari-alumni min-vh-100">
      <Container>
        <Row>
          <Col>
            <h1 className="fw-bold text-center">Cari Alumni</h1>
          </Col>
        </Row>
        <Row className="mt-5">
            <Col xs="4">
            <Form.Select aria-label="Floating label select example">
              <option>Pilih Tahun Lulus Alumni</option>
              <option value="1">2020</option>
              <option value="2">2021</option>
              <option value="3">2022</option>
            </Form.Select>
            </Col>
        </Row>
        <Row className="mt-3 mb-3">
          <Col lx="auto">
            <InputGroup className="mb-3">
              <Button variant="outline-primary" id="button-addon1">
                <i className="fa-solid fa-magnifying-glass"></i>
              </Button>
              <Form.Control
                placeholder="Keyword [nama], [nomor induk]"
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CariAlumniPage;
