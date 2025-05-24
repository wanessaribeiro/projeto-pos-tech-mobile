import { StyleSheet, TextInput} from 'react-native';
import {  Image, Text, View } from "react-native";
import ButtonApp from '@/components/button';
import { useNavProvider } from '@/contexts/navContext';
import { Fonts } from '@/libs/fonts';
import { Colors } from '@/libs/colors';
import { useRouter } from 'expo-router';

export default function Login() {
  const {setOption} = useNavProvider(); 
  const router = useRouter()

  const onCLickLogin = () => {
    setOption('home')
    router.navigate('/dashboard')
  }

    return (
      <View style={styles.body}>
        <Image source={require('@/assets/images/LoginImg.png')} style={styles.image}/>

        <Text style={styles.title}>Login</Text>
        <View style={styles.login}>
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
        <ButtonApp title={'Acessar'} type={'secondary'} onClick={() => onCLickLogin()}/>
      </View>
    )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.gray.light,
    width: '100%',
    flex: 5,
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 16,
    paddingBottom: 100
  },
  login: {
    gap: 12,
    width: '60%',
    alignItems: 'flex-start'
  },
  title: {
    color: 'black',
    fontSize: Fonts.size.h1,
    fontWeight: 'bold'
  },
  text: {
    color: 'black',
    fontSize: Fonts.size.small,
    fontWeight: 'bold'
  },
  image: {
    width: 300,
    height: 260,
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