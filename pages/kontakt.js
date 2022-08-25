import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import teamData from "../components/teamData";
import TeamDetail from "../components/teamDetail";
import Head from "next/head";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY;

function Kontakt() {
  const [confirmRecaptcha, setConfirmRecaptcha] = useState(false);
  const [hideModal, setHideModal] = useState(false);
  const [formComplete, setFormComplete] = useState(false);
  const [formError, setFormError] = useState(false);
  const [formSending, setFormSending] = useState(false);

  useEffect(() => {
    setConfirmRecaptcha(localStorage.getItem("recapchtaConfirmed"));
  });

  async function handleOnSubmit(e) {
    e.preventDefault();
    setFormSending(true);
    setFormComplete(false);
    setFormError(false);
    const fields = e.currentTarget.elements;

    const formData = {};
    Array.from(fields).forEach((field) => {
      if (!field.name) return;
      if (field.type != "checkbox") {
        formData[field.name] = field.value;
      } else {
        formData[field.name] = field.checked;
      }
      // formData["recaptchaResponse"] = token;
    });
    console.log(formData);
    await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status >= 400 && response.status < 600) {
          setFormError(true);
          setFormSending(false);

          throw new Error("Bad response from server");
        }
        return response;
      })
      .then((returnedResponse) => {
        e.target.reset();
        setFormSending(false);
        setFormComplete(true);
      })
      .catch((error) => {
        setFormSending(false);
        setFormError(true);
      });
  }

  return (
    <>
      <Head>
        {confirmRecaptcha && (
          <script
            src="https://cdn.jsdelivr.net/npm/friendly-challenge@0.9.5/widget.min.js"
            async
          ></script>
        )}
      </Head>
      <div className="xl:space-x-16 flex flex-col xl:flex-row mx-auto">
        <div className="w-full xl:w-2/3">
          <h3>Kontakt</h3>
          <h1>Hier fühlen Sie sich verstanden</h1>
          <p>
            Sie möchten uns und unser Unternehmen näher kennen lernen? Das Team
            vom ZAD freut sich über Ihren Besuch im Herzen Deutschlands. Und
            sollte Northeim nicht auf Ihrem Weg liegen, kein Problem: Ihr
            persönlicher Ansprechpartner ist immer für Sie da – so, als säßen
            Sie ihm direkt gegenüber.
          </p>
          <div className="my-10 flex flex-col md:flex-row flex-wrap md:space-x-20 items-center space-y-10 md:space-y-0">
            {teamData.zentrale.map((person, i) => {
              return (
                <TeamDetail
                  person={person}
                  key={person.email}
                  index={i}
                  kontakt={true}
                />
              );
            })}
          </div>
          <div className="flex flex-col text-zad-blue-600 space-y-2 mt-16 mb-8">
            <div className="flex">
              <FontAwesomeIcon icon={faLocationDot} className="w-4 mr-1" />
              Ottilienstraße 10, 37154 Northeim
            </div>
            <div className="flex">
              <FontAwesomeIcon icon={faPhone} className="w-4 mr-1" />0 55 51 /
              96 88 - 0
            </div>
            <div className="flex">
              <FontAwesomeIcon icon={faEnvelope} className="w-4 mr-1" />
              <a href="mailto:info@zad-northeim.de">info@zad-northeim.de</a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row row-start space-x-4 items-start">
            <img
              className="object-contain rounded-sm w-full md:w-2/3"
              src="images/map.jpeg"
            />
            <img
              className="object-contain rounded-sm hidden md:block md:w-1/3"
              src="images/zad_gebaeude.jpeg"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-6 xl:w-1/3 mt-16 xl:mt-0 bg-zad-blue-200 p-8 rounded">
          <div className="block ">
            <form method="post" onSubmit={handleOnSubmit}>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-sm transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="inputName"
                  placeholder="Name"
                  name="name"
                  required={true}
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="email"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-sm transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="inputEmail"
                  placeholder="E-Mail"
                  name="email"
                  required={true}
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-sm transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="inputBetreff"
                  placeholder="Betreff"
                  name="betreff"
                />
              </div>
              <div className="form-group mb-6">
                <textarea
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-sm transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="inputNachricht"
                  rows={3}
                  placeholder="Nachricht"
                  defaultValue={""}
                  name="nachricht"
                />
              </div>
              <div className="form-group form-check mb-6 flex space-x-2">
                <input
                  type="checkbox"
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                  id="inputDatenschutz"
                  name="datenschutz"
                  required={true}
                />
                <label
                  className="form-check-label inline-block text-zad-blue-600 text-sm"
                  htmlFor="inputDatenschutz"
                >
                  Ja, ich habe die{" "}
                  <Link href="/datenschutz">
                    <a className="underline underline-offset-4">
                      Datenschutzerklärung
                    </a>
                  </Link>
                  zur Kenntnis genommen und bin damit einverstanden, dass die
                  von mir angegebenen Daten elektronisch erhoben und gespeichert
                  werden. Meine Daten werden dabei nur streng zweckgebunden zur
                  Bearbeitung und Beantwortung meiner Anfrage verwendet. Mit dem
                  Absenden des Kontaktformulars erkläre ich mich mit der
                  Verarbeitung einverstanden.
                </label>
              </div>
              <div
                className="frc-captcha !w-full !max-w-full my-6 rounded-sm "
                data-sitekey={SITE_KEY}
              ></div>
              <button
                disabled={formSending || !confirmRecaptcha ? true : false}
                className="btn-fx-1 block w-full"
              >
                <div className="btn-fx-1__inner bp3-padding-y-xs bp3-padding-x-sm">
                  <span>
                    {!formSending
                      ? confirmRecaptcha
                        ? "Senden"
                        : "Datenschutz wurde abgelehnt"
                      : "wird gesendet..."}
                  </span>

                  <div className="btn-fx-1__icon-wrapper" aria-hidden="true">
                    <svg
                      className="bp3-icon bp3-margin-left-2xs"
                      viewBox="0 0 20 20"
                    >
                      <polyline
                        points="8 5 13 10 8 15"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>

                    <svg
                      className="bp3-icon bp3-margin-left-2xs"
                      viewBox="0 0 20 20"
                    >
                      <polyline
                        points="8 5 13 10 8 15"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              </button>
              {formComplete && (
                <div className="px-4 py-2 rounded bg-zad-blue-600 text-white text-center flex flex-nowrap mt-6">
                  <FontAwesomeIcon
                    icon={faCircleInfo}
                    className="w-4 mr-2 text-white"
                  />
                  <span>Nachricht erfolgreich versendet.</span>
                </div>
              )}
              {formError && (
                <div className="px-4 py-2 rounded bg-red-600 text-white flex flex-nowrap mt-6">
                  <FontAwesomeIcon
                    icon={faCircleInfo}
                    className="w-12 mr-4  text-white mx-auto"
                  />
                  <span>
                    Ein Fehler ist aufgetreten. Bitte probieren Sie es nochmal.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <div
        id="overlay"
        className={
          "fixed  z-50 w-screen h-screen inset-0 bg-gray-700 bg-opacity-60" +
          (confirmRecaptcha || hideModal ? " hidden " : "")
        }
      ></div>

      <div
        tabIndex="-1"
        className={
          "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex" +
          (confirmRecaptcha || hideModal ? " hidden " : "")
        }
        aria-modal="true"
        role="dialog"
      >
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <div className="relative rounded-sm shadow-lg bg-zad-blue-600">
            <div className="flex justify-between items-start p-6 rounded-t border-b border-gray-200">
              <h3 className="text-xl font-semibold  text-white mb-0">
                Kontaktformular - Datenschutz
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-base leading-relaxed text-white mb-0">
                Zum versenden von Nachrichten über das Kontaktformular wird
                &quot;Google reCaptacha&quot; eingesetzt. Hiermit soll überprüft
                werden, ob die Dateneingabe auf dieser Website durch einen
                Menschen oder durch ein automatisiertes Programm erfolgt.
              </p>
              <p className="text-base leading-relaxed text-white mb-0">
                Das versenden von Nachrichten über das Kontaktformular
                funktioniert nur wenn Sie Google reCaptcha akzeptieren.
              </p>
            </div>
            <div className="flex items-center p-6 space-x-2 rounded-b border-t  border-gray-200 justify-end">
              <button
                onClick={() => {
                  setHideModal(true);
                }}
                type="button"
                className="focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-[3px] border  text-sm font-medium px-5 py-2.5  focus:z-10 bg-gray-400 text-gray-100 border-gray-500 hover:text-gray-600 hover:bg-gray-300"
              >
                Ablehnen
              </button>
              <button
                onClick={() => {
                  setConfirmRecaptcha(true);
                  localStorage.setItem("recapchtaConfirmed", true);
                }}
                type="button"
                className="text-white bg-zad-blue-500 hover:bg-zad-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[3px] text-sm px-5 py-2.5 text-center "
              >
                Akzeptieren
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Kontakt;
