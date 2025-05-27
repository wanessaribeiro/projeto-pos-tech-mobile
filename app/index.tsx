import { Colors } from '@/libs/colors';
import {StyleSheet} from 'react-native';
import { View } from "react-native";
import { Fonts } from '@/libs/fonts';
import { useNavProvider } from '@/contexts/navContext';
import HeaderHome from '@/components/header';
import FooterHome from '@/components/footer';
import CreateAccount from '@/homeNavTabs/createAccount';
import ErrorScreen from '@/homeNavTabs/errorScreen';
import HomeScreen from '@/homeNavTabs/homeScreen';
import Login from '@/homeNavTabs/login';
import { useNavigation } from 'expo-router';
import { useEffect } from 'react';

export default function Home() {
    const navigation = useNavigation();
  
    useEffect(() => {
      navigation.setOptions({ headerShown: false });
    }, [navigation]);
     
  const {option} = useNavProvider();
  const menuContent: {[key: string]: React.JSX.Element} = {
      'home': <HomeScreen/>,
      'login': <Login/>,
      'create-account': <CreateAccount/>,
      'about': <ErrorScreen/>,
      'services': <ErrorScreen/>
  } 

    return (
        <View style={styles.container}>
            <HeaderHome/>
              {menuContent[option]}
            <FooterHome/>
         </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary.medium,
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 40,
    paddingBottom: 100
  },
  text: {
    color: 'white',
    fontSize: Fonts.size.h2,
    fontWeight: 'bold'
  },
  image: {
    width: 350,
    height: 250,
    position: 'absolute',
    top: 50
  },
});