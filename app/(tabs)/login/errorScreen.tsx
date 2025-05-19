import { Colors } from '@/libs/colors';
import { StyleSheet} from 'react-native';
import {  Text, View } from "react-native";
import ButtonApp from '@/components/button';
import FooterHome from './components/footer';
import HeaderHome from './components/header';

export default function ErrorScreen() {

    return (
        <View style={styles.container}>
            <HeaderHome/>
            <View style={styles.body}>
                <Text>Ops! Não encontramos a página...</Text>
                <Text> E olha que exploramos o universo procurando por ela!</Text>
                <Text>Que tal voltar e tentar novamente?</Text>
                <ButtonApp title={'Voltar ao início'} type={'tertiary'}/>
            </View>
            <FooterHome/>
         </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary.light,
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 5
  }
});