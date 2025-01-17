import { BrandLogo } from "@/src/components/brandLogo";
import { CalendarIcon, CarIcon, GasIcon } from "@/src/components/icons";
import { PageContainer } from "@/src/components/pageContainer";
import { Typography } from "@/src/components/typography";
import { useDetails } from "@/src/hooks/useDetails";
import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { ActivityIndicator } from "react-native";
import * as S from "./details.styles";

type RouteParams = RouteProp<{
  params: {
    brandCode: string;
    modelCode: string;
    yearCode: string;
  };
}>;

export function Details() {
  const {
    params: { brandCode, modelCode, yearCode },
  } = useRoute<RouteParams>();
  const { details, error, isLoading } = useDetails({
    brandCode,
    modelCode,
    yearCode,
  });

  if (error) {
    return (
      <Typography align="center" color="feedback.error" variant="title">
        {error}
      </Typography>
    );
  }

  if (!details || isLoading) {
    return (
      <PageContainer>
        <ActivityIndicator />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <S.HeaderContainer>
        <BrandLogo
          logoUrl={`https://www.carlogos.org/car-logos/${details.brand.toLowerCase().replace(" ", "-")}-logo.png`}
        />

        <Typography variant="title" color="gray5">
          {details.brand}
        </Typography>

        <S.HeaderSubTitleContainer>
          <Typography variant="subTitle" color="gray5">
            {details.model}
          </Typography>

          <Typography variant="caption" color="gray4">
            Código fipe: {details.fipeCode}
          </Typography>
        </S.HeaderSubTitleContainer>
      </S.HeaderContainer>

      <S.CardContainer>
        <S.CardHeader>
          <Typography color="gray4" variant="caption">
            Valor na fipe:
          </Typography>
          <Typography color="gray5" variant="subTitle2">
            {details.value}
          </Typography>
        </S.CardHeader>

        <S.CardContent>
          <S.CardContentItem>
            <CarIcon size={20} />
            <Typography variant="body" color="gray5">
              {details.vehicleType}
            </Typography>
            <Typography variant="caption" color="gray4">
              Tipo
            </Typography>
          </S.CardContentItem>

          <S.CardDivider />

          <S.CardContentItem>
            <GasIcon size={20} />
            <Typography variant="body" color="gray5">
              {details.fuelType}
            </Typography>
            <Typography variant="caption" color="gray4">
              Combustível
            </Typography>
          </S.CardContentItem>

          <S.CardDivider />

          <S.CardContentItem>
            <CalendarIcon size={20} />
            <Typography variant="body" color="gray5">
              {details.yearModel}
            </Typography>
            <Typography variant="caption" color="gray4">
              Ano
            </Typography>
          </S.CardContentItem>
        </S.CardContent>
      </S.CardContainer>
    </PageContainer>
  );
}
