import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slider";
import RazzBerryImage from "./icons/RazzBerry.png";
import PinapBerryImage from "./icons/PinapBerry.png";
import NanabBerryImage from "./icons/NanabBerry.png";
import GoldenRazzBerryImage from "./icons/GoldenRazzBerry.png";
import SilverPinapBerryImage from "./icons/SilverPinapBerry.png";

const berryImages = [
  RazzBerryImage,
  PinapBerryImage,
  NanabBerryImage,
  GoldenRazzBerryImage,
  SilverPinapBerryImage
];

const BerriesContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const BerryImage = styled.img`
  position: absolute;
  bottom: 100%;
  animation: falling-berries ${(props) => props.animationDuration} linear
    infinite;

  @keyframes falling-berries {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(calc(100vh + 50px));
    }
  }
`;

const SliderWrapper = styled.div`
  width: 200px;
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;
`;

export default function Berries(props) {
  const [fallingBerries, setFallingBerries] = useState([]);
  const [isOn, setIsOn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isOn) {
        const newBerry = {
          id: Date.now(),
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 3 + 2}s`,
          image: berryImages[Math.floor(Math.random() * berryImages.length)]
        };
        setFallingBerries((prevBerries) => [...prevBerries, newBerry]);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [isOn]);

  const handleSliderChange = (value) => {
    setIsOn(value >= 1);
    if (value === 0) {
      setFallingBerries([]);
    }
  };

  return (
    <BerriesContainer>
      {fallingBerries.map((berry) => (
        <BerryImage
          key={berry.id}
          src={berry.image}
          alt="berry"
          style={{
            left: berry.left,
            animationDuration: berry.animationDuration
          }}
        />
      ))}
      <SliderWrapper>
        <Slider
          min={0}
          max={1}
          step={1}
          defaultValue={isOn ? 1 : 0}
          onAfterChange={handleSliderChange}
          renderThumb={(props, state) => (
            <div {...props}>{state.value === 1 ? "On" : "Off"}</div>
          )}
          renderTrack={(props, state) => (
            <div
              {...props}
              style={{
                ...props.style,
                backgroundColor: state.value === 1 ? "#73ac31" : "#ff6a62",
                height: "8px"
              }}
            />
          )}
        />
      </SliderWrapper>
    </BerriesContainer>
  );
}
