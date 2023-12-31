import Link from "next/link";
import React from "react";

function Impressum() {
  return (
    <div className="lg:pr-64 datenschutz">
      <h1>Hinweisgeber-Meldestelle</h1>
      <p>
        Herzlich willkommen zur Hinweisgeberstelle der ZAD Zentraler
        Abrechnungs-Dienst GmbH.
      </p>
      <p>
        Sie können uns eine Mail an die Adresse{" "}
        <Link href="mailto:hinweisgeber@zad-northeim.de">
          <a
            style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}
          >
            hinweisgeber@zad-northeim.de
          </a>
        </Link>
      </p>
      <p>
        senden. Sie können sich für Ihre Meldung Ihren eigenen, geschützten
        Postkasten bei einem Dienst wie z.B. ProtonMail, der keinen Rückschluss
        auf Ihre Identität erlaubt, einrichten.{" "}
      </p>
      <p>
        Wir behandeln Ihre Informationen streng vertraulich. Dies gilt
        insbesondere auch für Ihre Kontaktdaten.
      </p>
      <p>
        Sie erhalten von uns per Mail Rückmeldungen, können bei Bedarf Fragen
        beantworten und werden über den Fortgang Ihres Hinweises informiert. Sie
        erhalten Antworten ohne, dass Sie dort identifiziert werden können. Im
        Rahmen dieser Kommunikation entscheiden Sie über die weitere Art der
        Kommunikation, hier sind auch vertrauliche persönliche Treffen mit
        unserer Ombudsperson möglich. Es besteht ebenfalls die Möglichkeit
        verschlüsselt zu kommunizieren, bitte teilen Sie uns ebenfalls mit, wenn
        Sie dies wünschen.
      </p>
      <p>
        <strong>Hinweis zu Ihrer Meldung:</strong>
        <br /> Bitte beschreiben Sie den zu meldenden Vorfall so genau wie
        möglich (Was, Wer, Wann, Häufigkeit) und nennen Sie weitestgehend nur
        Tatsachen. Sofern Sie eine Vermutung kundtun möchten, kennzeichnen Sie
        diese bitte ausdrücklich als Vermutung.
      </p>
      <p>
        <strong>Datenschutzhinweise Allgemein:</strong>
        <br />
        <Link href={"/datenschutz"}>
          <a
            style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}
          >
            Datenschutzerklärung
          </a>
        </Link>
      </p>
      <p>
        <strong>Datenschutzhinweise für Hinweisgeber-Meldestelle:</strong>
        <br />
        <Link href={"pdf/Datenschutzhinweise_fuer_das_Hinweisgebersystem.pdf"}>
          <a
            style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Datenschutzerklärung
          </a>
        </Link>
      </p>
    </div>
  );
}

export default Impressum;

Impressum.pageClass = "no-curtain";
