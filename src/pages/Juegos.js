import "../Juegos.css";

function Juegos() {
  const juegos = [
    {
      title: "🎡 Ruleta Taco",
      desc:
        "Girás la ruleta y podés ganar tacos, descuentos y combos.",
      img:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "🎁 Raspa y Gana",
      desc:
        "Probá suerte y desbloqueá premios sorpresa.",
      img:
        "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "🏆 Desafío Semanal",
      desc:
        "Participá cada semana y acumulá puntos para regalos.",
      img:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <main className="juegos-page">

      <section className="juegos-hero">
        <div className="juegos-overlay" />

        <div className="juegos-content">
          <span>🎮 DIVERSIÓN Y PREMIOS</span>

          <h1>
            JUGÁ,
            <br />
            GANÁ
            <br />
            Y DISFRUTÁ
          </h1>

          <p>
            Sumate a juegos exclusivos,
            ganá premios y desbloqueá
            beneficios increíbles.
          </p>
        </div>
      </section>

      <section className="juegos-section">

        <h2>Elegí un juego</h2>

        <div className="juegos-grid">

          {juegos.map((item, index) => (
            <div
              className="juego-card"
              key={index}
            >
              <img
                src={item.img}
                alt={item.title}
              />

              <div className="juego-info">

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

                <button>
                  Jugar ahora
                </button>

              </div>
            </div>
          ))}

        </div>

      </section>

    </main>
  );
}

export default Juegos;