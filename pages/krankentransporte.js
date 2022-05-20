import React from "react";
import Sidenav from "../components/sidenav";
import Link from "next/link";

function Krankentransporte() {
  return (
    <div className="mx-auto flex">
      <div className="basis-1/4 space-y-8">
        <Sidenav />
      </div>
      <div className="px-48">
        <img
          className="drop-shadow-lg rounded mx-auto"
          src="images/leistungen/krankentransporte.jpg"
          alt="Team12"
        />
        <div className=" my-16">
          <h3>Abrechnungen für Rettungsdienste und Krankentransporte</h3>
          <h2>Qualität ist eine Frage der Geschwindigkeit</h2>
          <p>
            Auf Rettungsdienst und Krankentransport will niemand warten. Sie
            dagegen warten ständig: Von der Leistungserbringung bis zur
            Auszahlung der Krankenkassen vergehen oft Wochen. Im
            Liquiditätsengpass droht Ihnen selbst der wirtschaftliche Notfall.
            Doch auch dem Helfer kann geholfen werden. ZAD hält Ihr Geschäft im
            Rollen.
          </p>

          <p>
            Mit ZAD werden Sie unabhängig vom Zahlungsverhalten der
            Kostenträger. Dank externer Transportscheinabrechnung erhalten Sie
            Ihre Auszahlung umgehend bei deutlich geringerem Verwaltungsaufwand.
          </p>

          <p>
            Denn die elektronische Archivierung Ihrer Verordnungen,
            Fahrtberichte und anderen Rechnungsunterlagen übernehmen wir gerne
            gleich mit. Natürlich inklusive Plausibilitätsprüfung, statistischer
            Auswertung und Versicherung Ihrer Belege.
          </p>

          <p>
            Im ZAD-Kunden WebPortal behalten Sie trotzdem alles unter Kontrolle.
            Das kostenlose WebPortal liefert Ihnen jederzeit einen vollständigen
            Überblick und Zugriff auf sämtliche Abrechnungsdaten. Statt Wühlen
            im Blätterwald, alles ganz einfach per Mausklick.
          </p>
          <div className="flex space-x-6 w-full items-stretch justify-items-stretch">
            <Link href="/kontakt">
              <a className="button w-full text-center">Jetzt Anfrage senden</a>
            </Link>
            <Link href="/team">
              <a className="button w-full text-center">
                Ansprechpartner finden
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Krankentransporte;
