import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    contentView: {
        flex: 1,
        backgroundColor: '#808080'
    },
    textHeader: {
        paddingTop: 10,
        textAlign:"center",
        fontSize: 20,
        fontWeight: "bold",
        textDecorationLine: "underline" 
    },
    playerContent: {
        fontSize: 16,
        fontWeight: "bold",
        paddingTop: 10 
    },
    listContent: {
        paddingLeft: 20,
        marginBottom: 20
    }
});

export default style;