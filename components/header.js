import Link from "next/link";
import React from "react";

function Header({ handleCurtain }) {
  return (
    <header className="flex flex-col pt-16 px-32 z-50 w-full mx-auto bg-[url('/images/berg2.svg')] bg-no-repeat bg-bottom bg-contain bg-origin-content h-[60vh] ">
      <div className="max-w-[130em] mx-auto w-full">
        <div className="flex w-full justify-between">
          <div className="flex space-x-8">
            <div className="text-zad-blue-600">
              <i className="fa-solid fa-phone text-gray-400 mr-1" /> 0 55 51 /
              96 88 - 0
            </div>
            <div className="text-zad-blue-600">
              <i className="fa-solid fa-envelope text-gray-400 mr-1" />
              <a href="mailto:info@zad-northeim.de">info@zad-northeim.de</a>
            </div>
          </div>
          <div className="text-zad-blue-600 space-x-4 flex">
            <a href="#">Kunden-Login</a>
            <a href="/impressum">Impressum</a>
            <a href="/datenschutz">Datenschutz</a>
            <a
              href="https://www.facebook.com/ZADGmbH/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="h-6" src="images/facebook.svg" alt="Facebook" />
            </a>
          </div>
        </div>
        <div className="flex mt-24 justify-between items-center">
          <div className="logo w-64">
            <Link href="/">
              <a>
                <img src="images/zad_logo.svg" width="100%" />
              </a>
            </Link>
          </div>
          <div className="text-zad-blue-600 space-x-6 flex">
            <a href="/">Home</a>
            <a href="#">Unternehmen</a>
            <Link href="/leistungen">
              <a onClick={() => handleCurtain(true)}>Leistungen</a>
            </Link>
            <Link href="/stellenangebote">
              <a onClick={() => handleCurtain(true)}>Stellenangebote</a>
            </Link>
            <a href="/kontakt">Kontakt/Anfahrt</a>
            <a href="#">
              <i className="fa-solid fa-magnifying-glass" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
