import React, { useState } from "react";
import { useInView, InView } from "react-intersection-observer";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

function Team({ person, index, kontakt = false }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`w-[65%] md:w-[40%] xl:w-[25%] flex flex-col ${
        !kontakt ? " text-white " : " text-zad-blue-600 "
      } text-center team-box  ${index}`}
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
      <a className=" mt-4" href={`tel:${person.phone}`}>
        Tel.: {person.phone}
      </a>
      <span>Fax: {person.fax}</span>
      <a href={"mailto:" + person.email}>{person.email}</a>
    </motion.div>
  );
}

export default Team;
