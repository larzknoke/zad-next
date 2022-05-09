import React from "react";
import Team from "../components/team";

function Unternehmen() {
  return (
    <div className="mx-auto">
      <img
        className="drop-shadow-lg rounded
        "
        src="images/unternehmen/slider/Team12.jpg"
        alt="Team12"
      />
      <div className="px-[15%] my-16">
        <h3>Rechnen Sie mit uns</h3>
        <h2>ZAD stellt sich vor</h2>
        <p>
          Als Spezialist für Abrechnungen im Gesundheitswesen bietet die
          Zentrale Abrechnungs-Dienst GmbH – kurz ZAD – ihren Kunden seit Anfang
          der 1980er Jahre ein breites Dienstleistungsspektrum.
        </p>

        <p>
          Wir erfassen, prüfen und fakturieren Ihre Leistungen, finanzieren
          sämtliche Forderungen gegenüber den Kostenträgern, übernehmen das
          Mahn- und Inkassowesen und dokumentieren alle Abrechnungsdaten in
          tagesaktuellen Statistiken, die Sie jederzeit online abrufen können.
        </p>

        <p>
          Mit über 100 Mitarbeitern betreut ZAD vor allem private Pflegedienste,
          karitative Einrichtungen, private Krankentransportunternehmen,
          Hilfsorganisationen und kommunale Träger des Rettungsdienstes, aber
          auch Ärzte und Therapeuten im gesamten Bundesgebiet.
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="button mx-auto table my-16"
          href="/pdf/ZAD-Image-Prospekt.pdf"
        >
          Unser Image-Prospekt
        </a>
      </div>
      <img
        className="drop-shadow-lg rounded
        "
        src="images/unternehmen/frau_telefon.jpg"
        alt="Team12"
      />
      <div className="px-[15%] my-16">
        <h3>Schön, dass es auch einfach geht</h3>
        <h2>Unsere Philosophie – Ihr Nutzen</h2>
        <p>
          Der Gesundheitsmarkt wird immer komplizierter: Gesetzliche
          Anforderungen wandeln sich ständig, administrative Aufgaben nehmen
          immer mehr Zeit in Anspruch und das Zahlungsverhalten der Kostenträger
          birgt große Unsicherheiten für die Leistungserbringer.
        </p>

        <p>
          ZAD sieht seine Aufgabe darin, Ihre Arbeit leichter und
          wirtschaftlicher zu gestalten. Mit innovativen Abrechnungssystemen,
          aktuellen Produkten und intelligenten Online-Tools verhelfen wir
          unseren Kunden zu größerer Sicherheit und Liquidität sowie deutlich
          geringerem Verwaltungsaufwand. Unser Ziel ist es, dass Sie sich wieder
          ganz auf Ihre Kernkompetenzen und das Wohl Ihrer Patienten
          konzentrieren können.
        </p>

        <p>
          Das Handeln von ZAD ist stets auf eine Veränderung zum Besseren hin
          bedacht. Es gründet auf einem klaren Qualitäts- und Servicebekenntnis
          sowie einem Höchstmaß an individueller Betreuung. Ihr persönlicher
          Ansprechpartner berät Sie gern, welche der von uns angebotenen
          Leistungen den größten Nutzen für Sie haben.
        </p>
      </div>
      <div className="px-[15%] my-16 bg-zad-blue-600 text-white rounded drop-shadow-lg p-16">
        <h3 className="text-white">Unser Team</h3>
        <h2 className="text-white">
          Für Sie haben wir immer einen Mitarbeiter
        </h2>
        <p className="text-white">
          ZAD hat heute mehr als 100 Mitarbeiter. Einer davon wird Ihre Wünsche
          besonders persönlich nehmen: Ihr Ansprechpartner. Seine individuelle
          Betreuung garantiert Ihnen ein Höchstmaß an Sicherheit in allen
          Belangen rund um die Leistungsabrechnung im Gesundheitswesen.
        </p>
        <div className="grid xl:gap-28 gap-24 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 my-32">
          <Team />
          <Team />
          <Team />
          <Team />
          <Team />
          <Team />
          <Team />
          <Team />
          <Team />
          <Team />
          <Team />
          <Team />
          <Team />
          <Team />
          <Team />
        </div>
      </div>
      <img
        src="images/unternehmen/bilden_aus.png"
        alt="Bilden aus"
        className="bg-white p-4 rounded table mx-auto drop-shadow-md"
      />
    </div>
  );
}

export default Unternehmen;
