import React from "react";
import Sidenav from "../components/sidenav";
import Button from "../components/button";
import Link from "next/link";

function Software() {
  return (
    <div className="mx-auto flex">
      <div className="basis-1/4 space-y-8">
        <Sidenav />
      </div>
      <div className="px-48">
        <img
          className="w-full drop-shadow"
          src="images/leistungen/krankentransporte.svg"
          alt="Krankentransporte"
        />
        <div className=" my-16">
          <h3>Dispolive</h3>
          <h2>
            Die Software für Krankentransporte – Lösungen für Ihre Anforderungen
          </h2>
          <p>
            Als privater oder öffentlicher Anbieter von Krankentransporten
            bewegen Sie sich im Gesundheitswesen in einer Branche, die von
            stetigen Veränderungen in allen Bereichen geprägt ist. Die Nachfrage
            nach immer differenzierten Leistungen steigt, die Kosten nehmen zu
            und qualifiziertes Personal ist knapp. Umso wichtiger ist es, die
            eigenen Abläufe so zeiteffizient und wirtschaftlich wie möglich zu
            gestalten und den Anschluss an die Möglichkeiten digitaler
            Unterstützung nicht zu verlieren.
          </p>
          <h4>Disposition und Abrechnung vereinfachen</h4>
          <p>
            dispolive von ZADtools wurde konzipiert, um Ihren Dispositions- und
            Abrechnungsaufwand zu minimieren. Die anwenderfreundliche Software
            reduziert den Zeitbedarf für die Erstellung von Einsatzplänen, die
            dazugehörige Informationsübermittlung und die unvermeidliche
            Dokumentation deutlich. Die intelligente Disposition macht Ihre
            Fahraufträge planbar, effektiv und wirtschaftlich. Alle
            kundenspezifischen Daten, Standorte und Verfügbarkeiten werden
            präzise an den beauftragten Fahrer übermittelt. So kann sich Ihr
            Team wieder voll auf das konzentrieren, was wirklich zählt. Das Wohl
            seiner Fahrgäste.{" "}
          </p>
          <h4>Entwickelt für die Praxis</h4>
          <p>
            Praxisnah, übersichtlich, einfach und schnell – diese zentralen
            Anforderungen setzt die dispolive-Software konsequent um, damit Sie
            die Aufträge Ihres Unternehmens schnell und unkompliziert erfassen,
            disponieren und die nötige Abrechnung durchführen können.
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
          <ul className="text-zad-blue-600 list-disc list-outside mb-8">
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
            <li>Kompatibel mit den Schnittstellen aller Abrechnungszentren </li>
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
          <p>
            Möchten Sie dispolive testen? Sprechen Sie uns an. Wir stellen Ihnen
            gern ein kostenfreies Testgerät zur Verfügung
          </p>
        </div>
        <div className="flex flex-col my-10 w-full items-stretch justify-items-stretch px-20 space-y-6">
          <img
            className="pt-8 w-2/4 self-center"
            src="images/dispo.svg"
            alt="disolive Logo"
          />
          <Link href="/kontakt" passHref>
            <Button>
              Direkt zur webbasierten Software für den Krankentransport
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Software;
