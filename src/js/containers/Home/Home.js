import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// eslint-disable-next-line no-unused-vars
import dynamic from "next/dynamic"; // For dynamic imports in Next.js

// import HeroSection from "./components/HeroSection";
// import SecondSection from "./components/SecondSection";
// import ThirdSection from "./components/ThirdSection";
import HeroSection from "../components/HeroSection";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";


import "./Home.scss";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const scrollContainer = useRef(null);

  useEffect(() => {
    let locoScroll = null;

    // Ensure code runs only in the browser
    if (typeof window !== "undefined") {
      import("locomotive-scroll").then((LocomotiveScrollModule) => {
        locoScroll = new LocomotiveScrollModule.default({
          el: scrollContainer.current,
          smooth: true,
          multiplier: 1,
        });

        // Sync Locomotive Scroll with ScrollTrigger
        locoScroll.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(scrollContainer.current, {
          scrollTop(value) {
            return arguments.length
              ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
              : locoScroll.scroll.instance.scroll.y;
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },
          pinType: scrollContainer.current.style.transform ? "transform" : "fixed",
        });

        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        ScrollTrigger.defaults({ scroller: scrollContainer.current });

        // Refresh ScrollTrigger
        ScrollTrigger.refresh();
      });
    }

    return () => {
      if (locoScroll) locoScroll.destroy(); // Cleanup Locomotive Scroll
    };
  }, []);

  return (
    <div ref={scrollContainer} className="smooth-scroll">
      <HeroSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}
