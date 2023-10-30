import styled from "@emotion/styled";
import NavBar from "../../Components/NavBar/NavBar";
import { Outlet } from "react-router";
import { ContainerFlex } from "../../Components/Containers/Containers";

export default function HomePage() {
  const Container = styled.div`
    background-color: #010001;
    display: flex;

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
      <ContainerFlex
        justify="center"
        moreStyle="width: 100%;padding-top: 4rem;padding-left: 336px;"
      >
        <Outlet />
      </ContainerFlex>
    </Container>
  );
}
