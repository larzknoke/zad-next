import React from "react";
import Sidenav from "../components/sidenav";
import Button from "../components/button";
import Image from "next/image";
import SideContact from "../components/sideContact";
import Footer from "../components/footer";

function Krankentransporte() {
  return (
    <>
      <video
        className="object-cover w-full drop-shadow-lg h-[36rem] hidden lg:block"
        lazy=""
        autoPlay={true}
        playsInline={true}
        muted={true}
        loop={true}
      >
        <source type="video/mp4" src="/videos/krankentransporte.mp4" />
      </video>
      <div className="mx-auto flex flex-col lg:flex-row py-12 md:py-24 md:px-28 px-8 lg:px-24 xl:px-40 xl:py-32 lg:space-x-20 space-y-12 md:space-y-16 lg:space-y-0">
        <div className="lg:space-y-8 gap-y-4 md:gap-y-0 flex flex-row lg:flex-col justify-between md:justify-evenly lg:justify-start flex-wrap">
          <Sidenav />
        </div>
        <div>
          <h3>Abrechnungen für Rettungsdienste und Krankentransporte</h3>
          <h2>Qualität ist eine Frage der Geschwindigkeit</h2>
          <p>
            Auf Rettungsdienst und Krankentransport will niemand warten. Sie
            dagegen warten ständig: Von der Leistungserbringung bis zur
            Auszahlung der Krankenkassen vergehen oft Wochen. Im
            Liquiditätsengpass droht Ihnen selbst der wirtschaftliche Notfall.
            Doch auch dem Helfer kann geholfen werden. ZAD hält Ihr Geschäft im
            Rollen.
          </p>

          <p>
            Mit ZAD werden Sie unabhängig vom Zahlungsverhalten der
            Kostenträger. Dank externer Transportscheinabrechnung erhalten Sie
            Ihre Auszahlung umgehend bei deutlich geringerem Verwaltungsaufwand.
          </p>

          <p>
            Denn die elektronische Archivierung Ihrer Verordnungen,
            Fahrtberichte und anderen Rechnungsunterlagen übernehmen wir gerne
            gleich mit. Natürlich inklusive Plausibilitätsprüfung, statistischer
            Auswertung und Versicherung Ihrer Belege.
          </p>

          <p>
            Im ZAD-Kunden WebPortal behalten Sie trotzdem alles unter Kontrolle.
            Das kostenlose WebPortal liefert Ihnen jederzeit einen vollständigen
            Überblick und Zugriff auf sämtliche Abrechnungsdaten. Statt wühlen
            im Blätterwald, alles ganz einfach per Mausklick.
          </p>
          <div className="flex flex-col lg:flex-row lg:space-x-10 space-y-8 lg:space-y-0 my-10 w-full items-stretch justify-items-stretch">
            <Button href="/kontakt" passHref>
              Jetzt Anfrage senden
            </Button>
            <Button href="/team" passHref>
              Ansprechpartner finden
            </Button>
          </div>
          <div className="flex-col lg:flex-row gap-8 my-10 hidden lg:flex">
            <Image
              src="/images/start/wagen.jpg"
              className=" object-cover rounded "
              width={700}
              height={450}
              objectFit="cover"
            />
            <Image
              src="/images/leistungen/tastatur.jpg"
              className=" object-cover rounded"
              width={700}
              height={450}
              objectFit="cover"
            />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-xl">
            Sind Sie an Abrechnungen für Ihren Rettungsdienst und/oder
            Krankentransport interessiert?
          </h4>
          <SideContact />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Krankentransporte;

Krankentransporte.noMainPadding = true;
