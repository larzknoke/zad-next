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
        className="object-cover w-full drop-shadow-lg h-[36rem] hidden lg:block"
        lazy=""
        autoPlay={true}
        playsInline={true}
        muted={true}
        loop={true}
      >
        <source type="video/mp4" src="/videos/karriere/it_tiny.mp4" />
      </video>
      <div className="px-[5%] lg:px-[25%] my-6 md:my-16">
        <h2 className="text-center text-4xl xl:mt-32">
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
        <h2 className="mt-20 xl:mt-32 mb-8 text-3xl text-center">
          Damit supportest Du unser Team
        </h2>
        <ul className="text-zad-blue-600 bg-zad-blue-200 rounded-md p-6">
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
        <h2 className="mt-10 xl:mt-20 mb-8 text-3xl text-center">
          Das bringst Du mit
        </h2>
        <ul className="text-zad-blue-600 bg-zad-blue-200 rounded-md p-6">
          <li>
            Du hast im Idealfall schon viel Erfahrung in den von uns benötigten
            Technologien
          </li>
          <li>Du willst gern mit Menschen zusammenarbeiten</li>
          <li>Du brennst darauf, gute Lösungen zu finden</li>
          <li>
            Du hast den Willen, dir bei Bedarf fehlendes Fachwissen anzueignen
          </li>
        </ul>
        <div
          className="bg-zad-blue-600 p-12 lg:p-12 my-32
          text-center rounded-md"
        >
          <h2 className="text-white text-center md:px-16 md:mb-12 ">
            In welcher Welt fühlst du dich zu Hause? <br /> Bewirb dich für
            einen dieser Bereiche
          </h2>
          <div className=" flex flex-row justify-center gap-x-[4%] gap-y-[70px]">
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
                Softwareentwicklung <br /> (z.B. JAVA, PERL)
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
        <div className="my-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="flex-col text-center bg-zad-blue-200 rounded-md px-6 py-10 flex ">
            <img
              className="pt-4 h-24 mb-6 self-center"
              src="images/karriere/krankenversicherung.svg"
              alt="Krankenversicherung"
            />
            <h4 className="text-lg mb-0 break-words">
              Private Zusatzkrankenversicherung für mehr Gesundheitsleistungen
            </h4>
          </div>
          <div className="flex-col text-center bg-zad-blue-200 rounded-md px-6 py-10 flex ">
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
          <div className="flex-col text-center bg-zad-blue-200 rounded-md px-6 py-10 flex ">
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
          <div className="flex-col text-center bg-zad-blue-200 rounded-md px-6 py-10 flex ">
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
          <div className="flex-col text-center bg-zad-blue-200 rounded-md px-6 py-10 flex ">
            <img
              className="pt-4 h-24 mb-6 self-center"
              src="images/karriere/os.svg"
              alt="Betriebssystem"
            />
            <h4 className="text-lg mb-0">
              Freie Auswahl Deines Betriebssystems
            </h4>
          </div>
          <div className="flex-col text-center bg-zad-blue-200 rounded-md px-6 py-10 flex ">
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
          <div className="flex-col text-center bg-zad-blue-200 rounded-md px-6 py-10  flex ">
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
          <div className="flex-col text-center bg-zad-blue-200 rounded-md px-6 py-10  flex ">
            <img
              className="pt-4 h-24 mb-6 self-center"
              src="images/karriere/bike.svg"
              alt="Krankenversicherung"
            />
            <h4 className="text-lg mb-0">
              JobRad-Leasing für Deine Bewegungsfreude, Dein Konto und die
              Umwelt – inklusive, wenn Du unbefristet bei uns bist
            </h4>
          </div>
          <div className="flex-col text-center bg-zad-blue-200 rounded-md px-6 py-10  flex ">
            <img
              className="pt-4 h-24 mb-6 self-center"
              src="images/karriere/pflegelotsen.svg"
              alt="Krankenversicherung"
            />
            <h4 className="text-lg mb-0">
              Grundlagenhilfe durch unsere Pflegelotsen für mehr Durchblick in
              Sachen Pflege, Versorgung und Vollmacht
            </h4>
          </div>
        </div>
        <div className="bg-zad-blue-600 p-10 lg:p-18 lg:px-36 mb-24 rounded mt-16 xl:mt-28 text-center">
          <h2 className="text-white text-center md:underline underline-offset-8 md:px-16 md:mb-10 mt-2">
            Ergeben wir zusammen schon Plus?
          </h2>
          <Button
            className={
              "table mx-auto mt-8 border border-transparent hover:border-white"
            }
            bgColor={"bg-white"}
          >
            Bewirb Dich jetzt
          </Button>
        </div>
        <h2 className="text-center text-3xl mt-40 mb-16">
          6 gute Gründe für gemeinsame Wege
        </h2>{" "}
        <div className="grid grid-cols-1  xl:grid-cols-2 gap-6">
          <div className="flex-col text-center justify-between bg-zad-blue-200 p-5 rounded-md">
            <Image
              src="/images/karriere/it/ZADO_kampagne_it_01.jpg"
              className=" object-cover rounded-md"
              width={600}
              height={350}
              objectFit="cover"
            />
            <h4 className="text-xl mt-4 ">Werde Teil von etwas Großem</h4>
            <p className="px-12 mb-0">
              Du gehörst zu einem Familienunternehmen, das seit 40 Jahren gesund
              und munter wächst. Zu unserer Northeimer Zentrale zählen 150
              Mitarbeitende. Fühlt sich aber gar nicht so an. Denn wir arbeiten
              hier alle in kleinen Teams.
            </p>
          </div>
          <div className="flex-col text-center justify-between bg-zad-blue-200 p-5 rounded-md">
            <Image
              src="/images/karriere/it/ZADO_reportage_24.jpg"
              className=" object-cover rounded-md"
              width={600}
              height={350}
              objectFit="cover"
            />
            <h4 className="text-xl mt-4 ">
              Freu Dich auf eine lange Beziehung
            </h4>
            <p className="px-12">
              Wir bleiben Dir treu und geben Dir Halt. Auch wenn’s mal stürmt
              oder etwas schiefläuft. Wir halten viel von Beständigkeit und
              Vertrauen. Das gibt Dir Sicherheit und ein gutes Gefühl für die
              Zukunft.
            </p>
          </div>
          <div className="flex-col text-center justify-between bg-zad-blue-200 p-5 rounded-md">
            <Image
              src="/images/karriere/it/ZADO_reportage_69.jpg"
              className=" object-cover rounded-md"
              width={600}
              height={350}
              objectFit="cover"
            />
            <h4 className="text-xl mt-4 ">Fühle, wie viel Du wert bist</h4>
            <p className="px-12">
              Bei uns bist Du auch als Kollege 151 keine Nummer. Für uns zählt,
              wer Du bist und was Dich ausmacht. Mit Deinen Wünschen und Deinen
              Ideen. Wir lieben es, wenn Du Dich mit Herz und Kopf einbringst.
              Für alles, was uns verbindet oder unsere Arbeit erleichtert.
            </p>
          </div>
          <div className="flex-col text-center justify-between bg-zad-blue-200 p-5 rounded-md">
            <Image
              src="/images/karriere/it/ZADO_reportage_13.jpg"
              className=" object-cover rounded-md"
              width={600}
              height={350}
              objectFit="cover"
            />
            <h4 className="text-xl mt-4 ">
              Erlebe Teamgeist, der Dich begeistert
            </h4>
            <p className="px-12">
              Das große Ganze ergibt sich bei uns aus vielen kleinen Teams.
              Jedes von ihnen zählt nur acht bis zwölf Mitarbeiter. Du bist Teil
              einer Gruppe, die so tickt wie Du. Das macht vieles einfacher und
              schafft Freiraum, um euch selbst zu organisieren und eure
              Arbeitsumgebung nach euren Wünschen zu gestalten.
            </p>
          </div>
          <div className="flex-col text-center justify-between bg-zad-blue-200 p-5 rounded-md">
            <Image
              src="/images/karriere/it/ZADO_reportage_57.jpg"
              className=" object-cover rounded-md"
              width={600}
              height={350}
              objectFit="cover"
            />
            <h4 className="text-xl mt-4 ">Stell die Uhr nach Dir</h4>
            <p className="px-12">
              Dein Leben ist kein Stundenplan. Warum sollte es Dein Job sein?
              Unsere Gleitzeitmodelle machen Dich privat flexibler. Per
              Zeiterfassung bist Du immer im Bild, wo Du stehst. Und wenn Du
              nach Absprache lieber im Homeoffice bleibst, vernetzen wir uns
              einfach digital.
            </p>
          </div>
          <div className="flex-col text-center justify-between bg-zad-blue-200 p-5 rounded-md">
            <Image
              src="/images/karriere/it/ZADO_reportage_48.jpg"
              className=" object-cover rounded-md"
              width={600}
              height={350}
              objectFit="cover"
            />
            <h4 className="text-xl mt-4 ">Entwickle Dich weiter</h4>
            <p className="px-12">
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
          Dein Leben ist kein Stundenplan. Warum sollte es Dein Job sein? Unsere
          Gleitzeitmodelle machen Dich privat flexibler. Per Zeiterfassung bist
          Du immer im Bild, wo Du stehst. Und wenn Du nach Absprache lieber im
          Homeoffice bleibst, vernetzen wir uns einfach digital.
        </p>
        <div className="grid grid-cols-2 gap-5">
          <div className="relative col-span-2 h-[500px]">
            <Image
              src="/images/karriere/it/ZADO_reportage_10_1000.jpg"
              className="w-full object-cover rounded-md"
              layout={"fill"}
            />
          </div>
          <div className="relative  h-[300px]">
            <Image
              src="/images/karriere/it/ZADO_reportage_72.jpg"
              className="w-full object-cover rounded-md"
              layout={"fill"}
            />
          </div>
          <div className="relative  h-[300px]">
            <Image
              src="/images/karriere/it/ZADO_reportage_76.jpg"
              className="w-full object-cover rounded-md"
              layout={"fill"}
            />
          </div>
          <div className="relative  h-[300px]">
            <Image
              src="/images/karriere/it/ZADO_reportage_46.jpg"
              className="w-full object-cover rounded-md"
              layout={"fill"}
            />
          </div>
          <div className="relative  h-[300px]">
            <Image
              src="/images/karriere/it/ZADO_reportage_01.jpg"
              className="w-full object-cover rounded-md"
              layout={"fill"}
            />
          </div>
        </div>
        <h2 className="text-center text-3xl mt-32 mb-16">Testimonials</h2>
        <KarriereSlider />
        <h2 className="text-center text-3xl mt-40 mb-16">
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
              beruflichen Werdegang widerspiegeln und uns zeigen, ob Du quer
              einsteigst oder bereits Erfahrung im Gesundheitswesen oder im
              kaufmännischen Bereich hast. Schreib uns auch, welches
              Bruttomonatsgehalt Du Dir wünscht. Alle Unterlagen schickst Du uns
              im PDF-Format zu.
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
              Kolleginnen und Kollegen aus deinem zukünftigen Mikroteam.
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
          <h2 className="text-white text-center md:underline underline-offset-8 md:px-16 md:mb-12 ">
            Heißt Dein Ergebnis „Ja“?
          </h2>
          <div className=" grid grid-cols-1 xl:grid-cols-3 gap-0 xl:gap-6">
            <div className="flex-col text-center">
              <h4 className="text-lg mt-4 text-white">
                Dann bewirb dich unter: <br />
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
