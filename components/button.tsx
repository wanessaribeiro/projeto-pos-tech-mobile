import { Colors } from "@/libs/colors";
import { Fonts } from "@/libs/fonts";
import { Pressable, View } from "react-native";
import { Text } from "react-native";
import { StyleSheet} from 'react-native';

type ButtonAppProps = {
    title: string;
    type: 'primary' | 'secondary' | 'tertiary';
    onClick?: () => void
}

export default function ButtonApp({title, type, onClick} : ButtonAppProps) {
    return(
        <View>
            {type == 'primary' ?(    
            <Pressable style={styles.primary} onPress={onClick}>
                <Text style={styles.whiteText}>{title}</Text>
            </Pressable>) :
            type == 'secondary' ? (
            <Pressable style={styles.secondary} onPress={onClick}>
                <Text style={styles.whiteText}>{title}</Text>
            </Pressable>) : (
            <Pressable style={styles.tertiary} onPress={onClick}>
                <Text style={styles.whiteText}>{title}</Text>
            </Pressable>
            )}
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
    whiteText: {
        color: 'white',
        fontSize: Fonts.size.small,
        fontWeight: 'bold'
    },
    secondary: {
        backgroundColor: Colors.secondary.medium,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    tertiary: {
        backgroundColor: Colors.tertiary.medium,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
  });