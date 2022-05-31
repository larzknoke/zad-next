import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckMedical,
  faHandPaper,
  faLaptopMedical,
} from "@fortawesome/free-solid-svg-icons";
import TransportIcon from "../components/transportIcon";

export default function Home() {
  return (
    <div className="mx-auto">
      <h1 className="text-center font-bold text-5xl">
        Herzlich willkommen beim ZAD ...
      </h1>
      <h2 className="text-center font-normal text-3xl">
        dem führenden Spezialisten für die Leistungsabrechnung im
        Gesundheitswesen.
      </h2>
      <div className="flex mb-24 drop-shadow mt-16 ">
        <img
          className="w-1/4 rounded-l-lg"
          src="images/leistungen/krankentransporte_klein.jpg"
          alt="Krankentransporte"
        />
        <img
          className="w-1/4"
          src="images/leistungen/pflegedienste_klein.jpg"
          alt="Pflegedienste"
        />
        <img
          className="w-1/4"
          src="images/leistungen/heilberufe_klein.jpg"
          alt="Heilberufe_"
        />
        <img
          className="w-1/4 rounded-r-lg"
          src="images/leistungen/software_klein.jpg"
          alt="Software"
        />
      </div>
      <div className="space-x-16 flex mx-auto justify-center text-center ">
        <Link href="/krankentransporte">
          <a className="leistungen-horizontal w-1/4">
            <div className="leistungen-icon-horizontal">
              <FontAwesomeIcon icon={faTruckMedical} className="w-3/4" />
            </div>
            <span className="font-bold h-14 text-lg ">Krankentransporte</span>
            <span className="border-t border-zad-blue-200 pt-3 px-3">
              Qualität ist eine Frage der Geschwindigkeit. Wir bieten
              Abrechnungen für Rettungsdienste und Krankentransporte.
            </span>
          </a>
        </Link>
        <Link href="/software-krankentransporte">
          <a className="leistungen-horizontal w-1/4">
            <div className="leistungen-icon-horizontal">
              <i className="fas fa-heartbeat text-6xl" />
              <TransportIcon className="w-3/4" />
            </div>
            <span className="font-bold h-14 text-lg ">
              Software für <br /> Krankentransporte
            </span>
            <span className="border-t border-zad-blue-200 pt-3 px-3">
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
          <a className="leistungen-horizontal w-1/4" id="toPflege">
            <div className="leistungen-icon-horizontal">
              <FontAwesomeIcon icon={faHandPaper} className="w-3/4" />
            </div>
            <span className="font-bold h-14 text-lg ">Pflegedienste</span>
            <span className="border-t border-zad-blue-200 pt-3 px-3">
              Fast jede Kasse wickelt die Leistungsabrechnung anders ab. Mit ZAD
              können Sie sich wieder dem Wesentlichen zuwenden.
            </span>
          </a>
        </Link>
        <Link href="/software-pflegedienste">
          <a className="leistungen-horizontal w-1/4">
            <div className="leistungen-icon-horizontal">
              <FontAwesomeIcon icon={faLaptopMedical} className="w-3/4" />
            </div>
            <span className="font-bold h-14 text-lg ">
              Software für <br /> Pflegedienste
            </span>
            <span className="border-t border-zad-blue-200 pt-3 px-3">
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
      </div>
      <div className="mx-auto rounded drop-shadow p-24 px-32 my-40 flex bg-[url('/images/home_bg.jpg')] bg-no-repeat justify-between items-center  ">
        <div className="flex flex-col w-1/3 ">
          <div className="flex flex-col space-y-4">
            <img src="images/logo.png" alt="Logo" className="w-48" />
            <span className="text-zad-blue-600">
              Software für das Gesundheitswesen
            </span>
          </div>
          <Link href="/software">
            <a className="button my-16">Zur Detailseite</a>
          </Link>
        </div>
        <img
          className="w-1/3 object-contain"
          src="images/home_pc.png"
          alt="PC"
        />
      </div>
      <div className="rounded drop-shadow p-16 flex text-white bg-zad-blue-400 items-center justify-evenly pl-56">
        <img
          src="images/hand.png"
          alt="Hand"
          className="absolute left-0 bottom-0 w-64"
        />
        <h2 className="text-white mb-0">
          Sie möchten mehr über den ZAD erfahren? Wir informieren Sie gerne.
        </h2>
        <Link href="/kontakt">
          <a className="button">Zur Kontaktseite</a>
        </Link>
      </div>
      <div className="flex mt-40 justify-center">
        <span className="text-zad-blue-600">
          2022 © Zentraler Abrechnungs-Dienst GmbH, Northeim.
        </span>
      </div>
    </div>
  );
}
