import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "navbar active" : "navbar"}>
      <div className="logo">
        TacoHouse 🌮
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>

          <li>
            <Link to="/quienes-somos">
              Quiénes Somos
            </Link>
          </li>

          <li>
            <Link to="/promociones">
              Promociones
            </Link>
          </li>

          <li>
            <Link to="/ventas">
              Ventas
            </Link>
          </li>

          <li>
            <Link to="/regalos">
              Regalos
            </Link>
          </li>

          <li>
            <Link to="/juegos">
              Juegos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;