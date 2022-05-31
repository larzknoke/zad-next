import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import TransportIcon from "../components/transportIcon";

// import Arrow from "react-arrows";
const Arrow = dynamic(() => import("react-arrows"), { ssr: false });
const DIRECTION = dynamic(
  () => import("react-arrows").then((mod) => mod.DIRECTION),
  {
    ssr: false,
  }
);

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckMedical,
  faHandPaper,
  faLaptopMedical,
} from "@fortawesome/free-solid-svg-icons";

function Leistungen() {
  return (
    <div className="space-x-16 flex mx-auto justify-center text-center mb-56 ">
      <Link href="/krankentransporte">
        <a className="leistungen-horizontal">
          <div className="leistungen-icon-horizontal">
            <FontAwesomeIcon icon={faTruckMedical} className="w-3/4" />
          </div>
          <span className="font-bold h-16 text-xl">Krankentransporte</span>
          <span className="border-t border-zad-blue-200 pt-4 px-3">
            Qualität ist eine Frage der Geschwindigkeit. Wir bieten Abrechnungen
            für Rettungsdienste und Krankentransporte.
          </span>
        </a>
      </Link>
      <Link href="/software-krankentransporte">
        <a className="leistungen-horizontal">
          <div className="leistungen-icon-horizontal">
            <TransportIcon className="w-3/4" />
          </div>
          <span className="font-bold h-16 text-xl">
            Software für <br /> Krankentransporte
          </span>
          <span className="border-t border-zad-blue-200 pt-4 px-3">
            Optimierte Planung- und Verwaltung für Rettungs- dienste und
            Beförderungs- unternehmen. In Koopera- tion mit ZADtolls wurde die
            Software „Dispolive“ für Krankentransporte entwickelte.
          </span>
          <img
            className="pt-8 w-3/4 self-center"
            src="images/zad_tools.svg"
            alt="ZAD Tools Logo"
          />
        </a>
      </Link>
      <Link href="/pflegedienste">
        <a className="leistungen-horizontal" id="toPflege">
          <div className="leistungen-icon-horizontal">
            <FontAwesomeIcon icon={faHandPaper} className="w-3/4" />
          </div>
          <span className="font-bold h-16 text-xl">Pflegedienste</span>
          <span className="border-t border-zad-blue-200 pt-4 px-3">
            Fast jede Kasse wickelt die Leistungsabrechnung anders ab. Mit ZAD
            können Sie sich wieder dem Wesentlichen zuwenden.
          </span>{" "}
        </a>
      </Link>
      <Link href="/software-pflegedienste">
        <a className="leistungen-horizontal">
          <div className="leistungen-icon-horizontal">
            <FontAwesomeIcon icon={faLaptopMedical} className="w-3/4" />
          </div>
          <span className="font-bold h-16 text-xl">
            Software für <br /> Pflegedienste
          </span>
          <span className="border-t border-zad-blue-200 pt-4 px-3">
            Mit der Gründung des Unternehmens „Click On Live“ wurde eine neue
            Software für den ambulanten Pflege- dienst entwickelt. (hier noch
            ein Vorteil)
          </span>
          <img
            className="pt-8 w-3/4 self-center"
            src="images/ClickOn.svg"
            alt="ClickOn Logo"
          />
        </a>
      </Link>

      <Arrow
        className="arrow"
        from={{
          direction: DIRECTION.BOTTOM,
          node: () => document.getElementById("marker"),
          translation: [-0.5, 0.5],
        }}
        to={{
          direction: DIRECTION.BOTTOM,
          node: () => document.getElementById("toPflege"),
          translation: [2, -0.8],
        }}
      />
      <Arrow
        className="arrow"
        from={{
          direction: DIRECTION.RIGHT,
          node: () => document.getElementById("hand"),
          translation: [0, 0.5],
        }}
        to={{
          direction: DIRECTION.BOTTOM,
          node: () => document.getElementById("toPflege"),
          translation: [0, 2],
        }}
      />
    </div>
  );
}

export default Leistungen;
