import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import * as S from "./iconButton.styles";

export type Variant = "solid" | "outline";

export type Color = "primary" | "none";

type IconButtonProps = TouchableOpacityProps & {
  variant: Variant;
  color: Color;
  icon: React.ReactNode;
};

export const IconButton = ({
  color,
  variant,
  icon,
  ...rest
}: IconButtonProps) => {
  return (
    <TouchableOpacity {...rest}>
      <S.Container variant={variant} color={color}>
        {icon}
      </S.Container>
    </TouchableOpacity>
  );
};
