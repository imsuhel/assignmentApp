// import {
//   View,
//   Text,
//   Image,
//   Modal,
//   Pressable,
//   FlatList,
//   TouchableOpacity,
// } from 'react-native';
// import React, {useState, useRef, useEffect} from 'react';
// import HomeStyle from './HomeStyle';
// import Feather from 'react-native-vector-icons/Feather';
// import Foundation from 'react-native-vector-icons/Foundation';
// import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
// import colors from '../../utils/colors';
// import Button from '../../components/ButtonContain/Button';
// import {useNavigation} from '@react-navigation/native';
// import ScreenName from '../../utils/ScreenName';

// const HomeScreen = () => {
//   const navigation = useNavigation();
//   const [modalShow, setModalShow] = useState(false);
//   const data = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
//     22, 23, 24, 25,
//   ];
//   const flatListRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(5);

//   useEffect(() => {
//     flatListRef.current.scrollToIndex({
//       animated: false,
//       index: currentIndex,
//       viewPosition: 0.5,
//     });
//   }, []);

//   const getItemLayout = (data, index) => ({
//     length: 50,
//     offset: 50 * index,
//     index,
//   });

//   const renderItem = ({item}) => {
//     const itemStyle =
//       item === data[currentIndex] ? HomeStyle.itemStyle : HomeStyle.otherItem;

//     return (
//       <View style={[styles.item]}>
//         <Text style={itemStyle}>{item}</Text>
//       </View>
//     );
//   };

//   const handleScroll = event => {
//     const index = Math.round(event.nativeEvent.contentOffset.y / 50);
//     setCurrentIndex(index % data.length);
//   };

//   return (
//     <View style={HomeStyle.wrapper}>
//       <Text style={HomeStyle.screenHeading}>Today's Games</Text>
//       <View style={HomeStyle.cardStyle}>
//         <View style={HomeStyle.cardHeader}>
//           <View style={HomeStyle.headerTop}>
//             <View style={[HomeStyle.dFlex, {columnGap: 10}]}>
//               <Text style={HomeStyle.headerTxt}>Under or Over</Text>
//               <Feather name="info" size={20} color={colors.soap} />
//             </View>
//             <View style={[HomeStyle.dFlex, {columnGap: 10}]}>
//               <Text style={HomeStyle.headerTxt}>Starting in</Text>
//               <Feather name="info" size={20} color={colors.soap} />
//               <Text style={HomeStyle.headerTxt}>03:22:15</Text>
//             </View>
//           </View>
//           <Text style={HomeStyle.headerSubHeading}>
//             Bitcoin price will be under
//           </Text>
//           <Text style={HomeStyle.headerHeading}>
//             $24,524 at 7 a ET on 22nd Jan’21
//           </Text>
//           <Image
//             source={require('../../images/btcIcon.png')}
//             style={HomeStyle.headerIcon}
//           />
//         </View>
//         <View style={HomeStyle.bodyContainer}>
//           <View style={HomeStyle.bodyTop}>
//             <View>
//               <Text style={HomeStyle.bodyTopTxt1}>Prize Pool</Text>
//               <Text style={HomeStyle.bodyTopTxt2}>$12,000</Text>
//             </View>
//             <View>
//               <Text style={HomeStyle.bodyTopTxt1}>Under</Text>
//               <Text style={HomeStyle.bodyTopTxt2}>3.25x</Text>
//             </View>
//             <View>
//               <Text style={HomeStyle.bodyTopTxt1}>Over</Text>
//               <Text style={HomeStyle.bodyTopTxt2}>1.25x</Text>
//             </View>
//             <View>
//               <Text style={HomeStyle.bodyTopTxt1}>Entry Fees</Text>
//               <Text style={HomeStyle.bodyTopTxt2}>5</Text>
//             </View>
//           </View>
//           <Text style={HomeStyle.bodyHeading}>What’s your prediction?</Text>
//           <View style={HomeStyle.btnWrapper}>
//             <Button
//               btnTxt="Under"
//               btnStyle={{width: '48%'}}
//               btnIcon={
//                 <Foundation name="arrow-down" size={20} color={colors.white} />
//               }
//             />
//             <Button
//               btnTxt="Over"
//               onPress={() => setModalShow(true)}
//               btnIcon={
//                 <Foundation name="arrow-up" size={20} color={colors.white} />
//               }
//               btnStyle={{width: '48%', backgroundColor: colors.slateBlue}}
//             />
//           </View>
//         </View>
//         <View style={HomeStyle.cardFooter}>
//           <View style={HomeStyle.footerTop}>
//             <View style={HomeStyle.dFlex}>
//               <FontAwesome6 name="user" size={20} color={colors.Jacarta} />
//               <Text style={HomeStyle.footerTxt}>355 Players</Text>
//             </View>
//             <View style={HomeStyle.dFlex}>
//               <FontAwesome6
//                 name="chart-area"
//                 size={20}
//                 color={colors.Jacarta}
//               />
//               <Text style={HomeStyle.footerTxt}>View Chart</Text>
//             </View>
//           </View>

