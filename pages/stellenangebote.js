import React from "react";
import Button from "../components/button";
import Footer from "../components/footer";
import { ParallaxBanner } from "react-scroll-parallax";

function Stellenangebote() {
  return (
    <>
      <img
        className="mb-16  mx-auto"
        src="images/unternehmen/teamfoto.png"
        alt="Team12"
      />
      <div className="md:space-x-32 flex flex-col md:flex-row mx-auto">
        <div className="md:w-1/2 lg:w-2/3">
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
            unsere mehr als 140 Mitarbeiter ein eigenes Rechenzentrum, für
            welches wir Verstärkung suchen.
          </p>
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
          </ul>
          <h2>aktuelle Stellenangebote finden sie rechts in der Menüleiste</h2>
          <p className="font-bold">
            Sie haben kein passendes Stellenangebot gefunden oder sind
            Quereinsteiger? Dann überzeugen Sie uns mit Ihrer Initativbewerbung
            und gehen mit uns neue Wege im Büro oder der Informationstechnik.
          </p>
          <div className="flex flex-col bg-zad-blue-200 p-8 rounded text-zad-blue-600">
            <h3 className="mb-2">Kontakt</h3>
            <span className="font-bold mb-2">
              Bewerbungsmanagement - Julia Wiesner
            </span>
            <div>
              <i className="mr-2 fa-solid fa-phone"></i> 0 55 51 / 96 88 - 789
            </div>
            <div>
              <i className="mr-2 fa-solid fa-envelope"></i>
              <a href="mailto:bewerbung@zad-northeim.de">
                bewerbung@zad-northeim.de
              </a>
            </div>
            <hr className="my-6" />
            <span className="font-bold mb-2">
              Ausbildungsmanagement – Marvin Curdt
            </span>
            <div>
              <i className="mr-2 fa-solid fa-phone"></i> 0 55 51 / 96 88 - 621
            </div>
            <div>
              <i className="mr-2 fa-solid fa-envelope"></i>
              <a href="mailto:ausbildung@zad-northeim.de">
                ausbildung@zad-northeim.de
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-6 md:w-1/2 lg:w-1/3 mt-16 md:mt-0">
          <h3>Stellenangebote</h3>
          <h2 className="text-lg">Büro</h2>
          <Button>Kaufmännischer Mitarbeiter (m/w/d)</Button>
          <h2 className="text-lg">Informationstechnik</h2>
          <Button>IT-Systemadministrator (m/w/d)</Button>
          <Button>PERL-Entwickler (m/w/d)</Button>
          <Button>(Senior) Java-Entwickler (m/w/d)</Button>

          <h2 className="text-lg">Ausbildung</h2>
          <Button>Kaufleute für Büromanagement (m/w/d)</Button>
          <Button> Fachinformatik (m/w/d)</Button>
        </div>
      </div>
      <ParallaxBanner
        layers={[
          {
            speed: -13,
            children: (
              <video
                className="object-cover w-full drop-shadow-lg mt-40 h-[36rem] rounded"
                lazy=""
                autoPlay="true"
                playsinline=""
                muted="true"
                loop="true"
              >
                <source type="video/mp4" src="/videos/stellenangebote.mp4" />
              </video>
            ),
          },
        ]}
        className="aspect-[2/1] mt-20"
      ></ParallaxBanner>
      <Footer />
    </>
  );
}

export default Stellenangebote;
