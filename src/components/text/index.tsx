import React from 'react'
import { Pressable } from 'react-native'

import { createText, TextProps } from '@shopify/restyle'

import { Theme } from '~/themes'

type TextButtonProps = TextProps<Theme> & {
  label?: string
  onPress?: () => void
}

export const Text = createText<Theme>()

export const TextButton = ({ onPress, label, ...props }: TextButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <Text {...props}>{label}</Text>
    </Pressable>
  )
}
