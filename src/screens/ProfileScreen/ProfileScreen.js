import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
import ProfileStyle from './ProfileStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BottomTab from '../../components/BottomTab/BottomTab';
import {useNavigation} from '@react-navigation/native';
import ScreenName from '../../utils/ScreenName';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={ProfileStyle.mainWrapper}>
      <FlatList
        data={[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ]}
        contentContainerStyle={{paddingBottom: 20}}
        ListHeaderComponent={
          <View style={ProfileStyle.headerConponents}>
            <View style={ProfileStyle.headerContainer}>
              <TouchableOpacity activeOpacity={0.8}>
                <Image
                  source={require('../../images/logo.png')}
                  style={ProfileStyle.headerIcons}
                />
              </TouchableOpacity>
              <Text style={ProfileStyle.headerTxt}>Profile</Text>
              <TouchableOpacity activeOpacity={0.8}>
                <View style={ProfileStyle.counterIcon}>
                  <Text style={ProfileStyle.counterTxt}>2</Text>
                </View>
                <Image
                  source={require('../../images/commentIcon.png')}
                  style={ProfileStyle.headerIcons}
                />
              </TouchableOpacity>
            </View>

            <View style={ProfileStyle.profileContainer}>
              <Image
                source={require('../../images/profileIcon.png')}
                style={ProfileStyle.profileIcon}
              />
              <TouchableOpacity
                activeOpacity={0.8}
                style={ProfileStyle.editIcon}>
                <Image
                  source={require('../../images/editIcon.png')}
                  style={ProfileStyle.imgStyle}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={ProfileStyle.userName}>Jina Simons</Text>
              <Text style={ProfileStyle.userPoint}>6000 Pts</Text>
              <Text style={ProfileStyle.userBio}>
                I'm a software developer that has been in the crypto space since
                2012. And I've seen it grow and falter over a period of time.
                Really happy to be here!
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={ProfileStyle.logoutContainer}>
              <MaterialIcons name="logout" size={20} color={colors.Jacarta} />
              <Text style={ProfileStyle.userName}>Logout</Text>
            </TouchableOpacity>

            <View style={ProfileStyle.shortInfoContainer}>
              <Image
                source={require('../../images/infoIcon.png')}
                style={ProfileStyle.infoMainIcon}
              />
              <View style={ProfileStyle.w50}>
                <Text style={ProfileStyle.infoTitle}>Under or Over</Text>
                <View style={ProfileStyle.infoContent}>
                  <Image
                    source={require('../../images/arrowUp.png')}
                    style={ProfileStyle.infoIcon}
                  />
                  <Text style={ProfileStyle.infoTxt}>81%</Text>
                </View>
              </View>
              <View style={ProfileStyle.w50}>
                <Text style={ProfileStyle.infoTitle}>Top 5</Text>
                <View style={ProfileStyle.infoContent}>
                  <Image
                    source={require('../../images/arrowDown.png')}
                    style={ProfileStyle.infoIcon}
                  />
                  <Text style={ProfileStyle.infoTxt}>-51%</Text>
                </View>
              </View>
            </View>
            <View style={ProfileStyle.tabContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={ProfileStyle.tabWidth}>
                <Text style={ProfileStyle.tabTxt}>Games Played</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[ProfileStyle.tabWidth, ProfileStyle.activeTab]}>
                <Text style={[ProfileStyle.tabTxt, ProfileStyle.activeTabTxt]}>
                  Badges
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        }
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate(ScreenName.HOME_SCREEN)}
            style={ProfileStyle.singleList}>
            <Image
              source={require('../../images/badgesIcon.png')}
              style={ProfileStyle.badgeIcons}
            />
            <View style={ProfileStyle.listContent}>
              <Text style={ProfileStyle.listHeading}>
                First Stripe Earned <Text style={{color: '#FFA600'}}>x 3</Text>
              </Text>
              <Text style={ProfileStyle.listContentTxt}>
                Top 10% of highest spending players in a month
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <BottomTab />
    </View>
  );
};

export default ProfileScreen;
