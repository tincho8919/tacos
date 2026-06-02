import "../Hero.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Hero() {
  const tacos = [
    "https://images.unsplash.com/photo-1613514785940-daed07799d9",
    "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    "https://images.unsplash.com/photo-1532635241-17e820acc59f",
    "https://images.unsplash.com/photo-1544025162-d76694265947",
  ];

  return (
    <section id="inicio" className="home-banner">
      <div className="hero-container">

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          pagination={{ clickable: true }}
          loop
          speed={900}
        >
          {tacos.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className="slide"
                style={{
                  backgroundImage: `url(${img})`
                }}
              >
                <div className="overlay" />

                <div className="content">
                  <span>🌮 TACOS PREMIUM</span>

                  <h1>
                    SABORES
                    <br />
                    INCREÍBLES
                  </h1>

                  <p>
                    Promociones, regalos y comida
                    mexicana auténtica.
                  </p>

                  <button>
                    Ver menú
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default Hero;