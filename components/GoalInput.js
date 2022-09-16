import { StyleSheet, TextInput, View, Button } from "react-native"
import { useState } from "react"

export default function GoalInput(props) {
    const [goalInputText, setGoalInputText] = useState("")

    function goalInputHandler(enteredText) {
        setGoalInputText((prevState) => enteredText)
    }

    function addGoalHandler() {
        props.addGoalHandler(goalInputText)
        setGoalInputText("")
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Add goal..."
                onChangeText={goalInputHandler}
                value={goalInputText}
            />
            <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
        borderBottomWidth: 2,
        borderBottomColor: "#cccccc",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        padding: 12,
    },
})
