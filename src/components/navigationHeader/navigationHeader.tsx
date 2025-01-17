import { ArrowLeftIcon } from "@/src/components/icons";
import { navigation } from "@/src/lib/navigate";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { IconButton } from "../iconButton/iconButton";
import { Typography } from "../typography";
import * as S from "./navigationHeader.styles";

export const NavigationHeader: React.FC<NativeStackHeaderProps> = ({
  options,
}) => {
  const onBackPress = () => {
    navigation.goBack();
  };

  return (
    <S.Container>
      <IconButton
        onPress={onBackPress}
        color="none"
        icon={<ArrowLeftIcon size={20} />}
        variant="outline"
      />
      <S.TitleWrapper>
        <Typography color="gray5" variant="subTitle">
          {options.headerTitle as string}
        </Typography>
      </S.TitleWrapper>
    </S.Container>
  );
};
