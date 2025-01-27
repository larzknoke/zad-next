import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
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
        <a className="nav-item group" href="/karriere">
          <span>karriere bei zad</span>
        </a>
        <hr className="ml-4 mr-24" />
        <a className="nav-item group" href="/karriere-sachbearbeiter">
          <span>Sachbearbeitung im Gestundheitswesen</span>
        </a>
        <a className="nav-item group" href="/karriere-buero">
          <span>Bürohilfskraft</span>
        </a>
        <a className="nav-item group" href="/karriere-it">
          <span>Fachkraft für IT</span>
        </a>
      </PopoverPanel>
    </Popover>
  );
}

export default NavItemKarriere;
