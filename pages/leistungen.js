import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
// import Arrow, { DIRECTION, HEAD } from "../components/arrows";
// import Arrow, { DIRECTION, HEAD } from "react-arrows";

const Arrow = dynamic(() => import("../components/arrows"), { ssr: false });
const DIRECTION = dynamic(
  () => import("../components/arrows").then((mod) => mod.DIRECTION),
  {
    ssr: false,
  }
);
const HEAD = dynamic(
  () => import("../components/arrows").then((mod) => mod.HEAD),
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
      <Link href="krankentransporte">
        <a className="leistungen-horizontal">
          <div className="leistungen-icon-horizontal">
            <FontAwesomeIcon icon={faTruckMedical} className="w-3/4" />
          </div>
          <span className="font-bold">Krankentransporte</span>
        </a>
      </Link>
      <Link href="pflegedienste">
        <a className="leistungen-horizontal" id="toPflege">
          <div className="leistungen-icon-horizontal">
            <FontAwesomeIcon icon={faHandPaper} className="w-3/4" />
          </div>
          <span className="font-bold">Pflegedienste</span>
        </a>
      </Link>
      <Link href="heilberufe">
        <a className="leistungen-horizontal">
          <div className="leistungen-icon-horizontal">
            <i className="fas fa-heartbeat text-6xl" />
            <FontAwesomeIcon icon={faHeartbeat} className="w-3/4" />
          </div>
          <span className="font-bold">Heilberufe</span>
        </a>
      </Link>
      <Link href="software">
        <a className="leistungen-horizontal">
          <div className="leistungen-icon-horizontal">
            <FontAwesomeIcon icon={faLaptopMedical} className="w-3/4" />
          </div>
          <span className="font-bold">Softwarelösungen</span>
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
          direction: DIRECTION.TOP,
          node: () => document.getElementById("toPflege"),
          translation: [2, -0.8],
        }}
        head={HEAD.VEE}
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
        head={HEAD.VEE}
      />
    </div>
  );
}

export default Leistungen;
