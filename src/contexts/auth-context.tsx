import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import * as SplashScreen from "expo-splash-screen";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type Session = {
  id: number;
  name: string;
  token: string;
};

type Credential = {
  user: string;
  password: string;
};

type AuthContextProps = {
  signIn: (credential: Credential) => Promise<{
    error: true;
    message: string;
  } | void>;
  signOut: () => void;
  session?: Session | null;
  isLoading: boolean;
};

const initialState: AuthContextProps = {
  signIn: async () => {},
  signOut: () => null,
  session: null,
  isLoading: false,
};

const AuthContext = createContext<AuthContextProps>(initialState);

export function SessionProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  if (!loading) SplashScreen.hide();

  useEffect(() => {
    (async function loadSession() {
      const currentSession = await AsyncStorage.getItem("session");
      const jsonValue = currentSession ? JSON.parse(currentSession) : null;
      setSession(jsonValue);
      setLoading(false);
    })();
  }, []);

  const handleSignIn = useCallback(async ({ user, password }: Credential) => {
    try {
      const response = await axios.post(
        "https://test-api-y04b.onrender.com/signIn",
        {
          user,
          password,
        }
      );

      setSession(response.data.user);

      await AsyncStorage.setItem("session", JSON.stringify(response.data.user));

      return response.data.user;
    } catch (e: any) {
      return {
        error: true,
        message: e.response?.data?.message || "Ocorreu um erro na autenticação",
      };
    }
  }, []);

  const handleSignOut = useCallback(async () => {
    setSession(null);
    await AsyncStorage.removeItem("session");
  }, []);

  return (
    <AuthContext.Provider
      value={{
        session,
        isLoading: loading,
        signIn: handleSignIn,
        signOut: handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useSession() {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error("useSession must be wrapped in a SessionProvider");
  }

  return value;
}
