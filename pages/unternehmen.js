import React, { useRef, useCallback } from "react";
import Footer from "../components/footer";
import Button from "../components/button";
import Image from "next/image";
function Unternehmen() {
  return (
    <div className="mx-auto pt-3 pb-16">
      <video
        className="object-cover w-full drop-shadow-lg h-[36rem]"
        lazy=""
        autoPlay={true}
        playsInline=""
        muted={true}
        loop={true}
      >
        <source type="video/mp4" src="/videos/software-pflegedienste.mp4" />
      </video>
      <div className="px-[10%] lg:px-[25%] my-32">
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
          Einrichtungen und kommunale Träger von Rettungsdiensten. Längst steht
          unsere mehr als 100 motivierten Mitarbeiterinnen und Mitarbeitern
          ihren Kunden dabei auch über die Abrechnung ihrer Einnahmen hinaus zur
          Seite.
        </p>
        <h2 className="mt-20">Die ZAD-Philosophie</h2>
        <p>
          Im Zentrum unserer eigens entwickelten Unternehmensphilosophie steht,
          unsere Kunden mit optimalen Dienstleistungen und Lösungen zu
          begeistern: Ihr Erfolgt ist unser Erfolg.
        </p>
        <p className="mb-4 font-bold">Unsere Grundsätze:</p>
        <ul className="text-zad-blue-600 list-disc list-outside">
          <li>
            Kompetenz zahlt sich aus. Deshalb legen wir größten Wert auf unsere
            Qualifikation und werden dabei von der Unternehmensleitung
            bestmöglich gefördert.
          </li>
          <li>
            Wir hören zu. Wir Lösungen sind individuell auf die Ziele und
            Wünsche sowie die Lebens- du Finanzsituation unserer Kunden
            abgestimmt. Erst wenn unsere Kunden zufrieden sind, haben wir
            unseren Job gemacht.
          </li>
          <li>
            Wir sind hilfsbereit – gegenüber unseren Kunden und innerhalb
            unserer Teams. Unsere Stärke erwächst aus Kooperation.
          </li>
          <li>
            Unsere Kunden können uns vertrauten. Das gewährleisten wir durch
            absolute Zuverlässigkeit, verständliche Empfehlungen, transparente
            Prozesse und eine partnerschaftliche Zusammenarbeit.
          </li>
          <li>
            Wir prüfen und verbessern unsere Leistung permanent. Alle Prozesse
            werden dokumentiert und auf mögliche Weiterentwicklung unseres
            Managementsystems hin analysiert.
          </li>
        </ul>
        <div className="bg-zad-blue-600 p-12 my-24 rounded">
          <p className="font-medium m-0 text-white text-lg text-center">
            Als Team setzten wir uns gemeinsam Ziele. Um diese zu definieren,
            entwickelte eine Gruppe von Mitarbeiterinnen und Mitarbeitern aus
            allen Unternehmensbereichen einen Text über die zukünftige ZAD, den
            wir Ihnen hier präsentieren
          </p>
          <Button
            className={
              "table mx-auto mt-8 border border-transparent hover:border-white"
            }
            bgColor={"bg-white"}
          >
            Zeitungsartikel 2033
          </Button>
        </div>
      </div>
      <div className="text-center mx-auto">
        <h2 className="text-center mb-8">Pfelgeabrechnung</h2>
        <Image
          src={"/images/unternehmen/team_pflegeabrechnung.png"}
          alt="Team Pflegeabrechnung"
          width={1200}
          height={256}
        />
      </div>
      <div className="text-center mx-auto mt-24">
        <h2 className="text-center mb-8">Krankentransportabrechnung</h2>
        <Image
          src={"/images/unternehmen/team_krankentransport.png"}
          alt="Team Pflegeabrechnung"
          width={877}
          height={259}
        />
      </div>
      <div className="flex flex-row px-[15%]">
        <div className="text-center mx-auto mt-24">
          <h2 className="text-center mb-8">Administratoren</h2>
          <Image
            src={"/images/unternehmen/team_admin.png"}
            alt="Team Pflegeabrechnung"
            width={415}
            height={249}
          />
        </div>
        <div className="text-center mx-auto mt-24">
          <h2 className="text-center mb-8">Vertrieb</h2>
          <Image
            src={"/images/unternehmen/team_vertrieb.png"}
            alt="Team Pflegeabrechnung"
            width={392}
            height={250}
          />
        </div>
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
