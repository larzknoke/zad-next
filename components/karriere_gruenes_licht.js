import Image from "next/image";

export default function GruenesLicht({ it = false, hide_images = false }) {
  return (
    <>
      <h2 className="text-center text-3xl mt-10 md:mt-10 ">
        Gib mit uns Rettungs- und Pflegediensten grünes Licht
      </h2>{" "}
      <p className={`text-center ${hide_images ? "mb-0" : ""}`}>
        Als mittelständischer Finanzdienstleister im Gesundheitswesen
        vereinfachen wir die Prozesse für Krankentransport- und
        Rettungsdienst-Unternehmen sowie ambulante Pflegedienste. Mit jeder
        Abrechnung halten wir ihnen den Rücken frei und helfen ihnen, damit sie
        anderen helfen können.
      </p>
      <div
        className={`${
          !hide_images ? " my-10 " : " my-5 "
        } flex flex-col md:flex-row justify-center gap-x-8 gap-y-[30px] md:gap-y-[70px] md:items-baseline	`}
      >
        <div className=" xl:w-1/3 flex flex-col text-center gap-5">
          {!hide_images && (
            <div className="relative h-64 xl:h-48">
              <Image
                src="/images/karriere/start/ZADO_gruppenaufnahme_04.jpg"
                className=" object-cover rounded-md"
                // width={280}
                // height={200}
                objectFit="cover"
                layout="fill"
              />
            </div>
          )}
          <div className="  content-evenly">
            <h4 className="text-3xl">150</h4>
            <p className="mb-0">
              Mitarbeiter:innen arbeiten bei uns in Northeim
            </p>
          </div>
        </div>
        <div className=" xl:w-1/3 flex flex-col text-center gap-5">
          {!hide_images && (
            <div className="relative h-64 xl:h-48">
              <Image
                src="/images/karriere/start/ZADO_gruppenaufnahme_09.jpg"
                className=" object-cover rounded-md"
                // width={280}
                // height={200}
                objectFit="cover"
                layout="fill"
              />
            </div>
          )}
          <div className=" xl:h-36 content-evenly">
            <h4 className="text-3xl">{it ? "15" : "8 bis 12"}</h4>
            <p className="mb-0">
              {it
                ? "Kolleg:innen arbeiten in kleinen IT-Teams zusammen"
                : "Kolleg:innen arbeiten jeweils in einem festen Team zusammen"}
            </p>
          </div>
        </div>
        <div className=" xl:w-1/3 flex flex-col text-center gap-5">
          {!hide_images && (
            <div className="relative h-64 xl:h-48">
              <Image
                src="/images/karriere/start/ZADO_gruppenaufnahme_11.jpg"
                className=" object-cover rounded-md"
                // width={280}
                // height={200}
                objectFit="cover"
                layout="fill"
              />
            </div>
          )}
          <div className=" xl:h-36 content-evenly">
            <h4 className="text-3xl">40</h4>
            <p className="mb-0">
              Jahre gibt es unser familiengeführtes Unternehmen schon
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
