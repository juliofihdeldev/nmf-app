import React from "react";
import { Text } from "react-native";
import styles from "./H2.styles";
import mainStyle from "../styles";

interface Props {
  style?: any;
  children: React.ReactNode;
  darkGray?: boolean;
  lightGray?: boolean;
}

export default function H2(props: Props): React.ReactElement {
  let customStyle = [styles.default, props.style];
  const { darkGray, lightGray } = props;

  if (darkGray) {
    customStyle.push(mainStyle.darkGray);
  }

  if (lightGray) {
    customStyle.push(mainStyle.lightGray);
  }

  return <Text {...props} style={customStyle} />;
}

H2.displayName = "H2";
