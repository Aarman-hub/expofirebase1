import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import IndexNav from './navigations';
import LoginScreen from './screens/auth/LoginScreen';


export default function App() {
  return (
    // <IndexNav />
    <LoginScreen />    
  );
}

