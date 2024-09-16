import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";
import { Colors } from "../Colors";

const customLightTheme = {...MD3LightTheme,colors: Colors.light}
const customDarkTheme = {...MD3DarkTheme,colors: Colors.dark}

export {
    customDarkTheme,
    customLightTheme
}