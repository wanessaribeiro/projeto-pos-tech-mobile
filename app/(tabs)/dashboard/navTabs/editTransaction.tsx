import ButtonApp from '@/components/button';
import DropdownComponent from '@/components/dropdown';
import { Colors } from '@/libs/colors';
import { Fonts } from '@/libs/fonts';
import { containers, imagePlacement } from '@/libs/styles';
import { dataDropdown, InvoiceType } from '@/libs/types';
import { useInvoiceProvider } from '@/contexts/invoiceContext';
import { useTransferenceProvider } from '@/contexts/transferencesContext';
import React, { useState } from 'react';
import { Image, StyleSheet, TextInput} from 'react-native';
import { Text, View } from "react-native";
import { useNavProvider } from '@/contexts/navContext';

export default function EditTransaction() {
  const {setOption} = useNavProvider();
  const {selectedInvoice, usePatchInvoice} = useInvoiceProvider();
  const {usePostTransference} = useTransferenceProvider();
  const [editInvoice, setEditInvoice] = useState<InvoiceType>(selectedInvoice);

  const onChangeType = (value) => {
    setEditInvoice((prev) => ({ ...prev, type: value }));
  };

  const onChangeValue = (value: string) => {
    if (!isNaN(Number(value))) {
      setEditInvoice((prev) => ({ ...prev, value: Number(value) }));
    }
  };

  const updateInvoice = () => {
    if (!editInvoice.type || editInvoice.value === 0) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }
    if (editInvoice.type === "docTed" || editInvoice.type === "pix") {
      usePostTransference(editInvoice);
    }
    usePatchInvoice(editInvoice);
    setOption('home');
  };

  const dropdownContent: dataDropdown[] = [
    {label: 'Depósito', value: 'deposit'},
    {label: 'Saque', value: 'withdraw'},
    {label: 'Pix', value: 'pix'},
    {label: 'DOC/TED', value: 'docTed'}
  ]

    return (
        <View style={containers.grayContainer}>
          <Image source={require('@/assets/images/Pixels3.png')} style={imagePlacement.imageLeft}/>
          <Image source={require('@/assets/images/Pixels4.png')} style={imagePlacement.imageRight}/>
            <Text style={styles.title}>Editar Transação</Text>
            <DropdownComponent placeholderDropdown='Selecione o tipo de transação' value={editInvoice.type} onChangeValue={onChangeType} data={dropdownContent}/>
          <Text style={styles.text}>Valor</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeValue}
            value={String(editInvoice.value)}
            placeholder="00,00"
            keyboardType="numeric"

          />
            <ButtonApp title='Concluir Edição' type='primary' onClick={() => updateInvoice()}/>
         </View>
    )
}

const styles = StyleSheet.create({

  title: {
    color: Colors.primary.medium,
    fontSize: Fonts.size.h1,
    fontWeight: 'bold'
  },
  text: {
    color: Colors.primary.medium,
    fontSize: Fonts.size.standard,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: 'white',
    color: Colors.primary.medium,
    fontSize: Fonts.size.small,
    height: 48,
    margin: 0,
    borderColor: Colors.primary.medium,
    borderWidth: 1,    
    padding: 10,
    paddingHorizontal: 25,
  },
});