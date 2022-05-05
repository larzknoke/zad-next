import React from "react";

function Curtain() {
  return (
    // <div className="curtain ">
    <img
      src="/images/gras3tiny.png"
      alt="Gras"
      className="gras-left hidden md:block absolute bottom-0 left-0 w-2/4 h-[60%] object-cover transition-all duration-500 -translate-x-12"
    />
    //   <img
    //     src="/images/hand.png"
    //     alt="Gras"
    //     className="hand hidden md:block absolute bottom-0 left-1/4 w-2/4 h-2/6 object-contain transition-all duration-500 opacity-100 translate-x-16"
    //   />
    //   <img
    //     src="/images/gras3tiny.png"
    //     alt="Gras"
    //     className="gras-right hidden md:block absolute bottom-0 right-0 w-2/4 h-[60%] object-cover transition-all duration-500"
    //   />
    // </div>
  );
}

export default Curtain;
