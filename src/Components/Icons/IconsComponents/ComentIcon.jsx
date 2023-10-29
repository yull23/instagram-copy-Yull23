import PropTypes from "prop-types";

export function ComentIcon({ ...props }) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      stroke={props.stroke || "#fff"}
      aria-label="Comment"
      className="x1lliihq x1n2onr6 x5n08af"
      {...props}
    >
      <title>{"Comment"}</title>
      <path
        fill={props.fill || "none"}
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
      />
    </svg>
  );
}

ComentIcon.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  color: PropTypes.string,
};
