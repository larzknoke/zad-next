import React from "react";
import Sidenav from "../components/sidenav";
import Link from "next/link";
import { ParallaxBanner } from "react-scroll-parallax";

function Software() {
  return (
    <>
      <ParallaxBanner
        layers={[
          {
            speed: -8,
            children: (
              <video
                class="object-cover w-full drop-shadow-lg mt-32 h-[36rem]"
                lazy=""
                autoplay="true"
                playsinline=""
                muted="true"
              >
                <source
                  type="video/mp4"
                  src="/videos/software-pflegedienste.mp4"
                />
              </video>
            ),
          },
        ]}
        className="aspect-[3/1]"
      ></ParallaxBanner>
      <div className="mx-auto flex px-16 py-16 md:px-28 md:py-24 xl:px-48 xl:py-32">
        <div className="basis-1/4 space-y-8">
          <Sidenav />
        </div>
        <div className="px-48">
          {/* <img
          className="drop-shadow-lg rounded  mx-auto
        "
          src="images/leistungen/software1.jpg"
          alt="Team12"
        /> */}
          <div>
            <h3>Software für ambulante Pflegedienste</h3>
            <h2>Bereit für eine Fortsetzung</h2>
            <p>
              Zu Ihrer verantwortungsvollen Arbeit müssen Sie eine Menge
              Aufgaben erledigen und den Überblick behalten. Das gelingt am
              besten, wenn alles aufeinander abgestimmt ist. Diese tägliche
              Herausforderung meistern Sie in der Hauptrolle Ihrer eigenen
              Serie. Dramatisch, spannend, aber immer mit dem Ausblick auf ein
              Happy-End. Nutzen Sie die Chance und schreiben Sie Ihre
              persönliche Handlung mit unserer neuen Pflegesoftware fort.
            </p>
            <p>
              Innovativ, einfach und übersichtlich präsentiert sich unsere
              webbasierte Pflegesoftware. Immer im Fokus, gemeinsam mit Ihnen
              Ihre Ziele zu erreichen.
            </p>
            <p>
              Nutzen Sie die Software exklusiv in der genialen Kombination mit
              der ZAD-Abrechnung. Getreu dem Motto: „Alles aus einer Hand“.
            </p>
            <p>
              Gerne präsentieren wir Ihnen unverbindlich und kostenlos die
              Software online, telefonisch oder bei Ihnen vor Ort. So können Sie
              alle weiteren Informationen erhalten.
            </p>
            <p>
              <span className="font-bold">
                Sind Sie neugierig, bei uns eine spannende Rolle einzunehmen?
              </span>{" "}
              <br />
              Sie haben die einmalige Chance Einfluss auf die Weiterentwicklung
              der Software zu nehmen und einen Blick hinter die Kulissen zu
              bekommen. Wir suchen BETA-Kunden aus allen Bereichen der
              ambulanten Pflege. Sie können jederzeit mitmachen –
              selbstverständlich nutzen Sie die Software während dieser Zeit
              kostenfrei. Weiter Informationen erhalten Sie über diesen{" "}
              <Link href="https://pflegesuite.de/static/landing_page/">
                <a
                  className="font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </a>
              </Link>
            </p>
            <div className="flex space-x-6 w-full items-stretch justify-items-stretch">
              <Link href="/kontakt">
                <a className="button w-full text-center">
                  Jetzt Anfrage senden
                </a>
              </Link>
              <Link href="/team">
                <a className="button w-full text-center">
                  Ansprechpartner finden
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Software;

Software.noMainPadding = true;
