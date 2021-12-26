import { Platform } from "react-native";

import { Text, View } from "./Themed";

export function StaticMonoText(props) {
  return (
    <Text 
      {...props}
      style={[
        props.style,
        {
          // The "code" font is different on each platform.
          fontFamily: Platform.select({
            default: "Courier",
            ios: "Courier New",
            android: "monospace",
          }),
          fontWeight: "500",
        },
      ]}
    >  
      StaticText
    </Text>
  )
};

export function ParametericMonoText(props) {
  return (
    <Text 
      {...props}
      style={[
        props.style,
        {
          // The "code" font is different on each platform.
          fontFamily: Platform.select({
            default: "Courier",
            ios: "Courier New",
            android: "monospace",
          }),
          fontWeight: "500",
        },
      ]}
    >  
      {props}
    </Text>
  )
};
