import { Colors } from '@/libs/colors';
import { Fonts } from '@/libs/fonts';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from "react-native";
import InvoiceItem from './invoiceItem';
import { useInvoiceProvider } from '@/contexts/invoiceContext';

export default function Invoices() {
  const {invoices} = useInvoiceProvider();
  
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Extratos</Text>
            <Text style={styles.textMonth}>Novembro</Text>
            {invoices?.map((invoice) => (
              <InvoiceItem invoice={invoice} key={invoice.id}/>
            ))}
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
    position: 'relative',
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