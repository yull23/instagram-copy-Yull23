import PropTypes from "prop-types";
import styled from "@emotion/styled";

export default function OptionNav({
  label,
  children,
  statusActive,
  handleClick,
  index,
}) {
  const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin: 2px 0;
    padding: 0.8rem 0.75rem 0.7rem 0.75rem;
    gap: 1rem;
    border-radius: 0.5rem;
    transition: 0.2s;
    cursor: pointer;
    img {
      width: 1.5rem;
      border-radius: 10rem;
    }

    svg {
      display: flex;
      padding: 0 0 0 0;
    }

    P {
      color: #f4f4f5;
      font-size: 1rem;
      line-height: 1.25rem;
      text-transform: capitalize;
    }
    &:hover {
      background-color: #1b1a1b;
      svg {
        scale: 1.05;
      }
    }
    .active {
      font-weight: bold;
    }
  `;
  return (
    <Container onClick={() => handleClick(index)}>
      {children}
      <p
        className={
          index === statusActive && index !== undefined ? "active" : ""
        }
      >
        {label}
      </p>
    </Container>
  );
}

OptionNav.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
  statusActive: PropTypes.number,
  handleClick: PropTypes.func,
  index: PropTypes.number,
};
