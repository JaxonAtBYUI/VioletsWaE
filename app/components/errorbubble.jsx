import { View, Text, StyleSheet } from 'react-native'
import React, { Children } from 'react'
import { colorPallet, fonts } from '../dictionaries/styling'

export default function ErrorBubble({
    styleText = {},
    styleContainer = {},
    message = "There was an error with the action you performed."
}) {
  return (
    <View style={[styles.errorContainer, styleText]}>    
        <Text style= {[styles.errorMessage, styleContainer]}>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    errorContainer: {
        backgroundColor: `${colorPallet.error}4D`,
        padding: 15,
        margin: 10,
        borderWidth: 2,
        borderColor: "#dc3545",
        borderRadius: 8,
        color: colorPallet.error,
      },
      
      errorMessage: {
        fontSize: 16,
        fontFamily: fonts.QuicksandSemiBold,
        fontWeight: "bold",
        textAlign: "center",
        color: colorPallet.error,
      }
})