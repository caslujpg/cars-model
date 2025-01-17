import { Card, CardSkeleton } from "@/src/components/card";
import { PageContainer } from "@/src/components/pageContainer";
import { Typography } from "@/src/components/typography";
import { useListYears } from "@/src/hooks/useListYears";
import { navigation } from "@/src/lib/navigate";
import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { FlatList } from "react-native";
import * as S from "./years.styles";

type RouteParams = RouteProp<{
  params: {
    brandCode: string;
    modelCode: string;
    yearCode: string;
  };
}>;

export function Years() {
  const {
    params: { brandCode, modelCode },
  } = useRoute<RouteParams>();
  const { years, error, isLoading } = useListYears({
    brandCode,
    modelCode,
  });

  const handleDetailsNavigation = (yearCode: string) => {
    navigation.navigate("Details", {
      brandCode,
      modelCode,
      yearCode,
    });
  };

  if (error) {
    return (
      <Typography align="center" color="feedback.error" variant="title">
        {error}
      </Typography>
    );
  }
  return (
    <PageContainer>
      <S.HeaderContainer>
        <Typography color="gray4" variant="body">
          Aqui você pode escolher pelo ano do modelo.
        </Typography>
      </S.HeaderContainer>
      {isLoading ? (
        <CardSkeleton />
      ) : (
        <FlatList
          data={years}
          keyExtractor={(year) => year.code}
          renderItem={({ item: year }) => (
            <Card
              label={year.name}
              onPress={() => handleDetailsNavigation(year.code)}
            />
          )}
        />
      )}
    </PageContainer>
  );
}
