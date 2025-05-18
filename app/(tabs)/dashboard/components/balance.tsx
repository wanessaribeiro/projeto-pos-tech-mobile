import { Colors } from '@/libs/colors';
import { Fonts } from '@/libs/fonts';
import { imagePlacement } from '@/libs/styles';
import { useNavProvider } from '@/contexts/navContext';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Image, Pressable, StyleSheet} from 'react-native';
import { Text, View } from "react-native";
import { formatDate } from '@/libs/sharedFunctions';
import { daysOfTheWeek } from '@/libs/enums';
import { useAccountProvider } from '@/contexts/accountContext';

export default function Balance() {
  const {setOption} = useNavProvider();
  const {account, balance} = useAccountProvider();
  const [isEyeClosed, setIsEyeClosed] = useState(false);
  const dayWeek = daysOfTheWeek[new Date().getDay()];
  const todaysDate = formatDate(new Date());
  
  const onPressBalance = () => {
    const closeEye = !isEyeClosed
    setIsEyeClosed(closeEye)
  }
  
    return (
        <View style={styles.container}>
          <Image source={require('@/assets/images/Pixels1.png')} style={imagePlacement.imageLeft}/>
          <Image source={require('@/assets/images/Pixels2.png')} style={imagePlacement.imageRight}/>
          <View style={styles.textContainerLeft}>
            <Text style={styles.title}>Olá, {account.name}</Text>
            <Text style={styles.date}>{`${dayWeek}, ${todaysDate}`}</Text>
          </View>
          <View style={styles.textContainerRight}>
            <View style={styles.balanceDecor}> 
              <Text style={styles.balanceText}>Saldo</Text>
              <Pressable onPress={() => onPressBalance()} style={styles.iconButton}>
                {isEyeClosed ? (
                  <Ionicons name="eye-off" size={25} color={Colors.tertiary.medium} />
                ) : (
                  <Ionicons name="eye" size={25} color={Colors.tertiary.medium} />
                )}
              </Pressable> 
            </View>
            <Text style={styles.accType}>{account.type}</Text>
            {isEyeClosed ? (
                  <Text style={styles.balance}>R$   {String(balance).replace(/./g, '*')}</Text>
                ) : (
                  <Text style={styles.balance}>R$ {balance}</Text>
            )}
            
            <Pressable onPress={()=>{setOption('invoices')}}>
              <Text style={styles.seeInvoices}>Ver Extrato</Text>
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
    borderBottomColor: Colors.tertiary.medium,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
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
  seeInvoices: {
    color: 'white',
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    fontSize: Fonts.size.small
  },
  iconButton: {
    paddingLeft: 18,
  },
});