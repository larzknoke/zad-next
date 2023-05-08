import { useRef, useEffect } from "react";
import { WidgetInstance } from "friendly-challenge";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY;

export const FriendlyCaptcha = ({ setDisabled, setSolution }) => {
  const container = useRef();
  const widget = useRef();

  const doneCallback = (solution) => {
    setSolution(solution);
    setDisabled(false);
  };

  const errorCallback = (err) => {
    alert("Ups! Etwas ist schief gelaufen. Bitte versuchen Sie es nochmal.");
  };

  useEffect(() => {
    if (!widget.current && container.current) {
      widget.current = new WidgetInstance(container.current, {
        startMode: "auto",
        doneCallback: doneCallback,
        errorCallback: errorCallback,
      });
    }

    return () => {
      if (widget.current != undefined) widget.current.reset();
    };
  }, [container]);

  return (
    <div
      ref={container}
      className="frc-captcha  !w-full !max-w-full my-6 rounded-sm"
      data-start="auto"
      data-lang="de"
      data-sitekey={SITE_KEY}
    />
  );
};
