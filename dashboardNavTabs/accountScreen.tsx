import ButtonApp from '@/components/button';
import { useAccountProvider } from '@/contexts/accountContext';
import { Colors } from '@/libs/colors';
import { Fonts } from '@/libs/fonts';
import { imagePlacement } from '@/libs/styles';
import React from 'react';
import { Image, StyleSheet, TextInput} from 'react-native';
import { Text, View } from "react-native";

export default function AccountScreen() {
    const {account} = useAccountProvider()
  
    return (
        <View style={styles.grayContainer}>
          <Image source={require('@/assets/images/Pixels3.png')} style={imagePlacement.imageLeft}/>
          <Image source={require('@/assets/images/Pixels4.png')} style={imagePlacement.imageRight}/>
          <Image source={require('@/assets/images/AccountScreenImg.png')} style={styles.image}/>

            <Text style={styles.title}>Minha Conta</Text>
            <View style={styles.section}>
                <Text style={styles.subTitle}>Informações da conta</Text>
                <View style={styles.sectionRow}>
                    <Text style={styles.sectionTextBold}>Nome do Titular:</Text>
                    <Text style={styles.sectionText}>{account.name}</Text>    
                </View>
                <View style={styles.sectionRow}>   
                    <Text style={styles.sectionTextBold}>Tipo de conta:</Text>
                    <Text style={styles.sectionText}>{account.type}</Text>
                </View>
            </View>
            <View style={styles.section}>   
                <Text style={styles.subTitle}>Informações de contato</Text>
                <View style={styles.sectionRow}>
                    <Text style={styles.sectionTextBold}>Email:</Text>
                    <Text style={styles.sectionText}>{account.email}</Text>
                </View>
                <View style={styles.sectionRow}>
                    <Text style={styles.sectionTextBold}>Telefone:</Text>
                    <Text style={styles.sectionText}>{account.phone || 'não cadastrado'}</Text>
                </View>
            </View>
         </View>
    )
}

const styles = StyleSheet.create({
  grayContainer: {
    width: '90%',
    backgroundColor: Colors.gray.medium,
    flex: 5.5,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: 14,
    marginBottom: 30,
    borderRadius: 8,
    padding: 30,
    position: 'relative',
  },
  title: {
    color: Colors.primary.medium,
    fontSize: Fonts.size.h1,
    fontWeight: 'bold',
    marginBottom: 2
  },
  subTitle: {
    fontSize: Fonts.size.h2,
    color: Colors.secondary.medium,
    fontWeight: 'bold'
  },
  sectionRow: {
    flexDirection: 'row',
    gap: 4,
    paddingBottom: 12,
    paddingTop: 12,
    width: '80%'
  },
  section: {
    backgroundColor: Colors.primary.light,
    borderRadius: 8,
    padding: 16,
    width: '100%'
  },
  sectionText: {
    color: Colors.primary.dark,
    fontSize: Fonts.size.medium
  },
  sectionTextBold: {
    color: Colors.primary.dark,
    fontSize: Fonts.size.medium,
    fontWeight: 'bold'
  },
  image: {
    bottom: 30,
    left: 50,
    height: 239,
    width: 278,
    position: 'absolute',
  },
});