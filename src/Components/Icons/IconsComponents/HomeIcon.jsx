import PropTypes from "prop-types";

export function HomeIcon({ active, ...props }) {
  return (
    <>
      {active ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="#f4f4f5"
          viewBox="0 0 24 24"
          aria-label="Home"
          className="x1lliihq x1n2onr6 x5n08af"
          {...props}
        >
          <title>{"Home"}</title>
          <path
            fill={props.fill}
            d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="#f4f4f5"
          stroke="#f4f4f5"
          aria-label="Home"
          className="x1lliihq x1n2onr6 x5n08af"
          {...props}
        >
          <title>{"Home"}</title>
          <path
            fill={props.fill}
            stroke={props.stroke}
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
          />
        </svg>
      )}
    </>
  );
}

HomeIcon.propTypes = {
  active: PropTypes.bool,
  fill: PropTypes.string,
  stroke: PropTypes.string,
};
