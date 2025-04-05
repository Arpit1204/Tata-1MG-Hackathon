import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ThirdSection = () => {
  useEffect(() => {
    let t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".third-section",
        start: "20% 100%",
        end: "50% 50%",
        scrub: true,
      },
    });

    t2.to("#cookie", {
      top: "237%",
      left: "43%",
      width: "13vw",
      rotate: "-50deg",
    });

    t2.from("#cookism", {
      rotate: "0",
    });

    t2.to("#cookism", {
      rotate: "-50deg",
    });
  }, []);

  return (
    <section className="third-section">
      <h2>Third Section</h2>
      <img id="cookie" src="/images/cookie.png" alt="Cookie" />
      <img id="cookism" src="/images/cookism.png" alt="Cookism" />
    </section>
  );
};

export default ThirdSection;
