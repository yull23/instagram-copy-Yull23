import PropTypes from "prop-types";
import styled from "@emotion/styled";

export default function OptionNav({ label, children }) {
  const Container = styled.div`
    width: 16rem;
    display: flex;
    align-items: center;
    padding: 0.75rem 0.5rem;
    gap: 1rem;
    border-radius: 0.5rem;
    transition: 0.2s;
    cursor: pointer;

    P {
      color: #f4f4f5;
      font-size: 1rem;
      font-weight: bold;
      text-transform: capitalize;
    }
    &:hover {
      background-color: #1b1a1b;
      svg {
        scale: 1.05;
      }
    }
  `;
  return (
    <Container>
      {children}
      <p>{label}</p>
    </Container>
  );
}

OptionNav.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
};
