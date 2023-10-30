import styled from "@emotion/styled";
import PropTypes from "prop-types";
import InputWithEmoji from "../../UI-design/Inputs/InputEmoji";

export default function FooterPost({ username }) {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    p {
      font-size: 0.75rem;
    }
    .p-like,
    .p-username {
      font-weight: bold;
    }

    .p-views {
      color: #757272;
      font-weight: 500;
    }

    input {
      font-size: 0.75rem;
      color: #fff;
    }
  `;
  return (
    <Container>
      <p className="p-like">{40 + (username.length % 3)} likes</p>
      <p className="p-username">{username}</p>
      <p className="p-views">View all {(username.length % 3) + 11} comments</p>
      <InputWithEmoji />
    </Container>
  );
}

FooterPost.propTypes = {
  username: PropTypes.string,
};
