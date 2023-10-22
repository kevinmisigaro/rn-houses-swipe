import React from "react";
import { Text, View } from "react-native";

const COLORS = {
  like: "#00eda6",
  nope: "#ff006f",
};

const Choice = ({ type }) => {
  const color = COLORS[type];

  return (
    <View
      style={{
        borderWidth: 7,
        paddingHorizontal: 15,
        borderRadius: 15,
        backgroundColor: "rgba(0,0,0,.2)",
        borderColor: color,
      }}
    >
      <Text 
        style={{
            fontSize: 40,
            fontWeight: "bold",
            textTransform: 'uppercase',
            letterSpacing: 4,
            color: color
        }}
      >{type == "like" ? "Ja" : "Nee"}</Text>
    </View>
  );
};

export default Choice;
