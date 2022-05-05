import React from "react";

function Leistungen() {
  return (
    <div className="space-x-24 flex mx-auto justify-center text-center  ">
      <a href="/leistung-heilberufe" className="leistungen-horizontal">
        <div className="leistungen-icon-horizontal">
          <i className="fa-solid fa-truck-medical text-6xl" />
        </div>
        <span className="font-bold">Krankentransporte</span>
      </a>
      <a href="/leistung-heilberufe" className="leistungen-horizontal">
        <div className="leistungen-icon-horizontal">
          <i className="fa-solid fa-hand-paper text-6xl" />
        </div>
        <span className="font-bold">Pflegedienste</span>
      </a>
      <a href="/leistung-heilberufe" className="leistungen-horizontal">
        <div className="leistungen-icon-horizontal">
          <i className="fas fa-heartbeat text-6xl" />
        </div>
        <span className="font-bold">Heilberufe</span>
      </a>
      <a href="/leistung-heilberufe" className="leistungen-horizontal">
        <div className="leistungen-icon-horizontal">
          <i className="fas fa-laptop-medical text-6xl" />
        </div>
        <span className="font-bold">Softwarelösungen</span>
      </a>
    </div>
  );
}

export default Leistungen;
