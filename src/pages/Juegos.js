import "../Juegos.css";
import { useNavigate } from "react-router-dom";

function Juegos() {
  const navigate = useNavigate();

  const juegos = [
    {
      title: "🎡 Ruleta Taco",
      desc: "Girás y ganás descuentos del 10% al 40%",
      reward: "10% - 40% OFF",
      route: "/ruleta",
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "🎰 Raspa y Gana",
      desc: "Raspá y descubrí tu descuento instantáneo",
      reward: "Premios 10% - 40% OFF",
      route: "/RaspaYGana",
      img: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "🏆 Desafío Diario",
      desc: "Respondé preguntas y ganá recompensas",
      reward: "Premios 10% - 40% OFF",
      route: "/DesafioDiario",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <main className="juegos-page">

      <section className="juegos-hero">
        <div className="juegos-overlay" />

        <div className="juegos-content">
          <span>🎮 CASINO DE PREMIOS</span>

          <h1>
            JUGÁ, GANÁ
            <br />
            DESCUENTOS
          </h1>

          <p>
            3 juegos exclusivos con recompensas automáticas por WhatsApp
          </p>
        </div>
      </section>

      <section className="juegos-section">

        <h2>🎯 Elegí un juego</h2>

        <div className="juegos-grid">

          {juegos.map((item, index) => (
            <div className="juego-card" key={index}>

              <img src={item.img} alt={item.title} />

              <div className="juego-info">

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

                <span className="reward">
                  🏆 {item.reward}
                </span>

                <button onClick={() => navigate(item.route)}>
                  🎮 Jugar ahora
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