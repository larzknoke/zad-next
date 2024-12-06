import React, { useState } from "react";
import Footer from "../components/footer";
import Button from "../components/button";
import Image from "next/image";
import Link from "next/link";
import GruenesLicht from "../components/karriere_gruenes_licht";
import Socials from "../components/socials";
import KarriereSlider from "../components/karriere-slider";
function Karriere() {
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
        <source
          type="video/mp4"
          src="/videos/karriere/karriere_allgemein.mp4"
        />
      </video>
      <div className="px-[5%] lg:px-[20%] my-6 md:my-16">
        <h2
          className="text-center text-4xl xl:
        mt-32 lg:leading-[48px]"
        >
          Kolleg:in im Lieblingsteam? <br />
          Mach Dein Häkchen.
        </h2>
        <p className="text-center">
          Wir suchen Dich und Dein Talent für spannende Aufgaben und gemeinsame
          Wege. <br /> Starte Deine Zukunft in unserem Familienunternehmen.
        </p>
        <h2 className="mt-20 xl:mt-32 text-3xl text-center">
          In diesen Jobs kannst Du Dein Talent entfalten
        </h2>
        <div className="my-10 flex flex-col xl:flex-row justify-center gap-x-[5%] gap-y-6">
          <div className="flex-col text-center bg-zad-blue-200 rounded-md px-6 py-16 xl:w-1/3 flex justify-between">
            <h4>Sachbearbeiter:in im Gesundheitswesen</h4>
            <p>
              Bring Deine Erfahrungen im Bereich Leistungsabrechnungen ein und
              sei mittendrin in der Verwaltung.
            </p>
            <Button href="/karriere-sachbearbeiter">Erfahre mehr</Button>
          </div>
          <div className="flex-col text-center bg-zad-blue-200 rounded-md px-6 py-16 xl:w-1/3 flex justify-between">
            <h4>Bürohilfskraft (m/w/d)</h4>
            <p>
              Greif unseren Abrechnungs-Teams unter die Arme und unterstütze uns
              in abwechslungsreichen Prozessarbeiten.
            </p>
            <Button href="/karriere-buero">Lies weiter</Button>
          </div>
          <div className="flex-col text-center bg-zad-blue-200 rounded-md px-6 py-16 xl:w-1/3 flex justify-between">
            <h4>Fachkraft für IT (m/w/d)</h4>
            <p>
              Supporte unser Team in den verschiedensten IT-Bereichen – und
              verwandle digitale Herausforderungen in praktikable Lösungen.
            </p>
            <Button href="/karriere-it">Steig tiefer ein</Button>
          </div>
        </div>
        <div className="bg-zad-blue-600 p-10 lg:p-18 lg:px-36 mb-24 rounded mt-16 xl:mt-28 text-center">
          <Image
            className="rounded-full"
            src={"/images/karriere/start/ZAD-portrait-06.png"}
            alt="Niesen"
            width={250}
            height={250}
          />
          <h2 className="text-white text-center md:underline underline-offset-8 md:px-16 md:mb-10 mt-8">
            Suchst Du einen anderen Job?
          </h2>
          <p className="font-medium m-0 text-white text-lg text-center">
            Bewirb Dich einfach initiativ. Wir freuen uns zum Beispiel auch,
            wenn Du uns von Deinen beruflichen Fähigkeiten überzeugst. <br />
            <br />
            Sende Deine Bewerbung per E-Mail an bewerbung@zad-northeim.de oder{" "}
            <br />
            ruf uns an unter 0 55 51 / 96 88 - 789
          </p>
        </div>
        <h2 className="text-center text-3xl mt-32 mb-16">
          Gute Gründe für gemeinsame Wege
        </h2>{" "}
        <div className="my-10 flex flex-col px-20 xl:px-0 xl:flex-row justify-center gap-x-[8%] gap-y-[70px]">
          <div className="flex-col xl:w-1/3 text-center justify-between">
            <Image
              src="/images/karriere/start/ZADO_reportage_10.jpg"
              className="w-1/4 object-cover rounded-md"
              width={300}
              height={200}
              objectFit="cover"
            />
            <h4 className="text-xl mt-4 xl:h-12">Stell die Uhr nach Dir</h4>
            <p>
              Dein Leben ist kein Stundenplan. Warum sollte es Dein Job sein?
              Unsere Gleitzeitmodelle machen Dich privat flexibler. Per
              Zeiterfassung bist Du immer im Bild, wo Du stehst. Und wenn Du
              nach Absprache lieber im Homeoffice bleibst, vernetzen wir uns
              einfach digital.
            </p>
          </div>
          <div className="flex-col xl:w-1/3 text-center justify-between">
            <Image
              src="/images/karriere/start/ZAD-gruppenaufnahmen-13.jpg"
              className="w-1/4 object-cover rounded-md"
              width={300}
              height={200}
              objectFit="cover"
            />
            <h4 className="text-xl mt-4 xl:h-12">
              Fühle, wie viel Du wert bist
            </h4>
            <p>
              Bei uns bist Du auch als Kolleg:in 151 keine Nummer. Für uns
              zählt, wer Du bist und was Dich ausmacht. Mit Deinen Wünschen und
              Deinen Ideen. Wir lieben es, wenn Du Dich mit Herz und Kopf
              einbringst. Für alles, was uns verbindet oder unsere Arbeit
              erleichtert.
            </p>
          </div>
          <div className="flex-col xl:w-1/3 text-center justify-between">
            <Image
              src="/images/karriere/start/ZADO_reportage_13.jpg"
              className="w-1/4 object-cover rounded-md"
              width={300}
              height={200}
              objectFit="cover"
            />
            <h4 className="text-xl mt-4 xl:h-12">
              Spüre, wie Dein Gehalt steigt
            </h4>
            <p>
              Wir wollen, dass Du am liebsten für immer bleibst. Und je länger
              Du bei uns bist, desto mehr verdienst Du auch. Wir passen Dein
              Gehalt regelmäßig an – und zeigen Dir auch auf diese Art, wie viel
              Du wert bist.
            </p>
          </div>
        </div>
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
        <div className="grid grid-cols-2 gap-5">
          <div className="relative col-span-2 h-[500px]">
            <Image
              src="/images/karriere/start/ZADO_gruppenaufnahme_09.jpg"
              className="w-full object-cover rounded-md"
              layout={"fill"}
            />
          </div>
          <div className="relative  h-[300px]">
            <Image
              src="/images/karriere/start/ZADO_reportage_18.jpg"
              className="w-full object-cover rounded-md"
              layout={"fill"}
            />
          </div>
          <div className="relative  h-[300px]">
            <Image
              src="/images/karriere/start/ZAD-reportage-76.jpg"
              className="w-full object-cover rounded-md"
              layout={"fill"}
            />
          </div>
          <div className="relative  h-[300px]">
            <Image
              src="/images/karriere/start/ZADO_kampagne_it_01.jpg"
              className="w-full object-cover rounded-md"
              layout={"fill"}
            />
          </div>
          <div className="relative  h-[300px]">
            <Image
              src="/images/karriere/start/ZADO_reportage_24.jpg"
              className="w-full object-cover rounded-md"
              layout={"fill"}
            />
          </div>
        </div>
        <div
          className="bg-zad-blue-600 p-12 lg:p-12 my-32
          text-center rounded-md"
        >
          <h2 className="text-white text-center md:underline underline-offset-8 mb-12 md:px-16 md:mb-16 ">
            Unsere Teams sagen „Hallo“
          </h2>
          <div className=" flex flex-col md:flex-row justify-center gap-x-[4%] gap-y-5 md:gap-y-[70px]">
            <div className="flex-col text-center w-full md:w-1/3">
              <div className="relative h-[180px]">
                <Image
                  src="/images/karriere/start/ZADO_reportage_70.jpg"
                  className="object-cover rounded-md"
                  layout={"fill"}
                  objectFit="cover"
                />
              </div>
              <h4 className="text-lg mt-4 text-white">
                SACHBEARBEITER:IN IM GESUNDHEITSWESEN
              </h4>
            </div>
            <div className="flex-col text-center w-full md:w-1/3">
              <div className="relative h-[180px]">
                <Image
                  src="/images/karriere/start/ZADO_kampagne_hilfskraefte_01.jpg"
                  className="object-cover rounded-md"
                  layout={"fill"}
                  objectFit="cover"
                />
              </div>
              <h4 className="text-lg mt-4 text-white">
                BÜROHILFSKRAFT (M/W/D)
              </h4>
            </div>
            <div className="flex-col text-center w-full md:w-1/3">
              <div className="relative h-[180px]">
                <Image
                  src="/images/karriere/start/ZADO_reportage_72.jpg"
                  className="object-cover rounded-md"
                  layout={"fill"}
                  objectFit="cover"
                />
              </div>
              <h4 className="text-lg mt-4 text-white">
                FACHKRAFT FÜR IT (M/W/D)
              </h4>
            </div>
          </div>
        </div>
        <h2 className="text-center text-3xl mt-32 mb-8">Testimonials</h2>
        <KarriereSlider />
        <GruenesLicht />
        <Socials />
      </div>

      <Footer />
    </div>
  );
}

export default Karriere;

Karriere.pageClass = " no-curtainOFF ";
Karriere.noMainPadding = true;
