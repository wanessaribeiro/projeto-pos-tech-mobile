import ButtonApp from '@/components/button';
import { useInvestmentProvider } from '@/contexts/investmentContext';
import { useNavProvider } from '@/contexts/navContext';
import { Colors } from '@/libs/colors';
import { Fonts } from '@/libs/fonts';
import { percentageValue } from '@/libs/sharedFunctions';
import { containers, imagePlacement } from '@/libs/styles';
import React from 'react';
import { Image, StyleSheet, TextInput} from 'react-native';
import { Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";

export default function Investments() {
  const {setOption} = useNavProvider()
  const {investments, totalInvestment} = useInvestmentProvider()
  const data = [
    {value: investments.investmentFunds, color: Colors.primary.medium, text: String(investments.investmentFunds)},
    {value: investments.treasure, color: Colors.secondary.medium, text: String(investments.treasure)},
    {value: investments.privatePrevidence, color: Colors.tertiary.medium, text: String(investments.privatePrevidence)},
    {value: investments.stocks, color: Colors.gray.dark, text: String(investments.stocks)},
  ]

  const renderLegend = (text: string, color: string) => {
    return (
      <View style={{flexDirection: 'row', marginBottom: 12}}>
        <View
          style={{
            height: 18,
            width: 18,
            marginRight: 10,
            borderRadius: 4,
            backgroundColor: color || 'white',
          }}
        />
        <Text style={{color: 'black', fontSize: Fonts.size.small}}>{text || ''}</Text>
      </View>
    );
  };
  
    return (
        <View style={styles.grayContainer}>
          <Image source={require('@/assets/images/Pixels3.png')} style={imagePlacement.imageLeft}/>
          <Image source={require('@/assets/images/Pixels4.png')} style={imagePlacement.imageRight}/>
             <Text style={styles.title}>Investimentos</Text>
            <View style={styles.sectionRowButton}>
             <Text style={styles.subTitle}>Total: R$ {percentageValue(153, totalInvestment)}</Text>
              <ButtonApp title='Investir' type='secondary' onClick={() => setOption('new-investment')}/>
            </View>
            <View style={styles.sectionRow}>
              <View style={styles.section}>
                <Text style={styles.sectionText}>Renda Fixa: </Text>
                <Text style={styles.sectionText}>R$ {percentageValue(133, totalInvestment)}</Text>
              </View>
              <View style={styles.section}>
                <Text style={styles.sectionText}>Renda Variável: </Text>
                <Text style={styles.sectionText}>R$ {percentageValue(32, totalInvestment)}</Text>
            </View>
            </View>
            <View>
              <Text style={styles.subTitle}>Estatísticas: </Text>
              <View style={styles.pieChart}>
                <PieChart data={data} textColor="black" showText radius={140} focusOnPress showTextBackground fontWeight='bold' textSize={Fonts.size.small} textBackgroundRadius={23}/>
              </View>
              {renderLegend('Fundos de investimento', Colors.primary.medium)}
              {renderLegend('Tesouro direto', Colors.secondary.medium)}
              {renderLegend('Previdência privada', Colors.tertiary.medium)}
              {renderLegend('Bolsa de Valores', Colors.gray.dark)}
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
    fontWeight: 'bold',
    padding: 0,
  },
  sectionRowButton: {
    flexDirection: 'row',
    gap: 13,
    width: '100%'
  },
  sectionRow: {
    flexDirection: 'row',
    gap: 10,
    width: '80%'
  },
  section: {
    backgroundColor: Colors.primary.medium,
    borderRadius: 8,
    padding: 6,
    width: '60%'
  },
  sectionText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: Fonts.size.small
  },
  pieChart: {
    marginTop: 12,
    width: '100%'
  }
});