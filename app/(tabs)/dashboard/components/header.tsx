import { Colors } from '@/constants/colors';
import { Fonts } from '@/constants/fonts';
import { StyleSheet} from 'react-native';
import { Text, View } from "react-native";
import Nav from './nav';

export default function Header() {
    return (
      <View style={styles.container}>
        <View style={styles.account}>
            <Text style={styles.accountText}>Cliente da Silva</Text>
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
});