import React from "react";

function Stellenangebote() {
  return (
    <div className="space-x-24 flex mx-auto">
      <div className="basis-2/3">
        <h3>Aus dem Stellendschungel zu neuen Perspektiven mit Weitblick.</h3>
        <h2>Werden Sie Teil der ZAD-Familie</h2>
        <p>
          Immer mehr Kunden aus dem Gesundheitswesen entscheiden sich für den
          ZAD als Abrechnungsdienstleister – und lassen unser Unternehmen
          beständig wach- sen. Deshalb haben auch Sie jetzt die Chance, sich für
          den ZAD zu entscheiden.
        </p>
        <p>
          Wir wissen, dass unser Erfolg auf den Ideen und Fähigkeiten unserer
          Mitarbeiter gründet. Der ZAD unterstützt daher jeden, der unser Team
          mit Engagement, Innovationsfreude und Kundenorientierung bereichert –
          ganz gleich, ob Sie erst am Anfang Ihrer Karriere stehen und einen
          Ausbildungsplatz suchen oder bereits jede Menge Erfahrung mitbringen.
        </p>
        <p>
          Als mittelständischer Finanzdienstleister im Gesundheitswesen ist
          unser Kern- geschäft die bundesweite, professionelle Abrechnung für
          Krankentransport- und Rettungsdienstunternehmen sowie ambulanter
          Pflegedienste. Am Firmenstand- ort in Northeim betreiben wir für
          unsere mehr als 140 Mitarbeiter ein eigenes Rechenzentrum, für welches
          wir Verstärkung suchen.
        </p>
        <h2>Das erwartet Sie beim ZAD</h2>
        <ul className="text-zad-blue-600 list-disc list-outside mb-8">
          <li>Moderner Arbeitsplatz</li>
          <li>
            Selbstverantwortliches Arbeiten mit abwechslungsreichen Aufgaben im
            Team
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
        <h2>Aktuelle Stellen finden Sie rechts in der Menüspalte.</h2>
        <p className="font-bold">
          Sie haben kein passendes Stellenangebot gefunden oder sind
          Quereinsteiger und wollen neue Perspektiven im Büro einschlagen? Dann
          überzeugen Sie uns mit Ihrer Initiativbewerbung.
        </p>
        <div className="flex flex-col bg-zad-blue-200 p-8 rounded text-zad-blue-600">
          <h3 className="mb-2">Kontakt</h3>
          <span className="font-bold mb-2">
            Bewerbungsmanagement - Julia Wiesner
          </span>
          <div>
            <i className="mr-2 fa-solid fa-phone"></i> 0 55 51 / 96 88 - 0
          </div>
          <div>
            <i className="mr-2 fa-solid fa-envelope"></i>
            <a href="mailto:bewerbung@zad-northeim.de">
              bewerbung@zad-northeim.de
            </a>
          </div>
          <hr className="my-6" />
          <span className="font-bold mb-2">
            Ausbildungsmanagement – Marvin Darius Curdt
          </span>
          <div>
            <i className="mr-2 fa-solid fa-phone"></i> 0 55 51 96 88 - 621
          </div>
          <div>
            <i className="mr-2 fa-solid fa-envelope"></i>
            <a href="mailto:ausbildung@zad-northeim.de">
              ausbildung@zad-northeim.de
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-6">
        <h3>Aktuelle Stellen</h3>
        <h2 className="text-lg">Büro</h2>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="button"
          href="#"
        >
          Kaufmännischer Mitarbeiter (m/w/d)
        </a>
        <h2 className="text-lg">Informationstechnik</h2>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="button"
          href="/static/pdf/Ausschreibung-IT-Neu.pdf"
        >
          IT-Systemadministrator (m/w/d)
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="button"
          href="/static/pdf/2020-Ausschreibung-PERL.pdf"
        >
          PERL-Entwickler (m/w/d)
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="button"
          href="/static/pdf/2019-Ausschreibung-Java-V2.pdf"
        >
          (Senior) Java-Entwickler (m/w/d)
        </a>
        <h2 className="text-lg">Ausbildung</h2>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="button"
          href="/static/pdf/AZUBI-Anzeige-ZAD-2021.pdf"
        >
          Kaufleute für Büromanagement (m/w/d)
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="button"
          href="/static/pdf/AZUBI-Anzeige-ZAD-2021.pdf"
        >
          Fachinformatik (m/w/d)
        </a>
      </div>
    </div>
  );
}

export default Stellenangebote;
