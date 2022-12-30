import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Login from './src/screens/Login';

export default function App() {
  return (
    <View> 
      <Login/>
      <StatusBar style="auto" />
    </View>
  );
}
 
