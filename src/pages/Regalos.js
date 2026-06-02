import "../Regalos.css";

function Regalos() {

  const phone = "5492645010690"; //poner numero de telefono de la empresa

  const offers = [
    {
      title: "🔥 Combo Taco Lovers",
      desc: "3 tacos + papas + bebida",
      price: 9.99,
      discount: "20% OFF al enviar comprobante"
    },
    {
      title: "👨‍👩‍👧 Promo Amigos",
      desc: "6 tacos para compartir",
      price: 14.99,
      discount: "20% OFF al enviar comprobante"
    },
    {
      title: "💥 Mega Combo",
      desc: "Tacos + nachos + bebida",
      price: 12.99,
      discount: "20% OFF al enviar comprobante"
    }
  ];

  const getDiscountPrice = (price) => {
    return (price * 0.8).toFixed(2);
  };

  const sendReceipt = (item) => {
    const message = `
Hola 👋 quiero acceder a la promoción:

🍔 ${item.title}
💰 Precio original: $${item.price}
🔥 Precio con 20% OFF: $${getDiscountPrice(item.price)}

🎁 Beneficio: ${item.discount}

📎 Envío mi comprobante de pago aquí para validar el descuento.
    `;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <main className="ofertas-page">

      <section className="ofertas-hero">
        <h1>🔥 NUEVAS OFERTAS</h1>
        <p>
          💰 20% OFF enviando comprobante de pago por WhatsApp
        </p>
      </section>

      <section className="ofertas-grid">

        {offers.map((item, index) => (
          <div className="oferta-card" key={index}>

            <h2>{item.title}</h2>

            <p>{item.desc}</p>

            {/* PRECIO ORIGINAL TACHADO */}
            <span className="old-price">
              ${item.price}
            </span>

            {/* PRECIO FINAL */}
            <span className="new-price">
              💥 ${getDiscountPrice(item.price)}
            </span>

            <span className="discount">
              🎁 {item.discount}
            </span>

            <button onClick={() => sendReceipt(item)}>
              📲 Enviar comprobante por WhatsApp
            </button>

          </div>
        ))}

      </section>

    </main>
  );
}

export default Regalos;