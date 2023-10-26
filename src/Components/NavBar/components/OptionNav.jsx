import styled from "@emotion/styled";
import * as myIcons from "../../../assets/imgs/Icons";

export default function OptionNav() {
  const Container = styled.div`
    width: 16rem;
    background-color: red;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    gap: 1rem;
    P {
      color: #f4f4f5;
      font-size: 1rem;
      font-weight: bold;
    }
  `;
  return (
    <Container>
      <myIcons.HomeIcon width={24} height={24} active={true} />
      <p>Home</p>
    </Container>
  );
}
