import { useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import { WidgetInstance } from "friendly-challenge";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY;

export const FriendlyCaptcha = forwardRef(
  ({ setDisabled, setSolution }, ref) => {
    const container = useRef();
    const widget = useRef();

    useImperativeHandle(ref, () => ({
      resetCaptcha() {
        widget.current.reset();
      },
    }));

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
          startMode: "focus",
          language: "de",
          sitekey: SITE_KEY,
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
      />
    );
  }
);
