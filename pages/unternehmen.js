import React, { useRef, useCallback } from "react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Unternehmen() {
  const settings = {
    fade: true,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };

  return (
    <div className="mx-auto pt-3 pb-16">
      <Slider {...settings}>
        <div>
          <img
            className="drop-shadow-lg w-full  py-16 bg-white"
            src="images/unternehmen/slider/Team9.jpg"
            alt="Team9"
          />
        </div>
        <div>
          <img
            className="drop-shadow-lg w-full  py-16 bg-white"
            src="images/unternehmen/slider/Team10.jpg"
            alt="Team10"
          />
        </div>
        <div>
          <img
            className="drop-shadow-lg w-full  py-16 bg-white"
            src="images/unternehmen/slider/Team11.jpg"
            alt="Team11"
          />
        </div>
        <div>
          <img
            className="drop-shadow-lg w-full  py-16 bg-white"
            src="images/unternehmen/slider/Team12.jpg"
            alt="Team12"
          />
        </div>
        <div>
          <img
            className="drop-shadow-lg w-full  py-16 bg-white"
            src="images/unternehmen/slider/Team21.jpg"
            alt="Team21"
          />
        </div>
        <div>
          <img
            className="drop-shadow-lg w-full  py-16 bg-white"
            src="images/unternehmen/slider/Team22.jpg"
            alt="Team22"
          />
        </div>
      </Slider>
      <div className="px-[10%] lg:px-[25%] my-16">
        <h3>Rechnen Sie mit uns</h3>
        <h2>ZAD stellt sich vor</h2>
        <p>
          Als Spezialist für Abrechnungen im Gesundheitswesen bietet die
          Zentrale Abrechnungs-Dienst GmbH – kurz ZAD – ihren Kunden seit Anfang
          der 1980er Jahre ein breites Dienstleistungsspektrum.
        </p>

        <p>
          Wir erfassen, prüfen und fakturieren Ihre Leistungen, finanzieren
          sämtliche Forderungen gegenüber den Kostenträgern, übernehmen das
          Mahn- und Inkassowesen und dokumentieren alle Abrechnungsdaten in
          tagesaktuellen Statistiken, die Sie jederzeit online abrufen können.
        </p>

        <p>
          Mit über 100 Mitarbeitern betreut ZAD vor allem private Pflegedienste,
          karitative Einrichtungen, private Krankentransportunternehmen,
          Hilfsorganisationen und kommunale Träger des Rettungsdienstes, aber
          auch Ärzte und Therapeuten im gesamten Bundesgebiet.
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="button mx-auto table my-16"
          href="/pdf/ZAD-Image-Prospekt.pdf"
        >
          Unser Image-Prospekt
        </a>
      </div>
      <ParallaxBanner
        layers={[
          {
            speed: -13,
            children: (
              <video
                class="object-cover w-full drop-shadow-lg mt-40 h-[36rem]"
                lazy=""
                autoplay="true"
                playsinline=""
                muted="true"
              >
                <source type="video/mp4" src="/videos/vid_unternehmen.mp4" />
              </video>
            ),
          },
        ]}
        className="aspect-[3/1]"
      ></ParallaxBanner>
      <div className="px-[10%] lg:px-[25%] my-16">
        <h3>Schön, dass es auch einfach geht</h3>
        <h2>Unsere Philosophie – Ihr Nutzen</h2>
        <p>
          Der Gesundheitsmarkt wird immer komplizierter: Gesetzliche
          Anforderungen wandeln sich ständig, administrative Aufgaben nehmen
          immer mehr Zeit in Anspruch und das Zahlungsverhalten der Kostenträger
          birgt große Unsicherheiten für die Leistungserbringer.
        </p>

        <p>
          ZAD sieht seine Aufgabe darin, Ihre Arbeit leichter und
          wirtschaftlicher zu gestalten. Mit innovativen Abrechnungssystemen,
          aktuellen Produkten und intelligenten Online-Tools verhelfen wir
          unseren Kunden zu größerer Sicherheit und Liquidität sowie deutlich
          geringerem Verwaltungsaufwand. Unser Ziel ist es, dass Sie sich wieder
          ganz auf Ihre Kernkompetenzen und das Wohl Ihrer Patienten
          konzentrieren können.
        </p>

        <p>
          Das Handeln von ZAD ist stets auf eine Veränderung zum Besseren hin
          bedacht. Es gründet auf einem klaren Qualitäts- und Servicebekenntnis
          sowie einem Höchstmaß an individueller Betreuung. Ihr persönlicher
          Ansprechpartner berät Sie gern, welche der von uns angebotenen
          Leistungen den größten Nutzen für Sie haben.
        </p>
      </div>
    </div>
  );
}

export default Unternehmen;

Unternehmen.pageClass = " no-curtainOFF ";
Unternehmen.noMainPadding = true;
