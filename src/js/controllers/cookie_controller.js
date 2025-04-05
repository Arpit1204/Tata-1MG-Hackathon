
import { Controller } from "@github/catalyst";

export default class extends Controller {
  static targets = ["cookie", "chips"];

  connect() {
    this.animateEntry();
    this.setupScrollAnimations();
  }

  animateEntry() {
    this.cookieTarget.animate([
      { transform: "translateY(-200px) rotate(-60deg)", opacity: 0 },
      { transform: "translateY(0px) rotate(0deg)", opacity: 1 }
    ], {
      duration: 1000,
      easing: "ease-out",
      fill: "forwards"
    });
  }

  setupScrollAnimations() {
    // Cookie to bottom-center
    const scrollObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.cookieTarget.animate([
            { transform: "translateY(0px) rotate(0deg)", width: "22vw" },
            { transform: "translateY(500px) rotate(-45deg)", width: "13vw" }
          ], {
            duration: 1000,
            fill: "forwards",
            easing: "ease-in-out"
          });
        }
      });
    }, { threshold: 0.5 });

    scrollObs.observe(this.element.querySelector(".third-section"));

    // Choco-chips floating
    const chipsObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.chipsTarget.animate([
            { transform: "translateY(0) rotate(0deg)" },
            { transform: "translateY(-40px) rotate(360deg)" }
          ], {
            duration: 1000,
            easing: "ease-in-out",
            fill: "forwards"
          });
        }
      });
    }, { threshold: 0.5 });

    chipsObs.observe(this.chipsTarget);
  }
}
