import React, { useState } from "react";
import Footer from "../components/footer";
import Button from "../components/button";
import Image from "next/image";
function Unternehmen() {
  const [showNewspaper, setShowNewspaper] = useState(false);

  const onClickHandler = () => {
    setShowNewspaper(!showNewspaper);
  };

  return (
    <div className="mx-auto pt-3 pb-16">
      <video
        className="object-cover w-full drop-shadow-lg h-[36rem] hidden lg:block"
        lazy=""
        autoPlay={true}
        playsInline=""
        muted={true}
        loop={true}
      >
        <source type="video/mp4" src="/videos/software-pflegedienste.mp4" />
      </video>
      <div className="px-[5%] lg:px-[25%] my-6 md:my-16">
        <h3>Rechnen Sie mit uns</h3>
        <h2>ZAD – mehr als Zahlen</h2>
        <p>
          Anfang der 80er-Jahre startete die Zentrale Abrechnungs-Dienst GmbH
          (ZAD) mit einem kleinen Team, das die Anbieter von Krankentransporten
          bei der Abrechnung mit den Kostenträgern unterstützte. Nachdem wir
          Mitte der 90er-Jahre unser Angebotsspektrum um die Abrechnung von
          Pflegeleistungen erweiterten, entwickelte sich unser Unternehmen bis
          heute zu einem bundesweit tätigen Dienstleiter für private
          Pflegedienste, Krankentransporte, Hilfsorganisationen, karitative
          Einrichtungen und kommunale Träger von Rettungsdiensten. Längst stehen
          unsere mehr als 150 motivierten Mitarbeiterinnen und Mitarbeitern
          ihren Kunden dabei auch über die Abrechnung ihrer Einnahmen hinaus zur
          Seite.
        </p>
        <h2 className="mt-20">Die ZAD-Philosophie</h2>
        <p>
          Im Zentrum unserer eigens entwickelten Unternehmensphilosophie steht,
          unsere Kunden mit optimalen Dienstleistungen und Lösungen zu
          begeistern: Ihr Erfolg ist unser Erfolg.
        </p>
        <p className="mb-4 font-bold">Unsere Grundsätze:</p>
        <ul className="text-zad-blue-600 list-disc list-outside pl-4">
          <li>
            Kompetenz zahlt sich aus. Deshalb legen wir größten Wert auf unsere
            Qualifikation und werden dabei von der Unternehmensleitung
            bestmöglich gefördert.
          </li>
          <li>
            Wir hören zu. Unsere Lösungen sind individuell auf die Ziele und
            Wünsche sowie die Lebens- du Finanzsituation unserer Kunden
            abgestimmt. Erst wenn unsere Kunden zufrieden sind, haben wir
            unseren Job gemacht.
          </li>
          <li>
            Wir sind hilfsbereit – gegenüber unseren Kunden und innerhalb
            unserer Teams. Unsere Stärke erwächst aus Kooperation.
          </li>
          <li>
            Unsere Kunden können uns vertrauen. Das gewährleisten wir durch
            absolute Zuverlässigkeit, verständliche Empfehlungen, transparente
            Prozesse und eine partnerschaftliche Zusammenarbeit.
          </li>
          <li>
            Wir prüfen und verbessern unsere Leistung permanent. Alle Prozesse
            werden dokumentiert und auf mögliche Weiterentwicklung unseres
            Managementsystems hin analysiert.
          </li>
        </ul>

        <h2 className="text-center text-lg mt-20 mb-8">
          Als Team setzten wir uns gemeinsam Ziele. Um diese zu definieren,
          entwickelte eine Gruppe von Mitarbeiterinnen und Mitarbeitern aus
          allen Unternehmensbereichen einen Text über die zukünftige ZAD, den
          wir Ihnen hier präsentieren:
        </h2>
        <div className="bg-zad-blue-600 p-8 lg:p-16 mb-24 rounded">
          <h2 className="text-white text-center md:underline underline-offset-8 md:px-16 md:mb-10">
            Unsere Zukunft: ein Planspiel
          </h2>
          <p className="font-medium m-0 text-white text-lg text-center">
            Nach intensiven Gesprächen, zündenden und verworfenen Ideen und viel
            Kaffee entwickelte eine Gruppe von ZAD-Mitarbeiterinnen und
            Mitarbeitern im Rahmen eines Workshops einen Zeitungsbeitrag, wie er
            in zehn Jahren vielleicht einmal erscheinen könnte.
          </p>
          <Button
            className={
              "table mx-auto mt-8 border border-transparent hover:border-white"
            }
            bgColor={"bg-white"}
            onClickHandler={onClickHandler}
          >
            Zeitungsartikel 2033
          </Button>
          <div
            className={`relative transition-all duration-300  ${
              showNewspaper
                ? "max-h-[2500px] opacity-100 mt-12 md:mt-24"
                : " max-h-0 overflow-hidden opacity-0"
            }`}
          >
            <div className=" hidden md:block px-8 py-6 rounded bg-gray-200 text-zad-blue-600 md:rotate-2 absolute z-10 top-0 left-0">
              <div className="flex flex-row justify-between  border-b-2 border-double border-zad-blue-600 py-4 uppercase px-2">
                <span>Die Tageszeitung</span>
                <span>Jg. 2033</span>
              </div>
              <div className="py-12 border-b-2 border-double border-zad-blue-600">
                <h2>Der ZAD rechnet ab!</h2>
                <h3>
                  Damit ambulante Pflegeeinrichtungen, Krankentransporter und
                  Rettungsdienste ihren Job machen können
                </h3>
                <p>
                  Es war 1984, als ein fünfköpfiges Team antrat, um als ZAD die
                  Abrechnung von Krankentransporten zu revolutionieren. Heute
                  ist die ZAD der bundesweite Premiumanbieter für alle
                  Abrechnungsfragen im Bereich Ambulanter Pflege und
                  Krankentransport/Rettungsdienst. Ein Unternehmen, das dank
                  seines hoch motivierten Teams und eines effizienten,
                  firmeneigenen Aus- und Weiterbildungszentrum zu Recht als
                  Talentschmiede Südniedersachsens gilt, zertifiziert als
                  TOP-Arbeitgeber der Region!
                </p>
                <p>
                  Wie war das möglich? Ausschlaggebend war das Jahr 2017, als
                  das EFQM-Managementsystem eingeführt wurde. Ein gemischtes
                  Team entwickelte innovative Ideen für selbst entwickelte
                  Softwarelösungen, die voll digitalisierte Abläufe zwischen
                  Kunden, ZAD und Kostenträger ermöglichten. Stets so, dass der
                  Kunde die volle Kontrolle über das Ausmaß der Digitalisierung
                  behielt.
                </p>
                <p>
                  Zentrales Element der ZAD-Erfolgsstrategie blieb dabei stets
                  die Konzentration auf die Bedürfnisse und Wünsche der eigenen
                  Kunden, der Kostenträger und relevanter Interessengruppen, aus
                  der stetig innovative Produkte und Dienstleistungen entwickelt
                  wurden.
                </p>
                <p>
                  Auch dem Fachkräftemangel konnte die ZAD gut begegnen. Die
                  Unternehmensleitung legte stets großen Wert auf eine hohe
                  Mitarbeiterzufriedenheit, die beispielsweise durch eine
                  vollkommen flexible Arbeitszeitgestaltung erreicht wurde.
                </p>
                <p>
                  „Ebenso wichtig für unseren Erfolg war und ist bis heute
                  unsere persönliche Betreuung“, erklärt Geschäftsführerin
                  Ulrike Niesen rückblickend. „Wir haben stets die Ziele unserer
                  Kunden zu unseren eigenen gemacht, um zum vereinbarten
                  Zeitpunkt die von ihnen gewünschte Liquidität zu erreichen.“
                  „Und das mit einem Minimum an Aufwand für unsere Kunden“,
                  ergänzt die ZAD-Geschäftsführerin Irina Niesen.
                </p>
                <p className="mb-0">
                  Nach ihrem Erfolgsrezept für die Zukunft gefragt, sind sich
                  beide einig: „Kurze Entscheidungswege. Wir wollen für unsere
                  Kunden da sein, wenn sie uns brauchen, um ihnen in allen
                  relevanten Belangen zur Seite zu stehen, zugewandt, freundlich
                  und lösungsorientiert.“
                </p>
              </div>
            </div>
            <div className=" -mx-4 md:mx-0 px-8 py-6 rounded bg-gray-300 text-zad-blue-600 md:rotate-1">
              <div className="flex flex-row justify-between  border-b-2 border-double border-zad-blue-600 py-4 uppercase px-2">
                <span>Die Tageszeitung</span>
                <span>Jg. 2033</span>
              </div>
              <div className="py-12 border-b-2 border-double border-zad-blue-600">
                <h2>Der ZAD rechnet ab!</h2>
                <h3>
                  Damit ambulante Pflegeeinrichtungen, Krankentransporter und
                  Rettungsdienste ihren Job machen können
                </h3>
                <p>
                  Es war 1984, als ein fünfköpfiges Team antrat, um als ZAD die
                  Abrechnung von Krankentransporten zu revolutionieren. Heute
                  ist die ZAD der bundesweite Premiumanbieter für alle
                  Abrechnungsfragen im Bereich Ambulanter Pflege und
                  Krankentransport/Rettungsdienst. Ein Unternehmen, das dank
                  seines hoch motivierten Teams und eines effizienten,
                  firmeneigenen Aus- und Weiterbildungszentrum zu Recht als
                  Talentschmiede Südniedersachsens gilt, zertifiziert als
                  TOP-Arbeitgeber der Region!
                </p>
                <p>
                  Wie war das möglich? Ausschlaggebend war das Jahr 2017, als
                  die ZAD-Geschäftsführerin Gabriele Zahel das
                  EFQM-Managementsystem einführte. Ein gemischtes Team
                  entwickelte innovative Ideen für selbst entwickelte
                  Softwarelösungen, die voll digitalisierte Abläufe zwischen
                  Kunden, ZAD und Kostenträger ermöglichten. Stets so, dass der
                  Kunde die volle Kontrolle über das Ausmaß der Digitalisierung
                  behielt.
                </p>
                <p>
                  Zentrales Element der ZAD-Erfolgsstrategie blieb dabei stets
                  die Konzentration auf die Bedürfnisse und Wünsche der eigenen
                  Kunden, der Kostenträger und relevanter Interessengruppen, aus
                  der stetig innovative Produkte und Dienstleistungen entwickelt
                  wurden.
                </p>
                <p>
                  Auch dem Fachkräftemangel konnte die ZAD gut begegnen. Die
                  Unternehmensleitung legte stets großen Wert auf eine hohe
                  Mitarbeiterzufriedenheit, die beispielsweise durch eine
                  vollkommen flexible Arbeitszeitgestaltung erreicht wurde.
                </p>
                <p>
                  „Ebenso wichtig für unseren Erfolg war und ist bis heute
                  unsere persönliche Betreuung“, erklärt die ZAD-Gründerin
                  Gabriele Zahel rückblickend. „Wir haben stets die Ziele
                  unserer Kunden zu unseren eigenen gemacht, um zum vereinbarten
                  Zeitpunkt die von ihnen gewünschte Liquidität zu erreichen.“
                  „Und das mit einem Minimum an Aufwand für unsere Kunden“,
                  ergänzen die ZAD-Geschäftsführerinnen Ulrike und Irina Niesen.
                </p>
                <p className="mb-0">
                  Nach ihrem Erfolgsrezept für die Zukunft gefragt, sind sich
                  beide einig: „Kurze Entscheidungswege. Wir wollen für unsere
                  Kunden da sein, wenn sie uns brauchen, um ihnen in allen
                  relevanten Belangen zur Seite zu stehen, zugewandt, freundlich
                  und lösungsorientiert.“
                </p>
              </div>
            </div>
          </div>
          {/* )} */}
        </div>
      </div>
      <div className="text-center mx-auto px-4 md:px-16 lg:px-0">
        <h2 className="text-center mb-8">Pflegeabrechnung</h2>
        <Image
          src={"/images/unternehmen/team_pflegeabrechnung.png"}
          alt="Team Pflegeabrechnung"
          width={1248}
          height={250}
        />
      </div>
      <div className="text-center mx-auto mt-24  px-4 md:px-16 lg:px-0">
        <h2 className="text-center mb-8">Krankentransportabrechnung</h2>
        <Image
          src={"/images/unternehmen/team_krankentransport.png"}
          alt="Team Krankentransportabrechnung"
          width={1099}
          height={250}
        />
      </div>
      <div className="text-center mx-auto mt-24  px-4 md:px-16 lg:px-0">
        <h2 className="text-center mb-8">Vertrieb</h2>
        <Image
          src={"/images/unternehmen/team_vertrieb.png"}
          alt="Team Vertrieb"
          width={414}
          height={250}
        />
      </div>
      <p className="text-center my-32 px-[10%] md:px-[25%] font-medium text-xl">
        <span className="font-bold text-2xl">WIR</span> – ein Team von mehr als
        100 motivierten Mitarbeiterinnen und Mitarbeitern – stehen unseren
        Kunden Tag für Tag und weit über den Abrechnungsdienst hinaus zur Seite.
      </p>
      <Footer />
    </div>
  );
}

export default Unternehmen;

Unternehmen.pageClass = " no-curtainOFF ";
Unternehmen.noMainPadding = true;
