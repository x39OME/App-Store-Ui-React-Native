import {Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient'

export default function GradientButton(props) {
  return (
    <LinearGradient
        colors={['rgba(56, 131 ,244, 0.7)', 'rgba(9, 181,211, .9)']}
        end={{x:1, y:1}}
        start={{x: 0.1, y: 0.2}}
        className={`rounded-full ${props.containerClass}`}
    >
        <TouchableOpacity className={`py-3 px-4 mx-1 ${props.buttonClass}`}>
            <Text className="text-white font-bold">
                {props.value}
            </Text>
        </TouchableOpacity>

    </LinearGradient>
  )
}