import styled from "@emotion/styled";
import PropTypes from "prop-types";
import HeaderPost from "./HeaderPost";
import FooterPost from "./FooterPost";
import ActionsPost from "./ActionsPost";

export default function Post({ photoPost, username, linkPhoto }) {
  const Container = styled.div`
    max-width: 30rem;
    border-bottom: 1px solid #343435;
    padding: 1rem 0;
  `;

  const ContainerImg = styled.div`
    width: 30rem;
    display: flex;
    align-items: center;
    border: 1px solid #343435;
    justify-content: center;
    border-radius: 0.25rem;
    img {
      width: 100%;
      object-fit: cover;
    }
  `;

  return (
    <Container>
      <HeaderPost username={username} linkPhoto={linkPhoto} />
      <ContainerImg>
        <img src={photoPost} alt="post-img" />
      </ContainerImg>
      <ActionsPost />
      <FooterPost username={username} />
    </Container>
  );
}

Post.propTypes = {
  photoPost: PropTypes.string,
  username: PropTypes.string,
  linkPhoto: PropTypes.string,
};
