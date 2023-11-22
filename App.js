import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
const logoImg = require('./assets/abooj.png');

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={{ width: 300, height: 300 }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
