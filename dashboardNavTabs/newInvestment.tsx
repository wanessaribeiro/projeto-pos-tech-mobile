import ButtonApp from '@/components/button';
import DropdownComponent from '@/components/dropdown';
import { Colors } from '@/libs/colors';
import { Fonts } from '@/libs/fonts';
import { containers, imagePlacement } from '@/libs/styles';
import { dataDropdown } from '@/libs/types';
import React, { useState } from 'react';
import { Image, StyleSheet, TextInput} from 'react-native';
import { Text, View } from "react-native";
import { useInvestmentProvider } from '@/contexts/investmentContext';
import { useNavProvider } from '@/contexts/navContext';

export default function NewInvestment() {
    const { newInvestment} = useInvestmentProvider()
    const {setOption} = useNavProvider()
    const [addNewInvestment, setAddNewInvestment] = useState({
        type: '',
        value: 0
    })

    const onChangeType = (value: string) => {
        setAddNewInvestment((prev) => ({ ...prev, type: value }));
      };
    
    const onChangeValue = (value: string) => {
      if (!isNaN(Number(value))) {
        setAddNewInvestment((prev) => ({ ...prev, value: Number(value) }));
      }
    };

    const onClickAddNewInvestment = () => {
        if (!addNewInvestment.type || addNewInvestment.value === 0) {
          alert("Por favor, preencha todos os campos corretamente.");
          return;
        }
        newInvestment(addNewInvestment.type, addNewInvestment.value)
        setOption('investments')
    };


  const dropdownContent: dataDropdown[] = [
    {label: 'Fundos de investimento', value: 'investmentFunds'},
    {label: 'Tesouro direto', value: 'treasure'},
    {label: 'Previdência privada', value: 'privatePrevidence'},
    {label: 'Bolsa de Valores', value: 'stocks'}
  ]

    return (
        <View style={containers.grayContainer}>
          <Image source={require('@/assets/images/Pixels3.png')} style={imagePlacement.imageLeft}/>
          <Image source={require('@/assets/images/Pixels4.png')} style={imagePlacement.imageRight}/>
            <Text style={styles.title}>Novo Investimento</Text>
            <DropdownComponent placeholderDropdown='Selecione o tipo de investimento' value={addNewInvestment.type} onChangeValue={onChangeType} data={dropdownContent}/>
          <Text style={styles.text}>Valor</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeValue}
            value={String(addNewInvestment.value)}
            placeholder="00,00"
            keyboardType="numeric"

          />
            <ButtonApp title='Fazer Investimento' type='primary' onClick={() => onClickAddNewInvestment()}/>
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

