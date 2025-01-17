import { createNavigationContainerRef } from "@react-navigation/native";

export type RoutesParamsList = {
  Onboard: undefined;
  Login: undefined;
  Home: undefined;
  Models: { brandCode: string; brandName: string };
  Years: { brandCode: string; modelCode: string };
  Details: { brandCode: string; modelCode: string; yearCode: string };
};

export const RoutesRef = createNavigationContainerRef<RoutesParamsList>();

function navigate(name: keyof RoutesParamsList, params?: any) {
  if (RoutesRef.isReady()) {
    RoutesRef.navigate(name, params);
  }
}

function goBack() {
  if (RoutesRef.isReady() && RoutesRef.canGoBack()) {
    RoutesRef.goBack();
  }
}

export const navigation = { navigate, goBack };
