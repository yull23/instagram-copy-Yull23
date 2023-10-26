import PropTypes from "prop-types";

export function SearchIcon({ active, ...props }) {
  return (
    <>
      {active ? (
        <svg
          width={24}
          height={24}
          fill="none"
          stroke="#f4f4f5"
          aria-label="Search"
          className="x1lliihq x1n2onr6 x5n08af"
          {...props}
        >
          <title>{"Search"}</title>
          <path
            fill={props.fill}
            stroke={props.stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M18.5 10.5a8 8 0 1 1-8-8 8 8 0 0 1 8 8ZM16.511 16.511l5.132 5.132"
          />
        </svg>
      ) : (
        <svg
          width={24}
          height={24}
          fill="none"
          stroke="#f4f4f5"
          aria-label="Search"
          className="x1lliihq x1n2onr6 x5n08af"
          {...props}
        >
          <title>{"Search"}</title>
          <path
            fill={props.fill}
            stroke={props.stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5ZM16.511 16.511 22 22"
          />
        </svg>
      )}
    </>
  );
}

SearchIcon.propTypes = {
  active: PropTypes.bool,
  fill: PropTypes.string,
  stroke: PropTypes.string,
};
