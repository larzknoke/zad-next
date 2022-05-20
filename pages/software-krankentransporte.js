import React from "react";
import Sidenav from "../components/sidenav";

function Software() {
  return (
    <div className="mx-auto flex">
      <div className="basis-1/4 space-y-8">
        <Sidenav />
      </div>
      <div className="px-48">
        <img
          className="drop-shadow-lg rounded  mx-auto
        "
          src="images/leistungen/software1.jpg"
          alt="Team12"
        />
        <div className=" my-16">
          <h3>Abrechnungen für Krankentransporte</h3>
          <h2>So individuell wie Ihre Leistungen</h2>
          <p>Text hier...</p>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className="button mx-auto table my-16"
            href="/pdf/Flyer-ZAD-CareSocial.pdf"
          >
            Flyer (1.7 MB)
          </a>
        </div>
        <img
          className="drop-shadow-lg rounded  mx-auto
        "
          src="images/leistungen/software2.jpg"
          alt="Team12"
        />
        <div className="px-[15%] my-16">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="button mx-auto table my-16"
            href="/pdf/Flyer-ZAD-ZADtools-ebook.pdf"
          >
            Flyer (2 MB)
          </a>
        </div>
      </div>
    </div>
  );
}

export default Software;
