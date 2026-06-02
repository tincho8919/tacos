import "../Promociones.css";

function Promociones() {
  const promos = [
    {
      title: "Combo Taco Lovers",
      desc: "3 tacos + papas + bebida grande",
      price: "$9.99",
      img: "https://images.unsplash.com/photo-1565299585323-38174c4a6471?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Promo Amigos",
      desc: "6 tacos para compartir",
      price: "$14.99",
      img: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Mega Combo",
      desc: "Tacos + nachos + bebida",
      price: "$12.99",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <main className="promo-page">

      <section className="promo-hero">
        <div className="promo-overlay" />

        <div className="promo-content">
          <span>🔥 PROMOCIONES EXCLUSIVAS</span>

          <h1>
            LOS MEJORES
            <br />
            COMBOS DE TACOS
          </h1>

          <p>
            Aprovechá descuentos, combos
            irresistibles y regalos exclusivos.
          </p>
        </div>
      </section>

      <section className="promo-section">

        <h2>Promociones destacadas</h2>

        <div className="promo-grid">

          {promos.map((promo, index) => (
            <div className="promo-card" key={index}>
              <img
                src={promo.img}
                alt={promo.title}
              />

              <div className="promo-info">
                <h3>{promo.title}</h3>

                <p>{promo.desc}</p>

                <span>{promo.price}</span>

                <button>
                  Comprar ahora
                </button>
              </div>
            </div>
          ))}

        </div>

      </section>

    </main>
  );
}

export default Promociones;