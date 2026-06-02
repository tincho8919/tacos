import "../Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div>
          <h2>TacoHouse 🌮</h2>
          <p>
            Tacos increíbles, promociones,
            regalos y diversión.
          </p>
        </div>

        <div>
          <h3>Empresa</h3>
          <p>Quiénes Somos</p>
          <p>Promociones</p>
          <p>Ventas</p>
        </div>

        <div>
          <h3>Ayuda</h3>
          <p>Contacto</p>
          <p>Soporte</p>
          <p>Preguntas frecuentes</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 TacoHouse - Todos los derechos reservados
      </div>

    </footer>
  );
}

export default Footer;