import PropTypes from "prop-types";

export function CollectionsIcon({ active, ...props }) {
  return (
    <>
      {active ? (
        <svg
          width={24}
          height={24}
          fill={props.color || "#fff"}
          stroke={props.color || "#fff"}
          aria-label="Save"
          className="x1lliihq x1n2onr6 x5n08af"
          {...props}
        >
          <title>{"Save"}</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m20 21-8-7.56L4 21V3h16v18z"
          />
        </svg>
      ) : (
        <svg
          width={24}
          height={24}
          fill={props.color || "#fff"}
          stroke={props.color || "#fff"}
          aria-label="Save"
          className="x1lliihq x1n2onr6 x5n08af"
          {...props}
        >
          <title>{"Save"}</title>
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m20 21-8-7.56L4 21V3h16v18z"
          />
        </svg>
      )}
    </>
  );
}

CollectionsIcon.propTypes = {
  active: PropTypes.bool,
  fill: PropTypes.string,
  color: PropTypes.string,
};
