import styled, { css } from "styled-components/native";
import { Color, Size, Variant } from "./button";

type ContainerProps = {
  variant: Variant;
  color: Color;
  size: Size;
};

const colorsMap = {
  primary: "#FAFF00",
  gray2: "#26282A",
};

const styleSizeMap = {
  sm: {
    paddingVertical: "4px",
    paddingHorizontal: "6px",
    height: "28px",
    borderRadius: "6px",
  },
  md: {
    paddingVertical: "16px",
    paddingHorizontal: "16px",
    height: "56px",
    borderRadius: "12px",
  },
};

export const Container = styled.View<ContainerProps>`
  ${({ color, variant, size }: ContainerProps) => css`
    background-color: ${variant === "solid" ? colorsMap[color] : "transparent"};
    align-items: center;
    justify-content: center;
    font-family: "Poppins_600SemiBold";
    padding: ${styleSizeMap[size].paddingVertical}
      ${styleSizeMap[size].paddingHorizontal};
    height: ${styleSizeMap[size].height};
    border-radius: ${styleSizeMap[size].borderRadius};
  `}
`;
