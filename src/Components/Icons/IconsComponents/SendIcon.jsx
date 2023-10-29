import PropTypes from "prop-types";

export function SendIcon({ ...props }) {
  return (
    <svg
      width={24}
      height={24}
      fill={props.color || "#fff"}
      aria-label="Share Post"
      className="x1lliihq x1n2onr6 x1roi4f4"
      {...props}
    >
      <title>{"Share Post"}</title>
      <path
        fill="none"
        stroke={props.color || "#fff"}
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22 3 9.218 10.083M11.698 20.334 22 3.001H2l7.218 7.083 2.48 10.25z"
      />
    </svg>
  );
}

SendIcon.propTypes = {
  fill: PropTypes.string,
  color: PropTypes.string,
};
