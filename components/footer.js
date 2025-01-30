import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();

  return (
    <div className="flex  justify-center text-center p-12 flex-col">
      <div className="flex gap-16 items-center justify-around self-center">
        <Image
          src="/images/beruf_pflege.png"
          className=" object-cover rounded "
          width={180}
          height={105}
          objectFit="contain"
        />
        <Image
          src="/images/familie.jpg"
          className=" object-cover rounded "
          width={250}
          height={190}
          objectFit="contain"
        />
        <Image
          src="/images/unternehmensnetzwerk.png"
          className=" object-cover rounded "
          width={150}
          height={150}
          objectFit="contain"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-16 self-center">
        <span className="text-zad-blue-600">
          {new Date().getFullYear()} © Zentraler Abrechnungs-Dienst GmbH,
          Northeim
        </span>
        {[
          "/karriere",
          "/karriere-it",
          "/karriere-buero",
          "/karriere-sachbearbeiter",
          "/datenschutz-bewerber",
        ].includes(router.pathname) && (
          <Link href={"/datenschutz-bewerber"}>
            <a className="text-zad-blue-600">Datenschutz (Bewerber)</a>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Footer;
