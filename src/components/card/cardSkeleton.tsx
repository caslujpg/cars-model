import * as S from "./cardSkeleton.styles";

export const CardSkeleton = () => {
  return (
    <S.SkeletonContainer>
      <S.SkeletonContent>
        <S.SkeletonCircle />
        <S.SkeletonText />
      </S.SkeletonContent>
      <S.SkeletonArrow />
    </S.SkeletonContainer>
  );
};
