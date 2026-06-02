import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import QuienesSomos from "./pages/QuienesSomos";
import Promociones from "./pages/Promociones";
import Ventas from "./pages/Ventas";
import Regalos from "./pages/Regalos";
import Juegos from "./pages/Juegos";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/quienes-somos"
          element={<QuienesSomos />}
        />

        <Route
          path="/promociones"
          element={<Promociones />}
        />

        <Route
          path="/ventas"
          element={<Ventas />}
        />

        <Route
          path="/regalos"
          element={<Regalos />}
        />

        <Route
          path="/juegos"
          element={<Juegos />}
        />

      </Routes>

      <Footer />
      <WhatsappButton />

    </BrowserRouter>
  );
}

export default App;