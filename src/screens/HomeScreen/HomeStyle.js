import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import {CHANGE_BY_MOBILE_DPI} from '../../utils/constant';
import fonts from '../../utils/fonts';

export default HomeStyle = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  dFlex: {
    flexDirection: 'row',
  },
  screenHeading: {
    fontSize: fonts.FONT_SIZE_16,
    color: colors.black,
    fontFamily: fonts.BOLD,
    marginLeft: CHANGE_BY_MOBILE_DPI(20),
    paddingVertical: CHANGE_BY_MOBILE_DPI(20),
  },
  cardStyle: {
    borderBottomLeftRadius: CHANGE_BY_MOBILE_DPI(10),
    borderBottomRightRadius: CHANGE_BY_MOBILE_DPI(10),
    backgroundColor: colors.white,
    width: '90%',
    alignSelf: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  cardHeader: {
    paddingVertical: CHANGE_BY_MOBILE_DPI(20),
    backgroundColor: colors.slateBlue,
    paddingHorizontal: CHANGE_BY_MOBILE_DPI(15),
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: CHANGE_BY_MOBILE_DPI(20),
  },
  headerTxt: {
    fontSize: fonts.FONT_SIZE_13,
    color: colors.soap,
    fontFamily: fonts.MEDIUM,
  },
  headerHeading: {
    fontSize: fonts.FONT_SIZE_14,
    color: colors.white,
    fontFamily: fonts.SEMIBOLD,
  },
  headerSubHeading: {
    fontSize: fonts.FONT_SIZE_14,
    color: colors.soap,
    fontFamily: fonts.MEDIUM,
  },
  headerIcon: {
    width: CHANGE_BY_MOBILE_DPI(100),
    height: CHANGE_BY_MOBILE_DPI(45),
    resizeMode: 'contain',
    position: 'absolute',
    bottom: CHANGE_BY_MOBILE_DPI(0),
    right: CHANGE_BY_MOBILE_DPI(0),
  },
  bodyContainer: {
    paddingHorizontal: CHANGE_BY_MOBILE_DPI(15),
    paddingVertical: CHANGE_BY_MOBILE_DPI(15),
  },
  bodyTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: CHANGE_BY_MOBILE_DPI(10),
  },
  bodyTopTxt1: {
    fontSize: fonts.FONT_SIZE_12,
    color: colors.pastelBlue,
    fontFamily: fonts.MEDIUM,
    textTransform: 'uppercase',
    marginBottom: CHANGE_BY_MOBILE_DPI(5),
  },
  bodyTopTxt2: {
    fontSize: fonts.FONT_SIZE_14,
    color: colors.black,
    fontFamily: fonts.SEMIBOLD,
  },
  bodyHeading: {
    fontSize: fonts.FONT_SIZE_14,
    color: colors.auroMetalSaurus,
    fontFamily: fonts.BOLD,
    marginVertical: CHANGE_BY_MOBILE_DPI(10),
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: CHANGE_BY_MOBILE_DPI(10),
  },
  cardFooter: {
    paddingVertical: CHANGE_BY_MOBILE_DPI(20),
    paddingHorizontal: CHANGE_BY_MOBILE_DPI(15),
    backgroundColor: '#F6F3FA',
  },
  footerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerTxt: {
    fontSize: fonts.FONT_SIZE_12,
    color: colors.auroMetalSaurus,
    fontFamily: fonts.BOLD,
    marginLeft: CHANGE_BY_MOBILE_DPI(10),
  },
  footerBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressWrapper: {
    width: '100%',
    backgroundColor: colors.lightSeaGreen,
    borderRadius: CHANGE_BY_MOBILE_DPI(30),
    marginVertical: CHANGE_BY_MOBILE_DPI(14),
    overflow: 'hidden',
  },
  progressBar: {
    height: CHANGE_BY_MOBILE_DPI(12),
    backgroundColor: colors.frenchFuchsia,
    width: '70%',
  },
  footerTxt2: {
    fontSize: fonts.FONT_SIZE_12,
    color: colors.pastelBlue,
    fontFamily: fonts.REGULAR,
  },
  modalDrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modalWrapper: {
    backgroundColor: '#fff',
    marginTop: 'auto',
    borderTopLeftRadius: CHANGE_BY_MOBILE_DPI(20),
    borderTopRightRadius: CHANGE_BY_MOBILE_DPI(20),
    paddingVertical: CHANGE_BY_MOBILE_DPI(20),
    paddingHorizontal: CHANGE_BY_MOBILE_DPI(20),
  },
  barStyle: {
    width: CHANGE_BY_MOBILE_DPI(50),
    height: CHANGE_BY_MOBILE_DPI(8),
    borderRadius: CHANGE_BY_MOBILE_DPI(40),
    backgroundColor: colors.soap,
    alignSelf: 'center',
    marginBottom: CHANGE_BY_MOBILE_DPI(30),
  },
  modalHeading: {
    fontSize: fonts.FONT_SIZE_14,
    color: colors.black,
    fontFamily: fonts.SEMIBOLD,
    marginBottom: CHANGE_BY_MOBILE_DPI(20),
  },
  modalSubHeading: {
    fontSize: fonts.FONT_SIZE_12,
    color: colors.black,
    fontFamily: fonts.MEDIUM,
    marginBottom: CHANGE_BY_MOBILE_DPI(20),
  },
  modalFooterIcon: {
    width: CHANGE_BY_MOBILE_DPI(20),
    height: CHANGE_BY_MOBILE_DPI(20),
    resizeMode: 'contain',
    marginHorizontal: CHANGE_BY_MOBILE_DPI(4),
  },
  modalTitle: {
    fontSize: fonts.FONT_SIZE_12,
    color: colors.soap,
    fontFamily: fonts.MEDIUM,
  },
  modalContent: {
    fontSize: fonts.FONT_SIZE_14,
    color: colors.lightSeaGreen,
    fontFamily: fonts.SEMIBOLD,
  },
  btnStyle: {
    backgroundColor: colors.slateBlue,
    marginTop: CHANGE_BY_MOBILE_DPI(30),
  },
  modalListStyle: {
    height: CHANGE_BY_MOBILE_DPI(190),
  },
  itemWrapper: {
    height: CHANGE_BY_MOBILE_DPI(38),
  },
  otherItem: {
    opacity: 0.5,
    fontSize: fonts.FONT_SIZE_14,
    color: colors.black,
    fontFamily: fonts.SEMIBOLD,
    backgroundColor: colors.white,
    paddingVertical: CHANGE_BY_MOBILE_DPI(10),
    textAlign: 'center',
  },
  listStyle: {
    fontSize: fonts.FONT_SIZE_16,
    color: colors.black,
    fontFamily: fonts.SEMIBOLD,
    backgroundColor: '#EFEAF7',
    paddingVertical: CHANGE_BY_MOBILE_DPI(10),
    textAlign: 'center',
  },
});
