import PropTypes from "prop-types";

export function MoreOptionIcon({ ...props }) {
  return (
    <svg
      width={24}
      height={24}
      fill={props.color || "#fff"}
      aria-label="More options"
      className="x1lliihq x1n2onr6 x5n08af"
      {...props}
    >
      <title>{"More options"}</title>
      <circle cx={12} cy={12} r={1.5} />
      <circle cx={6} cy={12} r={1.5} />
      <circle cx={18} cy={12} r={1.5} />
    </svg>
  );
}

MoreOptionIcon.propTypes = {
  color: PropTypes.string,
};
