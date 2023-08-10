import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aloha from "../components/regions/Aloha";
import Galar from "../components/regions/Galar";
import Hisui from "../components/regions/Hisui";
import Hoenn from "../components/regions/Hoenn";
import Johto from "../components/regions/Johto";
import Kalos from "../components/regions/Kalos";
import Kanto from "../components/regions/Kanto";
import Paldea from "../components/regions/Paldea";
import Sinnoh from "../components/regions/Sinnoh";
import Unknown from "../components/regions/Unknown";
import Unova from "../components/regions/Unova";
import styles from "../components/style/missing.module.css"; // Import the CSS module
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #ff836a;
  }
`;

export default function Missing() {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
  };

  const renderCarousel = () => {
    if (!selectedRegion) {
      return null;
    }

    const carouselSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true, 
      swipe: true, 
      touchMove: true, 
      wheel: true, 
    };

    return (
      <Slider {...carouselSettings}>
        {selectedRegion === "aloha" && <Aloha />}
        {selectedRegion === "galar" && <Galar />}
        {selectedRegion === "hisui" && <Hisui />}
        {selectedRegion === "hoenn" && <Hoenn />}
        {selectedRegion === "johto" && <Johto />}
        {selectedRegion === "kalos" && <Kalos />}
        {selectedRegion === "kanto" && <Kanto />}
        {selectedRegion === "paldea" && <Paldea />}
        {selectedRegion === "sinnoh" && <Sinnoh />}
        {selectedRegion === "unknown" && <Unknown />}
        {selectedRegion === "unova" && <Unova />}
      </Slider>
    );
  };

  return (
    <>
      <GlobalStyle />
      <div className={styles.container}>
        <h1 className={styles.title}>Missing Pokemon</h1>
        <div className={styles.regions}>
          <div
            className={styles.region}
            onClick={() => handleRegionClick("aloha")}
          >
            Aloha
          </div>
          <div
            className={styles.region}
            onClick={() => handleRegionClick("galar")}
          >
            Galar
          </div>
          <div
            className={styles.region}
            onClick={() => handleRegionClick("hisui")}
          >
            Hisui
          </div>
          <div
            className={styles.region}
            onClick={() => handleRegionClick("hoenn")}
          >
            Hoenn
          </div>
          <div
            className={styles.region}
            onClick={() => handleRegionClick("johto")}
          >
            Johto
          </div>
          <div
            className={styles.region}
            onClick={() => handleRegionClick("kalos")}
          >
            Kalos
          </div>
          <div
            className={styles.region}
            onClick={() => handleRegionClick("kanto")}
          >
            Kanto
          </div>
          <div
            className={styles.region}
            onClick={() => handleRegionClick("paldea")}
          >
            Paldea
          </div>
          <div
            className={styles.region}
            onClick={() => handleRegionClick("sinnoh")}
          >
            Sinnoh
          </div>
          <div
            className={styles.region}
            onClick={() => handleRegionClick("unknown")}
          >
            Unknown
          </div>
          <div
            className={styles.region}
            onClick={() => handleRegionClick("unova")}
          >
            Unova
          </div>
        </div>
        {renderCarousel()}
      </div>
    </>
  );
}