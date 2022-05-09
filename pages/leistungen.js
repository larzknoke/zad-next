import React from "react";
import Arrow, { DIRECTION, HEAD } from "react-arrows";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckMedical,
  faHeartbeat,
  faHandPaper,
  faLaptopMedical,
} from "@fortawesome/free-solid-svg-icons";

function Leistungen() {
  return (
    <div className="space-x-24 flex mx-auto justify-center text-center p-16  ">
      <a href="/leistung-heilberufe" className="leistungen-horizontal">
        <div className="leistungen-icon-horizontal">
          <FontAwesomeIcon icon={faTruckMedical} className="w-3/4" />
        </div>
        <span className="font-bold">Krankentransporte</span>
      </a>
      <a
        href="/leistung-heilberufe"
        className="leistungen-horizontal"
        id="toPflege"
      >
        <div className="leistungen-icon-horizontal">
          <FontAwesomeIcon icon={faHandPaper} className="w-3/4" />
        </div>
        <span className="font-bold">Pflegedienste</span>
      </a>
      <a href="/leistung-heilberufe" className="leistungen-horizontal">
        <div className="leistungen-icon-horizontal">
          <i className="fas fa-heartbeat text-6xl" />
          <FontAwesomeIcon icon={faHeartbeat} className="w-3/4" />
        </div>
        <span className="font-bold">Heilberufe</span>
      </a>
      <a href="/leistung-heilberufe" className="leistungen-horizontal">
        <div className="leistungen-icon-horizontal">
          <FontAwesomeIcon icon={faLaptopMedical} className="w-3/4" />
        </div>
        <span className="font-bold">Softwarelösungen</span>
      </a>
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
