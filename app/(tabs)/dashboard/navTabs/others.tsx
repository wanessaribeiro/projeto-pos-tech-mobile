import { Colors } from '@/libs/colors';
import { Fonts } from '@/libs/fonts';
import { containers, imagePlacement } from '@/libs/styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Image, Pressable, StyleSheet, TextInput} from 'react-native';
import { Text, View } from "react-native";

export default function OtherServices() {

    return (
        <View style={containers.grayContainer}>
          <Image source={require('@/assets/images/Pixels3.png')} style={imagePlacement.imageLeft}/>
          <Image source={require('@/assets/images/Pixels4.png')} style={imagePlacement.imageRight}/>
            <Text style={styles.title}>Outros Serviços</Text>
          <View style={styles.buttonGroup}>
            <View style={styles.buttonRow}>
              <Pressable style={styles.button}>
                <Ionicons name="briefcase" size={45} color={Colors.secondary.medium} />
                <Text style={styles.buttonText}>Empréstimo</Text>
              </Pressable>
              <Pressable style={styles.button}>
                <Ionicons name="card" size={45} color={Colors.secondary.medium} />
                <Text style={styles.buttonText}>Meus cartões</Text>
                </Pressable>
              <Pressable style={styles.button}>
                <Ionicons name="wallet" size={45} color={Colors.secondary.medium} />
                <Text style={styles.buttonText}>Doações</Text>
              </Pressable>
            </View>
            <View style={styles.buttonRow}>
              <Pressable style={styles.button}>
                <Ionicons name="server" size={45} color={Colors.secondary.medium} />
                <Text style={styles.buttonText}>Pix</Text>
              </Pressable>
              <Pressable style={styles.button}>
                <Ionicons name="medkit" size={45} color={Colors.secondary.medium} />
                <Text style={styles.buttonText}>Seguros</Text>
                </Pressable>
              <Pressable style={styles.button}>
                <Ionicons name="cellular" size={45} color={Colors.secondary.medium} />
                <Text style={styles.buttonText}>Crédito celular</Text>
              </Pressable>
            </View>
          </View>
         </View>
    )
}

const styles = StyleSheet.create({

  title: {
    color: Colors.primary.medium,
    fontSize: Fonts.size.h1,
    fontWeight: 'bold'
  },
  buttonGroup: {
    paddingRight: 6 
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10
  },
  button: {
    width: 100,
    gap: 10,
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 4,
    marginVertical: 6,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
      color: Colors.secondary.medium,
      fontSize: Fonts.size.small,
      fontWeight: 'bold'
  }
});
