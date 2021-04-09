/*
 * https://gist.github.com/ankurg22/edbff5cdb9be6e1dd34d8be7920738c0#file-dimen-js
 */

import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen'

/**
 * Width-Percentage
 * Converts width dimension to percentage
 * 360, 760 - design were made using this scale
 * @param dimension directly taken from design wireframes
 */
export const wp = (dimension: number): number => {
  return wp2dp(`${(dimension / 360) * 100}%`)
}

/**
 * Height-Percentage
 * Converts width dimension to percentage
 * * 360, 760 - design were made using this scale
 * @param dimension directly taken from design wireframes
 */
export const hp = (dimension: number): number => {
  return hp2dp(`${(dimension / 760) * 100}%`)
}