//           <View style={HomeStyle.progressWrapper}>
//             <View style={HomeStyle.progressBar} />
//           </View>

//           <View style={HomeStyle.footerBottom}>
//             <Text style={HomeStyle.footerTxt2}>232 predicted under</Text>
//             <Text style={HomeStyle.footerTxt2}>123 predicted over</Text>
//           </View>
//         </View>
//       </View>

//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalShow}
//         onRequestClose={() => {
//           setModalShow(false);
//         }}>
//         <>
//           <Pressable style={HomeStyle.modalDrop} />
//           <View style={HomeStyle.modalWrapper}>
//             <View style={HomeStyle.barStyle} />
//             <Text style={HomeStyle.modalHeading}>Your Prediction is Under</Text>
//             <Text style={HomeStyle.modalSubHeading}>ENTERY TICKET</Text>

//             <FlatList
//               ref={flatListRef}
//               data={data}
//               style={HomeStyle.modalListStyle}
//               // vertical
//               showsVerticalScrollIndicator={false}
//               keyExtractor={item => item.toString()}
//               renderItem={renderItem}
//               getItemLayout={getItemLayout}
//               onScroll={handleScroll}
//             />

//             <View style={[HomeStyle.footerBottom]}>
//               <View>
//                 <Text style={HomeStyle.modalTitle}>You can win</Text>
//                 <Text style={HomeStyle.modalContent}>$2000</Text>
//               </View>
//               <View style={HomeStyle.dFlex}>
//                 <Text style={HomeStyle.modalTitle}>Total</Text>
//                 <Image
//                   source={require('../../images/goldIcon.png')}
//                   style={HomeStyle.modalFooterIcon}
//                 />
//                 <Text style={[HomeStyle.modalTitle, {color: colors.black}]}>
//                   5
//                 </Text>
//               </View>
//             </View>

//             <Button
//               btnStyle={HomeStyle.btnStyle}
//               btnTxt="Submit my prediction"
//             />
//           </View>
//         </>
//       </Modal>
//     </View>
//   );
// };

// export default HomeScreen;

