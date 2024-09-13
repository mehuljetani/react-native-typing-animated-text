import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ViewStyle,
  TextStyle,
  StyleProp,
  StyleSheet,
} from "react-native";

import Animated, {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import LinearGradient from "react-native-linear-gradient";

interface TypingTextProps {
  text: string;
  typingSpeed?: number;
  gradientColors?: string[];
  animationDuration?: number;
  textStyle?: StyleProp<TextStyle>;
  gradientStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const TypingText: React.FC<TypingTextProps> = ({
  text,
  textStyle = {},
  typingSpeed = 60,
  gradientStyle = {},
  containerStyle = {},
  animationDuration = 300,
  gradientColors = ["#ff9a9e", "#fad0c4"],
}) => {
  const progress = useSharedValue(0);
  const [displayedText, setDisplayedText] = useState("");

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(progress.value, { duration: animationDuration }),
      transform: [
        {
          translateY: withTiming(progress.value ? 0 : 10, {
            duration: animationDuration,
          }),
        },
      ],
    };
  });

  useEffect(() => {
    if (typeof text !== "string" || text.length === 0) {
      console.error("Text prop must be a valid non-empty string.");
      return;
    }

    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    progress.value = 1;

    return () => clearInterval(interval);
  }, [text]);

  return (
    <LinearGradient
      colors={gradientColors}
      style={[styles.gradient, gradientStyle]}
    >
      <View style={[styles.container, containerStyle]}>
        <Animated.View style={animatedStyle}>
          <Text style={[styles.typingText, textStyle]}>{displayedText}</Text>
        </Animated.View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  typingText: {
    fontSize: 28,
    color: "#000",
    lineHeight: 36,
    textAlign: "center",
    fontFamily: "HelveticaNeue-Medium",
  },
  gradient: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
});

export default TypingText;
