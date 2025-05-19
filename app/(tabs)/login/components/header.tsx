import { Colors } from '@/libs/colors';
import { Fonts } from '@/libs/fonts';
import { StyleSheet} from 'react-native';
import { Text, View } from "react-native";
import NavHome from './navHome';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HeaderHome() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
            <Ionicons name="aperture" size={30} color={Colors.secondary.medium}/>
            <Text style={styles.titleText}>ByteBank</Text>
         </View>
         <NavHome/>
      </View>
        
    )
}

const styles = StyleSheet.create({
  container: {
    width: '100%', 
    backgroundColor: 'black',   
    flex: 1,
  },
  title: {
    width: '100%',
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingEnd: 20,
    marginBottom: 10,
    gap: 5
  },
  titleText: {
    color: Colors.secondary.medium,
    fontSize: Fonts.size.h1,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
});