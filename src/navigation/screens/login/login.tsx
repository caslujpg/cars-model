import { Button } from "@/src/components/button/button";
import { Input } from "@/src/components/input";
import { Typography } from "@/src/components/typography";
import { useSession } from "@/src/contexts/auth-context";
import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as S from "./login.styles";

interface IFormInput {
  user: string;
  password: string;
}

export function Login() {
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      user: "teste",
      password: "123",
    },
  });

  const { signIn } = useSession();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setLoading(true);
    const response = await signIn({ user: data.user, password: data.password });
    setLoading(false);
    if (response?.error) {
      setError(response?.message);
      return;
    }
  };

  return (
    <S.Container>
      <S.HeaderContainer>
        <Typography color="gray5" variant="display">
          Bem-vindo,
        </Typography>
        <Typography color="gray5" variant="body">
          Entre com seu usuário e senha para acessar os carros disponíveis.
        </Typography>
      </S.HeaderContainer>

      <S.FormContainer>
        <S.FormInputsContainer>
          <Controller
            name="user"
            control={control}
            render={({ field }) => (
              <Input
                variant="text"
                label="Usuário"
                value={field.value}
                onChangeText={field.onChange}
                placeholder="Digite seu usuário"
                editable={!loading}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                variant="password"
                label="Senha"
                value={field.value}
                onChangeText={field.onChange}
                placeholder="Digite sua senha"
                editable={!loading}
              />
            )}
          />
        </S.FormInputsContainer>
        {error && (
          <Typography color="feedback.error" variant="body">
            {error}
          </Typography>
        )}
        <Button
          color="primary"
          variant="solid"
          size="md"
          isLoading={loading}
          disabled={loading}
          onPress={handleSubmit(onSubmit)}
        >
          Entrar
        </Button>
      </S.FormContainer>
    </S.Container>
  );
}
