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
  const [saveStatus, setSaveStatus] = useState(false);

  const handleClickLike = () => {
    setLikeActive(!likeActive);
  };

  const handleClickSave = () => {
    setSaveStatus(!saveStatus);
  };

  const Container = styled.div`
    svg {
    }
    svg:hover {
      stroke: #757272;
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
            <LikePost active={true} onClick={handleClickLike} />
          ) : (
            <LikePost active={false} onClick={handleClickLike} />
          )}
          <ComentIcon />
          <SendIcon />
        </ContainerFlex>
        {saveStatus ? (
          <CollectionsIcon active={true} onClick={handleClickSave} />
        ) : (
          <CollectionsIcon active={false} onClick={handleClickSave} />
        )}
      </ContainerFlex>
    </Container>
  );
}
