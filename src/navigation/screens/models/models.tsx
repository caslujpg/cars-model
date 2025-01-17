import { Card, CardSkeleton } from "@/src/components/card";
import { SearchIcon } from "@/src/components/icons";
import { Input } from "@/src/components/input";
import { PageContainer } from "@/src/components/pageContainer";
import { Typography } from "@/src/components/typography";
import { useListCarsByBrandCode } from "@/src/hooks/useListCarsByBrandCode";
import { navigation } from "@/src/lib/navigate";
import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList } from "react-native";
import * as S from "./models.style";

type RouteParams = RouteProp<{
  params: {
    brandCode: string;
    brandName: string;
  };
}>;

export function Models() {
  const { params } = useRoute<RouteParams>();
  const [searchText, setSearchText] = useState("");
  const { cars, error, isLoading } = useListCarsByBrandCode(params.brandCode);

  const filteredModels = cars.filter((model) =>
    model.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleYearNavigation = (modelCode: string) => {
    navigation.navigate("Years", { brandCode: params.brandCode, modelCode });
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
          Aqui você pode escolher ou buscar por um modelo de carro da marca{" "}
          <Typography color="gray5" variant="body">
            {params.brandName}
          </Typography>
          .
        </Typography>
      </S.HeaderContainer>

      <S.ContentWrapper>
        <Input
          variant="text"
          placeholder="Pesquisar modelos"
          value={searchText}
          iconLeft={<SearchIcon />}
          onChangeText={setSearchText}
        />

        {isLoading ? (
          <CardSkeleton />
        ) : (
          <FlatList
            data={filteredModels}
            keyExtractor={(car) => car.code}
            renderItem={({ item: car }) => (
              <Card
                label={car.name}
                onPress={() => handleYearNavigation(car.code)}
              />
            )}
          />
        )}
      </S.ContentWrapper>
    </PageContainer>
  );
}
