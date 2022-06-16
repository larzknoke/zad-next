import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Main({
  children,
  curtainOpen,
  navHover,
  pageClass,
  handleCurtain,
  noMainPadding,
}) {
  const router = useRouter();
  const [tease, setTease] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTease(true);
    }, 1000);
  }, []);

  return (
    <main
      id="main"
      className={
        "w-full bg-zad-blue-100 transition-all duration-200 relative" +
        (curtainOpen ? " open " : "") +
        (navHover || tease ? " tease " : "") +
        (pageClass ? pageClass : "")
      }
    >
      <div
        className={`max-w-[130em] mx-auto ${
          noMainPadding
            ? ""
            : "px-16 py-16 md:px-28 md:py-24 xl:px-48 xl:py-32 "
        } `}
      >
        {children}
      </div>
      <img
        onMouseEnter={handleCurtain}
        onClick={handleCurtain}
        src="/images/grasBig.webp"
        alt="Gras Rechts"
        className="gras-right hidden md:block absolute bottom-0 right-0 w-2/4 h-[100%] object-coverOFF transition-all duration-500"
      />
      <img
        src="/images/hand2.png"
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
        src="/images/grasBig.webp"
        alt="Gras Links"
        className="gras-left hidden md:block absolute bottom-0 left-0 w-2/4 h-[100%] object-coverOFF transition-all duration-500 z-20"
      />
    </main>
  );
}

export default Main;
