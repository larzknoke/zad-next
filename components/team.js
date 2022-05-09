import React from "react";

function Team() {
  return (
    <div className="flex flex-col space-x-5 text-white text-center ">
      <img
        className="rounded-full mb-4"
        src="images/unternehmen/team/niesen.jpg"
        alt="Niesen"
      />
      <span className="text-white text-bold text-xl">Ulrike Niesen</span>
      <span className="text-zad-blue-300">Geschäftsführung</span>
      <span className="text-white mt-4">Tel.: 05551 / 96 88-0</span>
      <span className="text-white">Fax: 05551 / 96 88-77</span>
    </div>
  );
}

export default Team;
