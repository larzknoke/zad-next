import React from "react";
import Sidenav from "../components/sidenav";

function Heilberufe() {
  return (
    <div className="mx-auto flex">
      <div className="basis-1/4 space-y-8">
        <Sidenav />
      </div>
      <div className="px-48">
        <img
          className="drop-shadow-lg rounded mx-auto"
          src="images/leistungen/heilberufe.jpg"
          alt="Team12"
        />
        <div className=" my-16">
          <h3>Abrechnungen für Heilberufe</h3>
          <h2>So individuell wie Ihre Leistungen</h2>
          <p>
            ZAD ist führender Spezialist für die Leistungsabrechnung einer
            Vielzahl von Berufsgruppen im Gesundheitswesen. Deshalb erstreckt
            sich unser Service – neben den so genannten Sonstigen
            Leistungserbringern – auch auf einen Großteil der Heilberufe. So
            profitieren neben Rettungs- und ambulanten Krankenpflegediensten
            auch Ärzte, Zahnärzte oder Therapeuten durch die Entlastung von
            Verwaltungsaufgaben und garantierte Liquidität.
          </p>

          <p>
            Zusätzlich zur Abrechnung der Regelversorgung gegenüber den
            gesetzlichen Krankenkassen können wir Ihnen z.B. mit der Abrechnung
            von GKV-Zusatzverträgen sowie der Honorarabrechnung gegenüber
            Privatpatienten die Arbeit erleichtern. Durch die Übernahme Ihrer
            Forderungen genießen Sie höchstmögliche Sicherheit vor
            Zahlungsausfällen und können Auszahlungstermine flexibel nach Ihrem
            Bedarf bestimmen.
          </p>

          <p>
            Gerne entwerfen wir ein individuell auf Ihre Bedürfnisse
            abgestimmtes Servicekonzept, das auch den Vorstellungen Ihrer
            Patienten gerecht wird.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Heilberufe;
