import * as S from "./pageContainer.styles";

type PageContainerProps = {
  children: React.ReactNode;
};

export const PageContainer = ({ children }: PageContainerProps) => {
  return <S.Container>{children}</S.Container>;
};
