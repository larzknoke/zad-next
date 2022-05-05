import React from "react";

function Main({ children, curtainOpen }) {
  return (
    <main
      id="main"
      className={
        "w-full bg-zad-blue-100 transition-all duration-200 relative" +
        (curtainOpen ? " open" : "")
      }
    >
      <div className="max-w-[130em] mx-auto p-32">{children}</div>
      <img
        src="/images/gras3tiny.png"
        alt="Gras"
        className="gras-left hidden md:block absolute bottom-0 left-0 w-2/4 h-[90%] object-cover transition-all duration-500"
      />
      <img
        src="/images/gras3tiny.png"
        alt="Gras"
        className="gras-right hidden md:block absolute bottom-0 right-0 w-2/4 h-[90%] object-cover transition-all duration-500"
      />
    </main>
  );
}

export default Main;
