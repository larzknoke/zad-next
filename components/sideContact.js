import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";
import { FriendlyCaptcha } from "./captcha";

export default function SideContact() {
  const [formComplete, setFormComplete] = useState(false);
  const [formError, setFormError] = useState(false);
  const [formSending, setFormSending] = useState(false);
  const [showEmailContact, setShowEmailContact] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [solution, setSolution] = useState(null);

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
      <div className="flex flex-col space-y-6 w-full bg-zad-blue-200 p-8 rounded pulseOFF">
        <div className="block">
          <h4 className=" text-lg">
            Rufen Sie uns direkt an: 05551 / 96 88 - 0
          </h4>
          <h5 className="text-zad-blue-600 mb-4">
            Gern rufen wir Sie auch zurück:
          </h5>
          <form method="post" onSubmit={handleOnSubmit}>
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-sm transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="inputTelefon"
                placeholder="Unter welcher Telefonnummer dürfen wir Sie kontaktieren?"
                name="telefon"
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-sm transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="inputUhrzeit"
                placeholder="Wann können wir Sie gut erreichen (Tag / Uhrzeit) ?"
                name="uhrzeit"
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-sm transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="inputName"
                placeholder="Name"
                name="name"
              />
            </div>
            <h5
              className="text-zad-blue-600 mb-4 cursor-pointer"
              onClick={() => setShowEmailContact(!showEmailContact)}
            >
              <FontAwesomeIcon
                icon={faCaretRight}
                className={`w-3 mr-2 icon-start inline mb-1 ${
                  showEmailContact ? "rotate-90" : ""
                } `}
              />
              Gern informieren wir Sie auch per E-Mail:
            </h5>
            {showEmailContact && (
              <div>
                <div className="form-group mb-6">
                  <input
                    type="email"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-sm transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="inputEmail"
                    placeholder="E-Mail"
                    name="email"
                  />
                </div>
                <div className="form-group mb-6">
                  <textarea
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-sm transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="inputFrage"
                    rows={4}
                    placeholder="Welche Fragen haben Sie an uns?"
                    defaultValue={""}
                    name="frage"
                  />
                </div>
              </div>
            )}
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
                    Datenschutzerklärung{" "}
                  </a>
                </Link>
                zur Kenntnis genommen und bin damit einverstanden, dass die von
                mir angegebenen Daten elektronisch erhoben und gespeichert
                werden. Meine Daten werden dabei nur streng zweckgebunden zur
                Bearbeitung und Beantwortung meiner Anfrage verwendet. Mit dem
                Absenden des Kontaktformulars erkläre ich mich mit der
                Verarbeitung einverstanden.
              </label>
            </div>
            <FriendlyCaptcha
              setDisabled={setDisabled}
              setSolution={setSolution}
            />
            <button
              disabled={formSending ? true : false}
              className="btn-fx-1 block w-full"
            >
              <div className="btn-fx-1__inner bp3-padding-y-xs bp3-padding-x-sm">
                <span>{!formSending ? "Senden" : "wird gesendet..."}</span>

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
    </>
  );
}
