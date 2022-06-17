import React, { useRef, useCallback } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Unternehmen() {
  const teamData = [
    {
      name: "Ulrike Niesen",
      title: "Geschäftsführung",
      phone: "05551 / 96 88-0",
      fax: "05551 / 96 88-77",
      email: "niesen@zad-northeim.de",
      image: "niesen_ulrike",
    },
    {
      name: "Irina Niesen",
      title: "Geschäftsführung",
      phone: "05551 / 96 88-0",
      fax: "05551 / 96 88-77",
      email: "iniesen@zad-northeim.de",
      image: "niesen_irina",
    },
    {
      name: "Alexander Niesen",
      title: "IT",
      phone: "05551 / 96 88-0",
      fax: "05551 / 96 88-655",
      email: "aniesen@zad-northeim.de",
      image: "niesen_alex",
    },
    {
      name: "Jörg Eichenberger",
      title: "Prokurist / Außendienst",
      phone: "05551 / 96 88-15",
      fax: "05551 / 96 88-655",
      email: "eichenberger@zad-northeim.de",
      image: "eichenberger",
    },
    {
      name: "Lars Töpperwien",
      title: "Außendienst",
      phone: "05551 / 96 88-649",
      fax: "05551 / 96 88-655",
      email: "toepperwien@zad-northeim.de",
      image: "toepperwien",
    },
    {
      name: "Norbert Schiller",
      title: "Außendienst",
      phone: "05551 / 96 88-0",
      fax: "05551 / 96 88-655",
      email: "schiller@zad-northeim.de",
      image: "schiller",
    },
    {
      name: "Maria Fuhrmann",
      title: "Pflegeabrechnung / Teamleitung 9",
      phone: "05551 / 96 88-463",
      fax: "05551 / 96 88-55",
      email: "fuhrmann@zad-northeim.de",
      image: "fuhrmann",
    },
    {
      name: "Larissa Gödecke",
      title: "Pflegeabrechnung / Teamleitung 9",
      phone: "05551 / 96 88-372",
      fax: "05551 / 96 88-55",
      email: "goedecke@zad-northeim.de",
      image: "goedecke",
    },
    {
      name: "Elke Müller",
      title: "Pflegeabrechnung / Teamleitung 10",
      phone: "05551 / 96 88-52",
      fax: "05551 / 96 88-55",
      email: "mueller@zad-northeim.de",
      image: "mueller",
    },
    {
      name: "Claudia Schwarz",
      title: "Pflegeabrechnung / Teamleitung 11",
      phone: "05551 / 96 88-42",
      fax: "05551 / 96 88-688",
      email: "schwarz@zad-northeim.de",
      image: "schwarz",
    },
    {
      name: "Birgit Elsner",
      title: "Pflegeabrechnung / Teamleitung 12",
      phone: "05551 / 96 88-21",
      fax: "05551 / 96 88-656",
      email: "elsner@zad-northeim.de",
      image: "elsner",
    },
    {
      name: "Stefanie Dobrick",
      title: "Krankentransport & Rettungsdienst / Teamleitung 21",
      phone: "05551 / 96 88-17",
      fax: "05551 / 96 88-84",
      email: "dobrick@zad-northeim.de",
      image: "dobrick",
    },
    {
      name: "Beate Knauer",
      title:
        "Krankentransport & Rettungsdienst / Teamleitung 22 / Ausbildungsleiterin",
      phone: "05551 / 96 88-23",
      fax: "05551 / 96 88-88",
      email: "knauer@zad-northeim.de",
      image: "knauer",
    },
    {
      name: "Kathrin Schuster",
      title: "Zentrale",
      phone: "05551 / 96 88-0",
      fax: "05551 / 96 88-88",
      email: "schuster@zad-northeim.de",
      image: "schuster",
    },
    {
      name: "Heike Manteufel",
      title: "Zentrale",
      phone: "05551 / 96 88-0",
      fax: "05551 / 96 88-88",
      email: "manteufel@zad-northeim.de",
      image: "manteufel",
    },
  ];

  const settings = {
    fade: true,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };

  return (
    <div className="mx-auto pt-3 pb-16">
      <Slider {...settings}>
        <div>
          <img
            className="drop-shadow-lg w-full  py-16 bg-white"
            src="images/unternehmen/slider/Team9.jpg"
            alt="Team9"
          />
        </div>
        <div>
          <img
            className="drop-shadow-lg w-full  py-16 bg-white"
            src="images/unternehmen/slider/Team10.jpg"
            alt="Team10"
          />
        </div>
        <div>
          <img
            className="drop-shadow-lg w-full  py-16 bg-white"
            src="images/unternehmen/slider/Team11.jpg"
            alt="Team11"
          />
        </div>
        <div>
          <img
            className="drop-shadow-lg w-full  py-16 bg-white"
            src="images/unternehmen/slider/Team12.jpg"
            alt="Team12"
          />
        </div>
        <div>
          <img
            className="drop-shadow-lg w-full  py-16 bg-white"
            src="images/unternehmen/slider/Team21.jpg"
            alt="Team21"
          />
        </div>
        <div>
          <img
            className="drop-shadow-lg w-full  py-16 bg-white"
            src="images/unternehmen/slider/Team22.jpg"
            alt="Team22"
          />
        </div>
      </Slider>
      <div className="px-[10%] lg:px-[20%] my-16">
        <h3>Rechnen Sie mit uns</h3>
        <h2>ZAD stellt sich vor</h2>
        <p>
          Als Spezialist für Abrechnungen im Gesundheitswesen bietet die
          Zentrale Abrechnungs-Dienst GmbH – kurz ZAD – ihren Kunden seit Anfang
          der 1980er Jahre ein breites Dienstleistungsspektrum.
        </p>

        <p>
          Wir erfassen, prüfen und fakturieren Ihre Leistungen, finanzieren
          sämtliche Forderungen gegenüber den Kostenträgern, übernehmen das
          Mahn- und Inkassowesen und dokumentieren alle Abrechnungsdaten in
          tagesaktuellen Statistiken, die Sie jederzeit online abrufen können.
        </p>

        <p>
          Mit über 100 Mitarbeitern betreut ZAD vor allem private Pflegedienste,
          karitative Einrichtungen, private Krankentransportunternehmen,
          Hilfsorganisationen und kommunale Träger des Rettungsdienstes, aber
          auch Ärzte und Therapeuten im gesamten Bundesgebiet.
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="button mx-auto table my-16"
          href="/pdf/ZAD-Image-Prospekt.pdf"
        >
          Unser Image-Prospekt
        </a>
      </div>
      <img
        className={`drop-shadow-lg w-full my-24`}
        src="images/unternehmen/frau_telefon.jpg"
        alt="Team12"
      />
      <div className="px-[10%] lg:px-[20%] my-16">
        <h3>Schön, dass es auch einfach geht</h3>
        <h2>Unsere Philosophie – Ihr Nutzen</h2>
        <p>
          Der Gesundheitsmarkt wird immer komplizierter: Gesetzliche
          Anforderungen wandeln sich ständig, administrative Aufgaben nehmen
          immer mehr Zeit in Anspruch und das Zahlungsverhalten der Kostenträger
          birgt große Unsicherheiten für die Leistungserbringer.
        </p>

        <p>
          ZAD sieht seine Aufgabe darin, Ihre Arbeit leichter und
          wirtschaftlicher zu gestalten. Mit innovativen Abrechnungssystemen,
          aktuellen Produkten und intelligenten Online-Tools verhelfen wir
          unseren Kunden zu größerer Sicherheit und Liquidität sowie deutlich
          geringerem Verwaltungsaufwand. Unser Ziel ist es, dass Sie sich wieder
          ganz auf Ihre Kernkompetenzen und das Wohl Ihrer Patienten
          konzentrieren können.
        </p>

        <p>
          Das Handeln von ZAD ist stets auf eine Veränderung zum Besseren hin
          bedacht. Es gründet auf einem klaren Qualitäts- und Servicebekenntnis
          sowie einem Höchstmaß an individueller Betreuung. Ihr persönlicher
          Ansprechpartner berät Sie gern, welche der von uns angebotenen
          Leistungen den größten Nutzen für Sie haben.
        </p>
      </div>
    </div>
  );
}

export default Unternehmen;

Unternehmen.pageClass = " no-curtainOFF ";
Unternehmen.noMainPadding = true;
