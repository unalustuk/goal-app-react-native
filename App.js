import { useState } from "react"
import { StyleSheet, View, FlatList } from "react-native"
import GoalInput from "./components/GoalInput"
import GoalItem from "./components/GoalItem"

export default function App() {
    const [goalList, setGoalList] = useState([])

    function addGoalHandler(goalInputText) {
        setGoalList((prevState) => [
            ...prevState,
            { text: goalInputText, id: Math.random().toString() },
        ])
    }

    return (
        <View style={styles.appContainer}>
            <GoalInput addGoalHandler={addGoalHandler} />

            <View style={styles.listContainer}>
                <FlatList
                    data={goalList}
                    renderItem={(itemData) => {
                        return <GoalItem listItem={itemData.item.text} />
                    }}
                    keyExtractor={(item, index) => {
                        return item.id
                    }}
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
})
