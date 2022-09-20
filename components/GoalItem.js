import { StyleSheet, Text, View, Pressable } from "react-native"

export default function GoalItem(props) {
    return (
        <View style={styles.listItem}>
            <Pressable
                onPress={props.deleteGoalHandler.bind(this, props.listItemID)}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.listItemText}>{props.listItem}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        backgroundColor: "#130136",
        marginVertical: 8,
        borderRadius: 8,
    },
    listItemText: {
        padding: 8,
        color: "#F6F4FB",
        fontSize: 24,
    },
    pressedItem: {
        backgroundColor: "#00040F",
        borderRadius: 8,
    },
})
