import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SecondSection = () => {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".second-section",
        start: "20% 100%",
        end: "50% 50%",
        scrub: true,
      },
    });

    tl.to("#cookie", {
      top: "138%",
      left: "0%",
      rotate: "50%",
    });

    tl.to("#chips", {
      width: "8vw",
      top: "125%",
      left: "88%",
    });
  }, []);

  return (
    <section className="second-section">
      <h2>Second Section</h2>
      <img id="cookie" src="/images/cookie.png" alt="Cookie" />
      <img id="chips" src="/images/chips.png" alt="Choco Chips" />
    </section>
  );
};

export default SecondSection;
