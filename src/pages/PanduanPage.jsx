import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

function PanduanPage() {
  return (
    <div className="panduan min-vh-100">
      <Container>
        <Row>
          <Col>
            <h1 className="fw-bold text-center">Panduan Aplikasi</h1>
          </Col>
        </Row>
        <Row>
          <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-1"
            fill
          >
            <Tab eventKey="profile" title="Panduan Aplikasi" className="mt-4">
              <h3 className="fw-bold mb-3">A. Panduan pengisian data Alumni</h3>
              <ListGroup variant="flush" as="ol" numbered >
                <ListGroup.Item className="bg-transparent">Cras justo odio</ListGroup.Item>
                <ListGroup.Item className="bg-transparent">Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item className="bg-transparent">Morbi leo risus</ListGroup.Item>
                <ListGroup.Item className="bg-transparent">Porta ac consectetur ac</ListGroup.Item>
              </ListGroup>

              <h3 className="fw-bold mt-5 mb-3">B. Pencarian Alumni</h3>
              <ListGroup variant="flush" as="ol" numbered>
                <ListGroup.Item className="bg-transparent">Cras justo odio</ListGroup.Item>
                <ListGroup.Item className="bg-transparent">Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item className="bg-transparent">Morbi leo risus</ListGroup.Item>
                <ListGroup.Item className="bg-transparent">Porta ac consectetur ac</ListGroup.Item>
              </ListGroup>
              <h3 className="fw-bold mt-5 mb-3">C. Melihat Informasi</h3>
              <ListGroup variant="flush" as="ol" numbered>
                <ListGroup.Item className="bg-transparent">Cras justo odio</ListGroup.Item>
                <ListGroup.Item className="bg-transparent">Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item className="bg-transparent">Morbi leo risus</ListGroup.Item>
                <ListGroup.Item className="bg-transparent">Porta ac consectetur ac</ListGroup.Item>
              </ListGroup>
            </Tab>
            <Tab eventKey="home" title="Tentang Aplikasi" className="mt-4">
              <div>
              <h3 className="fw-bold mt-5 mb-3">Tentang SIPAlu</h3>
                <p>
                    SIPAlu (Sistem Informasi Pendataan Alumni) merupakan sistem yang dikembangakan untuk mempermudah proses penelusuran alumni di SMKS PGRI Wlingi. 
                    Sistem informasi pendataan alumni memudahkan proses pendataan penelusuran alumni, pengolahan data secara terstruktur, pelaporan dan pencarian data
                    alumni. Sistem informasi yang terkomputerisasi mempermudah pengarsipan data alumni sehingga meminimalisir terjadinya kehilangan data.

                </p>

              </div>
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </div>
  );
}

export default PanduanPage;
