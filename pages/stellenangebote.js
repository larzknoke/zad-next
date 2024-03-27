import React from "react";
import Button from "../components/button";
import Footer from "../components/footer";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Stellenangebote() {
  return (
    <>
      <video
        className="object-cover w-full drop-shadow-lg h-[36rem] hidden lg:block"
        lazy=""
        autoPlay={true}
        playsInline={true}
        muted={true}
        loop={true}
      >
        <source type="video/mp4" src="/videos/stellenangebote.mp4" />
      </video>

      <div className="mx-auto flex flex-col lg:flex-row  py-12 md:px-28 md:py-24 px-8 lg:px-24 xl:px-48 xl:py-32 lg:space-x-24 space-y-16 lg:space-y-0">
        <div className="w-full  lg:w-2/3">
          <h3>Aus dem Stellendschungel zu neuen Perspektiven mit Weitblick.</h3>
          <h2>Werden Sie Teil der ZAD-Familie</h2>
          <p>
            Immer mehr Kunden aus dem Gesundheitswesen entscheiden sich für den
            ZAD als Abrechnungsdienstleister – und lassen unser Unternehmen
            beständig wachsen. Deshalb haben auch Sie jetzt die Chance, sich für
            den ZAD zu entscheiden.
          </p>
          <p>
            Wir wissen, dass unser Erfolg auf den Ideen und Fähigkeiten unserer
            Mitarbeiter gründet. Der ZAD unterstützt daher jeden, der unser Team
            mit Engagement, Innovationsfreude und Kundenorientierung bereichert
            – ganz gleich, ob Sie erst am Anfang Ihrer Karriere stehen und einen
            Ausbildungsplatz suchen oder bereits jede Menge Erfahrung
            mitbringen.
          </p>
          <p>
            Als mittelständischer Finanzdienstleister im Gesundheitswesen ist
            unser Kerngeschäft die bundesweite, professionelle Abrechnung für
            Krankentransport- und Rettungsdienstunternehmen sowie ambulanter
            Pflegedienste. Am Firmenstandort in Northeim betreiben wir für
            unsere mehr als 150 Mitarbeiter ein eigenes Rechenzentrum, für
            welches wir Verstärkung suchen.
          </p>
          <div className="my-12">
            <Image
              src="/images/unternehmen/teamfoto.png"
              className=" object-cover rounded "
              width={971}
              height={300}
              objectFit="cover"
            />
          </div>
          <h2>Das erwartet Sie beim ZAD</h2>
          <ul className="text-zad-blue-600 list-disc list-inside mb-8">
            <li>Moderner Arbeitsplatz</li>
            <li>
              Selbstverantwortliches Arbeiten mit abwechslungsreichen Aufgaben
              im Team
            </li>
            <li>Flexible Arbeitszeitmodelle</li>
            <li>Familienfreundliches Arbeitsumfeld</li>
            <li>JobRad Leasing</li>
            <li>Vermögenswirksame Leistungen</li>
            <li>
              Kostenlose Bereitstellung von Kaffee, Tee, Wasser, Obst, Joghurt,
              Müsli
            </li>
            <li>private Zusatzkrankenversicherung</li>
          </ul>
          <h2>aktuelle Stellenangebote finden sie rechts in der Menüleiste</h2>
          <p className="font-bold">
            Sie haben kein passendes Stellenangebot gefunden oder sind
            Quereinsteiger? Dann überzeugen Sie uns mit Ihrer Initativbewerbung
            und gehen mit uns neue Wege im Büro oder der Informationstechnik.
          </p>
          <p className="font-bold">
            Bitte beachten Sie, dass wir für Bewerbungen ausschließlich
            Datei-Formate im PDF akzeptieren. Andere Datei-Formate sind nicht
            zulässig.
          </p>
          <div className="flex flex-col bg-zad-blue-200 p-8 rounded text-zad-blue-600">
            <h3 className="mb-2">Kontakt</h3>
            <span className="font-bold mb-2">
              Bewerbungsmanagement – Julia Rein
            </span>
            <div className="flex">
              <FontAwesomeIcon icon={faPhone} className="w-4 mr-2" /> 0 55 51 /
              96 88 - 789
            </div>
            <div className="flex">
              <FontAwesomeIcon icon={faEnvelope} className="w-4 mr-2" />
              <a href="mailto:bewerbung@zad-northeim.de">
                bewerbung@zad-northeim.de
              </a>
            </div>
            <hr className="my-6" />
            <span className="font-bold mb-2">
              Ausbildungsmanagement – Marvin Curdt
            </span>
            <div className="flex">
              <FontAwesomeIcon icon={faPhone} className="w-4 mr-2" />0 55 51 /
              96 88 - 621
            </div>
            <div className="flex">
              <FontAwesomeIcon icon={faEnvelope} className="w-4 mr-2" />
              <a href="mailto:ausbildung@zad-northeim.de">
                ausbildung@zad-northeim.de
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-6 w-full lg:w-1/2 xl:w-1/3 mt-16 md:mt-0">
          <h3>Stellenangebote</h3>
          {/* <h2 className="text-lg">Büro</h2> */}
          {/* <Button href={"pdf/Anzeige_ZAD_2022_Allgemein.pdf"}>
            Allgemeine Anzeige
          </Button> */}
          <Button
            download={true}
            href={
              "pdf/Anzeige_ZAD_Kaufmaennischer_Sachbearbeiter_Gesundheitswesen.pdf"
            }
          >
            Sachbearbeiter Gesundheitswesen (m/w/d)
          </Button>
          {/* <Button download={true} href={"pdf/Anzeige_ZAD_Buerohilfskraft.pdf"}>
            Bürohilfskraft (m/w/d)
          </Button> */}
          {/* <Button
            download={true}
            href={
              "pdf/ZAD_Anzeige_Sachbearbeiter_in_der_Debitorenbuchhaltung.pdf"
            }
          >
            Sachbearbeiter Debitorenbuchhaltung (m/w/d)
          </Button> */}
          {/* <Button
            download={true}
            href={"pdf/Anzeige_ZAD_Mitarbeiter_Interner_Postausgang.pdf"}
          >
            Mitarbeiter Interner Postausgang (m/w/d)
          </Button> */}
          {/*<Button
            download={true}
            href={
              "pdf/Anzeige_ZAD_2022_Scankraft_Fachkraft_fuer_Digitalisierung.pdf"
            }
          >
            Scankraft - Fachkraft für Digitalisierung (m/w/d)
          </Button>*/}
          {/* <Button
            download={true}
            href={"pdf/Anzeige_ZAD_2022_Postabteilung.pdf"}
          >
            Mitarbeiter Postabteilung (m/w/d)
          </Button> */}
          <h2 className="text-lg">Ausbildung</h2>
          <Button href={"pdf/Anzeige_ZAD_AZUBI.pdf"} download={true}>
            Büromanagement &amp; Fachinformatik (m/w/d)
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Stellenangebote;

Stellenangebote.noMainPadding = true;
