import Footer from "../components/footer";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckMedical,
  faLaptopMedical,
  faCross,
} from "@fortawesome/free-solid-svg-icons";
import TransportIcon from "../components/transportIcon";
import MedicalIcon from "../components/medicalIcon";
import Button from "../components/button";

export default function Home() {
  return (
    <div className="mx-auto">
      <h1 className="text-center font-bold text-4xl xl:text-5xl">
        Herzlich willkommen beim ZAD ...
      </h1>
      <h2 className="text-center font-normal text-xl xl:text-3xl">
        dem führenden Spezialisten für die Leistungsabrechnung im
        Gesundheitswesen.
      </h2>
      <div className="flex  drop-shadow my-12 xl:mt-16 xl:mb-24">
        <img
          className="w-1/4 object-cover rounded-l-lg"
          src="images/start/wagen.jpg"
          alt="Krankentransporte"
        />
        <img
          className="w-1/4 object-cover"
          src="images/start/mann.jpg"
          alt="Pflegedienste"
        />
        <img
          className="w-1/4 object-cover"
          src="images/start/pfleger.jpg"
          alt="Heilberufe_"
        />
        <img
          className="w-1/4 object-cover rounded-r-lg"
          src="images/start/pfleger2.jpg"
          alt="Software"
        />
      </div>
      <div className=" space-x-0 xl:space-x-16 flex flex-wrap xl:flex-nowrap mx-auto justify-around xl:justify-center text-center ">
        <Link href="/krankentransporte">
          <a className="leistungen-horizontal w-full md:w-1/2 xl:w-1/4">
            <div className="leistungen-icon-horizontal">
              <FontAwesomeIcon
                icon={faTruckMedical}
                className="w-3/4 icon-start"
              />
              <FontAwesomeIcon
                icon={faTruckMedical}
                className="w-3/4 icon-end"
              />
            </div>
            <span className="font-bold h-14 text-lg ">Krankentransporte</span>
            <span className="border-t border-zad-blue-200 pt-3 px-3">
              Qualität ist eine Frage der Geschwindigkeit. Wir bieten
              Abrechnungen für Rettungsdienste und Krankentransporte.
            </span>
          </a>
        </Link>
        <Link href="/software-krankentransporte">
          <a className="leistungen-horizontal w-full md:w-1/2 xl:w-1/4">
            <div className="leistungen-icon-horizontal">
              <i className="fas fa-heartbeat text-6xl" />
              <TransportIcon className="w-3/4  icon-start" />
              <TransportIcon className="w-3/4  icon-end" />
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
          <a
            className="leistungen-horizontal w-full md:w-1/2 xl:w-1/4"
            id="toPflege"
          >
            <div className="leistungen-icon-horizontal">
              <MedicalIcon className="w-3/4 icon-start" />
              <MedicalIcon className="w-3/4 icon-end" />
            </div>
            <span className="font-bold h-14 text-lg ">Pflegedienste</span>
            <span className="border-t border-zad-blue-200 pt-3 px-3">
              Fast jede Kasse wickelt die Leistungsabrechnung anders ab. Mit ZAD
              können Sie sich wieder dem Wesentlichen zuwenden.
            </span>
          </a>
        </Link>
        <Link href="/software-pflegedienste">
          <a className="leistungen-horizontal w-full md:w-1/2 xl:w-1/4">
            <div className="leistungen-icon-horizontal">
              <FontAwesomeIcon
                icon={faLaptopMedical}
                className="w-3/4 icon-start"
              />
              <FontAwesomeIcon
                icon={faLaptopMedical}
                className="w-3/4 icon-end"
              />
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
              src="images/pflegesuite.png"
              alt="click-on-logo Logo"
            />
          </a>
        </Link>
      </div>
      {/* <div className="mx-auto rounded drop-shadow p-20 px-12 xl:px-32 my-16 xl:my-40 lg:space-x-16 flex flex-col lg:flex-row bg-[url('/images/home_bg.jpg')] bg-no-repeat justify-between items-center bg-cover  ">
        <div className="flex flex-col w-full xl:w-1/3 ">
          <div className="flex flex-col space-y-4">
            <img
              src="images/zad_tools.svg"
              alt="Logo"
              className="w-80 xl:w-48"
            />
            <span className="text-zad-blue-600">
              Software für das Gesundheitswesen
            </span>
          </div>
          <Link href="/software">
            <a className="button my-16">Zur Detailseite</a>
          </Link>
        </div>
        <img
          className="w-2/3 xl:w-1/3 object-contain"
          src="images/home_pc.png"
          alt="PC"
        />
      </div> */}
      <div className="rounded drop-shadow p-8 xl:p-16 my-16 xl:my-40 space-x-0 text-center xl:text-left xl:space-x-8 flex flex-col lg:flex-row space-y-6 text-white bg-zad-blue-400 items-center justify-evenly xl:pl-56">
        <img
          src="images/hand.png"
          alt="Hand"
          className="absolute left-0 bottom-0 hidden xl:block w-64"
        />
        <h2 className="text-white mb-0 text-xl xl:text-2xl">
          Sie möchten mehr über den ZAD erfahren? Wir informieren Sie gerne.
        </h2>
        <Link href="/kontakt" passHref>
          <Button className="px-8">Zur Kontaktseite</Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
