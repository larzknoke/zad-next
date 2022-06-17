import React, { useState } from "react";
import { useInView, InView } from "react-intersection-observer";

function Team({ person, index }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <InView triggerOnce delay={500} threshold={0.1}>
      {({ inView, ref, entry }) => (
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          ref={ref}
          className={`w-[80%] md:w-[45%] xl:w-[25%] flex flex-col space-x-5 text-white text-center team-box opacity-0 ${index} ${
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
          <span className="text-white text-bold text-xl">{person.name}</span>
          <span className="text-zad-blue-300">{person.title}</span>
          <span className="text-white mt-4">{person.phone}</span>
          <span className="text-white">{person.fax}</span>
          <a href={"mailto:" + person.email} className="text-white">
            {person.email}
          </a>
        </div>
      )}
    </InView>
  );
}

export default Team;
