import styled from "@emotion/styled";
import { ContainerFlex } from "../../Containers/Containers";

export default function CardFollow({ username, linkPhoto, status }) {
  const Container = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    width: 100%;
    gap: 0.75rem;

    .container-img {
      width: 2.75rem;
      height: 2.75rem;
      display: flex;
      align-items: center;
    }

    img {
      width: 100%;
      aspect-ratio: 1/1;
      border-radius: 10rem;
      object-fit: cover;
    }
    .p-username {
      font-size: 0.75rem;
      line-height: 1.33;
      font-weight: 600;
      color: #dbdbdb;
    }
    .p-status {
      font-size: 0.75rem;
      line-height: 1.33;
      color: #919190;
    }
    button {
      font-weight: 700;
      color: #0478c5;
      font-size: 12px;
      line-height: 1.33;
    }
  `;

  return (
    <Container>
      <div className="container-img">
        <img src={linkPhoto} alt="profile" />
      </div>
      <ContainerFlex direction="column">
        <p className="p-username">{username}</p>
        <p className="p-status">{status}</p>
      </ContainerFlex>
      <button>Follow</button>
    </Container>
  );
}
