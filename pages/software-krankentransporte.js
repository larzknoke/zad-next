import React from "react";
import Sidenav from "../components/sidenav";
import Button from "../components/button";
import Link from "next/link";
import Image from "next/image";

function Software() {
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
        <source type="video/mp4" src="/videos/software_kranken.mp4" />
      </video>

      <div className="mx-auto flex flex-col lg:flex-row py-12 md:py-24 md:px-28 px-8 lg:px-24 xl:px-48 xl:py-32 lg:space-x-24 space-y-12 md:space-y-16 lg:space-y-0">
        <div className="lg:space-y-8 gap-y-4 md:gap-y-0 flex flex-row lg:flex-col justify-between md:justify-evenly lg:justify-start flex-wrap">
          <Sidenav />
        </div>
        <div>
          <img
            className="w-full drop-shadow px-4 md:px-10 lg:px-24"
            src="images/leistungen/krankentransporte.svg"
            alt="Krankentransporte"
          />
          <div className="my-16">
            <div className="hidden md:flex flex-col w-1/3 ml-6 mb-6 gap-6 md:ml-16 md:mb-8 md:gap-8 float-right">
              <Image
                src="/images/start/mann.jpg"
                className=" object-cover rounded "
                width={700}
                height={500}
                objectFit="cover"
              />
              <Image
                src="/images/leistungen/server.jpg"
                className=" object-cover rounded "
                width={700}
                height={500}
                objectFit="cover"
              />
            </div>
            <h3>Dispolive</h3>
            <h2>
              Die Software für Krankentransporte – Lösungen für Ihre
              Anforderungen
            </h2>
            <p>
              Als privater oder öffentlicher Anbieter von Krankentransporten
              bewegen Sie sich im Gesundheitswesen in einer Branche, die von
              stetigen Veränderungen in allen Bereichen geprägt ist. Die
              Nachfrage nach immer differenzierten Leistungen steigt, die Kosten
              nehmen zu und qualifiziertes Personal ist knapp. Umso wichtiger
              ist es, die eigenen Abläufe so zeiteffizient und wirtschaftlich
              wie möglich zu gestalten und den Anschluss an die Möglichkeiten
              digitaler Unterstützung nicht zu verlieren.
            </p>
            <h4>Disposition und Abrechnung vereinfachen</h4>
            <p>
              dispolive von ZADtools wurde konzipiert, um Ihren Dispositions-
              und Abrechnungsaufwand zu minimieren. Die anwenderfreundliche
              Software reduziert den Zeitbedarf für die Erstellung von
              Einsatzplänen, die dazugehörige Informationsübermittlung und die
              unvermeidliche Dokumentation deutlich. Die intelligente
              Disposition macht Ihre Fahraufträge planbar, effektiv und
              wirtschaftlich. Alle kundenspezifischen Daten, Standorte und
              Verfügbarkeiten werden präzise an den beauftragten Fahrer
              übermittelt. So kann sich Ihr Team wieder voll auf das
              konzentrieren, was wirklich zählt. Das Wohl seiner Fahrgäste.{" "}
            </p>
            <h4>Entwickelt für die Praxis</h4>
            <p>
              Praxisnah, übersichtlich, einfach und schnell – diese zentralen
              Anforderungen setzt die dispolive-Software konsequent um, damit
              Sie die Aufträge Ihres Unternehmens schnell und unkompliziert
              erfassen, disponieren und die nötige Abrechnung durchführen
              können.
            </p>
            <p>
              Auch die Ergebnisse einer ZADtools-Kundenumfrage zu den
              Eigenschaften von dispolive, die von Anwendern in der Branche
              besonders geschätzt werden, lassen keine Zweifel an den Vorteilen
              der Software. „Die klare, übersichtliche Struktur.“ „Die einfache
              Bedienung.“ „Die zeitsparende Handhabung.“ „Die Erreichbarkeit von
              überall her.“ „Die schnelle Reaktionsszeit.“ Aussagen wie diese
              belegen, dass die Software dem Praxistest mehr als standhält.
            </p>
            <h4>Vorteile in allen Bereichen</h4>
            <p>
              Als Online-Instrument zur Disposition und Abrechnung für alle
              Krankentransportunternehmen und Patientenfahrdienste bietet Ihnen
              dispolive nämlich genau die Anwendungen, die Sie für Ihre
              Krankentransporte und -beförderungen sowie Kranken- und
              Patientenfahrten benötigen.
            </p>
            <ul className="text-zad-blue-600 list-disc list-outside mb-8 ml-4">
              <li>Einfache und flexible Erstellung von KTW-Einsatzplänen</li>
              <li>
                Echtzeit-Kommunikation zwischen Leitstelle und Fahrzeugen
                inklusive vollelektronischer Auftragsübermittlung und
                Fahrzeugverfolgung
              </li>
              <li>
                Erfassung, Disposition, Abrechnung und Kontrolle von
                Krankentransporten für Kassen- und Privatpatienten{" "}
              </li>
              <li>
                Echtzeit-Überblick über sämtliche Kunden-, Auftrags- und
                Leistungsdaten
              </li>
              <li>
                Kompatibel mit den Schnittstellen aller Abrechnungszentren{" "}
              </li>
              <li>
                Möglichkeit zur elektronischen Selbstabrechnung durch den
                Leistungserbringer.{" "}
              </li>
              <li>
                Mobile Anbindung über ein Tablet oder Smartphone – alle
                Leistungsdaten für eine direkte Übermittlung an den
                Abrechnungsdienstleister können vor Ort durchgeführt werden.{" "}
              </li>
            </ul>
            <p>
              Die Konzentration auf die wichtigen Funktionen erlaubt eine
              intuitive Bedienung, die durch die Automatisierung zahlreicher
              Abläufe unterstützt wird. Darüber hinaus ist dispolive auch
              unabhängig von ZAD vollständig nutzbar. Sie müssen kein ZAD-Kunde
              sein, um Ihre Leistungen über dispolive abzurechnen.{" "}
            </p>
          </div>
          <div className="flex flex-col my-10 w-full items-stretch justify-items-stretch space-y-8">
            <img
              className="pt-8 max-w-sm w-2/4 self-center"
              src="images/dispo.svg"
              alt="disolive Logo"
            />
            <Button href="https://www.zadtools.de" className="max-w-lg mx-auto">
              <span className="hidden md:inline-block">
                Direkt zur webbasierten
              </span>{" "}
              Software für den Krankentransport
            </Button>
            {/* <div className="flex flex-col lg:flex-row lg:space-x-10 space-y-8 lg:space-y-0 my-10 w-full items-stretch justify-items-stretch justify-center">
              <Button href="/kontakt">Jetzt Anfrage senden</Button>
              <Button href="/team">Ansprechpartner finden</Button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Software;

Software.noMainPadding = true;
