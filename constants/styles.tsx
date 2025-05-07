import {StyleSheet} from 'react-native';
import { Colors } from './colors';

export const imagePlacement = StyleSheet.create({
  imageLeft: {
    width: 150,
    height: 150,
    position: 'absolute',
    left: 0,
    bottom: 0
  },
  imageRight: {
    width: 150,
    height: 150,
    position: 'absolute',
    top: 0,
    right:0
  },
});

export const containers = StyleSheet.create({
    grayContainer: {
        width: '90%',
        backgroundColor: Colors.gray.medium,
        flex: 3,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: 24,
        marginBottom: 30,
        borderRadius: 8,
        padding: 30,
        position: 'relative'
      },
})