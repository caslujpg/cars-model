import ShimmerPlaceholder from "react-native-shimmer-placeholder";
import styled from "styled-components/native";

export const SkeletonContainer = styled.View`
  padding: 16px;
  border-width: 1px;
  border-color: #26282a;
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const SkeletonContent = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const SkeletonCircle = styled(ShimmerPlaceholder).attrs(() => ({
  shimmerStyle: { width: 24, height: 24, borderRadius: 12 },
}))``;

export const SkeletonText = styled(ShimmerPlaceholder).attrs(() => ({
  shimmerStyle: { width: 150, height: 16, borderRadius: 8 },
}))``;

export const SkeletonArrow = styled(ShimmerPlaceholder).attrs(() => ({
  shimmerStyle: { width: 16, height: 16, borderRadius: 8 },
}))``;
