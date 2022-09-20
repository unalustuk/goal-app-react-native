import {
    StyleSheet,
    TextInput,
    View,
    Button,
    Modal,
    Image,
    KeyboardAvoidingView,
} from "react-native"
import { useState } from "react"

export default function GoalInput(props) {
    const [goalInputText, setGoalInputText] = useState("")
    const [buttonActive, setButtonActive] = useState(false)

    function goalInputHandler(enteredText) {
        setGoalInputText((prevState) => enteredText)
    }

    function addGoalHandler() {
        props.addGoalHandler(goalInputText)
        setGoalInputText("")
    }
    return (
        <Modal visible={props.visible} animationType={"slide"}>
            <KeyboardAvoidingView
                style={styles.inputContainer}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <Image
                    source={require("../assets/images/goal.png")}
                    style={styles.image}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Add goal..."
                    placeholderTextColor="#F6F4FB"
                    onChangeText={goalInputHandler}
                    value={goalInputText}
                    autoFocus
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            onPress={props.endAddGoalHandler}
                            color={"red"}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Add Goal"
                            onPress={addGoalHandler}
                            disabled={goalInputText !== "" ? false : true}
                            color={"#00040F"}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#F6F4FB",
    },
    buttonContainer: {
        flexDirection: "row",
    },
    button: {
        width: "30%",
        marginHorizontal: 16,
        marginTop: 16,
    },
    textInput: {
        width: "100%",
        height: 48,
        padding: 12,
        borderRadius: 8,
        backgroundColor: "#130136",
        fontSize: 18,
        color: "#F6F4FB",
    },
    image: {
        width: 120,
        height: 120,
        margin: 20,
        backgroundColor: "#130136",
        borderRadius: 60,
        padding: 15,
    },
})
