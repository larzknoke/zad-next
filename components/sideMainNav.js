import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function SideMainNav({ openNav, handleNav }) {
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
            <Link href="/stellenangebote">
              <a
                onClick={() => handleNav()}
                className="block py-4 hover:text-white text-zad-blue-200"
              >
                Stellenangebote
              </a>
            </Link>
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
          <span>2022 © Zentraler Abrechnungs-Dienst GmbH, Northeim</span>
        </p>
      </div>
    </nav>
  );
}

export default SideMainNav;
