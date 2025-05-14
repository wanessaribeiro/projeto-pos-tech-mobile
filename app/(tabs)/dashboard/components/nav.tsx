import { Colors } from '@/libs/colors';
import { Fonts } from '@/libs/fonts';
import { useNavProvider } from '@/contexts/navContext';
import { Pressable, StyleSheet} from 'react-native';
import { Text, View } from "react-native";

export default function Nav() {
    const {option, setOption} = useNavProvider();
    const menuContent = [
        {label: 'Início', value: 'home'},
        {label: 'Transferências', value: 'transferences'},
        {label: 'Investimentos', value: 'investments'},
        {label: 'Outros', value: 'others'}
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
    width: '100%',
    backgroundColor: Colors.secondary.light,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 0,
    marginBottom: 20,
    gap: 2, 
  },
  menuText: {
    fontSize: Fonts.size.small,
  },
  selected: {
    fontSize: Fonts.size.small,
    color: Colors.secondary.medium,
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
    borderBottomColor: Colors.secondary.medium
  },
});