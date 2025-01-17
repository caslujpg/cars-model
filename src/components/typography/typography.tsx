import { TextProps } from "react-native";
import * as S from "./typography.styles";

export type Variant =
  | "body"
  | "body2"
  | "caption"
  | "caption2"
  | "title"
  | "subTitle"
  | "subTitle2"
  | "display";

export type Color =
  | "primary"
  | "gray1"
  | "gray2"
  | "gray3"
  | "gray4"
  | "gray5"
  | "feedback.error";

export type Align = "center" | "left" | "right";

type TypographyProps = TextProps & {
  variant: Variant;
  color: Color;
  align?: Align;
};

export const Typography = ({
  variant,
  color,
  children,
  align = "left",
  ...rest
}: TypographyProps) => {
  return (
    <S.Container align={align} variant={variant} color={color} {...rest}>
      {children}
    </S.Container>
  );
};
