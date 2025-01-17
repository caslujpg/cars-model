import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  margin-bottom: 16px;
`;

export const PersonalInformationContainer = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

export const GreetingsMessage = styled.Text`
  font-size: 14px;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

export const TextsContainer = styled.View`
  gap: 4px;
`;

export const LogoutWrapper = styled.View`
  padding: 16px;
  background-color: white;
  border-radius: 99999px;
  align-items: center;
  justify-content: center;
  border-width: 1.5px;
  border-color: #e3e3e3;
`;
