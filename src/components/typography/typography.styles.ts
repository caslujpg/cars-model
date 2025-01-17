import styled from "styled-components/native";
import { Align, Color, Variant } from "./typography";

type ContainerProps = {
  variant: Variant;
  color: Color;
  align: Align;
};

const stylesByVariant = {
  body: {
    fontSize: "14px",
    fontFamily: "Poppins_400Regular",
  },
  body2: {
    fontSize: "14px",
    fontFamily: "Poppins_600SemiBold",
  },
  caption: {
    fontSize: "12px",
    fontFamily: "Poppins_400Regular",
  },
  caption2: {
    fontSize: "12px",
    fontFamily: "Poppins_600SemiBold",
  },
  title: {
    fontSize: "24px",
    fontFamily: "Poppins_400Regular",
  },
  subTitle: {
    fontSize: "16px",
    fontFamily: "Poppins_400Regular",
  },
  subTitle2: {
    fontSize: "16px",
    fontFamily: "Poppins_500Medium",
  },
  display: {
    fontSize: "32px",
    fontFamily: "Poppins_600SemiBold",
  },
};

const colorsMap = {
  primary: "#FAFF00",
  gray1: "#000000",
  gray2: "#17181A",
  gray3: "#26282A",
  gray4: "#999999",
  gray5: "#FFFFFF",
  "feedback.error": "red",
};

export const Container = styled.Text<ContainerProps>`
  font-size: ${({ variant }: ContainerProps) =>
    stylesByVariant[variant].fontSize};
  font-family: ${({ variant }: ContainerProps) =>
    stylesByVariant[variant].fontFamily};
  color: ${({ color }: ContainerProps) => colorsMap[color]};
  text-align: ${({ align }: ContainerProps) => align};
`;
