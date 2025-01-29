import {
  Popover,
  PopoverButton,
  PopoverPanel,
  CloseButton,
} from "@headlessui/react";
import { useRef, useEffect } from "react";
import { useRouter } from "next/router";

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
        <CloseButton as={"div"} className="nav-item group">
          <span onClick={() => router.push("/karriere")}>karriere bei zad</span>
        </CloseButton>
        <hr className="ml-4 mr-24" />
        <CloseButton as={"div"} className="nav-item group">
          <span onClick={() => router.push("/karriere-sachbearbeiter")}>
            {" "}
            Sachbearbeitung im Gesundheitswesen
          </span>
        </CloseButton>
        <CloseButton as={"div"} className="nav-item group">
          <span onClick={() => router.push("/karriere-buero")}>
            Bürohilfskraft
          </span>
        </CloseButton>
        <CloseButton as={"div"} className="nav-item group">
          <span onClick={() => router.push("/karriere-it")}>
            Fachkraft für IT
          </span>
        </CloseButton>
      </PopoverPanel>
    </Popover>
  );
}

export default NavItemKarriere;
