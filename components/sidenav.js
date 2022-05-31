import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckMedical,
  faHandPaper,
  faLaptopMedical,
} from "@fortawesome/free-solid-svg-icons";
import TransportIcon from "./transportIcon";
import Router from "next/router";

function Sidenav() {
  const router = useRouter();

  return (
    <>
      <Link href="/krankentransporte">
        <a className="leistungen-vertical">
          <div className="leistungen-icon-vertical">
            <FontAwesomeIcon icon={faTruckMedical} className="w-full" />
          </div>
          <span
            className={
              "font-bold text-center" +
              (router.pathname == "/krankentransporte" ? " text-red-700 " : "")
            }
          >
            Krankentransporte
          </span>
        </a>
      </Link>
      <Link href="/software-krankentransporte">
        <a className="leistungen-vertical">
          <div className="leistungen-icon-vertical">
            <TransportIcon className="w-full" />
          </div>
          <span
            className={
              "font-bold text-center" +
              (router.pathname == "/software-krankentransporte"
                ? " text-red-700 "
                : "")
            }
          >
            Software für <br /> Krankentransporte
          </span>
        </a>
      </Link>
      <Link href="/pflegedienste">
        <a className="leistungen-vertical" id="toPflege">
          <div className="leistungen-icon-vertical">
            <FontAwesomeIcon icon={faHandPaper} className="w-full" />
          </div>
          <span
            className={
              "font-bold text-center" +
              (router.pathname == "/pflegedienste" ? " text-red-700 " : "")
            }
          >
            Pflegedienste
          </span>
        </a>
      </Link>
      <Link href="/software-pflegedienste">
        <a className="leistungen-vertical">
          <div className="leistungen-icon-vertical">
            <FontAwesomeIcon icon={faLaptopMedical} className="w-full" />
          </div>
          <span
            className={
              "font-bold text-center" +
              (router.pathname == "/software-pflegedienste"
                ? " text-red-700 "
                : "")
            }
          >
            Software für <br /> Pflegedienste
          </span>
        </a>
      </Link>
    </>
  );
}

export default Sidenav;
