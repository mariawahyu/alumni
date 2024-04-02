import {Container, Row, Col} from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";
import {kelasTerbaru} from "../data/index";




const HomePage = () => {
  return (
    <div className="homepage">
        <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
            <Container>
                <Row className="headerbox d-flex align-items-center">
                    <Col>
                        <h2 className="animate__animated animate__fadeInDown animate__slow">
                        Sistem Informasi Pendataan Alumni 
                        <span> SMKS PGRI Wlingi </span> 
                        </h2>
                        <p className="animate__animated animate__fadeInDown animate__slow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis qui nobis quibusdam illum, quia non, quam tempora neque, ratione cupiditate consequatur amet! Laudantium blanditiis nisi magnam maxime, dicta at enim.</p>
                    </Col>
                    <Col>
                        <img src={HeroImage} alt="hero-img" className="animate__animated animate__fadeInDown animate__slow"/>
                    </Col>
                </Row>
            </Container>
        </header>
        <div className="statistik w-100 min-vh-100">
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center fw-bold">
                            Statistik Alumni
                        </h1>
                        <p className="text-center">Grafik Lulusan Alumni SMK PGRI Wlingi</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="md-6 px-3"> 
                       kjkhkj
                    </Col>
                    <Col className="md-6 px-3">
                        hjgjgjhjh
                    </Col>

                </Row>
            </Container>

        </div>
        <div className="informasi w-100 min-vh-100">
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center fw-bold">
                            Informasi Alumni
                        </h1>
                        <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </Col>
                </Row>
                <Row data-aos="fade-up" data-aos-duration="1000">
                    {kelasTerbaru.map((kelas) =>{
                        return ( 
                        <Col key={kelas.id}>
                            <img src={kelas.image} alt="unsplash.com" className="mb-2 rounded"/>
                            <h5 className="px-3">{kelas.title}</h5>
                            <div className="icon px-3 "> 
                            <i className="fa-regular fa-clock"></i>
                            <p className="m-0">12-12-2024 </p>
                            </div>
                             <p className="px-3">{kelas.title}</p>
                            <div className="pt-2">
                                <p className="px-3"><a href="">Selengkapnya</a></p>
                            </div>
                        </Col>
                    );
                    })}
                    
                </Row>
                <Row>
                    <Col className="text-center pt-5">
                        <button className="btn btn-primary rounded-5 btn-lg">Lihat Semua Informasi <i className="fa-solid fa-chevron-right ms-1"></i></button>
                        
                    </Col>
                </Row>
            </Container>

        </div>
    </div>
  )
}

export default HomePage;