import { StyleSheet} from 'react-native';
import {  Image, Text, View } from "react-native";
import ButtonApp from '@/components/button';
import { useNavProvider } from '@/contexts/navContext';
import { Fonts } from '@/libs/fonts';
import { imagePlacement } from '@/libs/styles';

export default function ErrorScreen() {
  const {setOption} = useNavProvider(); 

    return (
      <View style={styles.body}>
        <Image source={require('@/assets/images/Pixels1.png')} style={imagePlacement.imageLeft}/>
        <Image source={require('@/assets/images/Pixels2.png')} style={imagePlacement.imageRight}/>
        <Image source={require('@/assets/images/404Img.png')} style={styles.image}/>

        <Text style={styles.title}>Ops! Não encontramos a página...</Text>
        <Text style={styles.text}> E olha que exploramos o universo procurando por ela!</Text>
        <Text style={styles.text}>Que tal voltar e tentar novamente?</Text>
        <ButtonApp title={'Voltar ao início'} type={'tertiary'} onClick={() => setOption('home-screen')}/>
      </View>
    )
}

const styles = StyleSheet.create({
  body: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 12,
    paddingBottom: 100
  },
  title: {
    color: 'white',
    fontSize: Fonts.size.standard,
    fontWeight: 'bold'
  },
  text: {
    color: 'white',
    fontSize: Fonts.size.small,
    fontWeight: 'bold'
  },
  image: {
    width: 350,
    height: 260,
    position: 'absolute',
    top: 150
  },
});