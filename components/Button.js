import { Animated, Text, TouchableWithoutFeedback, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useCallback, useRef } from "react";

const Button = ({ name, size, color, style, onPress }) => {
  const scale = useRef(new Animated.Value(1)).current;

  const animateScale = useCallback(
    (newValue) => {
      Animated.spring(scale, {
        toValue: newValue,
        useNativeDriver: true,
        triction: 4,
      }).start();
    },
    [scale]
  );

  return (
    <TouchableWithoutFeedback
      onPressIn={() => animateScale(0.6)}
      onPressOut={() => {
        animateScale(1);
        onPress()
      }}
      delayPressIn={0}
      delayPressOut={100}
    >
      <Animated.View
        style={{
          height: 50,
          width: 50,
          backgroundColor: "white",
          elevation: 5,
          borderRadius: 40,
          justifyContent: "center",
          alignItems: "center",
          borderColor: color,
          borderWidth: 1.2,
          transform: [{ scale }],
          ...style,
        }}
      >
        <FontAwesome name={name} size={size} color={color} />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Button;
