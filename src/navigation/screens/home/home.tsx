import { BrandLogo } from "@/src/components/brandLogo";
import { Card, CardSkeleton } from "@/src/components/card";
import { SearchIcon } from "@/src/components/icons";
import { Input } from "@/src/components/input";
import { PageContainer } from "@/src/components/pageContainer";
import { Typography } from "@/src/components/typography";
import { useSession } from "@/src/contexts/auth-context";
import { useListBrands } from "@/src/hooks/useListBrands";
import React, { useState } from "react";
import { FlatList } from "react-native";
import * as S from "./home.styles";

export function Home({ navigation }: { navigation: any }) {
  const [searchText, setSearchText] = useState("");
  const { brands, error, isLoading } = useListBrands();
  const { session } = useSession();
  const handleModelNavigation = (brandCode: string, brandName: string) => {
    navigation.navigate("Models", { brandCode, brandName });
  };

  const filteredBrands = brands.filter((brand) =>
    brand.name.toLowerCase().includes(searchText.toLowerCase())
  );

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
        <Typography color="gray4" variant="display">
          Olá,{" "}
          <Typography color="gray5" variant="display">
            {session?.name}
          </Typography>
        </Typography>
        <Typography color="gray4" variant="body">
          Aqui você pode escolher ou buscar por uma marca de carro.
        </Typography>
      </S.HeaderContainer>

      <S.ContentWrapper>
        <Input
          variant="text"
          placeholder="Pesquisar marcas"
          value={searchText}
          iconLeft={<SearchIcon />}
          onChangeText={setSearchText}
        />

        {isLoading ? (
          <CardSkeleton />
        ) : (
          <FlatList
            data={filteredBrands}
            keyExtractor={(brand) => brand.code}
            renderItem={({ item: brand }) => (
              <Card
                icon={
                  <BrandLogo
                    logoUrl={`https://www.carlogos.org/car-logos/${brand.name.toLowerCase().replace(" ", "-")}-logo.png`}
                  />
                }
                label={brand.name}
                onPress={() => handleModelNavigation(brand.code, brand.name)}
              />
            )}
          />
        )}
      </S.ContentWrapper>
    </PageContainer>
  );
}
