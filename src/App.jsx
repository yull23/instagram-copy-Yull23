import styled from "@emotion/styled";
import NavBar from "./Components/NavBar/NavBar";
import Aside from "./Components/Aside/Aside";
import { ContainerFlex } from "./Components/Containers/Containers";

function App() {
  const Container = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    background-color: #010001;
    p {
      color: white;
    }
    .container-content {
      display: flex;
      justify-content: center;
    }
  `;
  return (
    <Container>
      <NavBar />
      <div className="container-content">
        <ContainerFlex gap="4rem" moreStyle="max-width: 64rem;">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos error
            sint nesciunt repellat natus obcaecati vitae perspiciatis laborum,
            ipsum omnis similique! Fugit rerum labore illo perferendis
            reprehenderit ipsam quis animi?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos error
            sint nesciunt repellat natus obcaecati vitae perspiciatis laborum,
            ipsum omnis similique! Fugit rerum labore illo perferendis
            reprehenderit ipsam quis animi?
          </p>
        </ContainerFlex>
      </div>
    </Container>
  );
}

export default App;
