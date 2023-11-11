import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';

const Button = ({btnStyle, btnIcon, onPress, btnTxtStyle, btnTxt}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[style.btnStyle, btnStyle]}>
      {btnIcon && btnIcon}
      {btnTxt && <Text style={[style.btnTxtStyle, btnTxtStyle]}>{btnTxt}</Text>}
    </TouchableOpacity>
  );
};

export default Button;
