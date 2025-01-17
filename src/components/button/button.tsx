import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { Typography } from "../typography";
import * as S from "./button.styles";

export type Variant = "solid";

export type Color = "primary" | "gray2";

export type Size = "sm" | "md";

type ButtonProps = TouchableOpacityProps & {
  variant: Variant;
  color: Color;
  size: Size;
  isLoading?: boolean;
};

const typographyColorByColorMap = {
  primary: "gray1",
  gray2: "gray4",
} as const;

const typographyVariantBySizeMap = {
  sm: "caption2",
  md: "body2",
} as const;

export const Button = ({
  variant,
  color,
  size,
  isLoading,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <TouchableOpacity {...rest}>
      <S.Container variant={variant} color={color} size={size}>
        <Typography
          variant={typographyVariantBySizeMap[size]}
          color={typographyColorByColorMap[color]}
        >
          {isLoading ? <ActivityIndicator /> : children}
        </Typography>
      </S.Container>
    </TouchableOpacity>
  );
};
