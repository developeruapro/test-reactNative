import React from "react";
import { Image } from "react-native";

interface IIcon {
  name: string;
}

const Icon = ({name}: IIcon) => {
  if (name === "home") {
    return (
        <Image
            source={require("../assets/images/home.png")}
            style={{width: 25, height: 25}}
        />
    );
  } else {
    return (
        <Image
            source={require("../assets/images/search.png")}
            style={{width: 25, height: 25}}
        />
    );
  }
};

export default Icon;
