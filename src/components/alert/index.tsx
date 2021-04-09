import React from 'react'
import { Modal, TouchableWithoutFeedback } from 'react-native'

import { Box } from '../box'
import { Text } from '../text'
import styles from './styles'

export type AlertType = 'info' | 'error' | 'warn' | 'question'

export type AlertButtons = {
  text: string
  onPress?: () => void | Promise<void>
}

export type AlertState = {
  message: string
  type?: AlertType
  title?: string
  buttons: AlertButtons[]
  isVisible?: boolean
}

export type AlertProps = AlertState & {
  onClose?: () => void
}

export const Alert = (props: AlertProps) => {
  const { type = 'info', isVisible, message, buttons, onClose } = props
  return (
    <Modal transparent animationType="fade" visible={isVisible}>
      <TouchableWithoutFeedback style={styles.alertOutside}>
        <Box
          flex={1}
          alignItems="center"
          justifyContent="center"
          style={styles.alertBox}
        >
          <Box>
            <Text>{message}</Text>
          </Box>
        </Box>
      </TouchableWithoutFeedback>
    </Modal>
  )
}
