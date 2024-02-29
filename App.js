import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import ElevatedCards from './components/ElevatedCards'
import SocialCards from './components/SocialCards'

const PlaceholderImage = require('./assets/abc.jpg');

export default function App() {

  const [fontsLoaded] = useFonts({
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf')
  })
  return (
    <View style={styles.container}>
      <Image source={PlaceholderImage} style={styles.image}/>
      <Text style={styles.heading}>ANKIT KUMAR</Text>
      <Text style={styles.textBio}>Software Engineer with a tint of art and film-making</Text>
      <Text style={styles.textChild1}>Languages and Frameworks</Text>
      <ElevatedCards style={{ height: 100 }}/>
      <Text style={styles.textChild2}>Socials</Text>
      <SocialCards style={{ maxheight: 200 }}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#02020A',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading:{
    color: '#ffffff',
    fontSize: 37,
    paddingTop: 30,
    paddingBottom: 10,
    fontFamily: 'Montserrat-Bold'
  },
  textBio: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFFFFF',
    marginBottom: 70
  },
  textChild1: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFFFFF',
    marginTop: 40,
    marginBottom: 10
  },
  textChild2: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFFFFF',
    marginBottom: 0
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: 60,
  },
});
