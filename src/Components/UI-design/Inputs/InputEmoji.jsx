import styled from "@emotion/styled";
import InputEmoji from "react-input-emoji";

export default function InputWithEmoji() {
  const Container = styled.div`
    div {
      background: none;
      border: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .react-input-emoji--placeholder {
      padding: 0;
      margin: 0;
      left: 0;
      font-size: 0.75rem;
      color: #757272;
    }
    .react-input-emoji--input {
      color: #fff;
    }
  `;
  return (
    <Container>
      <InputEmoji placeholder="Add a comment..." />
    </Container>
  );
}
