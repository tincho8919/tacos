import { useState, useEffect } from "react";
import "../RaspaYGana.css";

function RaspaYGana() {

  const phone = "5492645010690";

  const premios = [
    "10% OFF",
    "15% OFF",
    "20% OFF",
    "25% OFF",
    "30% OFF",
    "40% OFF"
  ];

  const [scratched, setScratched] = useState(false);
  const [result, setResult] = useState(null);
  const [blocked, setBlocked] = useState(false);

  const KEY = "scratch_last_play";

  useEffect(() => {
    const last = localStorage.getItem(KEY);

    if (last) {
      const diff = Date.now() - parseInt(last);
      if (diff < 24 * 60 * 60 * 1000) {
        setBlocked(true);
      }
    }
  }, []);

  const play = () => {
    if (blocked) return;

    const random = Math.floor(Math.random() * premios.length);
    const prize = premios[random];

    setResult(prize);
    setScratched(true);

    localStorage.setItem(KEY, Date.now().toString());
    setBlocked(true);
  };

  const whatsapp = () => {
    const msg = `🎰 RASPA Y GANA\n🏆 Gané: ${result}\n📲 Quiero reclamar mi descuento`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`);
  };

  return (
    <main className="scratch-page">

      <h1>🎰 RASPA Y GANA</h1>

      <p>🔥 1 intento cada 24 horas</p>

      <div className="scratch-card" onClick={play}>

        {!scratched ? (
          <div className="cover">
            🎁 TOCÁ PARA RASPAR
          </div>
        ) : (
          <div className="result">
            🏆 {result}
          </div>
        )}

      </div>

      <button onClick={play} disabled={blocked}>
        {blocked ? "Disponible en 24h" : "🎮 Jugar"}
      </button>

      {result && (
        <button className="whatsapp-btn" onClick={whatsapp}>
          📲 Reclamar por WhatsApp
        </button>
      )}

    </main>
  );
}

export default RaspaYGana;