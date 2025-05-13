import ButtonApp from '@/components/button';
import DropdownComponent, { dataDropdown } from '@/components/dropdown';
import { Colors } from '@/constants/colors';
import { Fonts } from '@/constants/fonts';
import { containers, imagePlacement } from '@/constants/styles';
import React from 'react';
import { Image, StyleSheet, TextInput} from 'react-native';
import { Text, View } from "react-native";

export default function Transferences() {

    return (
        <View style={containers.grayContainer}>
          <Image source={require('@/assets/images/Pixels3.png')} style={imagePlacement.imageLeft}/>
          <Image source={require('@/assets/images/Pixels4.png')} style={imagePlacement.imageRight}/>
            <Text style={styles.title}>Transferências</Text>
         </View>
    )
}

const styles = StyleSheet.create({

  title: {
    color: Colors.primary.medium,
    fontSize: Fonts.size.h1,
    fontWeight: 'bold'
  },
});