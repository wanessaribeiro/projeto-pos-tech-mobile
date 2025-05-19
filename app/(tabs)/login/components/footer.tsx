import { Fonts } from '@/libs/fonts';
import { StyleSheet} from 'react-native';
import { Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function FooterHome() {
    return (
      <View style={styles.container}>
        <View style={styles.footerSection}>
        <View style={styles.footer}>
            <Ionicons name="aperture" size={20} color={'white'}/>
            <Text style={styles.footerText}>ByteBank</Text>
         </View>
         <View style={styles.footer}>
            <Ionicons name="logo-instagram" size={30} color={'white'}/>
            <Ionicons name="logo-youtube" size={30} color={'white'}/>
            <Ionicons name="logo-whatsapp" size={30} color={'white'}/>
         </View>
         </View>
      </View>
        
    )
}

const styles = StyleSheet.create({
  container: {    
    backgroundColor: 'black',
    width: '100%',    
    flex: 0.5,
  },
  footerSection: {
    width: '100%',
    flexDirection: 'row', 
    alignItems: 'flex-end',
    marginTop: 20,
    gap: 70
  },
  footer: {
    flex: 2,
    flexDirection: 'row', 
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingEnd: 20,
    gap: 10
  },
  footerText: {
    color: 'white',
    fontSize: Fonts.size.small,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
});