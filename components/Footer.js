import React from "react";
import { Text, View } from "react-native";
import Button from "./Button";

const COLORS = {
  like: "#00eda6",
  nope: "#ff006f",
  star: "#07A6FF",
};

const Footer = ({
  handleChoice
}) => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 15,
        width: 240,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: -999
      }}
    >
      <Button onPress={() => handleChoice(-1)} name="times" size={24} color={COLORS.nope} />

      <Button onPress={() => handleChoice(1)} name="heart" size={24} color={COLORS.like} />
    </View>
  );
};

export default Footer;
