import theme from "commons/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
`;
export const Age = styled.div`
  ${theme.fontStyle.b0L}
`;
export const Gender = styled.div`
  ${theme.fontStyle.b0L}
`;
