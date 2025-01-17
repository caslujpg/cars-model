import React, { useState } from "react";
import { TextInputProps, View } from "react-native";
import { Button } from "../button/button";
import { Typography } from "../typography";
import * as S from "./input.styles";

type Variant = "text" | "password";

type InputProps = TextInputProps & {
  variant: Variant;
  iconLeft?: React.ReactNode;
  label?: string;
};

export const Input = ({ variant, iconLeft, label, ...rest }: InputProps) => {
  const [isHiddenText, setIsHiddenText] = useState(variant === "password");

  return (
    <View>
      {!!label && (
        <Typography variant="caption" color="gray4">
          {label}
        </Typography>
      )}
      <S.InputSection>
        {iconLeft}
        <S.InputText
          {...rest}
          secureTextEntry={isHiddenText}
          placeholderTextColor="#999999"
        />
        {variant === "password" && (
          <Button
            color="gray2"
            size="sm"
            variant="solid"
            onPress={() => setIsHiddenText(!isHiddenText)}
          >
            {isHiddenText ? "Mostrar" : "Esconder"}
          </Button>
        )}
      </S.InputSection>
    </View>
  );
};
