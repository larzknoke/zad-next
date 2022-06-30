import React, { useState } from "react";
import { useInView, InView } from "react-intersection-observer";

function Team({ person, index, kontakt = false }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <InView triggerOnce delay={500} threshold={0.1}>
      {({ inView, ref, entry }) => (
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          ref={ref}
          className={`w-[80%] md:w-[45%] xl:w-[25%] flex flex-col ${
            !kontakt ? " text-white " : " text-zad-blue-600 "
          } text-center team-box opacity-0 ${index} ${
            inView ? "opacity-100 animate-in zoom-in duration-500" : ""
          }`}
        >
          <img
            className="rounded-full mb-4"
            src={
              "images/unternehmen/team/" +
              (isHover ? person.imageHover : person.image) +
              ".jpg"
            }
            alt="Niesen"
          />
          <span className=" text-bold text-xl">{person.name}</span>
          <span className="text-zad-blue-300">{person.title}</span>
          <span className=" mt-4">Tel.: {person.phone}</span>
          <span>Fax: {person.fax}</span>
          <a href={"mailto:" + person.email}>{person.email}</a>
        </div>
      )}
    </InView>
  );
}

export default Team;
