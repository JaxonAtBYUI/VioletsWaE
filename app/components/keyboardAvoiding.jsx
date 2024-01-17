import { useEffect, useRef, } from "react";
import {
  TextInput,
  Keyboard,
  Dimensions,
  Animated,
  useAnimatedValue,
  StyleSheet,
} from "react-native";

function KeyboardAvoidingTextInput({
  style = {},
  placeholder = "default placeholder",
  onChangeText,
  onChange,
  styleContainer = {},
  value = "",
}) {
  const keyboardHeight = useRef(0);
  const screenHeight = useRef(0);
  const containerBottom = useRef(0);
  const containerHeight = useRef(0);
  const translateY = useAnimatedValue(0);
  const containerRef = useRef();
  const textFieldRef = useRef();
  const initialized = useRef(false);

  function animateUpwards(targetValue, duration = 100) {
    Animated.timing(translateY, {
      toValue: targetValue,
      duration,
      useNativeDriver: true,
    }).start();
  }

  function animateDownwards() {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }
  useEffect(() => {
    // get the screen height
    const height = Dimensions.get("screen").height;
    console.log(`screen height: ${height}`);
    screenHeight.current = height;
    
    // add listeners for keyboard show and hide
    Keyboard.addListener("keyboardDidShow", onKeyboardShow);
    Keyboard.addListener("keyboardDidHide", onKeyboardHide);
    
    return () => {
      Keyboard.removeAllListeners("keyboardDidShow");
      Keyboard.removeAllListeners("keyboardDidHide");
    };
  }, []);

  function calculateComponentBottom(event) {
    const { height, y } = event.nativeEvent.layout;
    containerBottom.current = y + height;
    containerHeight.current = height;
  }

  function adjustPosition() {
    
    const topOfKeyboard = screenHeight.current - keyboardHeight.current;
    
    const adjust = topOfKeyboard - containerBottom.current - containerHeight.current;
   
    if (adjust < 0) {
      animateUpwards(adjust);
    }
  }

  function onKeyboardShow(event) {
    keyboardHeight.current = event.endCoordinates.height;
  }
  
  function onKeyboardHide(_) {
    textFieldRef.current.blur();
    animateDownwards();
  }

  return (
    <Animated.View
      style={[styleContainer, { transform: [{ translateY }] }]}
      ref={containerRef}
      onLayout={calculateComponentBottom}
    >
      <TextInput
        placeholder={placeholder}
        style={[styles.textInput, style]}
        onFocus={() => {
          if (!initialized.current) {
            initialized.current = true;
            setTimeout(adjustPosition, 100);
            return;
          }
          adjustPosition();
        }}
        onBlur={animateDownwards}
        ref={textFieldRef}
        onChangeText={onChangeText}
        onChange={onChange}
        value={onChangeText || onChange ? value : undefined}
      />
    </Animated.View>
  );
}

export default KeyboardAvoidingTextInput;

// Styles
const styles = StyleSheet.create({
    textInput: {
        borderRadius: 10,
        borderWidth: 2,
        width: "100%",
        borderColor: "#777",
        alignSelf: "center",
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
        margin: 10,
        backgroundColor: "white",
        fontSize: 16,
        fontFamily: "Quicksand"
    },
});