import { Colors } from '@/libs/colors';
import { Fonts } from '@/libs/fonts';
import { useNavProvider } from '@/contexts/navContext';
import { Pressable, StyleSheet} from 'react-native';
import { Text, View } from "react-native";

export default function NavHome() {
    const {option, setOption} = useNavProvider();
    const menuContent = [
        {label: 'Login', value: 'login'},
        {label: 'Criar conta', value: 'create-account'},
        {label: 'Sobre', value: 'about'},
        {label: 'Serviços', value: 'services'}
    ]

    const onPressOption = (value: string) => {
        setOption(value)
    }

    return (
        <View style={styles.menu}>
            {menuContent.map((item, index) => {
                return (
                <Pressable style={option == item.value ? styles.selectedDecor : styles.unselectedDecor} onPress={()=>{onPressOption(item.value)}} key={index}>
                    <Text style={option == item.value ? styles.selected : styles.menuText}>{item.label}</Text>
                </Pressable>
                )
            })}
        </View>
        
    )
}

const styles = StyleSheet.create({
  menu: {
    backgroundColor: Colors.secondary.medium,
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 0,
    gap: 18, 
  },
  menuText: {
    fontSize: Fonts.size.small,
    color: 'white'
  },
  selected: {
    fontSize: Fonts.size.small,
    color: 'black',
    fontWeight: 'bold'
  },
  unselectedDecor:{
    height: '100%',
    paddingHorizontal: 14,
    paddingBottom: 2,
  },
  selectedDecor:{
    height: '100%',
    paddingHorizontal: 14,
    borderBottomWidth: 2,
    borderBottomColor: 'black'
  },
});