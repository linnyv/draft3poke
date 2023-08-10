import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Ball from "./icons/Pokeball.png";
import HomeIcon from "./icons/House.png";
import AboutIcon from "./icons/Pokedex.png";
import FavoriteIcon from "./icons/cora.png";
import GymIcon from "./icons/Max revive.png";
import MissingIcon from "./icons/Lure.png";
import TroubleIcon from "./icons/Razz berry.png";
import MenaceIcon from "./icons/Nanab berry.png";

const NavToggle = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  margin-right: 16px;
  padding: 8px;
  img {
    height: 32px;
  }
`;

const NavContainer = styled.div`
  background-color: #333;
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 10;

  &.open {
    transform: translateX(0);
  }
`;

const NavClose = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 24px;
  margin-left: auto;
  padding: 8px;
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavItem = styled.div`
  align-items: center;
  display: flex;
  margin: 16px;
`;

const NavLogo = styled.span`
  margin-right: 16px;

  img {
    height: 24px;
    margin-right: 8px;
    cursor: pointer;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  font-size: 16px;
  margin-left: 8px;
  text-decoration: none;

  img {
    height: 24px;
    margin-right: 8px;
  }
`;

export default function Nav(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNav() {
    setIsOpen(!isOpen);
  }

  function handleLinkClick() {
    setIsOpen(false);
  }

  return (
    <>
      <NavToggle className={isOpen ? "open" : ""} onClick={toggleNav}>
        <img src={Ball} alt="Menu" />
      </NavToggle>
      <NavContainer className={isOpen ? "open" : ""}>
        <NavClose onClick={toggleNav}>&times;</NavClose>
        <NavLinks>
          <NavItem>
            <NavLogo>
              <img src={Ball} alt="Pokeball" onClick={handleLinkClick} />
            </NavLogo>
          </NavItem>
          <NavItem>
            <NavLink to="/" onClick={handleLinkClick}>
              <img src={HomeIcon} alt="Home" />
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about" onClick={handleLinkClick}>
              <img src={AboutIcon} alt="Pokedex" />
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/favorite" onClick={handleLinkClick}>
              <img src={FavoriteIcon} alt="Heart" />
              Favorite Pokemon
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/gym" onClick={handleLinkClick}>
              <img src={GymIcon} alt="Max Revive" />
              Gym Pokemon
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/missing" onClick={handleLinkClick}>
              <img src={MissingIcon} alt="Lure Module" />
              MissingPokemon
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/trouble" onClick={handleLinkClick}>
              <img src={TroubleIcon} alt="Razz Berry" />
              Trouble Pokemon
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/menace" onClick={handleLinkClick}>
              <img src={MenaceIcon} alt="Nanab Berry" />
              Menace Pokemon
            </NavLink>
          </NavItem>
        </NavLinks>
      </NavContainer>
    </>
  );
}
