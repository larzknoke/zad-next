import React from "react";

function Software() {
  return (
    <div className="mx-auto">
      <img
        className="drop-shadow-lg rounded w-3/4 mx-auto
        "
        src="images/leistungen/software1.jpg"
        alt="Team12"
      />
      <div className="px-[15%] my-16">
        <h3>Abrechnungen für Heilberufe</h3>
        <h2>So individuell wie Ihre Leistungen</h2>
        <p>
          Über die Kooperation mit CareSocial kann der ZAD eine Software für
          ambulante Pflegedienste, Intensivpflege und Tagespflege anbieten,
          welche von der Pflegeplanung über die Pflegedokumentation bis hin zur
          Abrechnung mit elektronischem Datenträgeraustausch (DTA) keine Wünsche
          offen lässt.
        </p>

        <p>
          CareSocial ist keine Pflegesoftware von der Stange: Pflege-Profis im
          Kundenservice helfen Ihnen gern bei Ihrer Abrechnung oder der
          Kommunikation mit den Leistungsträgern und Datenannahmestellen – ganz
          individuell, ganz nach Ihren Bedürfnissen. Durch die Android-App
          CareSmart steht Ihnen zudem eine speziell auf die Bedürfnisse der
          Pflege abgestimmte App für die effiziente mobile Datenerfassung zur
          Verfügung.
        </p>

        <p>
          Lösen Sie sich von teuren Wartungsverträgen und sparen Sie sich
          kostenintensive Software: CareSocial ist einfach zu handhaben und
          dabei eine preiswerte Software für Ihre Pflegeplanung,
          Leistungsabrechnung und elektronischen Datenaustausch – transparent,
          zum Festpreis und ohne versteckte Kosten!
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="button mx-auto table my-16"
          href="/pdf/Flyer-ZAD-CareSocial.pdf"
        >
          Flyer (1.7 MB)
        </a>
      </div>
      <img
        className="drop-shadow-lg rounded w-3/4 mx-auto
        "
        src="images/leistungen/software2.jpg"
        alt="Team12"
      />
      <div className="px-[15%] my-16">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="button mx-auto table my-16"
          href="/pdf/Flyer-ZAD-ZADtools-ebook.pdf"
        >
          Flyer (2 MB)
        </a>
      </div>
    </div>
  );
}

export default Software;
