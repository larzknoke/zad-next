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
        <div className="flex mt-24 justify-between items-center">
          <div className="logo w-64">
            <Link href="/">
              <a>
                <img src="images/zad_logo.svg" width="100%" />
              </a>
            </Link>
          </div>
          <div className="text-zad-blue-600 space-x-6 flex">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/unternehmen">
              <a>Unternehmen</a>
            </Link>
            <Link href="/leistungen">
              <a onClick={() => handleCurtain(true)}>Leistungen</a>
            </Link>
            <Link href="/stellenangebote">
              <a onClick={() => handleCurtain(true)}>Stellenangebote</a>
            </Link>
            <Link href="/kontakt">
              <a>Kontakt/Anfahrt</a>
            </Link>
            <Link href="/search">
              <a>
                <i className="fa-solid fa-magnifying-glass" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
