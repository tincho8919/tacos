import "../Promotions.css";

function Promotions() {
  const cards = [
    "2x1 EN TACOS",
    "REGALOS EXCLUSIVOS",
    "COMBOS PREMIUM"
  ];

  return (
    <section className="promotions">
      <h2>PROMOCIONES</h2>

      <div className="promo-grid">
        {cards.map((card, index) => (
          <div key={index} className="promo-card">
            <h3>{card}</h3>
            <p>
              Descubrí promociones únicas.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Promotions;