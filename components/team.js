import React from "react";

function Team({ person }) {
  return (
    <div className="flex flex-col space-x-5 text-white text-center animate-in zoom-in">
      <img
        className="rounded-full mb-4"
        src={"images/unternehmen/team/" + person.image + ".jpg"}
        alt="Niesen"
      />
      <span className="text-white text-bold text-xl">{person.name}</span>
      <span className="text-zad-blue-300">{person.title}</span>
      <span className="text-white mt-4">{person.phone}</span>
      <span className="text-white">{person.fax}</span>
      <a href={"mailto:" + person.email} className="text-white">
        {person.email}
      </a>
    </div>
  );
}

export default Team;
