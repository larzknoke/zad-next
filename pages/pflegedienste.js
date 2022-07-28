import React from "react";
import Sidenav from "../components/sidenav";
import Link from "next/link";
import Button from "../components/button";
import Image from "next/image";
function Pflegedienste() {
  return (
    <>
      <video
        className="object-cover w-full drop-shadow-lg h-[36rem] hidden lg:block"
        lazy=""
        autoPlay={true}
        playsinline=""
        muted={true}
        loop={true}
      >
        <source type="video/mp4" src="/videos/vid_unternehmen.mp4" />
      </video>

      <div className="mx-auto flex flex-col lg:flex-row py-12 md:py-24 md:px-28 px-8 lg:px-24 xl:px-48 xl:py-32 lg:space-x-24 space-y-12 md:space-y-16 lg:space-y-0">
        <div className="lg:space-y-8 gap-y-4 md:gap-y-0 flex flex-row lg:flex-col justify-between md:justify-evenly lg:justify-start flex-wrap">
          <Sidenav />
        </div>
        <div>
          <h3>Abrechnungen für ambulante Krankenpflegeleistungen</h3>
          <h2>Der Mensch vermag mit Hilfe mehr</h2>
          <p>
            Was Sie leisten, ist unermesslich. Doch ihre Zeit wird eng bemessen.
            Zeitintensiv gestaltet sich dagegen die Bürokratie. Fast jede Kasse
            wickelt die Leistungsabrechnung anders ab.
          </p>

          <p>
            Wenden Sie sich wieder dem Wesentlichen zu. ZAD rechnet Ihre
            Leistungen mit sämtlichen Kostenträgern ab. Schnell, professionell,
            inklusive betriebswirtschaftlicher Auswertung – natürlich gemäß §
            302 SGB V und § 105 SGB XI. Einsende- und Auszahlungstermin
            bestimmen Sie selbst.
          </p>

          <p>
            2Das Ergebnis: Mehr Zeit und Zahlungskraft, mehr Sicherheit und
            Wirtschaftlichkeit, mehr Übersicht und Kostentransparenz. Das
            einzige, worauf Sie verzichten müssen, ist das Abenteuer
            Papierdschungel. Denn den haben wir im ZAD-Kundeninformationscenter
            klar strukturiert für Sie „gezähmt“.
          </p>
          <div className="flex flex-col lg:flex-row lg:space-x-10 space-y-8 lg:space-y-0 my-10 w-full items-stretch justify-items-stretch">
            <Button href="/kontakt">Jetzt Anfrage senden</Button>
            <Button href="/team">Ansprechpartner finden</Button>
          </div>
        </div>
        <div className="flex-col w-full max-w-xs gap-8 hidden xl:flex min-w-[14rem]">
          <Image
            src="/images/start/pfleger.jpg"
            className=" object-cover rounded "
            width={700}
            height={400}
            objectFit="cover"
          />
          <Image
            src="/images/leistungen/drucker.jpg"
            className=" object-cover rounded"
            width={700}
            height={400}
            objectFit="cover"
          />
        </div>
      </div>
    </>
  );
}

export default Pflegedienste;

Pflegedienste.noMainPadding = true;
