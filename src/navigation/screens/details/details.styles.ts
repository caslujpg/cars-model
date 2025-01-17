import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  gap: 8px;
  margin-bottom: 32px;
`;

export const HeaderSubTitleContainer = styled.View`
  gap: 4px;
`;

export const CardContainer = styled.View`
  padding: 16px 24px;
  border-width: 1px;
  border-color: #26282a;
  border-radius: 12px;
  gap: 16px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

export const CardContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CardContentItem = styled.View`
  align-items: center;
  min-width: 25%;
`;

export const CardDivider = styled.View`
  width: 1px;
  background-color: #26282a;
  height: max-content;
`;
