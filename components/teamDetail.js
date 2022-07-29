import React, { useState } from "react";
import { useInView, InView } from "react-intersection-observer";
import Image from "next/image";

function Team({ person, index, kontakt = false }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <InView triggerOnce delay={500} threshold={0.1}>
      {({ inView, ref, entry }) => (
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          ref={ref}
          className={`w-[65%] md:w-[40%] xl:w-[25%] flex flex-col ${
            !kontakt ? " text-white " : " text-zad-blue-600 "
          } text-center team-box  ${index} ${
            inView ? "opacity-100 animate-in zoom-in duration-500" : "opacity-0"
          }`}
        >
          <div className="relative">
            <div className="absolute">
              <Image
                className="rounded-full "
                src={"/images/unternehmen/team/" + person.image + ".jpg"}
                alt="Niesen"
                width={400}
                height={400}
                style={isHover ? { opacity: 0 } : { opacity: 1 }}
                loading={"eager"}
              />
            </div>
            <div className="relative">
              <Image
                className="rounded-full "
                src={"/images/unternehmen/team/" + person.imageHover + ".jpg"}
                alt="Niesen"
                width={400}
                height={400}
                style={isHover ? { opacity: 1 } : { opacity: 0 }}
              />
            </div>
          </div>
          <span className=" text-bold text-xl mt-4">{person.name}</span>
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
