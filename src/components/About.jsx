import "../About.css";

function About() {
  return (
    <section className="about">
      <div className="about-image">
        <img
          src="https://cdn.pixabay.com/photo/2023/08/08/08/46/tacos-8176774_1280.jpg"
          alt="Tacos deliciosos"
        />
      </div>

      <div className="about-content">
        <span>QUIÉNES SOMOS</span>

        <h2>
          HACEMOS TACOS
          <br />
          QUE DAN GANAS
          <br />
          DE VOLVER
        </h2>

        <p>
          Somos una marca enfocada en crear
          experiencias increíbles con tacos,
          promociones, regalos y diversión.
          Ingredientes frescos, sabores únicos
          y una experiencia inolvidable.
        </p>
      </div>
    </section>
  );
}

export default About;