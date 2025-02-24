import React, { useState } from "react";
import Footer from "../components/footer";
import Button from "../components/button";
import Image from "next/image";
import Link from "next/link";
import GruenesLicht from "../components/karriere_gruenes_licht";
import Socials from "../components/socials";
import KarriereSlider from "../components/karriere-slider";
function Sachbearbeiter() {
  return (
    <div className="mx-auto pt-3 pb-16">
      <video
        className="object-cover w-full drop-shadow-lg  hidden lg:block"
        lazy=""
        autoPlay={true}
        playsInline={true}
        muted={true}
        loop={true}
      >
        <source type="video/mp4" src="/videos/karriere/it_tiny.mp4" />
      </video>
      <div className="px-[5%] lg:px-[20%] my-6 md:my-16">
        <h2 className="text-center text-3xl md:text-4xl xl:mt-32">
          FACHKRAFT FÜR IT (M/W/D)
        </h2>
        <h4 className="text-center text-2xl xl:mt-8">
          Northeim | Teilzeit oder Vollzeit
        </h4>
        <p className="text-center xl:px-32">
          Wir suchen Dich und Dein Talent für spannende Aufgaben in
          unterschiedlichen IT-Bereichen – gern auch als Initiativbewerbung.
          Starte Deine Zukunft in unserem Familienunternehmen.{" "}
        </p>
        <h2 className="mt-20 xl:mt-32 mb-0 md:mb-8  text-3xl text-center">
          Damit supportest Du unser Team
        </h2>
        <ul className="text-zad-blue-600  rounded-md p-6 list-disc	max-w-4xl mx-auto">
          <li>Du unterstützt unsere Inhouse-IT</li>
          <li>
            Du löst Probleme nachhaltig – ohne ständig das Feuer zu löschen
          </li>
          <li>Du findest mit dem Team die beste Lösung</li>
          <li>
            Du arbeitest dich in unsere Prozessstrukturen ein und entwickelst
            sie gemeinsam mit uns weiter
          </li>
        </ul>
        <h2 className="mt-10 xl:mt-20 mb-0 md:mb-8  text-3xl text-center">
          Das bringst Du mit
        </h2>
        <ul className="text-zad-blue-600  rounded-md p-6 list-disc	max-w-4xl mx-auto">
          <li>
            Du hast im Idealfall schon viel Erfahrung in den von uns benötigten
            Technologien
          </li>
          <li>Du willst gern mit Menschen zusammenarbeiten</li>
          <li>Du brennst darauf, gute Lösungen zu finden</li>
          <li>
            Du hast den Willen, Dir bei Bedarf fehlendes Fachwissen anzueignen
          </li>
        </ul>
        <div
          className="bg-zad-blue-600 p-12 lg:p-12 my-10 md:my-32
          text-center rounded-md"
        >
          <h2 className="text-white text-center md:px-16 md:mb-12 ">
            In welcher Welt fühlst Du Dich zu Hause? <br /> Bewirb Dich für
            einen dieser Bereiche.
          </h2>
          <div className=" flex flex-col md:flex-row justify-center gap-x-[4%] gap-y-[30px] md:gap-y-[70px]">
            <div className="flex-col text-center">
              <Image
                src="/images/karriere/it/ZADO_reportage_72.jpg"
                className="object-cover rounded-md"
                width={350}
                height={200}
                objectFit="cover"
              />
              <h4 className="text-xl mt-4 text-white">Systemadministration</h4>
            </div>
            <div className="flex-col text-center">
              <Image
                src="/images/karriere/it/ZADO_reportage_10.jpg"
                className="object-cover rounded-md"
                width={300}
                height={200}
                objectFit="cover"
              />
              <h4 className="text-xl mt-4 text-white">
                Softwareentwicklung <br /> (z. B. JAVA, PERL)
              </h4>
            </div>
            <div className="flex-col text-center">
              <Image
                src="/images/karriere/it/ZADO_kampagne_kaufleute_03.jpg"
                className="object-cover rounded-md"
                width={300}
                height={200}
                objectFit="cover"
              />
              <h4 className="text-xl mt-4 text-white">Product Owner</h4>
            </div>
          </div>
        </div>
        <h2 className="mt-10 xl:mt-20 text-3xl text-center">
          Rechne mit vielen Vorteilen
        </h2>
        <div className="my-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="flex-col text-center px-6 py-6 flex ">
            <img
              className="pt-4 h-24 mb-6 self-center"
              src="images/karriere/krankenversicherung.svg"
              alt="Krankenversicherung"
            />
            <h4 className="text-lg mb-0 break-words">
              Private Zusatzkrankenversicherung für mehr Gesundheitsleistungen
            </h4>
          </div>
          <div className="flex-col text-center  px-6 py-6 flex ">
            <img
              className="pt-4 h-24 mb-6 self-center"
              src="images/karriere/vertrag.svg"
              alt="Krankenversicherung"
            />
            <h4 className="text-lg mb-0">
              Unbefristete Arbeitsverträge mit jährlicher Gehaltsanpassung
              zwischen 2 und 5 %
            </h4>
          </div>
          <div className="flex-col text-center  px-6 py-6 flex ">
            <img
              className="pt-4 h-24 mb-6 self-center"
              src="images/karriere/kita.svg"
              alt="Krankenversicherung"
            />
            <h4 className="text-lg mb-0">
              Übernahme der Kita-Gebühren für Deinen Nachwuchs bis zum 3.
              Lebensjahr
            </h4>
          </div>
          <div className="flex-col text-center  px-6 py-6 flex ">
            <img
              className="pt-4 h-24 mb-6 self-center"
              src="images/karriere/vl.svg"
              alt="Krankenversicherung"
            />
            <h4 className="text-lg mb-0">
              Vermögenswirksame Leistungen für mehr finanziellen Spielraum im
              Alter
            </h4>
          </div>
          <div className="flex-col text-center  px-6 py-6 flex ">
            <img
              className="pt-4 h-24 mb-6 self-center"
              src="images/karriere/os.svg"
              alt="Betriebssystem"
            />
            <h4 className="text-lg mb-0">
              Freie Auswahl Deines Betriebssystems
            </h4>
          </div>
          <div className="flex-col text-center  px-6 py-6 flex ">
            <img
              className="pt-4 h-24 mb-6 self-center"
              src="images/karriere/pause.svg"
              alt="Krankenversicherung"
            />
            <h4 className="text-lg mb-0">
              Bewegte Pausen, damit Du durch kleine angeleitete Trainings neuen
              Schwung holen kannst
            </h4>
          </div>
          <div className="flex-col text-center  px-6 py-6  flex ">
            <img
              className="pt-4 h-24 mb-6 self-center"
              src="images/karriere/psycho.svg"
              alt="Krankenversicherung"
            />
            <h4 className="text-lg mb-0">
              Psychologischer Support für Dein mentales Wohlgefühl und für den
              Fall der Fälle
            </h4>
          </div>
          <div className="flex-col text-center  px-6 py-6  flex ">
            <img
              className="pt-4 h-24 mb-6 self-center"
              src="images/karriere/bike.svg"
              alt="Krankenversicherung"
            />
            <h4 className="text-lg mb-0">
              JobRad-Leasing für Deine Bewegungsfreude, Dein Konto und die
              Umwelt – inklusive
            </h4>
          </div>
          <div className="flex-col text-center  px-6 py-6  flex ">
            <img
              className="pt-4 h-24 mb-6 self-center"
              src="images/karriere/pflegelotsen.svg"
              alt="Krankenversicherung"
            />
            <h4 className="text-lg mb-0">
              Grundlagenhilfe durch unsere Pflegelots:innen für mehr Durchblick
              in Sachen Pflege, Versorgung und Vollmacht
            </h4>
          </div>
        </div>
        <div className="bg-zad-blue-600 p-10 lg:p-18 lg:px-36 mb-24 rounded mt-16 xl:mt-28 text-center">
          <h2 className="text-white text-center md:text-3xl md:px-16 md:mb-10 mt-2">
            Ergeben wir zusammen schon Plus?
          </h2>
          <Button
            className={
              "table mx-auto mt-8 border border-transparent hover:border-white"
            }
            bgColor={"bg-white"}
            href={"mailto:bewerbung@zad-northeim.de"}
          >
            Bewirb Dich jetzt
          </Button>
        </div>
        <h2 className="text-center text-3xl mt-8 mb-8 md:mt-28 md:mb-16">
          6 gute Gründe für gemeinsame Wege
        </h2>{" "}
        <div className="grid grid-cols-1  xl:grid-cols-2 gap-6">
          <div className="flex-col text-center justify-between  p-5 rounded-md">
            <Image
              src="/images/karriere/it/ZAD-it-02.jpg"
              className=" object-cover rounded-md"
              width={600}
              height={400}
              objectFit="cover"
            />
            <h4 className="text-xl mt-4 ">Werde Teil von etwas Großem</h4>
            <p className="md:px-12 mb-0">
              Du gehörst zu einem Familienunternehmen, das seit 40 Jahren gesund
              und munter wächst. Zu unserer Northeimer Zentrale zählen 150
              Mitarbeiter:innen. Fühlt sich aber gar nicht so an. Denn wir
              arbeiten hier alle in kleinen Teams.
            </p>
          </div>
          <div className="flex-col text-center justify-between  p-5 rounded-md">
            <Image
              src="/images/karriere/it/ZADO_reportage_24.jpg"
              className=" object-cover rounded-md"
              width={600}
              height={400}
              objectFit="cover"
            />
            <h4 className="text-xl mt-4 ">
              Freu Dich auf eine lange Beziehung
            </h4>
            <p className="md:px-12">
              Wir bleiben Dir treu und geben Dir Halt. Auch wenn’s mal stürmt
              oder etwas schiefläuft. Wir halten viel von Beständigkeit und
              Vertrauen. Das gibt Dir Sicherheit und ein gutes Gefühl für die
              Zukunft.
            </p>
          </div>
          <div className="flex-col text-center justify-between  p-5 rounded-md">
            <Image
              src="/images/karriere/it/ZADO_reportage_69.jpg"
              className=" object-cover rounded-md"
              width={600}
              height={400}
              objectFit="cover"
            />
            <h4 className="text-xl mt-4 ">Fühle, wie viel Du wert bist</h4>
            <p className="md:px-12">
              Bei uns bist Du auch als Kolleg:in 151 keine Nummer. Für uns
              zählt, wer Du bist und was Dich ausmacht. Mit Deinen Wünschen und
              Deinen Ideen. Wir lieben es, wenn Du Dich mit Herz und Kopf
              einbringst. Für alles, was uns verbindet oder unsere Arbeit
              erleichtert.
            </p>
          </div>
          <div className="flex-col text-center justify-between  p-5 rounded-md">
            <Image
              src="/images/karriere/it/ZADO_reportage_13.jpg"
              className=" object-cover rounded-md"
              width={600}
              height={400}
              objectFit="cover"
            />
            <h4 className="text-xl mt-4 ">Entfalte Dich so, wie Du bist</h4>
            <p className="md:px-12">
              Das große Ganze ergibt sich bei uns aus vielen kleinen Teams.
              Jedes von ihnen zählt nur acht bis zwölf Mitarbeiter:innen. Du
              bist Teil einer Gruppe, die so tickt wie Du. Das macht vieles
              einfacher und schafft Freiraum, um euch selbst zu organisieren und
              eure Arbeitsumgebung nach euren Wünschen zu gestalten.
            </p>
          </div>
          <div className="flex-col text-center justify-between  p-5 rounded-md">
            <Image
              src="/images/karriere/it/ZADO_reportage_57.jpg"
              className=" object-cover rounded-md"
              width={600}
              height={400}
              objectFit="cover"
            />
            <h4 className="text-xl mt-4 ">Stell die Uhr nach Dir</h4>
            <p className="md:px-12">
              Dein Leben ist kein Stundenplan. Warum sollte es Dein Job sein?
              Unsere Gleitzeitmodelle machen Dich privat flexibler. Per
              Zeiterfassung bist Du immer im Bild, wo Du stehst. Und wenn Du
              nach Absprache lieber im Homeoffice bleibst, vernetzen wir uns
              einfach digital.
            </p>
          </div>
          <div className="flex-col text-center justify-between  p-5 rounded-md">
            <Image
              src="/images/karriere/it/ZADO_reportage_48.jpg"
              className=" object-cover rounded-md"
              width={600}
              height={400}
              objectFit="cover"
            />
            <h4 className="text-xl mt-4 ">Entwickle Dich weiter</h4>
            <p className="md:px-12">
              Wir schieben Dein Talent an – zum Beispiel mit geförderten
              Qualifikationen zur Europakauffrau oder zum Europakaufmann, mit
              PBC-Schulungen oder Deinem Ausbilderschein. Außerdem kannst Du in
              Open-Space-Workshops durchstarten und Deine Expertise in der
              Kommunikation oder am Telefon ausbauen. Und wenn Du Deine
              Persönlichkeit weiterentwickeln willst, steht Dir bei uns auch
              dafür die Tür offen.
            </p>
          </div>
        </div>
        <GruenesLicht it={true} />
        <h2 className="text-center text-3xl mt-32 mb-4">
          Alle Augenblicke auf Augenhöhe
        </h2>
        <p className="text-center">
          Wir lieben die Gemeinschaft. Weil wir viel gemeinsam haben. Unser
          Faible für ein angenehmes Arbeitsumfeld zum Beispiel, in dem wir uns
          alle wohlfühlen und wertgeschätzt werden. Das macht es leicht, mit
          viel Energie in die Tasten zu hauen. Und zwischendurch? Stillen wir
          unseren Appetit auf leckere Kekse, gesundes Obst und lockere
          Gespräche.
        </p>
        <div className="grid grid-cols-2 gap-5 mb-20 md:mb-32">
          <div className="relative col-span-2">
            <Image
              src="/images/karriere/it/ZADO_reportage_10_1000.jpg"
              className="w-full object-cover rounded-md"
              // layout={"fill"}
              width={1000}
              height={600}
            />
          </div>
          <div className="relative">
            <Image
              src="/images/karriere/it/ZADO_reportage_72.jpg"
              className="w-full object-cover rounded-md"
              // layout={"fill"}
              width={500}
              height={333}
            />
          </div>
          <div className="relative">
            <Image
              src="/images/karriere/it/ZADO_reportage_76.jpg"
              className="w-full object-cover rounded-md"
              // layout={"fill"}
              width={500}
              height={333}
            />
          </div>
          <div className="relative">
            <Image
              src="/images/karriere/it/ZADO_reportage_46.jpg"
              className="w-full object-cover rounded-md"
              // layout={"fill"}
              width={500}
              height={333}
            />
          </div>
          <div className="relative">
            <Image
              src="/images/karriere/it/ZADO_reportage_01.jpg"
              className="w-full object-cover rounded-md"
              // layout={"fill"}
              width={500}
              height={333}
            />
          </div>
        </div>
        <div
          className="bg-zad-blue-600 py-12 md:py-20 px-12 mb-32
          rounded-md text-white"
        >
          <h2 className="text-white  mb-8 md:mb-16 text-3xl text-center leading-normal">
            Wir bilden aus <br /> Fachinformatiker:in Anwendungsentwicklung
          </h2>
          <div className="flex flex-col md:flex-row gap-0 md:gap-12 justify-center pl-0 md:pl-16">
            <div className=" basis-1/2 max-w-md">
              <h3 className="text-white">Das sind Deine Aufgaben</h3>
              <ul className="text-white  rounded-md p-3 list-disc	max-w-4xl mx-auto  text-balance">
                <li>Coden & Testing</li> <li>Qualitätssicherung</li>
                <li>GUI erarbeiten & weiterentwickeln </li>
                <li>Umgang mit Datenbanken</li>
                <li>Dokumentation inkl. Diagramm-Erstellung</li>
                <li> 2nd/3rd-Level-Support bestehender Programme</li>
                <li> technische Beratung des Projektmanagers</li>
              </ul>
            </div>
            <div className=" basis-1/2  max-w-md">
              <h3 className="text-white">Das bringst Du mit</h3>
              <ul className="text-white  rounded-md p-3 list-disc	max-w-4xl mx-auto  text-balance">
                <li>Teamfähigkeit und Kommunikationsfähigkeit</li>
                <li> Analytisches Denken/Verständnis</li>
                <li> Abstraktionsvermögen</li>
                <li>
                  Neugier & Lernbereitschaft <br />→ Bereitschaft, sich in Thema
                  reinzunerden/ Detail-verliebtheit
                </li>
                <li>
                  Durchhaltevermögen, auch bei komplexen Problemstellungen
                </li>
                <li>
                  Zuverlässigkeit, Gründlichkeit und selbständiges arbeiten
                </li>
                <li>Gerne erste Berührungspunkte mit dem Programmieren</li>
              </ul>
            </div>
          </div>
          <h2 className="text-white text-center md:text-3xl md:px-16 md:mb-12 mt-16">
            Kontakt
          </h2>
          <div className=" grid grid-cols-1 xl:grid-cols-3 gap-0 xl:gap-6 ">
            <div className="flex-col text-center">
              <h4 className="text-lg mt-4 text-white">
                Dann bewirb Dich unter: <br />
                <a href="mailto:ausbildung@zad-northeim.de">
                  ausbildung@zad-northeim.de
                </a>
              </h4>
              <p className="text-sm mt-4 text-white">
                Bitte beachte: Auf Basis interner IT-Bestimmungen für
                Online-Bewerbungen können wir Dateiformate ausschließlich als
                PDF akzeptieren. Andere Dateiformate sind nicht zulässig.
              </p>
            </div>
            <div className="flex-col text-center">
              <h4 className="text-lg mt-4 text-white">oder per Post: </h4>
              <p className="mt-4 text-white">
                Zentraler <br /> Abrechnungs-Dienst GmbH <br />
                Ottilienstraße 10 <br />
                D-37154 Northeim <br />
                Tel.: 0 55 51 / 96 88 - 789
              </p>
            </div>
            <div className="flex-col text-center">
              {/* <Image
                src="/images/karriere/sachbearbeiter/02-ZADO-portraits-cb.jpg"
                className="object-cover rounded-md"
                width={250}
                height={160}
                objectFit="cover"
              /> */}
              <h4 className="text-lg mt-4 text-white">
                Deine Ansprechpartnerinnen für Deine Bewerbung:{" "}
              </h4>

              <h4 className="text-lg  text-white text-balance">
                Marvin Behling und Talina Gabelmann
              </h4>
            </div>
          </div>
        </div>
        <KarriereSlider sorte="it" />
        <h2 className="text-center text-3xl mt-12 md:mt-40 mb-16">
          Dein Weg von der Bewerbung bis zum Beginn
        </h2>{" "}
        <div className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-6">
          <div className="way-block">
            <h4 className="way-header ">
              <span className="way-number">1.</span>Deine Bewerbung geht raus
            </h4>
            <p>
              Du sendest uns: Dein Anschreiben, Deine Schul- oder
              Arbeitszeugnisse sowie Deinen Lebenslauf. Er sollte auch Deinen
              beruflichen Werdegang widerspiegeln. Schreib uns auch, welches
              Bruttomonatsgehalt Du Dir wünschst. Alle Unterlagen schickst Du
              uns im PDF-Format zu.
            </p>
          </div>
          <div className="way-block">
            <h4 className="way-header ">
              <span className="way-number">2.</span>Eingang bestätigt
            </h4>
            <p>
              Sind Deine Bewerbungsunterlagen bei uns, erhältst Du per E-Mail
              eine Eingangsbestätigung. Möglicherweise haben wir noch ein paar
              Fragen an Dich oder brauchen noch mehr Unterlagen von Dir.
            </p>
          </div>
          <div className="way-block">
            <h4 className="way-header ">
              <span className="way-number">3.</span>Willkommen zum
              Vorstellungsgespräch
            </h4>
            <p>
              Du lernst Alex kennen, den Chef unseres IT-Bereichs – entweder vor
              Ort oder im Video-Call.
            </p>
          </div>
          <div className="way-block">
            <h4 className="way-header ">
              <span className="way-number">4.</span>Wir stellen Dein Team vor
            </h4>
            <p>
              Nach dem Kennenlernen triffst Du direkt Deine potenziellen neuen
              Kolleg:innen aus deinem zukünftigen Mikroteam.
            </p>
          </div>
          <div className="way-block">
            <h4 className="way-header ">
              <span className="way-number">5.</span>Wir stimmen ab
            </h4>
            <p>
              Ergeben wir zusammen Plus? Wir stimmen demokratisch im Mikroteam
              ab, ob es mit uns passt. Und wenn ja, bleibst Du am besten für
              immer.
            </p>
          </div>
          <div className="way-block">
            <h4 className="way-header ">
              <span className="way-number">6.</span>Anfangen und ankommen
            </h4>
            <p>
              Hat es auch bei Dir gefunkt? Dann herzlich willkommen. In den
              ersten Tagen kannst Du erst mal entspannt ankommen, Dein Team
              kennenlernen und Dich gut einarbeiten.
            </p>
          </div>
        </div>
        <div
          className="bg-zad-blue-600 p-12 lg:p-12 my-32
          text-center rounded-md"
        >
          <h2 className="text-white text-center md:text-3xl md:px-16 md:mb-12 ">
            Heißt Dein Ergebnis „Ja“?
          </h2>
          <div className=" grid grid-cols-1 xl:grid-cols-3 gap-0 xl:gap-6">
            <div className="flex-col text-center">
              <h4 className="text-lg mt-4 text-white">
                Dann bewirb Dich unter: <br />
                <a href="mailto:bewerbung@zad-northeim.de">
                  bewerbung@zad-northeim.de
                </a>
              </h4>
              <p className="text-sm mt-4 text-white">
                Bitte beachte: Auf Basis interner IT-Bestimmungen für
                Online-Bewerbungen können wir Dateiformate ausschließlich als
                PDF akzeptieren. Andere Dateiformate sind nicht zulässig.
              </p>
            </div>
            <div className="flex-col text-center">
              <h4 className="text-lg mt-4 text-white">oder per Post </h4>
              <p className="mt-4 text-white">
                Zentraler <br /> Abrechnungs-Dienst GmbH <br />
                Ottilienstraße 10 <br />
                D-37154 Northeim <br />
                Tel.: 0 55 51 / 96 88 - 789
              </p>
            </div>
            <div className="flex-col text-center">
              <Image
                src="/images/karriere/sachbearbeiter/02-ZADO-portraits-cb.jpg"
                className="object-cover rounded-md"
                width={250}
                height={160}
                objectFit="cover"
              />
              <p className="text-white my-2">
                Deine Ansprechpartnerinnen für Deine Bewerbung: <br />
              </p>
              <h4 className="text-lg  text-white">Julia Rein, Carolina Bode</h4>
            </div>
          </div>
        </div>
        <Socials />
      </div>

      <Footer />
    </div>
  );
}

export default Sachbearbeiter;

Sachbearbeiter.pageClass = " no-curtainOFF ";
Sachbearbeiter.noMainPadding = true;
