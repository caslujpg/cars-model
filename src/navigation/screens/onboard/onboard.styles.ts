import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Background = styled.ImageBackground`
  flex: 1;
  padding-inline: 24px;
  padding-bottom: 40px;
  justify-content: flex-end;
`;

export const Content = styled.View`
  align-items: center;
  gap: 16px;
`;

export const InnerContent = styled.View`
  gap: 8px;
`;

export const DescriptionWrapper = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

export const DescriptionTextWrapper = styled.View`
  flex: 1;
`;

export const Pagination = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const Dot = styled.View<{ active: boolean }>`
  width: 8px;
  height: 8px;
  background-color: ${({ active }: { active: boolean }) =>
    active ? "#FAFF00" : "#FFFFFF"};
  border-radius: 9999px;
`;
