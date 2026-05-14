import {
  Nunito_400Regular,
  Nunito_700Bold,
  Nunito_900Black,
} from "@expo-google-fonts/nunito";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 100 * 60 * 5,
      retry: 1,
    },
  },
});

export default function RootLayout() {
  const [loaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
    Nunito_900Black,
  });
  if (!loaded) return null;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={client}>
        <Slot />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
