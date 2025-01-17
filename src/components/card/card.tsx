import { ArrowRightIcon } from "@/src/components/icons";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Typography } from "../typography";
import * as S from "./card.styles";

type CardProps = TouchableOpacityProps & {
  label: string;
  icon?: React.ReactNode;
};

export const Card = ({ label, icon, ...rest }: CardProps) => {
  return (
    <TouchableOpacity {...rest}>
      <S.Container>
        <S.CardContent>
          {icon}
          <Typography variant="body" color="gray5">
            {label}
          </Typography>
        </S.CardContent>
        <ArrowRightIcon color="#999999" />
      </S.Container>
    </TouchableOpacity>
  );
};
