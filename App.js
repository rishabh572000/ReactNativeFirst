import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button, View, SafeAreaView, Text, Alert, Platform } from 'react-native';
import Home from './Componant/Home';
import Splash from './Componant/Splash';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
      {/* <Splash /> */}
      <Home />
      <Text style={styles.title}>
        Adjust the color in a way that looks standard on each platform. On  iOS, the color prop controls the color of the text. On Android, the color adjusts the background color of the button. mohan
      </Text>
    
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCE6DB',
    marginTop:Platform.OS=='android' ? 20:0,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
