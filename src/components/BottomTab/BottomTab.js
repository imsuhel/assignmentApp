import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './styles';

const BottomTab = () => {
  return (
    <View style={style.tabContainer}>
      <TouchableOpacity activeOpacity={0.8} style={style.singleTab}>
        <Image
          source={require('../../images/tabIcon1.png')}
          style={[style.tabIcon, style.activeIcon]}
        />
        <Text style={[style.tabTxt, style.activeTxt]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={style.singleTab}>
        <Image
          source={require('../../images/tabIcon2.png')}
          style={style.tabIcon}
        />
        <Text style={style.tabTxt}>Leagues</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={style.singleTab}>
        <Image
          source={require('../../images/tabIcon3.png')}
          style={style.tabIcon}
        />
        <Text style={style.tabTxt}>Research</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={style.singleTab}>
        <Image
          source={require('../../images/tabIcon4.png')}
          style={style.tabIcon}
        />
        <Text style={style.tabTxt}>Leaderboard</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={style.singleTab}>
        <Image
          source={require('../../images/tabIcon5.png')}
          style={style.tabIcon}
        />
        <Text style={style.tabTxt}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomTab;
