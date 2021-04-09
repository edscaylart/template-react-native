import { Animated } from 'react-native'

import { createBox } from '@shopify/restyle'

import { Theme } from '~/themes'

export const Box = createBox<Theme>()

export const AnimatedBox = createBox<Theme>(Animated.View)
