import PropTypes from "prop-types";

export function MessengerIcon({ active, ...props }) {
  return (
    <>
      {active ? (
        <svg
          width={24}
          height={24}
          aria-label="Messenger"
          className="x1lliihq x1n2onr6 x5n08af"
          {...props}
        >
          <title>{"Messenger"}</title>
          <path
            fill={props.color || "#fff"}
            stroke={props.color || "#fff"}
            strokeMiterlimit={10}
            strokeWidth={1.739}
            d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z"
          />
          <path
            fillRule="evenodd"
            d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z"
          />
        </svg>
      ) : (
        <svg
          width={24}
          height={24}
          fill={props.color || "#fff"}
          aria-label="Messenger"
          className="x1lliihq x1n2onr6 x5n08af"
          {...props}
        >
          <title>{"Messenger"}</title>
          <path
            fill="none"
            stroke={props.color || "#fff"}
            strokeMiterlimit={10}
            strokeWidth={1.739}
            d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z"
          />
          <path
            fillRule="evenodd"
            d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z"
          />
        </svg>
      )}
    </>
  );
}

MessengerIcon.propTypes = {
  active: PropTypes.bool,
  fill: PropTypes.string,
  stroke: PropTypes.string,
  color: PropTypes.string,
};
