import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckMedical,
  faHeartbeat,
  faHandPaper,
  faLaptopMedical,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="mx-auto px-24">
      <div className="flex mb-24 drop-shadow ">
        <img
          className="w-1/4 rounded-l-lg"
          src="images/leistungen/krankentransporte_klein.jpg"
          alt="Krankentransporte"
        />
        <img
          className="w-1/4"
          src="images/leistungen/pflegedienste_klein.jpg"
          alt="Krankentransporte"
        />
        <img
          className="w-1/4"
          src="images/leistungen/heilberufe_klein.jpg"
          alt="Krankentransporte"
        />
        <img
          className="w-1/4 rounded-r-lg"
          src="images/leistungen/software_klein.jpg"
          alt="Krankentransporte"
        />
      </div>
      <div className="space-x-16 flex mx-auto justify-center text-center ">
        <Link href="krankentransporte">
          <a className="leistungen-horizontal w-1/4">
            <div className="leistungen-icon-horizontal">
              <FontAwesomeIcon icon={faTruckMedical} className="w-3/4" />
            </div>
            <span className="font-bold">Krankentransporte</span>
            <span className="px-12">
              Qualität ist eine Frage der Geschwindigkeit. Wir bieten
              Abrechnungen für Rettungsdienste und Krankentransporte.
            </span>
          </a>
        </Link>
        <Link href="pflegedienste">
          <a className="leistungen-horizontal w-1/4" id="toPflege">
            <div className="leistungen-icon-horizontal">
              <FontAwesomeIcon icon={faHandPaper} className="w-3/4" />
            </div>
            <span className="font-bold">Pflegedienste</span>
            <span className="px-12">
              Fast jede Kasse wickelt die Leistungsabrechnung anders ab. Mit ZAD
              können Sie sich wieder dem Wesentlichen zuwenden.
            </span>
          </a>
        </Link>
        <Link href="heilberufe">
          <a className="leistungen-horizontal w-1/4">
            <div className="leistungen-icon-horizontal">
              <i className="fas fa-heartbeat text-6xl" />
              <FontAwesomeIcon icon={faHeartbeat} className="w-3/4" />
            </div>
            <span className="font-bold">Heilberufe</span>
            <span className="px-12">
              ZAD ist führender Spezialist für die Leistungsabrechnung einer
              Vielzahl von Berufsgruppen im Gesundheitswesen.
            </span>
          </a>
        </Link>
        <Link href="software">
          <a className="leistungen-horizontal w-1/4">
            <div className="leistungen-icon-horizontal">
              <FontAwesomeIcon icon={faLaptopMedical} className="w-3/4" />
            </div>
            <span className="font-bold">Softwarelösungen</span>
            <span className="px-12">
              Wir minimieren den Planungs- und Verwaltungsaufwand von
              Rettungsdiensten und Beförderungsunternehmen.
            </span>
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
          <Link href="software">
            <a className="button my-16">Zur Detailseite</a>
          </Link>
        </div>
        <img
          className="w-1/3 object-contain"
          src="images/home_pc.png"
          alt="PC"
        />
      </div>
      <div className="rounded drop-shadow p-16 flex text-white bg-zad-blue-400 items-center justify-around pl-56">
        <img
          src="images/hand.png"
          alt="Hand"
          className="absolute left-0 bottom-0 w-64"
        />
        <h2 className="text-white mb-0">
          Sie möchten mehr über den ZAD erfahren? Wir informieren Sie gerne.
        </h2>
        <Link href="kontakt">
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
