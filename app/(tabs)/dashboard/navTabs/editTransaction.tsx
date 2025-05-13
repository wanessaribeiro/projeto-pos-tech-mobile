import ButtonApp from '@/components/button';
import DropdownComponent, { dataDropdown } from '@/components/dropdown';
import { Colors } from '@/constants/colors';
import { Fonts } from '@/constants/fonts';
import { containers, imagePlacement } from '@/constants/styles';
import React from 'react';
import { Image, StyleSheet, TextInput} from 'react-native';
import { Text, View } from "react-native";

export default function EditTransaction() {
  const [transactionType, onChangeTransactionType] = React.useState('Selecione o tipo de transação');
  const [value, onChangeValue] = React.useState('');
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
            <Text style={styles.title}>Editar Transação</Text>
            <DropdownComponent placeholderDropdown='Selecione o tipo de transação' data={dropdownContent}/>
          <Text style={styles.text}>Valor</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeValue}
            value={value}
            placeholder="00,00"
            keyboardType="numeric"
          />
            <ButtonApp title='Concluir Transação' type='primary'/>
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