import {
  View,
  Text,
  Image,
  Modal,
  Pressable,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import HomeStyle from './HomeStyle';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import colors from '../../utils/colors';
import Button from '../../components/ButtonContain/Button';
import {useNavigation} from '@react-navigation/native';
import ScreenName from '../../utils/ScreenName';
import {CHANGE_BY_MOBILE_DPI} from '../../utils/constant';

const HomeScreen = () => {
  const flatListRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(2);
  const [modalShow, setModalShow] = useState(false);

  const data = Array.from({length: 25}, (_, index) => index + 1);

  const itemWidth = CHANGE_BY_MOBILE_DPI(38);

  const handleScroll = event => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const index = Math.floor(offsetY / itemWidth);
    setActiveIndex(index + 1);
  };

  const renderItem = ({item}) => {
    return (
      <View style={HomeStyle.itemWrapper}>
        <Text
          style={
            item === activeIndex ? HomeStyle.listStyle : HomeStyle.otherItem
          }>
          {item}
        </Text>
      </View>
    );
  };

  return (
    <View style={HomeStyle.wrapper}>
      <Text style={HomeStyle.screenHeading}>Today's Games</Text>
      <View style={HomeStyle.cardStyle}>
        <View style={HomeStyle.cardHeader}>
          <View style={HomeStyle.headerTop}>
            <View style={[HomeStyle.dFlex, {columnGap: 10}]}>
              <Text style={HomeStyle.headerTxt}>Under or Over</Text>
              <Feather name="info" size={20} color={colors.soap} />
            </View>
            <View style={[HomeStyle.dFlex, {columnGap: 10}]}>
              <Text style={HomeStyle.headerTxt}>Starting in</Text>
              <Feather name="info" size={20} color={colors.soap} />
              <Text style={HomeStyle.headerTxt}>03:22:15</Text>
            </View>
          </View>
          <Text style={HomeStyle.headerSubHeading}>
            Bitcoin price will be under
          </Text>
          <Text style={HomeStyle.headerHeading}>
            $24,524 at 7 a ET on 22nd Jan’21
          </Text>
          <Image
            source={require('../../images/btcIcon.png')}
            style={HomeStyle.headerIcon}
          />
        </View>
        <View style={HomeStyle.bodyContainer}>
          <View style={HomeStyle.bodyTop}>
            <View>
              <Text style={HomeStyle.bodyTopTxt1}>Prize Pool</Text>
              <Text style={HomeStyle.bodyTopTxt2}>$12,000</Text>
            </View>
            <View>
              <Text style={HomeStyle.bodyTopTxt1}>Under</Text>
              <Text style={HomeStyle.bodyTopTxt2}>3.25x</Text>
            </View>
            <View>
              <Text style={HomeStyle.bodyTopTxt1}>Over</Text>
              <Text style={HomeStyle.bodyTopTxt2}>1.25x</Text>
            </View>
            <View>
              <Text style={HomeStyle.bodyTopTxt1}>Entry Fees</Text>
              <Text style={HomeStyle.bodyTopTxt2}>5</Text>
            </View>
          </View>
          <Text style={HomeStyle.bodyHeading}>What’s your prediction?</Text>
          <View style={HomeStyle.btnWrapper}>
            <Button
              btnTxt="Under"
              btnStyle={{width: '48%'}}
              btnIcon={
                <Foundation name="arrow-down" size={20} color={colors.white} />
              }
            />
            <Button
              btnTxt="Over"
              onPress={() => setModalShow(true)}
              btnIcon={
                <Foundation name="arrow-up" size={20} color={colors.white} />
              }
              btnStyle={{width: '48%', backgroundColor: colors.slateBlue}}
            />
          </View>
        </View>
        <View style={HomeStyle.cardFooter}>
          <View style={HomeStyle.footerTop}>
            <View style={HomeStyle.dFlex}>
              <FontAwesome6 name="user" size={20} color={colors.Jacarta} />
              <Text style={HomeStyle.footerTxt}>355 Players</Text>
            </View>
            <View style={HomeStyle.dFlex}>
              <FontAwesome6
                name="chart-area"
                size={20}
                color={colors.Jacarta}
              />
              <Text style={HomeStyle.footerTxt}>View Chart</Text>
            </View>
          </View>

          <View style={HomeStyle.progressWrapper}>
            <View style={HomeStyle.progressBar} />
          </View>

          <View style={HomeStyle.footerBottom}>
            <Text style={HomeStyle.footerTxt2}>232 predicted under</Text>
            <Text style={HomeStyle.footerTxt2}>123 predicted over</Text>
          </View>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalShow}
        onRequestClose={() => {
          setModalShow(false);
        }}>
        <>
          <Pressable style={HomeStyle.modalDrop} />
          <View style={HomeStyle.modalWrapper}>
            <View style={HomeStyle.barStyle} />
            <Text style={HomeStyle.modalHeading}>Your Prediction is Under</Text>
            <Text style={HomeStyle.modalSubHeading}>ENTERY TICKET</Text>

            <FlatList
              ref={flatListRef}
              data={data}
              style={HomeStyle.modalListStyle}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.toString()}
              // horizontal
              // pagingEnabled
              onScroll={handleScroll}
              scrollEventThrottle={16} // Adjust as needed
            />

            <View style={[HomeStyle.footerBottom]}>
              <View>
                <Text style={HomeStyle.modalTitle}>You can win</Text>
                <Text style={HomeStyle.modalContent}>$2000</Text>
              </View>
              <View style={HomeStyle.dFlex}>
                <Text style={HomeStyle.modalTitle}>Total</Text>
                <Image
                  source={require('../../images/goldIcon.png')}
                  style={HomeStyle.modalFooterIcon}
                />
                <Text style={[HomeStyle.modalTitle, {color: colors.black}]}>
                  5
                </Text>
              </View>
            </View>

            <Button
              btnStyle={HomeStyle.btnStyle}
              btnTxt="Submit my prediction"
            />
          </View>
        </>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: Dimensions.get('window').width / 3,
    padding: 20,
    margin: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  activeItem: {
    backgroundColor: 'lightblue',
  },
});

export default HomeScreen;
