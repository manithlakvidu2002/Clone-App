import { Tabs } from 'expo-router';

export default function RootLayout() {
  return (
    <Tabs screenOptions={{headerShown:false}}>
      <Tabs.Screen 
        name="homePage" 
        options={{ headerShown: false }} 
      />
      <Tabs.Screen 
        name="explorePage" 
        options={{ headerShown: false }} 
      />
    </Tabs>
  );
}
