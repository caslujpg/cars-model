import { IconButton } from "@/src/components/iconButton/iconButton";
import { ArrowRightIcon } from "@/src/components/icons";
import { Typography } from "@/src/components/typography";
import { navigation } from "@/src/lib/navigate";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import * as S from "./onboard.styles";

export const Onboard = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextClick = async () => {
    if (currentStep === 0) {
      setCurrentStep(1);
      return;
    }
    await AsyncStorage.setItem("isOnboardAllreadyViewed", "true");
    navigation.navigate("Login");
  };

  const steps = [
    {
      background: require("@/src/assets/onb-first-step.png"),
      title: (
        <Typography color="primary" variant="display">
          Simples{" "}
          <Typography color="gray5" variant="display">
            e na palma da sua mão
          </Typography>
        </Typography>
      ),
      description: (
        <Typography color="gray5" variant="body">
          Encontre facilmente qualquer carro e fique por dentro de todos os
          detalhes.
        </Typography>
      ),
    },
    {
      background: require("@/src/assets/onb-second-step.png"),
      title: (
        <Typography color="gray5" variant="display">
          Consulte em poucos{" "}
          <Typography color="primary" variant="display">
            poucos segundos
          </Typography>
        </Typography>
      ),
      description: (
        <Typography color="gray5" variant="body">
          Veja a tabela fipe, motor, tipo e demais informações.
        </Typography>
      ),
    },
  ];

  return (
    <S.Container>
      <S.Background source={steps[currentStep].background} resizeMode="cover">
        <S.Content>
          <S.Pagination>
            {steps.map((_, index) => (
              <S.Dot key={index} active={index === currentStep} />
            ))}
          </S.Pagination>
          <S.InnerContent>
            {steps[currentStep].title}
            <S.DescriptionWrapper>
              <S.DescriptionTextWrapper>
                {steps[currentStep].description}
              </S.DescriptionTextWrapper>
              <IconButton
                onPress={handleNextClick}
                color="primary"
                icon={<ArrowRightIcon color="#000" />}
                variant="solid"
              />
            </S.DescriptionWrapper>
          </S.InnerContent>
        </S.Content>
      </S.Background>
    </S.Container>
  );
};
