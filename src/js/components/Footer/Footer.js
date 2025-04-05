// src/js/components/Footer/Footer.js
import React from "react";
import style from "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className={style["wave"]}>
        <div
          className={style["wave"]}
          id={style["wave1"]}
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dlnflk9fd/image/upload/v1743832761/Brown_Wave_ugysde.png)`,
          }}
        />
        <div
          className={style["wave"]}
          id={style["wave2"]}
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dlnflk9fd/image/upload/v1743832761/Brown_Wave_ugysde.png)`,
          }}
        />
        <div
          className={style["wave"]}
          id={style["wave3"]}
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dlnflk9fd/image/upload/v1743832761/Brown_Wave_ugysde.png)`,
          }}
        />
        <div
          className={style["wave"]}
          id={style["wave4"]}
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dlnflk9fd/image/upload/v1743832761/Brown_Wave_ugysde.png)`,
          }}
        />
      </div>
      <p>@2025 Cookie World | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
