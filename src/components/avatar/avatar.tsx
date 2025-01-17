import React, { ReactElement } from "react";
import { StyleProp, ViewStyle } from "react-native";

import { initialsName } from "@/src/utils/initialsName";
import * as S from "./avatar.styles";

type Props = {
  userName: string;
  style?: StyleProp<ViewStyle>;
};

export const Avatar = ({ userName, style }: Props): ReactElement => (
  <S.Container style={style}>
    <S.InnerWrap>
      <S.InitialsName>{initialsName(userName).toUpperCase()}</S.InitialsName>
    </S.InnerWrap>
  </S.Container>
);
