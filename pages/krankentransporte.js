import React from "react";
import Sidenav from "../components/sidenav";
import Link from "next/link";
import Button from "../components/button";
import { ParallaxBanner } from "react-scroll-parallax";

function Krankentransporte() {
  return (
    <>
      <ParallaxBanner
        layers={[
          {
            speed: -8,
            children: (
              <video
                className="object-cover w-full drop-shadow-lg mt-32 h-[36rem]"
                lazy=""
                autoPlay="true"
                playsinline=""
                muted="true"
              >
                <source type="video/mp4" src="/videos/krankentransporte.mp4" />
              </video>
            ),
          },
        ]}
        className="aspect-[3/1]"
      ></ParallaxBanner>
      <div className="mx-auto flex px-16 py-16 md:px-28 md:py-24 xl:px-48 xl:py-32">
        <div className="basis-1/4 space-y-8">
          <Sidenav />
        </div>
        <div className="px-48">
          {/* <img
            className="drop-shadow-lg rounded mx-auto"
            src="images/leistungen/krankentransporte.jpg"
            alt="Team12"
          /> */}
          <div>
            <h3>Abrechnungen für Rettungsdienste und Krankentransporte</h3>
            <h2>Qualität ist eine Frage der Geschwindigkeit</h2>
            <p>
              Auf Rettungsdienst und Krankentransport will niemand warten. Sie
              dagegen warten ständig: Von der Leistungserbringung bis zur
              Auszahlung der Krankenkassen vergehen oft Wochen. Im
              Liquiditätsengpass droht Ihnen selbst der wirtschaftliche Notfall.
              Doch auch dem Helfer kann geholfen werden. ZAD hält Ihr Geschäft
              im Rollen.
            </p>

            <p>
              Mit ZAD werden Sie unabhängig vom Zahlungsverhalten der
              Kostenträger. Dank externer Transportscheinabrechnung erhalten Sie
              Ihre Auszahlung umgehend bei deutlich geringerem
              Verwaltungsaufwand.
            </p>

            <p>
              Denn die elektronische Archivierung Ihrer Verordnungen,
              Fahrtberichte und anderen Rechnungsunterlagen übernehmen wir gerne
              gleich mit. Natürlich inklusive Plausibilitätsprüfung,
              statistischer Auswertung und Versicherung Ihrer Belege.
            </p>

            <p>
              Im ZAD-Kunden WebPortal behalten Sie trotzdem alles unter
              Kontrolle. Das kostenlose WebPortal liefert Ihnen jederzeit einen
              vollständigen Überblick und Zugriff auf sämtliche
              Abrechnungsdaten. Statt Wühlen im Blätterwald, alles ganz einfach
              per Mausklick.
            </p>
            <div className="flex space-x-10 my-10 w-full items-stretch justify-items-stretch">
              <Link href="/kontakt" passHref>
                <Button>Jetzt Anfrage senden</Button>
              </Link>
              <Link href="/team" passHref>
                <Button>Ansprechpartner finden</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Krankentransporte;

Krankentransporte.noMainPadding = true;
