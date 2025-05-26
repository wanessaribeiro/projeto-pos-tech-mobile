import { Colors } from '@/libs/colors';
import { Fonts } from '@/libs/fonts';
import { Pressable, StyleSheet} from 'react-native';
import { Text, View } from "react-native";
import { useAccountProvider } from '@/contexts/accountContext';
import Nav from './dashboardNav';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { useNavProvider } from '@/contexts/navContext';

export default function Header() {
    const {setOption} = useNavProvider(); 
    const {account} = useAccountProvider();
    const router = useRouter();

    const onPressLogout = () => {
      setOption('home')
      router.navigate('/')
    }

    return (
      <View style={styles.container}>
        <View style={styles.account}>
          <View style={styles.exit}>
          <Pressable onPress={() => setOption('account')}> 
            <Text style={styles.accountText}>{account.name}</Text>
          </Pressable>
            <Pressable onPress={() => onPressLogout()}>
                  <Ionicons name="exit-outline" size={25} color={Colors.tertiary.medium} />
            </Pressable> 
          </View>
         </View>
         <Nav/>
      </View>
        
    )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',    
    flex: 1,
  },
  account: {
    width: '100%',
    backgroundColor: Colors.primary.medium,
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingEnd: 20,
    marginBottom: 10,
  },
  accountText: {
    color: 'white',
    fontSize: Fonts.size.small,
  },
  exit: {
    flexDirection: 'row',
    gap: 12
  }
});