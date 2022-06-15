import React, { useRef, useCallback } from "react";
import TeamDetail from "../components/teamDetail";
import teamData from "../components/teamData";

function Unternehmen() {
  return (
    <div className="mx-auto pb-16">
      {/* <img
        className="drop-shadow-lg w-full  py-16 bg-white"
        src="images/unternehmen/slider/Team12.jpg"
        alt="Team12"
      /> */}
      <div className="px-[15%] mb-16 bg-zad-blue-600 text-white drop-shadow-lg p-20">
        <h3 className="text-white">Unser Team</h3>
        <h2 className="text-white">
          Für Sie haben wir immer einen Mitarbeiter (Experten / Ansprechpartner)
        </h2>
        <p className="text-white">
          ZAD hat heute mehr als 100 Mitarbeiter. Einer davon wird Ihre Wünsche
          besonders persönlich nehmen: Ihr Ansprechpartner. Seine individuelle
          Betreuung garantiert Ihnen ein Höchstmaß an Sicherheit in allen
          Belangen rund um die Leistungsabrechnung im Gesundheitswesen.
        </p>
        <h2 className="team-header">Gechäftsführung</h2>
        <div className="team-detail">
          {teamData.geschaeftsfuehrung.map((person, i) => {
            return <TeamDetail person={person} key={person.email} index={i} />;
          })}
        </div>
        <h2 className="team-header">Teamleitung</h2>
        <div className="team-detail">
          {teamData.teamleitung.map((person, i) => {
            return <TeamDetail person={person} key={person.email} index={i} />;
          })}
        </div>
        <h2 className="team-header">Stellv. Teamleitung</h2>
        <div className="team-detail">
          {teamData.teamleitung_stell.map((person, i) => {
            return <TeamDetail person={person} key={person.email} index={i} />;
          })}
        </div>
        <h2 className="team-header">Vertrieb</h2>
        <div className="team-detail">
          {teamData.vertrieb.map((person, i) => {
            return <TeamDetail person={person} key={person.email} index={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Unternehmen;

Unternehmen.pageClass = " no-curtainOFF ";
Unternehmen.noMainPadding = true;
