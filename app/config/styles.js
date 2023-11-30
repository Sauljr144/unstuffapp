import { Platform } from "react-native";
import color from "./color";

export default {
    text:{
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        color: color.dark
    }
}
