import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={scrolled ? "navbar active" : "navbar"}>

      <div className="logo">
        TacoHouse 🌮
      </div>

      {/* HAMBURGER ICON */}
      <div
        className="menu-icon"
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>

      {/* NAV */}
      <nav>
        <ul className={open ? "active" : ""}>

          <li>
            <Link to="/" onClick={closeMenu}>Inicio</Link>
          </li>

          <li>
            <Link to="/quienes-somos" onClick={closeMenu}>
              Quiénes Somos
            </Link>
          </li>

          <li>
            <Link to="/promociones" onClick={closeMenu}>
              Promociones
            </Link>
          </li>

          <li>
            <Link to="/ventas" onClick={closeMenu}>
              Ventas
            </Link>
          </li>

          <li>
            <Link to="/regalos" onClick={closeMenu}>
              Regalos
            </Link>
          </li>

          <li>
            <Link to="/juegos" onClick={closeMenu}>
              Juegos
            </Link>
          </li>

        </ul>
      </nav>

    </header>
  );
}

export default Navbar;