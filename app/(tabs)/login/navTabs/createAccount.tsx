import { StyleSheet, TextInput} from 'react-native';
import {  Image, Text, View } from "react-native";
import ButtonApp from '@/components/button';
import { useNavProvider } from '@/contexts/navContext';
import { Fonts } from '@/libs/fonts';
import { Colors } from '@/libs/colors';

export default function CreateAccount() {
  const {setOption} = useNavProvider(); 

    return (
      <View style={styles.body}>
        <Image source={require('@/assets/images/AccountImg.png')} style={styles.image}/>

        <Text style={styles.title}>Preencha para criar sua conta:</Text>
        <View style={styles.login}>
        <Text style={styles.text}> Nome</Text>
          <TextInput
            style={styles.input}
            onChangeText={() => {}}
            value={''}
            placeholder="Digite seu nome completo"
            keyboardType="default"

          />
          <Text style={styles.text}> Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={() => {}}
            value={''}
            placeholder="Digite seu email"
            keyboardType="email-address"

          />
          <Text style={styles.text}>Senha</Text>
          <TextInput
            style={styles.input}
            onChangeText={() => {}}
            value={''}
            placeholder="Digite sua senha"
            keyboardType="visible-password"

          />
        </View>
        <ButtonApp title={'Criar conta'} type={'tertiary'} onClick={() => setOption('home')}/>
      </View>
    )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.gray.light,
    width: '100%',
    flex: 5.5,
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 16,
    paddingBottom: 30
  },
  login: {
    gap: 12,
    width: '75%',
    alignItems: 'flex-start'
  },
  title: {
    color: 'black',
    fontSize: Fonts.size.h2,
    fontWeight: 'bold'
  },
  text: {
    color: 'black',
    fontSize: Fonts.size.small,
    fontWeight: 'bold'
  },
  image: {
    width: 325,
    height: 240,
    position: 'absolute',
    top: 30
  },
  input: {
    backgroundColor: 'white',
    color: Colors.gray.medium,
    fontSize: Fonts.size.small,
    width: '100%',
    height: 48,
    margin: 0,
    borderColor: Colors.gray.medium,
    borderWidth: 1,    
    padding: 10,
    paddingHorizontal: 25,
  },
});