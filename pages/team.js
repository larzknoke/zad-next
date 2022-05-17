import React, { useRef, useCallback } from "react";
import TeamDetail from "../components/teamDetail";
import { useInView, InView } from "react-intersection-observer";

function Unternehmen() {
  const teamData = [
    {
      name: "Ulrike Niesen",
      title: "Geschäftsführung",
      phone: "05551 / 96 88-0",
      fax: "05551 / 96 88-77",
      email: "ulrike.niesen@zad-northeim.de",
      image: "niesen_ulrike",
      imageHover: "niesen_ulrike",
    },
    {
      name: "Irina Niesen",
      title: "Geschäftsführung",
      phone: "05551 / 96 88-0",
      fax: "05551 / 96 88-77",
      email: "irina.niesen@zad-northeim.de",
      image: "niesen_irina",
      imageHover: "niesen_irina",
    },
    {
      name: "Alexander Niesen",
      title: "IT",
      phone: "05551 / 96 88-0",
      fax: "05551 / 96 88-655",
      email: "alexander.niesen@zad-northeim.de",
      image: "aniesen_1",
      imageHover: "aniesen_2",
    },
    {
      name: "Jörg Eichenberger",
      title: "Prokurist / Außendienst",
      phone: "05551 / 96 88-15",
      fax: "05551 / 96 88-655",
      email: "joerg.eichenberger@zad-northeim.de",
      image: "eichenberger_1",
      imageHover: "eichenberger_2",
    },
    {
      name: "Lars Töpperwien",
      title: "Außendienst",
      phone: "05551 / 96 88-649",
      fax: "05551 / 96 88-655",
      email: "lars.toepperwien@zad-northeim.de",
      image: "toepperwien_1",
      imageHover: "toepperwien_2",
    },
    {
      name: "Norbert Schiller",
      title: "Außendienst",
      phone: "05551 / 96 88-0",
      fax: "05551 / 96 88-655",
      email: "norbert.schiller@zad-northeim.de",
      image: "schiller_1",
      imageHover: "schiller_2",
    },
    {
      name: "Maria Fuhrmann",
      title: "Pflegeabrechnung / Teamleitung 9",
      phone: "05551 / 96 88-463",
      fax: "05551 / 96 88-55",
      email: "maria.fuhrmann@zad-northeim.de",
      image: "fuhrmann",
      imageHover: "fuhrmann",
    },
    {
      name: "Larissa Gödecke",
      title: "Pflegeabrechnung / Teamleitung 9",
      phone: "05551 / 96 88-372",
      fax: "05551 / 96 88-55",
      email: "larissa.goedecke@zad-northeim.de",
      image: "goedecke",
      imageHover: "goedecke",
    },
    {
      name: "Elke Müller",
      title: "Pflegeabrechnung / Teamleitung 10",
      phone: "05551 / 96 88-52",
      fax: "05551 / 96 88-55",
      email: "elke.mueller@zad-northeim.de",
      image: "mueller",
      imageHover: "mueller",
    },
    {
      name: "Claudia Schwarz",
      title: "Pflegeabrechnung / Teamleitung 11",
      phone: "05551 / 96 88-42",
      fax: "05551 / 96 88-688",
      email: "claudia.schwarz@zad-northeim.de",
      image: "schwarz",
      imageHover: "schwarz",
    },
    {
      name: "Birgit Elsner",
      title: "Pflegeabrechnung / Teamleitung 12",
      phone: "05551 / 96 88-21",
      fax: "05551 / 96 88-656",
      email: "birgit.elsner@zad-northeim.de",
      image: "elsner",
      imageHover: "elsner",
    },
    {
      name: "Stefanie Dobrick",
      title: "Krankentransport & Rettungsdienst / Teamleitung 21",
      phone: "05551 / 96 88-17",
      fax: "05551 / 96 88-84",
      email: "stefanie.dobrick@zad-northeim.de",
      image: "dobrick",
      imageHover: "dobrick",
    },
    {
      name: "Beate Knauer",
      title:
        "Krankentransport & Rettungsdienst / Teamleitung 22 / Ausbildungsleiterin",
      phone: "05551 / 96 88-23",
      fax: "05551 / 96 88-88",
      email: "beate.knauer@zad-northeim.de",
      image: "knauer",
      imageHover: "knauer",
    },
    {
      name: "Kathrin Schuster",
      title: "Zentrale",
      phone: "05551 / 96 88-0",
      fax: "05551 / 96 88-88",
      email: "kathrin.schuster@zad-northeim.de",
      image: "schuster",
      imageHover: "schuster",
    },
    {
      name: "Heike Manteufel",
      title: "Zentrale",
      phone: "05551 / 96 88-0",
      fax: "05551 / 96 88-88",
      email: "heike.manteufel@zad-northeim.de",
      image: "manteufel",
      imageHover: "manteufel",
    },
  ];

  return (
    <div className="mx-auto pt-3 pb-16">
      <img
        className="drop-shadow-lg w-full  py-16 bg-white"
        src="images/unternehmen/slider/Team12.jpg"
        alt="Team12"
      />
      <div className="px-[20%] mb-16 bg-zad-blue-600 text-white drop-shadow-lg p-20">
        <h3 className="text-white">Unser Team</h3>
        <h2 className="text-white">
          Für Sie haben wir immer einen Mitarbeiter
        </h2>
        <p className="text-white">
          ZAD hat heute mehr als 100 Mitarbeiter. Einer davon wird Ihre Wünsche
          besonders persönlich nehmen: Ihr Ansprechpartner. Seine individuelle
          Betreuung garantiert Ihnen ein Höchstmaß an Sicherheit in allen
          Belangen rund um die Leistungsabrechnung im Gesundheitswesen.
        </p>
        <div className="grid xl:gap-x-36 xl:gap-y-32 lg:gap-x-32 gap-16 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 my-32">
          {teamData.map((person, i) => {
            return <TeamDetail person={person} key={person.email} index={i} />;
          })}
        </div>
      </div>
      <img
        src="images/unternehmen/bilden_aus.png"
        alt="Bilden aus"
        className="bg-white p-4 rounded table mx-auto drop-shadow-md"
      />
    </div>
  );
}

export default Unternehmen;

Unternehmen.pageClass = " no-curtainOFF ";
Unternehmen.noMainPadding = true;
