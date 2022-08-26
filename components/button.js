import Link from "next/link";

function Button({
  href,
  children,
  className = "",
  bgColor,
  onClickHandler,
  download = false,
}) {
  return (
    <>
      {href != undefined ? (
        <Link href={href}>
          <a
            className={`btn-fx-1 ${className}`}
            download={download}
            // target="_blank"
            // rel="noopener noreferrer"
            onClick={onClickHandler}
            href={href}
          >
            <div
              className={`btn-fx-1__inner bp3-padding-y-xs bp3-padding-x-sm ${bgColor}`}
            >
              <span>{children}</span>

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
          </a>
        </Link>
      ) : (
        <a
          className={`btn-fx-1 ${className}`}
          // target="_blank"
          // rel="noopener noreferrer"
          onClick={onClickHandler}
          href={href}
        >
          <div
            className={`btn-fx-1__inner bp3-padding-y-xs bp3-padding-x-sm ${bgColor}`}
          >
            <span>{children}</span>

            <div className="btn-fx-1__icon-wrapper" aria-hidden="true">
              <svg className="bp3-icon bp3-margin-left-2xs" viewBox="0 0 20 20">
                <polyline
                  points="8 5 13 10 8 15"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>

              <svg className="bp3-icon bp3-margin-left-2xs" viewBox="0 0 20 20">
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
        </a>
      )}
    </>
  );
}

export default Button;
