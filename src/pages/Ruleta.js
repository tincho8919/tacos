import { useState, useEffect } from "react";
import "../Ruleta.css";

function Ruleta() {

  const phone = "5492645010690";

  const premios = [
  "10% OFF",
  "15% OFF",
  "20% OFF",
  "25% OFF",
  "30% OFF",
  "40% OFF"
];

  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [blocked, setBlocked] = useState(false);

  const KEY = "ruleta_last_play";

useEffect(() => {
  const last = localStorage.getItem(KEY);

  if (last) {
    const lastTime = new Date(last).getTime();
    const now = Date.now();

    const diff = now - lastTime;

    if (diff < 24 * 60 * 60 * 1000) {
      setBlocked(true);
    }
  }
}, []);

  const girar = () => {

  if (spinning || blocked) return;

  setSpinning(true);
  setResult(null);

  const random = Math.floor(Math.random() * premios.length);

  const anglePerItem = 360 / premios.length;
  const newRotation = rotation + 1800 + random * anglePerItem;

  setRotation(newRotation);

  setTimeout(() => {

    setResult(premios[random]);

    // ⛔ GUARDA MOMENTO EXACTO
    localStorage.setItem(KEY, Date.now().toString());

    setBlocked(true);
    setSpinning(false);

  }, 3000);
};

  const whatsapp = () => {
    const msg = `🎡 Ruleta Taco\n🏆 Ganaste: ${result}`;
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`
    );
  };

  return (
    <main className="ruleta-page">

      <h1>🎡 Ruleta Taco</h1>

      <p>⏳ 1 intento cada 24 horas</p>

      {/* RULETA LUNA */}
      <div className="wheel-container">

        <div
          className="wheel"
          style={{ transform: `rotate(${rotation}deg)` }}
        >

          <div className="shine"></div>

          <div className="center-text">TACO</div>

        </div>

        <div className="pointer">▼</div>

      </div>

      <button onClick={girar} disabled={blocked || spinning}>
        {blocked ? "Disponible en 24h" : spinning ? "Girando..." : "🎮 GIRAR"}
      </button>

      {result && (
        <div className="result">

          <h2>🏆 {result}</h2>

          <button onClick={whatsapp}>
            📲 Reclamar
          </button>

        </div>
      )}

    </main>
  );
}

export default Ruleta;