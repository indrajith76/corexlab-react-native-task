import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View } from "react-native";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{ 
          headerShown: false
         }}
      >
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarStyle: {
              display: "none",
            },
            tabBarButton: () => null,
            tabBarVisible: false,
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon:()=>{
              return (
                <Image
                style={{width:18, height:18}}
                 source={require("./assets/icons/home.png")} />
              )
            }
          }}
        />
        <Tab.Screen
          name="Saloon"
          component={Home}
          options={{
            tabBarIcon:()=>{
              return (
                <Image
                style={{width:18, height:18}}
                 source={require("./assets/icons/chair.png")} />
              )
            }
          }}
        />
        <Tab.Screen
          name="Account"
          component={Home}
          options={{
            tabBarIcon:()=>{
              return (
                <Image
                style={{width:18, height:18}}
                 source={require("./assets/icons/user.png")} />
              )
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
