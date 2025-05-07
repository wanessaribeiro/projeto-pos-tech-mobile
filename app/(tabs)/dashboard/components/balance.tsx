import { Colors } from '@/constants/colors';
import { Fonts } from '@/constants/fonts';
import { imagePlacement } from '@/constants/styles';
import { useNavProvider } from '@/contexts/navContext';
import { Image, Pressable, StyleSheet} from 'react-native';
import { Text, View } from "react-native";

export default function Balance() {
  const {setOption} = useNavProvider();
  
    return (
        <View style={styles.container}>
          <Image source={require('@/assets/images/Pixels1.png')} style={imagePlacement.imageLeft}/>
          <Image source={require('@/assets/images/Pixels2.png')} style={imagePlacement.imageRight}/>
          <View style={styles.textContainerLeft}>
            <Text style={styles.title}>Olá, Cliente</Text>
            <Text style={styles.date}>Dia Semana, Data</Text>
          </View>
          <View style={styles.textContainerRight}>
            <View style={styles.balanceDecor}> <Text style={styles.balanceText}>Saldo</Text></View>
            <Text style={styles.accType}>Conta Corrente</Text>
            <Text style={styles.balance}>R$ 1500,00</Text>
            <Pressable onPress={()=>{setOption('invoices')}}>
              <Text style={styles.seeBalance}>Ver Extrato</Text>
            </Pressable>
          </View>
         </View>
    )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: Colors.primary.medium,
    flex: 2,
    alignItems: 'center',
    gap: 24,
    marginBottom: 30,
    borderRadius: 8,
    padding: 14,
    position: 'relative'
  },
  textContainerLeft: {
    position: 'absolute',
    left: 30,
    top: 30
  },
  textContainerRight: {
    position: 'absolute',
    right: 30,
    bottom: 20
  },
  balanceDecor:{
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: Colors.tertiary.medium
  },
  title: {
    color: 'white',
    fontSize: Fonts.size.h1,
    fontWeight: 'bold'
  },
  date: {
    color: 'white',
    fontSize: Fonts.size.small
  },
  balanceText: {
    color: 'white',
    fontSize: Fonts.size.standard,
    fontWeight: 'bold',
    alignSelf:'flex-end'
  },
  accType: {
    paddingTop: 10,
    color: 'white',
    fontSize: Fonts.size.standard,
  },
  balance: {
    color: 'white',
    fontSize: Fonts.size.large
  },
  seeBalance: {
    color: 'white',
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    fontSize: Fonts.size.small
  }
});