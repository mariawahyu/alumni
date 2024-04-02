import {Routes, Route} from "react-router-dom";

import NavBarComponent from "./components/NavBarComponent";
import FooterComponents from "./components/FooterComponents";


import HomePage from "./pages/HomePage";
import AlumniPage from "./pages/AlumniPage";
import InformasiPage from "./pages/InformasiPage";
import PanduanPage from "./pages/PanduanPage";
import CariAlumniPage from "./pages/CariAlumniPage";
import DetailInformasiPage from "./pages/DetailInformasiPage";
import EditAlumniPages from "./pages/EditAlumniPages";



function App() {

  return <div>
    <NavBarComponent/>
    <Routes>
      <Route path="/" Component={HomePage}/>
      <Route path="/alumni" Component={AlumniPage}/>
      <Route path="/informasi" Component={InformasiPage}/>
      <Route path="/panduan" Component={PanduanPage}/>
      <Route path="/statistik" Component={InformasiPage}/>
      <Route path="/cari" Component={CariAlumniPage}/>
      <Route path="/detail" Component={DetailInformasiPage}/>
      <Route path="/edit" Component={EditAlumniPages}/>
    </Routes>
    <FooterComponents/>
  </div>;
}

export default App
