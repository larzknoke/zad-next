import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import teamData from "../components/teamData";

function Kontakt() {
  return (
    <div className="space-x-24 flex mx-auto">
      <div className="basis-2/3">
        <h3>Kontakt</h3>
        <h1>Hier fühlen Sie sich verstanden</h1>
        <p>
          Sie möchten uns und unser Unternehmen näher kennen lernen? Das Team
          vom ZAD freut sich über Ihren Besuch im Herzen Deutschlands. Und
          sollte Northeim nicht auf Ihrem Weg liegen, kein Problem: Ihr
          persönlicher Ansprechpartner ist immer für Sie da – so, als säßen Sie
          ihm direkt gegenüber.
        </p>
        <div className=" bg-zad-blue-600 text-white drop-shadow-lg py-8 rounded">
          <div className="my-10 flex flex-wrap justify-evenly	 place-content-evenly">
            {teamData.zentrale.map((person, index) => {
              return (
                <div
                  className={`w-[30%] flex flex-col space-x-5 text-white text-center team-box ${index}}`}
                >
                  <img
                    className="rounded-full mb-4"
                    src={"images/unternehmen/team/" + person.image + ".jpg"}
                    alt="Niesen"
                  />
                  <span className="text-white text-bold text-xl">
                    {person.name}
                  </span>
                  <span className="text-zad-blue-300">{person.title}</span>
                  <span className="text-white mt-4">{person.phone}</span>
                  <span className="text-white">{person.fax}</span>
                  <a href={"mailto:" + person.email} className="text-white">
                    {person.email}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col text-zad-blue-600 space-y-2 mt-16 mb-8">
          <div className="flex">
            <FontAwesomeIcon icon={faLocationDot} className="w-4 mr-1" />
            Ottilienstraße 10, 37154 Northeim
          </div>
          <div className="flex">
            <FontAwesomeIcon icon={faPhone} className="w-4 mr-1" />0 55 51 / 96
            88 - 0
          </div>
          <div className="flex">
            <FontAwesomeIcon icon={faEnvelope} className="w-4 mr-1" />0 55 51 /
            96
            <a href="mailto:info@zad-northeim.de">info@zad-northeim.de</a>
          </div>
        </div>
        <div className="flex row-start space-x-4 items-start">
          <img
            className="object-contain rounded-sm w-2/3"
            src="images/map.jpeg"
          />
          <img
            className="object-contain rounded-sm w-1/3"
            src="images/zad_gebaeude.jpeg"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-6 bg-zad-blue-200 p-8 rounded">
        <div className="block max-w-md">
          <form>
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-sm transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput7"
                placeholder="Name"
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="email"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-sm transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput8"
                placeholder="E-Mail"
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="email"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-sm transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput8"
                placeholder="Betreff"
              />
            </div>
            <div className="form-group mb-6">
              <textarea
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-sm transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlTextarea13"
                rows={3}
                placeholder="Nachricht"
                defaultValue={""}
              />
            </div>
            <div className="form-group form-check mb-6 flex space-x-2">
              <input
                type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                id="exampleCheck87"
              />
              <label
                className="form-check-label inline-block text-zad-blue-600 text-sm"
                htmlFor="exampleCheck87"
              >
                Ja, ich habe die{" "}
                <Link href="/datenschutz">
                  <a className="underline underline-offset-4">
                    Datenschutzerklärung
                  </a>
                </Link>{" "}
                zur Kenntnis genommen und bin damit einverstanden, dass die von
                mir angegebenen Daten elektronisch erhoben und gespeichert
                werden. Meine Daten werden dabei nur streng zweckgebunden zur
                Bearbeitung und Beantwortung meiner Anfrage verwendet. Mit dem
                Absenden des Kontaktformulars erkläre ich mich mit der
                Verarbeitung einverstanden.
              </label>
            </div>
            <button type="submit" className="button block w-full">
              Senden
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Kontakt;
