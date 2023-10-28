import PropTypes from "prop-types";

export function MoreIcon({ ...props }) {
  return (
    <svg
      width={24}
      height={24}
      fill={props.color || "#fff"}
      aria-label="Settings"
      className="x1lliihq x1n2onr6 x5n08af"
      {...props}
    >
      <title>{"Settings"}</title>
      <path d="M3.5 6.5h17a1.5 1.5 0 0 0 0-3h-17a1.5 1.5 0 0 0 0 3Zm17 4h-17a1.5 1.5 0 0 0 0 3h17a1.5 1.5 0 0 0 0-3Zm0 7h-17a1.5 1.5 0 0 0 0 3h17a1.5 1.5 0 0 0 0-3Z" />
    </svg>
  );
}

MoreIcon.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  color: PropTypes.string,
};
