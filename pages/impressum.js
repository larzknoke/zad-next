import React from "react";

function Impressum() {
  return (
    <div className="lg:pr-64 datenschutz">
      <h1>Impressum</h1>
      <p>
        <strong>ZAD Zentraler Abrechnungs-Dienst GmbH</strong>
        <br />
        Ottilienstr. 10
        <br />
        37154 Northeim
      </p>
      <p>
        Telefon: +49 5551 9688-0
        <br />
        Fax: +49 5551 9688-88
        <br />
        E-Mail:
        <a href="mailto: info@zad-northeim.de">info@zad-northeim.de</a>
        <br />
        Internet: <a href="http://www.zad-northeim.de">www.zad-northeim.de</a>
      </p>
      <p>
        <strong>Geschäftsführung:</strong>
        <br />
        Irina Niesen
        <br />
        Alexander Niesen
      </p>
      <p>
        Handelsregister: Amtsgericht Göttingen
        <br />
        Registernummer: HRB 130113
      </p>
      <p>USt-IDNr.: DE 116203810</p>
      <p>
        <strong>Zugelassener Finanzdienstleister</strong>
        <br />
        Zulassungs- und Aufsichtsbehörde:
        <br />
        Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin)
        <br />
        Graurheindorfer Str. 108
        <br />
        53117 Bonn
      </p>
      <p>BaFin Registrierungs-Nr.: 122330</p>
      <p>
        <strong>Zugelassenes Inkassounternehmen</strong>
        <br />
        Inkassoerlaubnis- und Registrierungsbehörde:
        <br />
        Landgericht Göttingen
        <br />
        Berliner Str. 8<br />
        37073 Göttingen
      </p>
      <p>
        <strong>Inkassoaufsichtsbehörde:</strong>
        <br />
        Bundesamt für Justiz Rechtsdienstleistungsregister <br />
        Adenauerallee 99 – 103 <br />
        53113 Bonn
      </p>
      <p>
        Eingetragen im Rechtsdienstleistungsregister des Landgerichts Göttingen
        im Bereich Inkassodienstleistungen: Aktenzeichen: 3712 Northeim ZAD
      </p>
      <p>
        <strong>Inhaltlich Verantwortlich:</strong>
        <br />
        Irina Niesen
        <br />
        ZAD Zentraler Abrechnungs-Dienst GmbH
        <br />
        Ottilienstr. 10
        <br />
        37154 Northeim
      </p>
    </div>
  );
}

export default Impressum;

Impressum.pageClass = "no-curtain";
