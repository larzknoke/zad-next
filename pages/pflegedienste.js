import React from "react";
import Sidenav from "../components/sidenav";

function Pflegedienste() {
  return (
    <div className="mx-auto flex">
      <div className="basis-1/4 space-y-8">
        <Sidenav />
      </div>
      <div className="px-48">
        <img
          className="drop-shadow-lg rounded mx-auto"
          src="images/leistungen/pflegedienste.jpg"
          alt="Team12"
        />
        <div className=" my-16">
          <h3>Abrechnungen für ambulante Krankenpflegeleistungen</h3>
          <h2>Der Mensch vermag mit Hilfe mehr</h2>
          <p>
            Was Sie leisten, ist unermesslich. Doch ihre Zeit wird eng bemessen.
            Zeitintensiv gestaltet sich dagegen die Bürokratie. Fast jede Kasse
            wickelt die Leistungsabrechnung anders ab.
          </p>

          <p>
            Wenden Sie sich wieder dem Wesentlichen zu. ZAD rechnet Ihre
            Leistungen mit sämtlichen Kostenträgern ab. Schnell, professionell,
            inklusive betriebswirtschaftlicher Auswertung – natürlich gemäß §
            302 SGB V und § 105 SGB XI. Einsende- und Auszahlungstermin
            bestimmen Sie selbst.
          </p>

          <p>
            Das Ergebnis: Mehr Zeit und Zahlungskraft, mehr Sicherheit und
            Wirtschaftlichkeit, mehr Übersicht und Kostentransparenz. Das
            einzige, worauf Sie verzichten müssen, ist das Abenteuer
            Papierdschungel. Denn den haben wir im ZAD-Kundeninformationscenter
            klar strukturiert für Sie „gezähmt“.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pflegedienste;
