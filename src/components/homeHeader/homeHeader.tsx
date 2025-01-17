import { Avatar } from "@/src/components/avatar";
import { IconButton } from "@/src/components/iconButton";
import { LogoutIcon } from "@/src/components/icons";
import { useSession } from "@/src/contexts/auth-context";
import { Alert } from "react-native";
import * as S from "./homeHeader.styles";

export const HomeHeader = () => {
  const { session, signOut } = useSession();
  if (!session) return null;

  const onLogoutClick = () => {
    Alert.alert("Deseja realmente sair da aplicação?", "", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        style: "destructive",
        onPress: signOut,
      },
    ]);
  };

  return (
    <S.Container>
      <Avatar userName={session.name} />
      <IconButton
        onPress={onLogoutClick}
        variant="outline"
        color="none"
        icon={<LogoutIcon size={20} />}
      />
    </S.Container>
  );
};
