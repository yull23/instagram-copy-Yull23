import styled from "@emotion/styled";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const Container = styled.div`
    background-color: #010001;
  `;
  return (
    <Container>
      <NavBar></NavBar>
    </Container>
  );
}

export default App;
