import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { MoreOptionIcon } from "../../Icons/IconsComponents/MoreOptionIcon";

export default function HeaderPost({ username, linkPhoto }) {
  const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 0 0.75rem 0.25rem;
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
      width: 100%;
      font-size: 0.75rem;
      line-height: 1.33;
      font-weight: 600;
      color: #dbdbdb;
    }
    .p-publication-time {
    }
    span {
      color: #919190;
    }
  `;
  return (
    <Container>
      <div className="container-img">
        <img src={linkPhoto} alt="profile" />
      </div>
      <p className="p-username">
        {username} <span>• {(username.length % 4) + 1}h</span>
      </p>
      <MoreOptionIcon />
    </Container>
  );
}

HeaderPost.propTypes = {
  username: PropTypes.string,
  linkPhoto: PropTypes.string,
};
