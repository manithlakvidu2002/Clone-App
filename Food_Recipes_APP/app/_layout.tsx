import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
      <Stack.Screen name="myPages/verificationPage" options={{ headerShown: false }}/>
      <Stack.Screen name="myPages/signUpPage" options={{ headerShown: false }}/>
      <Stack.Screen name="myPages/homePage" options={{ headerShown: false }}/>

    </Stack>
  );
}
