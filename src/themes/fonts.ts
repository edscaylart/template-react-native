import { RFValue } from 'react-native-responsive-fontsize'

const standardScreenHeight = 760

export const fontSize = {
  custom: (value: number) => RFValue(value, standardScreenHeight),
  xxsmall: RFValue(4, standardScreenHeight),
  xsmall: RFValue(8, standardScreenHeight),
  small: RFValue(16, standardScreenHeight),
  medium: RFValue(18, standardScreenHeight),
  large: RFValue(24, standardScreenHeight),
  xlarge: RFValue(32, standardScreenHeight),
  xxlarge: RFValue(40, standardScreenHeight),
}
