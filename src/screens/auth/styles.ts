import { StyleSheet } from "react-native";
import { theme } from "../../theme";


export const styles = StyleSheet.create({

    container: {
        flex: 1,
        height: "100%",

        flexDirection: "row"
    },

    left: {
        width: "50%",
        height: "100%",
        paddingTop: 100,
        backgroundColor: theme.colors.vinhoEscuro,
        
        flexDirection: "row",
        justifyContent: "center"

    },

    right: {
        width: "50%",
        height: "100%",
        paddingTop: 125,
        backgroundColor: theme.colors.branco,

        flexDirection: "row",
        justifyContent: "center"

    }
}) 