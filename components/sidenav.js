import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckMedical,
  faHeartbeat,
  faHandPaper,
  faLaptopMedical,
} from "@fortawesome/free-solid-svg-icons";

function Sidenav() {
  return (
    <>
      <Link href="/krankentransporte">
        <a className="leistungen-vertical">
          <div className="leistungen-icon-vertical">
            <FontAwesomeIcon icon={faTruckMedical} />
          </div>
          <span className="font-bold text-center">Krankentransporte</span>
        </a>
      </Link>
      <Link href="/pflegedienste">
        <a className="leistungen-vertical" id="toPflege">
          <div className="leistungen-icon-vertical">
            <FontAwesomeIcon icon={faHandPaper} />
          </div>
          <span className="font-bold text-center">Pflegedienste</span>
        </a>
      </Link>
      <Link href="/heilberufe">
        <a className="leistungen-vertical">
          <div className="leistungen-icon-vertical">
            <i className="fas fa-heartbeat text-6xl" />
            <FontAwesomeIcon icon={faHeartbeat} />
          </div>
          <span className="font-bold text-center">Heilberufe</span>
        </a>
      </Link>
      <Link href="/software">
        <a className="leistungen-vertical">
          <div className="leistungen-icon-vertical">
            <FontAwesomeIcon icon={faLaptopMedical} />
          </div>
          <span className="font-bold text-center">Softwarelösungen</span>
        </a>
      </Link>
    </>
  );
}

export default Sidenav;
