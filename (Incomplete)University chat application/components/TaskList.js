import React from "react";
import { Text, View, StyleSheet,ScrollView } from "react-native";
import TaskItem from "./TaskItem";
import Card from "./UI/Card";
import { FlatList } from "react-native-gesture-handler";
const TaskList =({TaskList,Categories})=>{

    return(
        <View style={styles.screen}>
            <View>
<Text style={styles.Heading}>Upcoming Event</Text>
            <FlatList
                // numColumns={2}
                horizontal={true}
                keyExtractor={(item, index) => item.id}
                data={TaskList}
                renderItem={(taskitem) =>
                    <Card
                        
            
                    description={taskitem.item.description }
                        onPress={() => { }}
                    title={ taskitem.item.title}
                     />} >
                
            </FlatList>
            </View>

<Text style={styles.Heading}>Event details</Text>
            <FlatList
                // numColumns={2}
                // horizontal={true}
                keyExtractor={(item, index) => item.id}
                data={TaskList}
                renderItem={(taskitem) =>
                    <TaskItem
                    
                    date={taskitem.item.date}
                    description={taskitem.item.description }
                    time={'6:30 pm'}
                    title={ taskitem.item.title}
                    type={taskitem.item.type} />} >
                
            </FlatList>
                         
        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // height: 100

        // justifyContent: "center",
        // alignItems:"center"
    },
    Heading: {
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Playfairdisplay"
        ,
        color: "#565656",
        fontWeight: "bold",
        fontSize: 15,
        
    }


})

export default TaskList;