import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Main({ children, curtainOpen, navHover, pageClass, handleCurtain }) {
  const router = useRouter();

  return (
    <main
      id="main"
      className={
        "w-full bg-zad-blue-100 transition-all duration-200 relative" +
        (curtainOpen ? " open " : "") +
        (navHover ? " tease " : "") +
        (pageClass ? pageClass : "")
      }
    >
      <div className="max-w-[130em] mx-auto py-32 px-48">{children}</div>
      <img
        onMouseEnter={handleCurtain}
        onClick={handleCurtain}
        src="/images/gras3tiny.png"
        alt="Gras Rechts"
        className="gras-right hidden md:block absolute bottom-0 right-0 w-2/4 h-[100%] object-cover transition-all duration-500"
      />
      <img
        src="/images/hand.png"
        alt="Hand"
        id="hand"
        className={
          "hand hidden md:block absolute top-0 left-1/4 z-10 w-[50em] h-[28em] object-contain transition-all duration-500 opacity-0 " +
          (router.pathname == "/leistungen" ? "leistungen" : "")
        }
      />
      <img
        onMouseEnter={handleCurtain}
        onClick={handleCurtain}
        src="/images/gras3tiny.png"
        alt="Gras Links"
        className="gras-left hidden md:block absolute bottom-0 left-0 w-2/4 h-[100%] object-cover transition-all duration-500 z-20"
      />
    </main>
  );
}

export default Main;
