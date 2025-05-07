import { Colors } from "@/constants/colors";
import { Fonts } from "@/constants/fonts";
import { Pressable, View } from "react-native";
import { Text } from "react-native";
import { StyleSheet} from 'react-native';

type ButtonAppProps = {
    title: string;
    type: 'primary' | 'secondary';
}

export default function ButtonApp({title, type} : ButtonAppProps) {
    return(
        <View>
            {type == 'primary' ?(    
            <Pressable style={styles.primary} onPress={()=>{}}>
                <Text style={styles.primaryText}>{title}</Text>
            </Pressable>) :
            <Pressable style={styles.primary} onPress={()=>{}}>
                <Text style={styles.primaryText}>{title}</Text>
            </Pressable>}
        </View>
    )
}

export const styles = StyleSheet.create({
    primary: {
      backgroundColor: Colors.primary.medium,
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
    },
    primaryText: {
        color: 'white',
        fontSize: Fonts.size.small,
        fontWeight: 'bold'
    }
  });