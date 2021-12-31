import { Platform } from "react-native";
import { Text, View } from "./Themed";

async function setText(){
 res =  await fetch('https://api.amazon.com/')
            .then ( result => result.json());
  textToShow = res.amazonData['product'];
};


export var textToShow = "Before";
export function ChangableText(props) {
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
          fontWeight: "500"
        },
        
      ]} onPress={setText}
    >  
    {textToShow}
    </Text>
  )
};
