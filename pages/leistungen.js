import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

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
  faHeartbeat,
  faHandPaper,
  faLaptopMedical,
} from "@fortawesome/free-solid-svg-icons";

function Leistungen() {
  return (
    <div className="space-x-24 flex mx-auto justify-center text-center p-16 ">
      <Link href="/krankentransporte">
        <a className="leistungen-horizontal">
          <div className="leistungen-icon-horizontal">
            <FontAwesomeIcon icon={faTruckMedical} className="w-3/4" />
          </div>
          <span className="font-bold">Krankentransporte</span>
        </a>
      </Link>
      <Link href="/software-krankentransporte">
        <a className="leistungen-horizontal">
          <div className="leistungen-icon-horizontal">
            <i className="fas fa-heartbeat text-6xl" />
            <FontAwesomeIcon icon={faHeartbeat} className="w-3/4" />
          </div>
          <span className="font-bold">
            Software für <br /> Krankentransporte
          </span>
        </a>
      </Link>
      <Link href="/pflegedienste">
        <a className="leistungen-horizontal" id="toPflege">
          <div className="leistungen-icon-horizontal">
            <FontAwesomeIcon icon={faHandPaper} className="w-3/4" />
          </div>
          <span className="font-bold">Pflegedienste</span>
        </a>
      </Link>
      <Link href="/software-pflegedienste">
        <a className="leistungen-horizontal">
          <div className="leistungen-icon-horizontal">
            <FontAwesomeIcon icon={faLaptopMedical} className="w-3/4" />
          </div>
          <span className="font-bold">
            Software für <br /> Pflegedienste
          </span>
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
