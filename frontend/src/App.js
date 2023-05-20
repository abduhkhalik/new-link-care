import React, { useContext } from "react";
import { BrowserRouter as Routers, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login.jsx";
import Manajemen from "./pages/manajemen/Dashboard-Manajemen.jsx";
import Dashboard from "./pages/pendaftaran/Dashboard-Pendaftaran.jsx";
import Registrasi from "./pages/pendaftaran/registrasion.jsx";
import NotFound from "./pages/NotFound.jsx";
import FormPasien from "./pages/pendaftaran/form/formPasien.jsx";
import RekamMedik from "./pages/pendaftaran/rekamMedik.jsx";
import FormIGD from "./pages/pendaftaran/form/formIGD.jsx";
import FormRawatJln from "./pages/pendaftaran/form/formRawatJln.jsx";
import FormUpdate from "./pages/pendaftaran/updateForm.jsx";
import Antrian from "./pages/pendaftaran/Antrian/Antrian.jsx";
import AntrianPoli from "./pages/pendaftaran/Antrian/AntrianPoli.jsx";
import Kodifikasi from "./pages/pendaftaran/Kodifikasi.jsx";
import Pengguna from "./pages/manajemen/pengguna.jsx";
import Refrensi from "./pages/manajemen/referensi.jsx";
import Database from "./pages/manajemen/database.jsx";
import Radiologi from "./pages/radiologi/Dashboard-Radiologi.jsx";
import MenuRadio from "./pages/radiologi/Radiologi.jsx";
import FormRadio from "./pages/radiologi/form/formRadio.jsx";
import Laboratorium from "./pages/laboratorium/Dashboard-Labor.jsx";
import MenuLabor from "./pages/laboratorium/laboratorium.jsx";
import { AuthContext } from "./context/AuthContext.js";
function App() {

  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to={"/"} />
  }

  console.log(currentUser)

  return (
    <div>
      <Routers>
        <Routes>
          <Route path="/" element={<Login />} />

          {/* Registrasi */}
          <Route path="/Dashboard/Daftar" element={<RequireAuth> <Dashboard /> </RequireAuth>} />
          <Route path="/Dashboard/Registrasi" element={<RequireAuth> <Registrasi /> </RequireAuth>} />
          <Route
            path="/Dashboard/Registrasi/Daftar-Pasien"
            element={<RequireAuth><FormPasien /></RequireAuth>}
          />
          <Route
            path="/Dashboard/Registrasi/Daftar-Rawat-Jalan"
            element={<RequireAuth> <FormRawatJln /> </RequireAuth> }
          />
          <Route
            path="/Dashboard/Registrasi/Daftar-Rawat-IGD"
            element={<RequireAuth><FormIGD /></RequireAuth>}
          />
          <Route
            path="/Dashboard/Registrasi/Update-pasien"
            element={<RequireAuth><FormUpdate /></RequireAuth> }
          />
          <Route
            path="/Dashboard/Registrasi/Rekam-Medik"
            element={<RequireAuth><RekamMedik /></RequireAuth>}
          />
          <Route path="/Dashboard/Antrian" element={<RequireAuth><Antrian /></RequireAuth>} />
          <Route path="/Dashboard/Antrian-Poli" element={<RequireAuth><AntrianPoli /></RequireAuth>} />
          <Route path="/Dashboard/Kodifikasi" element={<RequireAuth><Kodifikasi /></RequireAuth>} />

          {/* Registrasi Riwayat */}
          <Route path="" element={<></>} />

          {/* Manajemen */}
          <Route path="/Dashboard/Manajemen" element={<RequireAuth><Manajemen /></RequireAuth>} />
          <Route path="/Dashboard/Akun" element={<RequireAuth><Pengguna /></RequireAuth>} />
          <Route path="/Dashboard/Referensi" element={<RequireAuth><Refrensi /></RequireAuth> } />
          <Route path="/Dashboard/Database" element={<RequireAuth><Database /></RequireAuth>} />

          {/* Radiologi */}
          <Route path="/Dashboard/Radio" element={<RequireAuth><Radiologi /></RequireAuth>} />
          <Route path="/Dashboard/Radiologi" element={<RequireAuth><MenuRadio /></RequireAuth>} />
          <Route path="/Dashboard/Radiologi/Form" element={ <RequireAuth><FormRadio /></RequireAuth>} />

          {/* Laboratorium */}
          <Route path="/Dashboard/Labor" element={<RequireAuth><Laboratorium /></RequireAuth>} />
          <Route path="/Dashboard/Laboratorium" element={<RequireAuth><MenuLabor /></RequireAuth> } />

          {/* Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Routers>
    </div>
  );
}

export default App;
