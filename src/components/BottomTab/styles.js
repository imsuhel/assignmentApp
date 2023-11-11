import {StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../utils/constant';
import fonts from '../../utils/fonts';
import colors from '../../utils/colors';

export default styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: CHANGE_BY_MOBILE_DPI(10),
    backgroundColor: colors.white,
  },
  singleTab: {
    paddingVertical: CHANGE_BY_MOBILE_DPI(10),
    alignItems: 'center',
  },
  tabIcon: {
    width: CHANGE_BY_MOBILE_DPI(26),
    height: CHANGE_BY_MOBILE_DPI(26),
    resizeMode: 'contain',
    marginBottom: CHANGE_BY_MOBILE_DPI(4),
  },
  tabTxt: {
    fontSize: fonts.FONT_SIZE_13,
    color: colors.auroMetalSaurus,
    fontFamily: fonts.MEDIUM,
  },
  activeIcon: {
    tintColor: colors.slateBlue,
  },
  activeTxt: {
    color: colors.slateBlue,
  },
});
