import { Colors } from '@/libs/colors';
import { Fonts } from '@/libs/fonts';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from "react-native";
import InvoiceItem from './invoiceItem';

export default function Invoices() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Extratos</Text>
            <Text style={styles.textMonth}>Novembro</Text>
            <InvoiceItem transactionType='deposit' transactionAmount={1005} transactionDate='12/05/2023'/>
            <InvoiceItem transactionType='deposit' transactionAmount={1005} transactionDate='12/05/2023'/>
        </View>
    )
}

const styles = StyleSheet.create({

 container: {
    width: '90%',
    backgroundColor: 'white',
    flex: 5,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: 24,
    marginBottom: 30,
    borderRadius: 8,
    padding: 30,
    position: 'relative'
    },
  title: {
    color: 'black',
    fontSize: Fonts.size.h1,
    fontWeight: 'bold'
  },
  textMonth: {
    color: Colors.secondary.medium,
    fontSize: Fonts.size.small,
    fontWeight: 'bold'
  },
});