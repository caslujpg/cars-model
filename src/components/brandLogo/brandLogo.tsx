import { useState } from "react";
import { Image } from "react-native";
import { CarIcon } from "../icons";
import * as S from "./brandLogo.styles";

type BrandLogoProps = {
  logoUrl: string;
};

export const BrandLogo = ({ logoUrl }: BrandLogoProps) => {
  const [hasImageError, setHasImageError] = useState(false);
  const [hasImageDefault, setHasImageDefault] = useState(true);

  return (
    <S.Container>
      {hasImageDefault && <CarIcon color="#000" size={20} />}

      {!hasImageError && (
        <Image
          onLoad={() => setHasImageDefault(false)}
          onError={() => setHasImageError(true)}
          source={{ uri: logoUrl }}
          width={hasImageDefault ? 0 : 32}
          height={hasImageDefault ? 0 : 32}
          resizeMode="contain"
        />
      )}
    </S.Container>
  );
};
