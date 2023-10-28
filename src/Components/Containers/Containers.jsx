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

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ templateColumn }) => templateColumn || ""};
  grid-template-rows: ${({ templateRow }) => templateRow || ""};
  gap: ${({ gap }) => gap || "0"};
  row-gap: ${({ rowGap }) => rowGap || "0"};
  column-gap: ${({ columnGap }) => columnGap || "0"};
  ${({ moreStyle }) => moreStyle}
`;
