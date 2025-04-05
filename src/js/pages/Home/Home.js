import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import style from "./Home.scss";
import Footer from "../../components/Footer/Footer";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    const cookieEl = document.getElementById("cookie");
    const chipsEl = document.getElementById("chips");

    if (!cookieEl || !chipsEl) return;

    // Initial entrance animation for cookie
    gsap.fromTo(
      cookieEl,
      { y: -200, rotate: -60, opacity: 0 },
      { y: 0, rotate: 0, opacity: 1, duration: 1.2, ease: "power2.out" }
    );

    // Cookie scroll animation sequence across multiple sections
    gsap.timeline({
      scrollTrigger: {
        trigger: `.${style["second-section"]}`,
        start: "top bottom",
        end: "bottom center",
        scrub: 1,
      },
    })
      .to(cookieEl, {
        left: "10%",
        top: "70%",
        duration: 0.5,
        ease: "power2.inOut",
      })
      .to(cookieEl, {
        left: "5%",
        top: "135%",
        duration: 0.5,
        rotate: 60,
        ease: "none",
      })
      .to(cookieEl, {
        top: "calc(215% + 17.5vh)",
        left: "50%",
        x: "-50%",
        rotate: -45,
        duration: 0.5,
        width: "13vw",
        ease: "power2.inOut",
      });

    // Chips float animation on scroll
    gsap.timeline({
      scrollTrigger: {
        trigger: `.${style["second-section"]}`,
        start: "top bottom",
        end: "bottom center",
        scrub: true,
      },
    }).to(chipsEl, {
      left: "80%",
      top: "130%",
      rotate: 360,
      opacity: 1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <main className="smooth-scroll">
      <section className={style["hero-section"]}>
        <div className={style.container}>
          <nav>
          <a href="/">
            <h2>Cookie World</h2>
            </a>
            <div className={style.menu}>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </nav>

          <div className={style["hero-content"]}>
            <h1>Cookie</h1>
            <img
              src="https://res.cloudinary.com/dlnflk9fd/image/upload/v1743833461/cookie_qoa4wl.webp"
              id="cookie"
              className={style.cookie}
              alt="Cookie"
            />
            <img
              src="https://res.cloudinary.com/dlnflk9fd/image/upload/v1743833368/choco-chips_hsrmtl.png"
              id="chips"
              className={style["choco-chips"]}
              alt="Choco Chips"
            />
            <img
              src="https://res.cloudinary.com/dlnflk9fd/image/upload/v1743833599/peanut_sxx4ps.png"
              className={style.peanut}
              alt="Peanut"
            />
            <img
              src="https://res.cloudinary.com/dlnflk9fd/image/upload/v1743833538/gem_pqr4oj.png"
              className={style.gem}
              alt="Gem"
            />
          </div>
        </div>
      </section>

      <section className={style["second-section"]}>
        <div className={style.container}>
          <div className={style["content-wrapper"]}>
            <div className={style["img-section"]}></div>
            <div className={style["content-section"]}>
              <h2>TASTE THE DIFFERENCE.</h2>
              <div className={style["sub-heading"]}>
                Real Eggs, Real Butter, Real Sugar.
              </div>
              <p>
              Cookie World was founded in 2020 during the height of the
                Covid-19 pandemic by Elise and Matt Thomas. Working behind the
                scenes to open the first Cookie World. location, Elise baked her
                signature cookie recipes using real eggs, real butter, and real
                cane sugar in her home, preparing hundreds of boxes weekly by
                hand for driveway pick-up.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={style["third-section"]}>
        <div className={style.container}>
          <div className={style["content-wrapper"]}>
            <div className={style["product-card"]}>
              <img
                src="https://res.cloudinary.com/dlnflk9fd/image/upload/v1743833497/frosted-sugar_ungydw.webp"
                className={style["cooki-sm"]}
                alt="Frosted Sugar"
              />
              <h4>FROSTED SUGAR</h4>
              <a href="#" className={style["cta-btn"]}>Buy Now</a>
            </div>
            <div className={style["product-card"]}>
              <h4>MONSTER</h4>
              <a href="#" className={style["cta-btn"]}>Buy Now</a>
            </div>
            <div className={style["product-card"]}>
              <img
                src="https://res.cloudinary.com/dlnflk9fd/image/upload/v1743833557/oreo_jvmunv.webp"
                className={style["cooki-sm"]}
                alt="Oreo"
              />
              <h4>OREO</h4>
              <a href="#" className={style["cta-btn"]}>Buy Now</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Home;
