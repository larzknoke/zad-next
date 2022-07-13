function Button({ href, children, className, bgColor }) {
  return (
    <a
      className={`btn-fx-1 ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
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
  );
}

export default Button;
