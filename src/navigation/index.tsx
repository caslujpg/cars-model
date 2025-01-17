import { HomeHeader } from "@/src/components/homeHeader";
import { NavigationHeader } from "@/src/components/navigationHeader";
import { useSession } from "@/src/contexts/auth-context";
import { RoutesParamsList, RoutesRef } from "@/src/lib/navigate";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useLayoutEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { Details, Home, Login, Models, Onboard, Years } from "./screens";

const Stack = createNativeStackNavigator<RoutesParamsList>();

export function Navigation() {
  const [isOnboardAllreadyViewed, setIsOnboardAllreadyViewed] = useState(false);
  const { session, isLoading } = useSession();

  const isAuthenticated = !!session;

  useLayoutEffect(() => {
    (async () => {
      const isOnboardAllreadyViewed = await AsyncStorage.getItem(
        "isOnboardAllreadyViewed"
      );
      setIsOnboardAllreadyViewed(!!isOnboardAllreadyViewed);
    })();
  }, []);

  if (isLoading)
    return (
      <LoadingWrapper>
        <ActivityIndicator />
      </LoadingWrapper>
    );

  return (
    <NavigationContainer ref={RoutesRef}>
      {isAuthenticated ? (
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: (props) => <NavigationHeader {...props} />,
            contentStyle: { backgroundColor: "#000" },
          }}
        >
          <Stack.Screen
            name="Home"
            options={{ header: HomeHeader }}
            component={Home}
          />
          <Stack.Screen
            name="Models"
            options={{ headerTitle: "Modelos" }}
            component={Models}
          />
          <Stack.Screen
            name="Years"
            options={{ headerTitle: "Anos" }}
            component={Years}
          />
          <Stack.Screen
            name="Details"
            options={{ headerTitle: "Detalhes" }}
            component={Details}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "#000" },
          }}
        >
          {!isOnboardAllreadyViewed && (
            <Stack.Screen name="Onboard" component={Onboard} />
          )}
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const LoadingWrapper = styled.View`
  align-items: center;
  flex: 1%;
  justify-content: center;
`;
