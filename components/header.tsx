import { Colors } from '@/libs/colors';
import { Fonts } from '@/libs/fonts';
import { Pressable, StyleSheet} from 'react-native';
import { Text, View } from "react-native";
import NavHome from './navHome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavProvider } from '@/contexts/navContext';

export default function HeaderHome() {
  const {setOption} = useNavProvider(); 

    return (
      <View style={styles.container}>
        <Pressable style={styles.title} onPress={() => setOption('home')}>
            <Ionicons name="aperture" size={30} color={Colors.secondary.medium}/>
            <Text style={styles.titleText}>ByteBank</Text>
         </Pressable>
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