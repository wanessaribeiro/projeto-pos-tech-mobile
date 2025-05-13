import ButtonApp from '@/components/button';
import DropdownComponent from '@/components/dropdown';
import { Colors } from '@/libs/colors';
import { Fonts } from '@/libs/fonts';
import { containers, imagePlacement } from '@/libs/styles';
import { dataDropdown, InvoiceType } from '@/libs/types';
import { useAccountProvider } from '@/contexts/accountContext';
import { useInvoiceProvider } from '@/contexts/invoiceContext';
import { useTransferenceProvider } from '@/contexts/transferencesContext';
import React, { useState } from 'react';
import { Image, StyleSheet, TextInput} from 'react-native';
import { Text, View } from "react-native";
import { v4 as uuidv4 } from 'uuid';

export default function NewTransaction() {
  const {usePostInvoice} = useInvoiceProvider();
  const {balance, setBalance} = useAccountProvider();
  const {usePostTransference} = useTransferenceProvider();
  const [newInvoice, setNewInvoice] = useState({
    id: '12', //TODO: voltar aleatorio aqui
    type: "",
    value: 0,
    date: new Date(),
  });

  const onChangeType = (value: string) => {
    setNewInvoice((prev) => ({ ...prev, type: value }));
  };

  const onChangeValue = (value: string) => {
    if (!isNaN(Number(value))) {
      setNewInvoice((prev) => ({ ...prev, value: Number(value) }));
    }
  };

  const setNewBalance = (invoice: InvoiceType) => {
    const currentBalance = balance;
    
    if (invoice.type === "Depósito") setBalance(currentBalance + invoice.value)
    else if (invoice.type === "Saque" || newInvoice.type === "DOC/TED" || newInvoice.type === "Pix") setBalance(currentBalance - invoice.value);
  };

  const createInvoice = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newInvoice.type || newInvoice.value === 0) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }
    if (newInvoice.type === "DOC/TED" || newInvoice.type === "Pix") {
      usePostTransference(newInvoice);
    }
    usePostInvoice(newInvoice);
    setNewBalance(newInvoice);
    setNewInvoice({
      id: uuidv4(),
      type: "",
      value: 0,
      date: new Date(),
    })
  };

  const dropdownContent: dataDropdown[] = [
    {label: 'Depósito', value: 'Depósito'},
    {label: 'Saque', value: 'Saque'},
    {label: 'Pix', value: 'Pix'},
    {label: 'DOC/TED', value: 'DOC/TED'}
  ]

    return (
        <View style={containers.grayContainer}>
          <Image source={require('@/assets/images/Pixels3.png')} style={imagePlacement.imageLeft}/>
          <Image source={require('@/assets/images/Pixels4.png')} style={imagePlacement.imageRight}/>
            <Text style={styles.title}>Nova Transação</Text>
            <DropdownComponent placeholderDropdown='Selecione o tipo de transação' data={dropdownContent}/>
          <Text style={styles.text}>Valor</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeValue}
            value={String(newInvoice.value)}
            placeholder="00,00"
            keyboardType="numeric"

          />
            <ButtonApp title='Concluir Transação' type='primary' onClick={() => createInvoice}/>
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

function useForm<T>(): { register: any; handleSubmit: any; watch: any; formState: { errors: any; }; } {
  throw new Error('Function not implemented.');
}
