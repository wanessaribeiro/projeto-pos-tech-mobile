import { Colors } from '@/libs/colors';
import { Image, StyleSheet} from 'react-native';
import {  Text, View } from "react-native";
import ButtonApp from '@/components/button';
import { Fonts } from '@/libs/fonts';
import { imagePlacement } from '@/libs/styles';
import FooterHome from './components/footer';
import HeaderHome from './components/header';

export default function Home() {

    return (
        <View style={styles.container}>
            <HeaderHome/>
            <View style={styles.body}>
                <Image source={require('@/assets/images/BannerImg.png')} style={styles.image}/>
                <Image source={require('@/assets/images/Pixels1.png')} style={imagePlacement.imageLeft}/>

                <Text style={styles.text}>Experimente mais liberdade no controle da sua vida financeira. </Text>
                <Text style={styles.text}>Crie sua conta com a gente!</Text>
                <ButtonApp title={'Quero abrir uma conta'} type={'tertiary'}/>
            </View>
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