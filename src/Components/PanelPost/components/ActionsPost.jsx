import styled from "@emotion/styled";
import {
  CollectionsIcon,
  ComentIcon,
  LikePost,
  SendIcon,
} from "../../Icons/MyIcons";
import { useState } from "react";
import { ContainerFlex } from "../../Containers/Containers";

export default function ActionsPost() {
  const [likeActive, setLikeActive] = useState(false);

  const handleClick = () => {
    setLikeActive(!likeActive);
  };

  const Container = styled.div`
    svg {
    }
    svg:hover {
      cursor: pointer;
    }
    svg:active {
      scale: 1.05;
    }
  `;
  return (
    <Container>
      <ContainerFlex justify="space-between" pd="0.75rem 0">
        <ContainerFlex gap="1rem">
          {likeActive ? (
            <LikePost active={true} onClick={handleClick} />
          ) : (
            <LikePost active={false} onClick={handleClick} />
          )}
          <ComentIcon fill="none" stroke="#fff" />
          <SendIcon />
        </ContainerFlex>
        <CollectionsIcon />
      </ContainerFlex>
    </Container>
  );
}
