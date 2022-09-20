import { useState } from "react"
import { StyleSheet, View, FlatList, Button } from "react-native"
import GoalInput from "./components/GoalInput"
import GoalItem from "./components/GoalItem"

export default function App() {
    const [goalList, setGoalList] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false)
    function addGoalHandler(goalInputText) {
        setGoalList((prevState) => [
            ...prevState,
            { text: goalInputText, id: Math.random().toString() },
        ])
        endAddGoalHandler()
    }
    function deleteGoalHandler(id) {
        setGoalList((prevState) => {
            return prevState.filter((goal) => goal.id !== id)
        })
    }

    function startAddGoalHandler() {
        setIsModalVisible(true)
    }
    function endAddGoalHandler() {
        setIsModalVisible(false)
    }

    return (
        <View style={styles.appContainer}>
            <GoalInput
                addGoalHandler={addGoalHandler}
                visible={isModalVisible}
                endAddGoalHandler={endAddGoalHandler}
            />

            <View style={styles.listContainer}>
                <FlatList
                    data={goalList}
                    renderItem={(itemData) => {
                        return (
                            <GoalItem
                                listItem={itemData.item.text}
                                listItemID={itemData.item.id}
                                deleteGoalHandler={deleteGoalHandler}
                            />
                        )
                    }}
                    keyExtractor={(item, index) => {
                        return item.id
                    }}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Start Adding Goals"
                    onPress={startAddGoalHandler}
                    color={"#130136"}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    listContainer: {
        flex: 9,
    },
    buttonContainer: { marginTop: 8, marginBottom: 8 },
})
