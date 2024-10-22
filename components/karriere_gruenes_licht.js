import Image from "next/image";

export default function GruenesLicht({ it = false }) {
  return (
    <>
      <h2 className="text-center text-3xl mt-32 ">
        Gib mit uns Rettungs- und Pflegediensten grünes Licht
      </h2>{" "}
      <p className="text-center">
        Als mittelständischer Finanzdienstleister im Gesundheitswesen
        vereinfachen wir die Prozesse für Krankentransport- und
        Rettungsdienst-Unternehmen sowie ambulante Pflegedienste. Mit jeder
        Abrechnung halten wir ihnen den Rücken frei und helfen ihnen, damit sie
        anderen helfen können.
      </p>
      <div className="my-10 flex flex-col xl:flex-row justify-center gap-x-8 gap-y-[70px]">
        <div className=" xl:w-1/3 flex flex-col text-center">
          <div className="relative h-64 xl:h-48 mb-4">
            <Image
              src="/images/karriere/start/ZADO_gruppenaufnahme_04.jpg"
              className=" object-cover rounded-md"
              // width={280}
              // height={200}
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className="bg-zad-blue-200 rounded-md p-4 xl:h-36 content-evenly">
            <h4 className="text-3xl">150</h4>
            <p className="mb-0">Mitarbeiter arbeiten bei uns in Northeim</p>
          </div>
        </div>
        <div className=" xl:w-1/3 flex flex-col text-center">
          <div className="relative h-64 xl:h-48 mb-4">
            <Image
              src="/images/karriere/start/ZADO_gruppenaufnahme_09.jpg"
              className=" object-cover rounded-md"
              // width={280}
              // height={200}
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className="bg-zad-blue-200 rounded-md p-4 xl:h-36 content-evenly">
            <h4 className="text-3xl">{it ? "15" : "8 bis 12"}</h4>
            <p className="mb-0">
              {it
                ? "Kollegen arbeiten in kleinen IT-Teams zusammen"
                : "Kollegen arbeiten jeweils in einem festen Team zusammen"}
            </p>
          </div>
        </div>
        <div className=" xl:w-1/3 flex flex-col text-center">
          <div className="relative h-64 xl:h-48 mb-4">
            <Image
              src="/images/karriere/start/ZADO_gruppenaufnahme_11.jpg"
              className=" object-cover rounded-md"
              // width={280}
              // height={200}
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className="bg-zad-blue-200 rounded-md p-4 xl:h-36 content-evenly">
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
