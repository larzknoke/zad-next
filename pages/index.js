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
import Image from "next/image";

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
      <div className="hidden md:flex  drop-shadow my-12 xl:mt-16 xl:mb-14">
        {/* <div className="w-1/4 relative">
        </div> */}
        <Image
          src="/images/start/wagen.jpg"
          className="w-1/4 object-cover rounded-l-lg"
          width={700}
          height={449}
          objectFit="cover"
        />
        <Image
          src="/images/start/mann.jpg"
          className="w-1/4 object-cover"
          width={700}
          height={460}
          objectFit="cover"
        />
        <Image
          src="/images/start/pfleger.jpg"
          className="w-1/4 object-cover "
          width={700}
          height={477}
          objectFit="cover"
        />
        <Image
          src="/images/start/tablet.jpg"
          className="w-1/4 object-cover rounded-r-lg"
          width={700}
          height={480}
          objectFit="cover"
        />
      </div>
      <h1 className="text-center font-bold text-xl xl:text-5xl mb-0 md:mb-2 xl:mb-6 xl:mt-6">
        Raus aus dem Abrechnungsdschungel.
      </h1>
      <h2 className="text-center font-normal text-xl xl:text-3xl xl:mb-20">
        Wir geben Ihnen Orientierung zu neuen Perspektiven.
      </h2>
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
            <span className="font-bold md:h-14 text-lg ">
              Krankentransporte
            </span>
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
            <span className="font-bold md:h-14 text-lg ">
              Software für <br /> Krankentransporte
            </span>
            <span className="border-t border-zad-blue-200 pt-3 px-3">
              Optimierte Planung und Verwaltung für Rettungsdienste und
              Beförderungsunternehmen. In Kooperation mit ZADtools wurde die
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
            <span className="font-bold md:h-14 text-lg ">Pflegedienste</span>
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
            <span className="font-bold md:h-14 text-lg ">
              Software für <br /> Pflegedienste
            </span>
            <span className="border-t border-zad-blue-200 pt-3 px-3">
              Mit der Gründung des Unternehmens ZAD TECH wurde eine neue
              Software &quot;PflegeSuite&quot; für den ambulanten Pflegedienst
              entwickelt. Die intelligente Verbindung von Tourenplanung mit
              Factoring.
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
      <div className="relative rounded drop-shadow p-8 xl:p-16 my-16 xl:my-40 space-x-0 text-center xl:text-left xl:space-x-12 flex flex-col lg:flex-row text-white bg-zad-blue-400 items-center justify-evenly xl:pl-64 ">
        {/* <img
          src="images/hand.png"
          alt="Hand"
          className="absolute left-0 bottom-0 hidden xl:block w-64"
        /> */}
        <div className="absolute left-0 hidden xl:block w-64 -bottom-[6px]">
          <Image
            src="/images/hand.png"
            width={800}
            height={722}
            objectFit="contain"
          />
        </div>

        <h2 className="text-white  text-xl xl:text-2xl">
          Sie möchten mehr über den ZAD erfahren? Wir informieren Sie gerne.
        </h2>
        <Button href="/kontakt" className="px-8" bgColor="bg-zad-blue-200">
          Zur Kontaktseite
        </Button>
      </div>
      <Footer />
    </div>
  );
}
