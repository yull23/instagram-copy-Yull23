import styled from "@emotion/styled";
import { linkPhotoUser, usersFollow } from "../../Data/data-user-follow";
import { ContainerFlex } from "../Containers/Containers";
import CardFollow from "./components/CardFollow";

export default function Aside() {
  const usersCurrent = ["user1", "user2", "user3", "user4", "user5", "user6"];

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 18rem;

    .text-suggest {
      font-size: 0.875rem;
      font-weight: bold;
      color: #919190;
    }
    .link-see-all {
      color: #dbdbdb;
      font-weight: bold;
      font-size: 0.75rem;
    }

    .text-footer {
      color: #5f5f61;
      font-size: 0.75rem;
      letter-spacing: 0.02rem;
    }
  `;

  return (
    <Container>
      <CardFollow
        username={"tzzair"}
        linkPhoto={linkPhotoUser}
        status={"Yull R. Timoteo Zambrano"}
      />
      <ContainerFlex direction="column" gap="0.75rem">
        <ContainerFlex
          justify="space-between"
          align="center"
          gap="1rem"
          moreStyle="width: 100%;"
        >
          <p className="text-suggest">Suggested for you</p>
          <p className="link-see-all">See all</p>
        </ContainerFlex>

        {usersCurrent.map((user, id) => (
          <CardFollow
            key={id}
            username={usersFollow[user].username}
            linkPhoto={usersFollow[user].linkPhoto}
            status={usersFollow[user].status}
          />
        ))}
      </ContainerFlex>
      <ContainerFlex direction="column" gap="1rem" moreStyle="padding: 1rem 0;">
        <ContainerFlex direction="column">
          <p className="text-footer">
            About - Help - Press - API - Jobs - Privacy - Terms
          </p>
          <p className="text-footer">Locations - Language - Meta - Verified</p>
        </ContainerFlex>
        <p className="text-footer">© 2023 INSTAGRAM FROM YULL23</p>
      </ContainerFlex>
    </Container>
  );
}
// 630
// 319
//383
//gap 4rem
