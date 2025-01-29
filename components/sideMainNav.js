import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function SideMainNav({ openNav, handleNav }) {
  const [subMenu, setSubMenu] = useState(false);

  const handleSubMenu = () => setSubMenu(!subMenu);

  return (
    <nav
      className={
        (openNav ? "  translate-x-0 " : "  -translate-x-full ") +
        " fixed top-0 left-0 bottom-0 flex flex-col w-full  md:w-5/6 md:max-w-sm py-6 px-6 bg-zad-blue-600 text-white border-r overflow-y-auto z-[999] transition-all duration-150"
      }
    >
      <div className="flex items-center mb-8 justify-between">
        <Link href="/">
          <a onClick={() => handleNav()}>
            <img src="images/zad_logo_white.svg" className="w-1/2 md:w-1/3" />
          </a>
        </Link>
        <button onClick={() => handleNav()}>
          <FontAwesomeIcon
            icon={faTimes}
            className="h-6 w-6 hover:text-white cursor-pointer text-zad-blue-200"
          />
        </button>
      </div>
      <div>
        <ul>
          <li className="mb-1">
            <Link href="/">
              <a
                onClick={() => handleNav()}
                className="block py-4 hover:text-white text-zad-blue-200"
              >
                Home
              </a>
            </Link>
            <Link href="/unternehmen">
              <a
                onClick={() => handleNav()}
                className="block py-4 hover:text-white text-zad-blue-200"
              >
                Unternehmen
              </a>
            </Link>
            <Link href="/team">
              <a
                onClick={() => handleNav()}
                className="block py-4 hover:text-white text-zad-blue-200"
              >
                Team
              </a>
            </Link>
            <Link href="/leistungen">
              <a
                onClick={() => handleNav()}
                className="block py-4 hover:text-white text-zad-blue-200"
              >
                Leistungen
              </a>
            </Link>
            <div>
              <div
                className="flex justify-between py-4 group cursor-pointer"
                onClick={() => handleSubMenu()}
              >
                <a className="block text-zad-blue-200 group-hover:text-white hover:no-underline">
                  Stellenangebote
                </a>{" "}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={
                    "h-4 w-4 mt-1 text-zad-blue-200 group-hover:text-white " +
                    (subMenu ? " rotate-180" : "")
                  }
                />
              </div>
              <div
                className={
                  " flex flex-col bg-zad-blue-300 px-3  rounded gap-4 transition-all overflow-hidden " +
                  (subMenu ? " h-full py-4 opacity-1 " : " h-0 py-0 opacity-0 ")
                }
              >
                <Link href="/karriere-sachbearbeiter">
                  <a onClick={() => handleNav()}>Karriere bei ZAD</a>
                </Link>
                <hr />
                <Link href="/karriere-sachbearbeiter">
                  <a onClick={() => handleNav()}>
                    Sachbearbeitung im Gesundheitswesen (m/w/d)
                  </a>
                </Link>
                <Link href="/karriere-buero">
                  <a onClick={() => handleNav()}>Bürohilfskraft (m/w/d)</a>
                </Link>
                <Link href="/karriere-it">
                  <a onClick={() => handleNav()}>Fachkraft für IT (m/w/d)</a>
                </Link>
              </div>
            </div>

            <Link href="/kontakt">
              <a
                onClick={() => handleNav()}
                className="block py-4 hover:text-white text-zad-blue-200"
              >
                Kontakt/Anfahrt
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-auto">
        <p className="my-4 text-xs text-center text-gray-400">
          <span>2025 © Zentraler Abrechnungs-Dienst GmbH, Northeim</span>
        </p>
      </div>
    </nav>
  );
}

export default SideMainNav;
