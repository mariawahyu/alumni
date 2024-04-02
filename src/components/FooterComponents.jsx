import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const FooterComponents = () => {
  return (
    <div className="footer py-5">
        <Container>
            <Row className="d-flex justify-content-between">
                <Col lg-5>
                    <h3>SIPAlu</h3>
                    <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nam porro delectus assumenda dolores cum accusamus suscipit adipisci nemo minima.</p>
                    <div className="no">
                    <Link className="text-decoration-none">
                        <i className="fa-brands fa-whatsapp"></i>
                        <p className="m-0">08155647201</p>
                    </Link>
                </div>
                <div className="mail">
                    <Link className="text-decoration-none">
                        <i className="fa-regular fa-envelope"></i>
                        <p className="m-0">bkksmkpgriwlingi@gmail.com</p>
                    </Link>
                </div>
                <div className="insta">
                    <Link className="text-decoration-none">
                        <i className="fa-brands fa-instagram"></i>
                        <p className="m-0">bkk.smkpgriwlingi</p>
                    </Link>
                </div>
                </Col>
                <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
                    <h5 className="fw-bold">Menu</h5>
                    <Link to="">Home</Link>
                    <Link to="informasi">Informasi</Link>
                    <Link to="">Statistik</Link>
                    <Link to="">Tentang Aplikasi</Link>
                    <Link to="">Cari Alumni</Link>
                </Col>
                <Col lg-4 className="mt-lg-0 mt-5">
                <h3>SMK PGRI Wlingi</h3>
                <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nam porro delectus assumenda dolores cum accusamus suscipit adipisci nemo minima.</p>
                <div className="alamat">
                    <i className="fa-solid fa-map-location-dot"></i>
                    <p className="m-0">Jl. Jendral Sudirman No 86 Wlingi - Blitar</p>
                </div>
                <div className="alamat">
                    <i className="fa-solid fa-phone"></i>
                    <p className="m-0">0342-691224</p>
                </div>
                <div className="alamat">
                    <i className="fa-solid fa-envelope"></i>
                    <p className="m-0">smkpgri_wlg@yahoo.co.id</p>
                </div>
                <div className="alamat">
                    <i className="fa-solid fa-globe"></i>
                    <p className="m-0">www.smkpgriwlingi.sch.id</p>
                </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="text-center px-md-0 px-3 mt-5">&copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">Maria SW - D3 PJJ TI PENS</span>, All Right Reserved</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default FooterComponents