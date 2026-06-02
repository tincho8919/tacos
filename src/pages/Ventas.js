import "../Ventas.css";

function Ventas() {
  const menu = [
    {
      title: "Taco Clásico",
      desc: "Carne, queso cheddar, vegetales frescos",
      price: "$4.99",
      img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
    },
    {
      title: "Combo Mexicano",
      desc: "3 tacos + nachos + bebida",
      price: "$12.99",
      img: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Mega Taco Box",
      desc: "Tacos premium para compartir",
      price: "$19.99",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
    },
    {
     title: "Nachos Supreme",
    desc: "Nachos con queso fundido y carne",
    price: "$8.99",
    img: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <main className="ventas-page">

      <section className="ventas-hero">
        <div className="ventas-overlay" />

        <div className="ventas-content">
          <span>🌮 MENÚ PREMIUM</span>

          <h1>
            ELEGÍ TU
            <br />
            COMBO FAVORITO
          </h1>

          <p>
            Sabores irresistibles, combos únicos
            y promociones para todos los gustos.
          </p>
        </div>
      </section>

      <section className="ventas-section">

        <h2>Nuestros productos</h2>

        <div className="ventas-grid">

          {menu.map((item, index) => (
            <div className="ventas-card" key={index}>

              <img
                src={item.img}
                alt={item.title}
              />

              <div className="ventas-info">

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

                <span>{item.price}</span>

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

export default Ventas;