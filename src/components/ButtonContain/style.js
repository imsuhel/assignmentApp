import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import {CHANGE_BY_MOBILE_DPI} from '../../utils/constant';
import fonts from '../../utils/fonts';

export default style = StyleSheet.create({
  btnStyle: {
    backgroundColor: colors.Jacarta,
    paddingHorizontal: CHANGE_BY_MOBILE_DPI(20),
    paddingVertical: CHANGE_BY_MOBILE_DPI(10),
    borderRadius: CHANGE_BY_MOBILE_DPI(60),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    columnGap: CHANGE_BY_MOBILE_DPI(5),
  },
  btnTxtStyle: {
    fontSize: fonts.FONT_SIZE_14,
    color: colors.white,
    fontFamily: fonts.MEDIUM,
    marginBottom: CHANGE_BY_MOBILE_DPI(5),
  },
});
