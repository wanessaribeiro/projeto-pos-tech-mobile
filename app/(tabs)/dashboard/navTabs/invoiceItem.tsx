import { Colors } from '@/constants/colors';
import { transactionTypes } from '@/constants/enums';
import { Fonts } from '@/constants/fonts';
import { useNavProvider } from '@/contexts/navContext';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Pressable, StyleSheet} from 'react-native';
import { Text, View } from "react-native";

type InvoiceItemProps = {
    transactionType: 'deposit' | 'withdraw' | 'pix' | 'docTed',
    transactionAmount: number,
    transactionDate: string,
}

export default function InvoiceItem({transactionType, transactionAmount, transactionDate} : InvoiceItemProps) {
    const {setOption} = useNavProvider();
    const onPressEdit = (value: string) => {
        setOption(value)
    }
    return (
        <View style={styles.invoiceContainer}>
            <View style={styles.sectionContainer}> 
                <Text style={styles.text}>{transactionTypes[transactionType]}</Text>
                <Text style={styles.textBold}>R$ {transactionAmount}</Text>
            </View>
            <View style={styles.dateContainer}>
                <Text style={styles.textDate}>{transactionDate}</Text>
                <View style={styles.buttonGroup}>
                    <Pressable onPress={() => onPressEdit('edit') }style={styles.iconButton}><Ionicons name="pencil" size={18} color="white" /></Pressable>
                    <Pressable style={styles.iconButton}><Ionicons name="trash" size={18} color="white" /></Pressable>
                </View>
            </View> 
         </View>
    )
}

const styles = StyleSheet.create({

  text: {
    color: 'black',
    fontSize: Fonts.size.standard,
  },
  textBold: {
    color: 'black',
    fontSize: Fonts.size.standard,
    fontWeight: 'bold'
  },
  textMonth: {
    color: Colors.secondary.medium,
    fontSize: Fonts.size.small,
    fontWeight: 'bold'
  },
  textDate: {
    color: Colors.gray.dark
  },
  invoiceContainer: {
    flexDirection: 'row',
    borderBottomWidth: 0.75,
    borderBottomColor: Colors.secondary.medium,
  },
  sectionContainer: {
    paddingBottom: 10,
    marginBottom: 5,
    flex: 1,
    gap: 2
  },
  dateContainer: {
    paddingBottom: 10,
    marginBottom: 5,
    alignItems: 'flex-end',
    flex: 1,
    gap: 2
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 2,
    gap: 8
  },
  iconButton: {
    backgroundColor: Colors.primary.medium,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 20,
  },

});