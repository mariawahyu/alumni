import { FormGroup } from "react-bootstrap";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";

const AlumniPage = () => {
  return (
    <div className="alumni min-vh-100">
      <Container>
        <Row className="ptop">
          <Col>
            <h1 className="fw-bold text-center">Data Alumni</h1>
          </Col>
        </Row>

        <Form action="">
          <Row className="justify-content-end mb-3">
            <Col lg="2">
              <button className="btn btn-primary">Isi Penelusuran Alumni</button>
            </Col>
          </Row>
          <Card>
            <Card.Header>Data Alumni</Card.Header>
            <Card.Body>
              <Row>
                <Col md={3}>
                  <div >
                    <img src={HeroImage} alt="Example" className="img-fluid"  />
                  </div>
                </Col>
                <Col md={9}>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={2}>
                      Nama
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="text" placeholder="Nama Lengkap" />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={2}>
                      NIK
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="number" placeholder="NIK" />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={2}>
                      Nomor Induk
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="text" placeholder="Nomor Induk" />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={2}>
                      NISN
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="number" placeholder="NISN" />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={2}>
                      Jenis Kelamin
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="text" placeholder="Jenis Kelamin" />
                    </Col>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col md={6}>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Tempat Lahir
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control type="text" placeholder="Tempat Lahir" />
                    </Col>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Tanggal Lahir
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control type="date" placeholder="Tempat Lahir" />
                    </Col>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={8}>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={3}>
                      Jurusan
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control type="text" placeholder="Jurusan" />
                    </Col>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Tahun Lulus
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control type="number" placeholder="Tahun Lulus" />
                    </Col>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
              >
                <Form.Label column sm={2}>
                  Alamat
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" placeholder="Alamat" />
                </Col>
              </Form.Group>
            </Card.Body>
          </Card>
          <Card className="mt-4">
            <Card.Header>Penelusuran Alumni</Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      No Handphone
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control type="number" placeholder="Jurusan" />
                    </Col>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={2}>
                      Email
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="email" placeholder="Tahun Lulus" />
                    </Col>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
              >
                <Form.Label column sm={2}>
                  Alamat Sekarang
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" placeholder="Alamat" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
              >
                <Form.Label column sm={2}>
                  Status Alumni
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" placeholder="Alamat" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
              >
                <Form.Label column sm={2}>
                  Nama Perusahaan
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" placeholder="Alamat" />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
              >
                <Form.Label column sm={2}>
                  Jabatan
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" placeholder="Alamat" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
              >
                <Form.Label column sm={2}>
                  Nama Institusi Pendidikan
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" placeholder="Alamat" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
              >
                <Form.Label column sm={2}>
                  Jurusan
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" placeholder="Alamat" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
              >
                <Form.Label column sm={2}>
                  Nama Usaha
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" placeholder="Alamat" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
              >
                <Form.Label column sm={2}>
                  Bidang Usaha
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" placeholder="Alamat" />
                </Col>
              </Form.Group>
            </Card.Body>
          </Card>
        </Form>
      </Container>
    </div>
  );
};

export default AlumniPage;
