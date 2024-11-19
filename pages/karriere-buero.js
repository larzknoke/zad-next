import React, { useState } from "react";
import Footer from "../components/footer";
import Button from "../components/button";
import Image from "next/image";
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
        <source
          type="video/mp4"
          src="/videos/karriere/buerohilfskraft_tiny.mp4"
        />
      </video>
      <div className="px-[5%] lg:px-[25%] my-6 md:my-16">
        <h2 className="text-center text-4xl xl:mt-32">
          BÜROHILFSKRAFT (M/W/D)
        </h2>
        <h4 className="text-center text-2xl xl:mt-8">
          Northeim | GERINGFÜGIGE BESCHÄFTIGUNG UND/ODER TEILZEITBESCHÄFTIGUNG
        </h4>
        <p className="text-center xl:px-32">
          Wir suchen Deine Unterstützung für unsere Abrechnungs-Teams. Geh mit
          uns gemeinsame Wege und starte in unserem Familienunternehmen.
        </p>
        <h2 className="mt-20 xl:mt-32 mb-8 text-3xl text-center">
          Das sind Deine Aufgaben
        </h2>
        <ul className="text-zad-blue-600 bg-zad-blue-200 rounded-md p-6">
          <p className="mb-3 underline">
            Du unterstützt uns in unterschiedlichen Prozessarbeiten:
          </p>
          <li>Du bereitest Abrechnungsunterlagen vor und sortierst sie</li>
          <li>
            Du bearbeitest und sortierst Leistungsnachweise und andere Belege
            nach vorgegebenen Kriterien
          </li>
          <li>Du erfasst gegebenenfalls auch Belege im Gesundheitswesen</li>
        </ul>
        <h2 className="mt-10 xl:mt-20 mb-8 text-3xl text-center">
          Das bringst Du mit
        </h2>
        <ul className="text-zad-blue-600 bg-zad-blue-200 rounded-md p-6">
          <li>Du verfügst über eine schnelle Auffassungsgabe</li>
          <li>Du bist teamfähig, zuverlässig und hilfsbereit</li>
          <li>Du agierst flexibel</li>
        </ul>
        <h2 className="text-center text-3xl mt-40 mb-16">
          5 gute Gründe für gemeinsame Wege
        </h2>{" "}
        <div className="grid grid-cols-1  xl:grid-cols-2 gap-6">
          <div className="flex-col text-center justify-between bg-zad-blue-200 p-5 rounded-md">
            <Image
              src="/images/karriere/buero/ZADO_reportage_32.jpg"
              className=" object-cover rounded-md min-w-full"
              width={600}
              height={350}
              objectFit="cover"
            />
            <h4 className="text-xl mt-4 ">Stell die Uhr nach Dir</h4>
            <p className="px-12 mb-0">
              Dein Leben ist kein Stundenplan. Warum sollte es Dein Job sein?
              Unsere Gleitzeitmodelle machen Dich privat flexibler. Per
              Zeiterfassung bist Du immer im Bild, wo Du stehst. Und wenn Du
              nach Absprache lieber im Homeoffice bleibst, vernetzen wir uns
              einfach digital.
            </p>
          </div>
          <div className="flex-col text-center justify-between bg-zad-blue-200 p-5 rounded-md">
            <Image
              src="/images/karriere/buero/ZADO_reportage_45.jpg"
              className=" object-cover rounded-md"
              width={600}
              height={350}
              objectFit="cover"
            />
            <h4 className="text-xl mt-4 ">Komm gut an Bord</h4>
            <p className="px-12">
              Wir nehmen Dich vom ersten Moment an mit. Während eines gut
              betreuten Onboardings arbeiten wir Dich intensiv in alle Aufgaben
              und bei Bedarf in die notwendigen Programme mit dem PC ein.
            </p>
          </div>
          <div className="flex-col text-center justify-between bg-zad-blue-200 p-5 rounded-md">
            <Image
              src="/images/karriere/buero/ZADO_reportage_04.jpg"
              className=" object-cover rounded-md"
              width={600}
              height={350}
              objectFit="cover"
            />
            <h4 className="text-xl mt-4 ">Fühle, wie viel Du wert bist</h4>
            <p className="px-12">
              Bei uns bist Du auch als Kolleg:in 151 keine Nummer. Für uns
              zählt, wer Du bist und was Dich ausmacht. Mit Deinen Wünschen und
              Deinen Ideen. Wir lieben es, wenn Du Dich mit Herz und Kopf
              einbringst. Für alles, was uns verbindet oder unsere Arbeit
              erleichtert.
            </p>
          </div>
          <div className="flex-col text-center justify-between bg-zad-blue-200 p-5 rounded-md">
            <Image
              src="/images/karriere/buero/ZADO_gruppenaufnahme_03.jpg"
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
              Jedes von ihnen zählt nur acht bis zwölf Mitarbeiter:innen. Du
              unterstützt das Team, zu dem Du am besten passt. Schließlich macht
              es viel mehr Spaß, durch dick und dünn zu gehen, wenn man auf
              einer Wellenlänge liegt.
            </p>
          </div>
          <div className="flex-col text-center justify-between bg-zad-blue-200 p-5 rounded-md">
            <Image
              src="/images/karriere/buero/ZADO_reportage_54.jpg"
              className=" object-cover rounded-md"
              width={600}
              height={350}
              objectFit="cover"
            />
            <h4 className="text-xl mt-4 ">Spüre, wie Dein Gehalt steigt</h4>
            <p className="px-12">
              Wir wollen, dass Du am liebsten für immer bleibst. Und je länger
              Du bei uns bist, desto mehr verdienst Du auch. Wir passen Dein
              Gehalt regelmäßig an – und zeigen Dir auch auf diese Art, wie viel
              Du wert bist.
            </p>
          </div>
        </div>
        <div className="bg-zad-blue-600 p-10 lg:p-18 lg:px-36 mb-36 rounded mt-16 xl:mt-32 text-center">
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
        <GruenesLicht />
        <h2 className="text-center text-3xl mt-36 mb-4">
          Alle Augenblicke auf Augenhöhe
        </h2>
        <p className="text-center">
          Wir lieben die Gemeinschaft. Weil wir viel gemeinsam haben. Unser
          Faible für ein angenehmes Arbeitsumfeld zum Beispiel, in dem wir uns
          alle wohlfühlen und wertgeschätzt werden. Das macht es leicht, mit
          viel Energie in die Tasten zu hauen. Und zwischendurch? Stillen wir
          unseren Appetit auf leckere Kekse, gesundes Obst und lockere
          Gespräche..
        </p>
        <div className="grid grid-cols-2 gap-5">
          <div className="relative col-span-2 h-[500px]">
            <Image
              src="/images/karriere/sachbearbeiter/ZADO_reportage_24.jpg"
              className="w-full object-cover rounded-md"
              layout={"fill"}
            />
          </div>
          <div className="relative  h-[300px]">
            <Image
              src="/images/karriere/buero/ZADO_kampagne_kaufleute_03.jpg"
              className="w-full object-cover rounded-md"
              layout={"fill"}
            />
          </div>
          <div className="relative  h-[300px]">
            <Image
              src="/images/karriere/buero/ZADO_reportage_25.jpg"
              className="w-full object-cover rounded-md"
              layout={"fill"}
            />
          </div>
          <div className="relative  h-[300px]">
            <Image
              src="/images/karriere/buero/ZADO_reportage_70.jpg"
              className="w-full object-cover rounded-md"
              layout={"fill"}
            />
          </div>
          <div className="relative  h-[300px]">
            <Image
              src="/images/karriere/buero/ZADO_reportage_42.jpg"
              className="w-full object-cover rounded-md"
              layout={"fill"}
            />
          </div>
          <div className="relative  h-[300px]">
            <Image
              src="/images/karriere/buero/ZADO_reportage_30.jpg"
              className="w-full object-cover rounded-md"
              layout={"fill"}
            />
          </div>
          <div className="relative  h-[300px]">
            <Image
              src="/images/karriere/buero/ZADO_reportage_56.jpg"
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
              <span className="way-number">1.</span> Deine Bewerbung geht raus
            </h4>
            <p>
              Du sendest uns: Dein Anschreiben, Deine Schul- oder
              Arbeitszeugnisse sowie Deinen Lebenslauf. Er sollte auch Deinen
              beruflichen Werdegang widerspiegeln und uns zeigen, ob Du quer
              einsteigst oder bereits Erfahrung im Gesundheitswesen oder im
              kaufmännischen Bereich hast. Schreib uns auch, welches
              Bruttomonatsgehalt Du Dir wünschst. Alle Unterlagen schickst Du
              uns im PDF-Format zu.
            </p>
          </div>
          <div className="way-block">
            <h4 className="way-header ">
              <span className="way-number">2.</span> Eingang bestätigt
            </h4>
            <p>
              Sind Deine Bewerbungsunterlagen bei uns, erhältst Du per E-Mail
              eine Eingangsbestätigung. Möglicherweise haben wir noch ein paar
              Fragen an Dich oder brauchen noch mehr Unterlagen von Dir.
            </p>
          </div>
          <div className="way-block">
            <h4 className="way-header ">
              <span className="way-number">3.</span> Willkommen zum
              Kennenlerngespräch
            </h4>
            <p>
              Endlich lernen wir uns persönlich kennen. Im Kennenlerngespräch
              kannst Du uns mehr über Deine bisherigen Erfahrungen, Tätigkeiten
              sowie Deine PC-Kenntnisse erzählen. Verrate uns gern, was Du schon
              über uns weißt, wie Du Dich selbst einschätzt und welche Wünsche
              Du für Deinen Job oder Deine Weiterbildung hast. Du erhälst einen
              ersten Eindruck von uns. Dann schauen wir, wie gut wir
              zusammenpassen.
            </p>
          </div>
          <div className="way-block">
            <h4 className="way-header ">
              <span className="way-number">4.</span> Wir wählen Dein Team
            </h4>
            <p>
              Nach dem Kennenlernen werfen wir einen Blick auf unsere Teams und
              überlegen, welches am besten zu Deinem Talent und Deinem Charakter
              passt. Damit Du Dich von Anfang an wohlfühlst und mit den
              Kolleg:innen auf einer Wellenlänge zusammenarbeitest.
            </p>
          </div>
          <div className="way-block">
            <h4 className="way-header ">
              <span className="way-number">5.</span> Du schnupperst in Deinen
              Job
            </h4>
            <p>
              Probiere einfach mal für drei bis vier Stunden aus, wie es sich
              live bei uns anfühlt und lerne Dein Team und Deine Tätigkeiten
              kennen. Haben wir zusammen ein gutes Gefühl, entscheidest Du Dich
              einfach und bleibst für immer.
            </p>
          </div>
          <div className="way-block">
            <h4 className="way-header ">
              <span className="way-number">6.</span> Einarbeitung
            </h4>
            <p>
              Es hat gefunkt? Hurra! Herzlich willkommen. Alles Weitere
              organisierst Du jetzt in und mit Deinem Team. Es erstellt für Dich
              einen Plan, wie Du Dich am besten einarbeiten kannst. Und für all
              Deine Fragen hast Du ab jetzt eine teaminterne Ansprechperson, die
              immer ein offenes Ohr für Dich hat.
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
