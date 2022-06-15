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
          className="w-full drop-shadow"
          src="images/leistungen/krankentransporte.svg"
          alt="Krankentransporte"
        />
        <div className=" my-16">
          <h3>Abrechnungen für Krankentransporte</h3>
          <h2>Software für das Gesundheitswesen</h2>
        </div>
        <div className="flex space-x-16">
          <div>
            <img
              className="drop-shadow-lg rounded  mx-auto
        "
              src="images/cover_ZADtools.jpg"
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
          <div>
            <img
              className="drop-shadow-lg rounded  mx-auto
        "
              src="images/cover_Dispolive.jpg"
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
      </div>
    </div>
  );
}

export default Software;
