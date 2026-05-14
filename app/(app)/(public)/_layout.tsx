import { Stack } from "expo-router";
import React from "react";

const PublicLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "#fff",
          },
        }}
      />
      <Stack.Screen
        name="other-options"
        options={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "#fff",
          },
          presentation: "formSheet",
          title: "",
          headerShadowVisible: false,
          sheetAllowedDetents: [0.6],
          sheetCornerRadius: 16,
        }}
      />
    </Stack>
  );
};

export default PublicLayout;
