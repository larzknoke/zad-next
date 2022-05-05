import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckMedical,
  faHeartbeat,
  faHandPaper,
  faLaptopMedical,
} from "@fortawesome/free-solid-svg-icons";

function Leistungen() {
  return (
    <div className="space-x-24 flex mx-auto justify-center text-center  ">
      <a href="/leistung-heilberufe" className="leistungen-horizontal">
        <div className="leistungen-icon-horizontal">
          <FontAwesomeIcon icon={faTruckMedical} className="w-3/4" />
        </div>
        <span className="font-bold">Krankentransporte</span>
      </a>
      <a href="/leistung-heilberufe" className="leistungen-horizontal">
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
    </div>
  );
}

export default Leistungen;
