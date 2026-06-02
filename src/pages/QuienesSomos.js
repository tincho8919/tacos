import "../QuienesSomos.css";

function QuienesSomos() {
  return (
    <main className="about-page">

      <section className="about-hero">
        <div className="hero-overlay" />

        <div className="hero-text">
          <span>NUESTRA HISTORIA</span>

          <h1>
            MÁS QUE TACOS,
            <br />
            UNA EXPERIENCIA
          </h1>

          <p>
            Creamos sabores que conectan personas,
            momentos y experiencias inolvidables.
          </p>
        </div>
      </section>

      <section className="story-section">
        <div className="story-image">
          <img
          src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1200&q=80"
          alt="Tacos"
          />
        </div>

        <div className="story-content">
          <span>QUIÉNES SOMOS</span>

          <h2>
            HACEMOS TACOS
            QUE DAN GANAS
            DE VOLVER
          </h2>

          <p>
            Somos una marca apasionada por la comida
            mexicana y las experiencias memorables.
            Nuestro objetivo es ofrecer comida deliciosa,
            promociones atractivas y momentos para compartir.
          </p>

          <p>
            Ingredientes frescos, sabores auténticos
            y una experiencia visual moderna hacen
            parte de nuestra identidad.
          </p>
        </div>
      </section>

      <section className="values-section">
        <h2>NUESTROS VALORES</h2>

        <div className="values-grid">

          <div className="value-card">
            <h3>🌮 Calidad</h3>
            <p>
              Ingredientes frescos y sabores únicos.
            </p>
          </div>

          <div className="value-card">
            <h3>🎁 Experiencias</h3>
            <p>
              Promociones, regalos y diversión.
            </p>
          </div>

          <div className="value-card">
            <h3>❤️ Comunidad</h3>
            <p>
              Compartimos momentos alrededor
              de la buena comida.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}

export default QuienesSomos;
