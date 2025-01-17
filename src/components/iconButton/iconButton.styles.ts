import styled, { css } from "styled-components/native";
import { Color, Variant } from "./iconButton";

type ContainerProps = {
  color: Color;
  variant: Variant;
};

const stylesByVariantMap = {
  solid: {
    borderWidth: "0px",
    borderColor: "transparent",
  },
  outline: {
    borderWidth: "1px",
    borderColor: "rgba(255, 255, 255, 0.5)",
  },
};

const colorMap = {
  primary: "#FAFF00",
  none: "transparent",
};

export const Container = styled.View<ContainerProps>`
  ${({ color, variant }: ContainerProps) => css`
    border-width: ${stylesByVariantMap[variant].borderWidth};
    border-color: ${stylesByVariantMap[variant].borderColor};
    background-color: ${variant === "solid" ? colorMap[color] : colorMap.none};
    border-radius: 9999px;
    padding: 12px;
  `}
`;
