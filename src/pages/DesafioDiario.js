import { useState, useEffect } from "react";
import "../DesafioDiario.css";

function DesafioDiario() {

  const phone = "5492645010690";

  const KEY = "quiz_last_play";

  const premios = [
    "10% OFF",
    "15% OFF",
    "20% OFF",
    "25% OFF",
    "30% OFF",
    "40% OFF"
  ];

  const preguntas = [
    {
      q: "¿Cuál es el ingrediente principal del taco clásico?",
      options: ["Carne", "Helado", "Arroz", "Pan dulce"],
      correct: 0
    },
    {
      q: "¿De qué país es originario el taco?",
      options: ["Italia", "México", "Japón", "Argentina"],
      correct: 1
    },
    {
      q: "¿Qué se usa normalmente en un taco?",
      options: ["Tortilla", "Pan de hamburguesa", "Galleta", "Pizza"],
      correct: 0
    }
  ];

  const [blocked, setBlocked] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [result, setResult] = useState(null);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const last = localStorage.getItem(KEY);

    if (last) {
      const diff = Date.now() - parseInt(last);
      if (diff < 24 * 60 * 60 * 1000) {
        setBlocked(true);
      }
    }
  }, []);

  const answer = (index) => {

    if (blocked) return;

    const isCorrect = index === preguntas[questionIndex].correct;

    if (!isCorrect) {
      setResult("❌ Fallaste, intenta mañana");
      setFinished(true);
      localStorage.setItem(KEY, Date.now().toString());
      setBlocked(true);
      return;
    }

    const next = questionIndex + 1;

    if (next < preguntas.length) {
      setQuestionIndex(next);
    } else {

      const random = Math.floor(Math.random() * premios.length);
      setResult(`🏆 Ganaste: ${premios[random]}`);
      setFinished(true);

      localStorage.setItem(KEY, Date.now().toString());
      setBlocked(true);
    }
  };

  const whatsapp = () => {
    const msg = `🏆 DESAFÍO SEMANAL\n${result}\n📲 Reclamo mi premio`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`);
  };

  return (
    <main className="quiz-page">

      <h1>🏆 Desafío Semanal</h1>

      <p>⏳ 1 intento cada 24 horas</p>

      {!finished && (
        <div className="quiz-box">

          <h2>{preguntas[questionIndex].q}</h2>

          <div className="options">

            {preguntas[questionIndex].options.map((op, i) => (
              <button key={i} onClick={() => answer(i)}>
                {op}
              </button>
            ))}

          </div>

        </div>
      )}

      {result && (
        <div className="result">

          <h2>{result}</h2>

          <button onClick={whatsapp}>
            📲 Reclamar por WhatsApp
          </button>

        </div>
      )}

    </main>
  );
}

export default DesafioDiario;