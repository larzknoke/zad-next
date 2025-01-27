import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";

function NavItemKarriere() {
  const popoverButtonRef = useRef();
  const router = useRouter();

  useEffect(() => {
    const current = popoverButtonRef.current;
    if (!current) {
      return;
    }

    const observer = new MutationObserver((mutations) => {
      const hovered = mutations.find(
        ({ attributeName }) => attributeName === "data-hover"
      );
      const active = current.hasAttribute("data-active");

      if (hovered && !active) {
        current.click();
      }
    });

    observer.observe(current, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, [popoverButtonRef]);

  return (
    <Popover className="relative group">
      <PopoverButton
        ref={popoverButtonRef}
        className="flex items-center gap-2 focus:outline-none"
      >
        Stellenangebote
        {/* <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" /> */}
      </PopoverButton>
      <PopoverPanel
        anchor={{ to: "bottom ", gap: "20px" }}
        transition
        className="nav-item-dropdown"
      >
        <Link href="/karriere">
          <span className="nav-item group">karriere bei zad</span>
        </Link>
        <hr className="ml-4 mr-24" />
        <Link href="/karriere-sachbearbeiter">
          <span className="nav-item group">
            Sachbearbeitung im Gestundheitswesen
          </span>
        </Link>
        <Link href="/karriere-buero">
          <span className="nav-item group">Bürohilfskraft</span>
        </Link>
        <Link href="/karriere-it">
          <span className="nav-item group">Fachkraft für IT</span>
        </Link>
      </PopoverPanel>
    </Popover>
  );
}

export default NavItemKarriere;
