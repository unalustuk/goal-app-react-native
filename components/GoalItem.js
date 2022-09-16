import { StyleSheet, Text, View } from "react-native"

export default function GoalItem(props) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.listItemText}>{props.listItem}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        backgroundColor: "purple",
        marginVertical: 8,
        padding: 8,
        borderRadius: 11,
    },
    listItemText: {
        fontSize: 24,
        color: "#fff",
    },
})
