import {Dimensions, StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../utils/constant';
import fonts from '../../utils/fonts';
import colors from '../../utils/colors';

export default ProfileStyle = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: '#F3F2F7',
  },
  headerConponents: {
    backgroundColor: colors.white,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: CHANGE_BY_MOBILE_DPI(20),
    paddingVertical: CHANGE_BY_MOBILE_DPI(20),
  },
  headerIcons: {
    width: CHANGE_BY_MOBILE_DPI(30),
    height: CHANGE_BY_MOBILE_DPI(30),
    resizeMode: 'contain',
  },
  headerTxt: {
    fontSize: fonts.FONT_SIZE_14,
    color: colors.auroMetalSaurus,
    fontFamily: fonts.MEDIUM,
  },
  counterIcon: {
    width: CHANGE_BY_MOBILE_DPI(16),
    height: CHANGE_BY_MOBILE_DPI(16),
    backgroundColor: colors.slateBlue,
    borderRadius: CHANGE_BY_MOBILE_DPI(40),
    alignItems: 'center',
    position: 'absolute',
    zIndex: 99,
    right: CHANGE_BY_MOBILE_DPI(-2),
    top: CHANGE_BY_MOBILE_DPI(-5),
  },
  counterTxt: {
    fontSize: fonts.FONT_SIZE_10,
    color: colors.white,
    fontFamily: fonts.MEDIUM,
  },
  profileContainer: {
    width: CHANGE_BY_MOBILE_DPI(90),
    height: CHANGE_BY_MOBILE_DPI(90),
    marginBottom: CHANGE_BY_MOBILE_DPI(10),
    alignSelf: 'center',
  },
  profileIcon: {
    width: CHANGE_BY_MOBILE_DPI(90),
    height: CHANGE_BY_MOBILE_DPI(90),
    resizeMode: 'contain',
  },
  editIcon: {
    width: CHANGE_BY_MOBILE_DPI(40),
    height: CHANGE_BY_MOBILE_DPI(40),
    position: 'absolute',
    bottom: CHANGE_BY_MOBILE_DPI(-7),
    right: CHANGE_BY_MOBILE_DPI(-7),
  },
  imgStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  userName: {
    fontSize: fonts.FONT_SIZE_14,
    color: colors.black,
    fontFamily: fonts.MEDIUM,
    textAlign: 'center',
  },
  userPoint: {
    fontSize: fonts.FONT_SIZE_12,
    color: colors.auroMetalSaurus,
    fontFamily: fonts.REGULAR,
    textAlign: 'center',
    marginVertical: CHANGE_BY_MOBILE_DPI(6),
  },
  userBio: {
    fontSize: fonts.FONT_SIZE_14,
    color: colors.auroMetalSaurus,
    fontFamily: fonts.REGULAR,
    paddingHorizontal: CHANGE_BY_MOBILE_DPI(20),
  },
  logoutContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: CHANGE_BY_MOBILE_DPI(5),
    paddingVertical: CHANGE_BY_MOBILE_DPI(10),
  },
  shortInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '90%',
    alignSelf: 'center',
    borderWidth: CHANGE_BY_MOBILE_DPI(1),
    borderColor: colors.pastelBlue,
    borderRadius: CHANGE_BY_MOBILE_DPI(10),
    marginTop: CHANGE_BY_MOBILE_DPI(30),
  },
  w50: {
    width: '50%',
    padding: CHANGE_BY_MOBILE_DPI(20),
  },
  infoMainIcon: {
    width: CHANGE_BY_MOBILE_DPI(36),
    height: CHANGE_BY_MOBILE_DPI(36),
    resizeMode: 'contain',
    position: 'absolute',
    top: CHANGE_BY_MOBILE_DPI(-20),
    left: Dimensions.get('window').width / 2 - 55,
  },
  infoContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoTitle: {
    fontSize: fonts.FONT_SIZE_14,
    color: colors.auroMetalSaurus,
    fontFamily: fonts.MEDIUM,
    marginBottom: CHANGE_BY_MOBILE_DPI(20),
  },
  infoIcon: {
    width: CHANGE_BY_MOBILE_DPI(34),
    height: CHANGE_BY_MOBILE_DPI(34),
    resizeMode: 'contain',
    marginRight: CHANGE_BY_MOBILE_DPI(10),
  },
  infoTxt: {
    fontSize: fonts.FONT_SIZE_18,
    color: colors.auroMetalSaurus,
    fontFamily: fonts.BOLD,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: CHANGE_BY_MOBILE_DPI(3),
    borderTopColor: '#F3F2F7',
    marginTop: CHANGE_BY_MOBILE_DPI(26),
  },
  tabWidth: {
    width: '50%',
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: CHANGE_BY_MOBILE_DPI(2),
    borderBlockColor: colors.grape,
  },
  activeTabTxt: {
    color: colors.grape,
    fontFamily: fonts.BOLD,
  },
  tabTxt: {
    paddingVertical: CHANGE_BY_MOBILE_DPI(20),
    textAlign: 'center',
    fontSize: fonts.FONT_SIZE_14,
    color: colors.auroMetalSaurus,
    fontFamily: fonts.MEDIUM,
  },
  singleList: {
    width: '90%',
    borderRadius: CHANGE_BY_MOBILE_DPI(2),
    paddingVertical: CHANGE_BY_MOBILE_DPI(16),
    paddingHorizontal: CHANGE_BY_MOBILE_DPI(15),
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: CHANGE_BY_MOBILE_DPI(20),
    alignSelf: 'center',
  },
  badgeIcons: {
    width: CHANGE_BY_MOBILE_DPI(60),
    height: CHANGE_BY_MOBILE_DPI(60),
    resizeMode: 'contain',
    marginRight: CHANGE_BY_MOBILE_DPI(10),
  },
  listContent: {
    width: '80%',
  },
  listHeading: {
    fontSize: fonts.FONT_SIZE_14,
    color: colors.black,
    fontFamily: fonts.MEDIUM,
    marginBottom: CHANGE_BY_MOBILE_DPI(6),
  },
  listContentTxt: {
    fontSize: fonts.FONT_SIZE_13,
    color: colors.auroMetalSaurus,
    fontFamily: fonts.REGULAR,
  },
});
