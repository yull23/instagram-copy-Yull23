import styled from "@emotion/styled";

export const ContainerFlex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  gap: ${({ gap }) => gap || 0};
  justify-content: ${({ justify }) => justify || "start"};
  align-items: ${({ align }) => align || "start"};
  padding: ${({ pd }) => pd || "0"};
  ${({ moreStyle }) => moreStyle}
`;
