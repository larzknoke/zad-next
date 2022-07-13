import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckMedical,
  faLaptopMedical,
} from "@fortawesome/free-solid-svg-icons";
import TransportIcon from "./transportIcon";
import MedicalIcon from "./medicalIcon";

function Sidenav() {
  const router = useRouter();

  return (
    <>
      <Link href="/krankentransporte">
        <a className="leistungen-vertical">
          <div className="leistungen-icon-vertical">
            <FontAwesomeIcon
              icon={faTruckMedical}
              className="w-full icon-start"
            />
            <FontAwesomeIcon
              icon={faTruckMedical}
              className="w-full icon-end"
            />
          </div>
          <span
            className={
              "font-bold text-center  text-[12px] md:text-base" +
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
            <TransportIcon className="w-full icon-start" />
            <TransportIcon className="w-full icon-end" />
          </div>
          <span
            className={
              "font-bold text-center  text-[12px] md:text-base" +
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
            <MedicalIcon className="w-full icon-start" />
            <MedicalIcon className="w-full icon-end" />
          </div>
          <span
            className={
              "font-bold text-center  text-[12px] md:text-base" +
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
            <FontAwesomeIcon
              icon={faLaptopMedical}
              className="w-full icon-start"
            />
            <FontAwesomeIcon
              icon={faLaptopMedical}
              className="w-full icon-end"
            />
          </div>
          <span
            className={
              "font-bold text-center  text-[12px] md:text-base" +
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
