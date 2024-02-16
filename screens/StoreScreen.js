import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaFrameContext } from 'react-native-safe-area-context'

export default function StoreScreen() {
  return (
    <SafeAreaFrameContext>
      <Text>Store Screen</Text>
    </SafeAreaFrameContext>
  )
}
