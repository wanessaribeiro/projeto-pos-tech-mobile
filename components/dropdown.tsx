import React, { useState } from 'react';
  import { StyleSheet, Text, View } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from '@expo/vector-icons/AntDesign';
import { Colors } from '@/constants/colors';
import { Fonts } from '@/constants/fonts';

export type dataDropdown = {
    label: string,
    value: string
}

  type DropdownComponentProps = {
    placeholderDropdown: string
    data: dataDropdown[],
  }

  const DropdownComponent = ({placeholderDropdown, data}: DropdownComponentProps) => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: Colors.primary.medium }]}>
            Dropdown label
          </Text>
        );
      }
      return null;
    };

    return (
      <View style={styles.container}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: Colors.primary.dark  }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? placeholderDropdown : '...'}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>
    );
  };

  export default DropdownComponent;

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 0,
      borderRadius: 8,
    },
    dropdown: {
      height: 50,
      width: 300,
      borderColor: Colors.primary.medium,
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 16,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 16,
      fontSize: Fonts.size.small,
    },
    placeholderStyle: {
      fontSize: Fonts.size.small,
      color: Colors.gray.medium,
    },
    selectedTextStyle: {
      fontSize: Fonts.size.small,
      color: Colors.primary.medium,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: Fonts.size.small,
    },
  });