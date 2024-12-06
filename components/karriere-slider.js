import React from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function KarriereSlider({ sorte = "karrie" }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
  };

  const sliderData = {
    karrie: [
      {
        img: "lt",
        name: "Lars Töpperwien",
        text: "Nach einer mehrmonatigen Praktikumsphase im gesamten ZAD bin ich bis heute im Vertrieb. Hier konnte ich mich persönlich entwickeln und auch immer produktiv Projekte und mein Arbeitsumfeld mitgestalten.",
      },
      {
        img: "mw",
        name: "Matthias Wicke",
        text: "Zu meinen Highlights gehört die Möglichkeit aktiv an Prozessen und Strategien mitzuarbeiten sowie an der gesamten Weiterentwicklung des ZAD mitwirken zu können.",
      },
      {
        img: "js",
        name: "Judith Schild",
        text: "Man unterstützt sich gegenseitig bei der ZAD und wenn man Fragen hat, werden diese freundlich beantwortet und wenn jemand Hilfe braucht, bekommt er diese auch und jeder unterstützt jeden.",
      },
    ],
    sach: [
      {
        img: "lw",
        name: "Lea Wasmsus",
        text: "Nach meiner Ausbildung habe ich eigene Mandaten bekommen, die ich betreue und fülle somit die Rolle als Sachbearbeiterin voll aus. Inzwischen habe ich mich als psychologischer Businesscoach weitergebildet und betreue seit Kurzem ein eigenes Team.",
      },
      {
        img: "jk",
        name: "Jana Köppelmann",
        text: " Ich konnte mich sehr gut beim ZAD persönlich weiterentwickeln und dafür bin ich auch sehr dankbar. Man lernt auch immer etwas Neues dazu.",
      },
      {
        img: "sz",
        name: "Simone Zahel",
        text: "Ich bin sehr gerne Teil dieses kleinen Teams. Im Team können wir uns selbst organisieren und unsere Prozesse großteils selbst gestalten. Dies gefällt mir sehr, da ich es mag meine Ideen einzubringen und an der Entwicklung des ZAD mitzuwirken.",
      },
    ],
    buero: [
      {
        img: "mn",
        name: "Mojgan Naseri",
        text: "Ich wurde beim ZAD gut aufgenommen und fühle mich hier sehr wohl. Mir macht meine Arbeit hier Spaß.",
      },
      {
        img: "os",
        name: "Olga Saevich",
        text: "Die Kollegen sind immer verständnisvoll wenn es einen Notfall oder Krankheit in der Familie gibt, mit der flexiblen Arbeitszeit lässt sich der Arbeitstag gut  mit der Familie und Hobbys bewerkstelligen.",
      },
      {
        img: "un",
        name: "Ute Nowak",
        text: "Die Arbeit im Team macht Spaß und wir können uns alle aufeinander verlassen. Highlights gibt es viele, die netten Kollegen, familiäre Atmosphäre, wenn man Hilfe braucht, bekommt man sie und mein Hund Ruby ist Bürohund geworden.",
      },
    ],
    it: [
      {
        img: "mw",
        name: "Matthias Wicke",
        text: "Zu meinen Highlights gehört die Möglichkeit aktiv an Prozessen und Strategien mitzuarbeiten sowie an der gesamten Weiterentwicklung des ZAD mitwirken zu können.",
      },
      {
        img: "az",
        name: "Andrea Zahel",
        text: "In unserem Team gehen wir sehr fair, ehrlich und rücksichtsvoll miteinander um, sprechen uns ab und ergänzen uns in den verschiedenen Bereichen. So macht das Arbeiten Spaß. Einer für alle, alle für einen.",
      },
      {
        img: "mb",
        name: "Marvin Behling",
        text: "Der Tag startet immer mit Kaffee und einem Stand-Up im Team, bei dem der anstehende Tag besprochen wird. Viel besser, als Morgens einfach loszulegen.",
      },
    ],
  };

  return (
    <Slider {...settings}>
      {sliderData[sorte].map((testi) => {
        return (
          <div className="flex justify-center text-center mb-6">
            <Image
              className="rounded-full"
              src={"/images/karriere/testi/" + testi.img + ".png"}
              alt={testi.name}
              width={250}
              height={250}
            />
            <h4 className="mt-4">{testi.name}</h4>
            <p className="italic max-w-xl mx-auto">&quot;{testi.text}&quot;</p>
          </div>
        );
      })}
    </Slider>
  );
}
