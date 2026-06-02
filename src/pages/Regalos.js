import "../Regalos.css";

function Regalos() {
  const regalos = [
    {
      title: "Taco Gratis",
      desc:
        "En compras superiores a $20 te regalamos un taco especial.",
      img:
        "https://images.unsplash.com/photo-1613514785940-daed07799d9?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Combo Sorpresa",
      desc:
        "Participá y ganá combos exclusivos para compartir.",
      img:
        "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Cupón de Descuento",
      desc:
        "Recibí descuentos especiales por fidelidad.",
      img:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <main className="regalos-page">

      <section className="regalos-hero">
        <div className="regalos-overlay" />

        <div className="regalos-content">
          <span>🎁 REGALOS EXCLUSIVOS</span>

          <h1>
            COMPRÁ,
            <br />
            GANÁ Y DISFRUTÁ
          </h1>

          <p>
            Premios, sorpresas, cupones y
            beneficios pensados para vos.
          </p>
        </div>
      </section>

      <section className="regalos-section">

        <h2>Beneficios para clientes</h2>

        <div className="regalos-grid">

          {regalos.map((item, index) => (
            <div
              className="regalo-card"
              key={index}
            >
              <img
                src={item.img}
                alt={item.title}
              />

              <div className="regalo-info">
                <h3>{item.title}</h3>

                <p>{item.desc}</p>

                <button>
                  Obtener regalo
                </button>
              </div>
            </div>
          ))}

        </div>

      </section>

    </main>
  );
}

export default Regalos;