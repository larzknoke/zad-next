import Link from "next/link";
import React from "react";
import Berg from "./berg";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import SideMainNav from "./sideMainNav";

function Header({ handleCurtain, handleTease }) {
  const [openNav, setOpenNav] = useState(false);
  const handleNav = () => setOpenNav(!openNav);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 500);
    });
  }, []);

  return (
    <header className="relative flex flex-col pt-12 xl:pt-16 xl:pb-0 pb-12 px-6 sm:px-10 xl:px-32 z-50 w-full h-auto xl:h-[40em] ">
      <Berg />
      <SideMainNav openNav={openNav} handleNav={handleNav} />
      <div className="max-w-[130em] mx-auto w-full z-40">
        <div className="flex w-full justify-between ">
          <div className="md:flex lg:space-x-8 space-x-0 flex-col lg:flex-row hidden">
            <div className="text-zad-blue-600">
              <i className="fa-solid fa-phone " />
              <FontAwesomeIcon
                icon={faPhone}
                className="text-gray-400 mr-2 w-4 inline-block"
              />
              0 55 51 / 96 88 - 0
            </div>
            <div className="text-zad-blue-600">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-gray-400 mr-2  w-4 inline-block"
              />
              <a href="mailto:info@zad-northeim.de">info@zad-northeim.de</a>
            </div>
          </div>
          <div className="text-zad-blue-600 space-x-4 flex justify-between xl:justify-end text-xs sm:text-sm md:text-base items-center	 ">
            <Link href="/">
              <a>Kunden-Login</a>
            </Link>
            <Link href="/impressum">
              <a>Impressum</a>
            </Link>
            <Link href="/datenschutz">
              <a>Datenschutz</a>
            </Link>
            <Link href="#">
              <a
                href="https://www.facebook.com/ZADGmbH/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="h-6" src="images/facebook.svg" alt="Facebook" />
              </a>
            </Link>
          </div>
        </div>
        <div
          className={`nav flex mt-8 xl:mt-24 justify-between items-center ${
            scroll ? " scroll " : ""
          }`}
        >
          <div className="logo w-44 md:w-56 xl:w-64 ">
            <Link href="/">
              <a>
                <img src="images/zad_logo.svg" width="100%" />
              </a>
            </Link>
          </div>
          <div className="text-zad-blue-600 space-x-6 flex main-nav">
            <Link href="/">
              <a>Home</a>
            </Link>
            {/* <Link href="/aktuelles">
              <a
                onClick={() => handleCurtain(true)}
                onMouseEnter={handleTease}
                onMouseLeave={handleTease}
              >
                Aktuelles
              </a>
            </Link> */}
            <Link href="/unternehmen">
              <a
                onClick={() => handleCurtain(true)}
                onMouseEnter={handleTease}
                onMouseLeave={handleTease}
              >
                Unternehmen
              </a>
            </Link>
            <Link href="/team">
              <a
                onClick={() => handleCurtain(true)}
                onMouseEnter={handleTease}
                onMouseLeave={handleTease}
              >
                Team
              </a>
            </Link>
            <Link href="/leistungen">
              <a
                onClick={() => handleCurtain(true)}
                onMouseEnter={handleTease}
                onMouseLeave={handleTease}
              >
                Leistungen
              </a>
            </Link>
            <Link href="/stellenangebote">
              <a
                onClick={() => handleCurtain(true)}
                onMouseEnter={handleTease}
                onMouseLeave={handleTease}
              >
                Stellenangebote
              </a>
            </Link>
            <Link href="/kontakt">
              <a
                onClick={() => handleCurtain(true)}
                onMouseEnter={handleTease}
                onMouseLeave={handleTease}
              >
                Kontakt/Anfahrt
              </a>
            </Link>
            <div className="burger" onClick={() => handleNav()}>
              <span />
              <span />
              <span />
            </div>

            {/* <Link href="/search">
              <a>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-gray-400 mr-1 hover:text-zad-blue-600"
                />
              </a>
            </Link> */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
