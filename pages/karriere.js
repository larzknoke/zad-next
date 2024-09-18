import React, { useState } from "react";
import Footer from "../components/footer";
import Button from "../components/button";
import Image from "next/image";
import Link from "next/link";
import GruenesLicht from "../components/karriere_gruenes_licht";
import Socials from "../components/socials";
function Karriere() {
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
        <source type="video/mp4" src="/videos/software-pflegedienste.mp4" />
      </video>
      <div className="px-[5%] lg:px-[25%] my-6 md:my-16">
        <h2 className="text-center text-4xl xl:mt-32">
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
              Greif unseren Abrechnungs-Teams unter die Arme und unterstütze und
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
            src={"/images/unternehmen/team/" + "niesen_irina" + ".jpg"}
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
          <div className="flex-col text-center justify-between">
            <Image
              src="/images/start/wagen.jpg"
              className="w-1/4 object-cover rounded-md"
              width={300}
              height={180}
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
          <div className="flex-col text-center justify-between">
            <Image
              src="/images/start/pfleger.jpg"
              className="w-1/4 object-cover rounded-md"
              width={300}
              height={180}
              objectFit="cover"
            />
            <h4 className="text-xl mt-4 xl:h-12">
              Fühle, wie viel Du wert bist
            </h4>
            <p>
              Bei uns bist Du auch als Kollege 151 keine Nummer. Für uns zählt,
              wer Du bist und was Dich ausmacht. Mit Deinen Wünschen und Deinen
              Ideen. Wir lieben es, wenn Du Dich mit Herz und Kopf einbringst.
              Für alles, was uns verbindet oder unsere Arbeit erleichtert.
            </p>
          </div>
          <div className="flex-col text-center justify-between">
            <Image
              src="/images/start/mann.jpg"
              className="w-1/4 object-cover rounded-md"
              width={300}
              height={180}
              objectFit="cover"
            />
            <h4 className="text-xl mt-4 xl:h-12">
              Spüre, wie Dein Gehalt steigt
            </h4>
            <p>
              Dein Leben ist kein Stundenplan. Warum sollte es Dein Job sein?
              Unsere Gleitzeitmodelle machen Dich privat flexibler. Per
              Zeiterfassung bist Du immer im Bild, wo Du stehst. Und wenn Du
              nach Absprache lieber im Homeoffice bleibst, vernetzen wir uns
              einfach digital.
            </p>
          </div>
        </div>
        <h2 className="text-center text-3xl mt-32 mb-4">
          Alle Augenblicke auf Augenhöhe
        </h2>
        <p className="text-center">
          Dein Leben ist kein Stundenplan. Warum sollte es Dein Job sein? Unsere
          Gleitzeitmodelle machen Dich privat flexibler. Per Zeiterfassung bist
          Du immer im Bild, wo Du stehst. Und wenn Du nach Absprache lieber im
          Homeoffice bleibst, vernetzen wir uns einfach digital.
        </p>
        <div className="w-full h-80 relative ">
          <Image
            src="/images/unternehmen/frau_telefon.jpg"
            className="w-full object-cover rounded-md"
            layout={"fill"}
            // width={300}
            // height={180}
            objectFit="cover"
          />
        </div>
        <div
          className="bg-zad-blue-600 p-12 lg:p-12 my-32
          text-center rounded-md"
        >
          <h2 className="text-white text-center md:underline underline-offset-8 md:px-16 md:mb-16 ">
            Unsere Teams sagen „Hallo“
          </h2>
          <div className=" flex flex-row justify-center gap-x-[4%] gap-y-[70px]">
            <div className="flex-col text-center">
              <Image
                src="/images/start/wagen.jpg"
                className="object-cover rounded-md"
                width={350}
                height={180}
                objectFit="cover"
              />
              <h4 className="text-xl mt-4 text-white">H5 Headline</h4>
            </div>
            <div className="flex-col text-center">
              <Image
                src="/images/start/pfleger.jpg"
                className="object-cover rounded-md"
                width={300}
                height={180}
                objectFit="cover"
              />
              <h4 className="text-xl mt-4 text-white">H5 Headline</h4>
            </div>
            <div className="flex-col text-center">
              <Image
                src="/images/start/mann.jpg"
                className="object-cover rounded-md"
                width={300}
                height={180}
                objectFit="cover"
              />
              <h4 className="text-xl mt-4 text-white">H5 Headline</h4>
            </div>
          </div>
        </div>
        <h2 className="text-center text-3xl mt-32 mb-4">Testimonials</h2>
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
