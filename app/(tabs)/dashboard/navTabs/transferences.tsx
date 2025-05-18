import { useTransferenceProvider } from '@/contexts/transferencesContext';
import { Colors } from '@/libs/colors';
import { Fonts } from '@/libs/fonts';
import { formatDate } from '@/libs/sharedFunctions';
import { containers, imagePlacement } from '@/libs/styles';
import React from 'react';
import { Image, ScrollView, StyleSheet, TextInput} from 'react-native';
import { Text, View } from "react-native";

export default function Transferences() {
    const {transferences} = useTransferenceProvider();

    return (
        <View style={containers.grayContainer}>
          <Image source={require('@/assets/images/Pixels3.png')} style={imagePlacement.imageLeft}/>
          <Image source={require('@/assets/images/Pixels4.png')} style={imagePlacement.imageRight}/>
            <Text style={styles.title}>Transferências</Text>
            <ScrollView>
                <View style={styles.transferenceRow}>
                  <Text style={styles.transferenceTitle}>Tipo</Text>
                  <Text style={styles.transferenceTitle}>Valor</Text>
                  <Text style={styles.transferenceTitle}>Data</Text>
                </View>
                {transferences?.map((transference) => (
                 <View style={styles.transferenceRow} key={transference.id}>
                    <Text style={styles.transferenceText}>{transference.type}</Text>
                    <Text style={styles.transferenceText}>{transference.value}</Text>
                    <Text style={styles.transferenceText}>{formatDate(transference.date)}</Text>
                  </View>                   
                  ))}
            </ScrollView>
         </View>
    )
}

const styles = StyleSheet.create({

  title: {
    color: Colors.primary.medium,
    fontSize: Fonts.size.h1,
    fontWeight: 'bold'
  },
  transferenceRow: {
    backgroundColor: Colors.primary.light,
    width: 300,
    paddingHorizontal: 10,
    padding: 6,
    marginVertical: 2,
    flexDirection: 'row',
    borderRadius: 8,
  },
  transferenceTitle: {
    fontSize: Fonts.size.small,
    fontWeight: 'bold',
    color: Colors.primary.dark,
    flex: 1,
  },
  transferenceText: {
    fontSize: Fonts.size.small,
    color: Colors.primary.medium,
    flex: 1
  }
});