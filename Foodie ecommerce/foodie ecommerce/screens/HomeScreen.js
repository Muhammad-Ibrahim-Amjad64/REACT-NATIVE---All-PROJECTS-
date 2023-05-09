
import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { IconButton } from "react-native-paper";
import { MEALS } from "../data/dummy-data"
import { CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";
import Slider from "../UI/Slider"
import { ScrollView } from "react-native-gesture-handler";
import CategoryGridTile from "../components/CategoryGridTile";
const HomeScreen =(props)=>{


    function renderCategoryItem(itemData) {
        function pressHandler() {
            props.navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
            });
        }
    
        return (
            <CategoryGridTile
            style={{height: 150, width: 150}}
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={pressHandler}
          />
        );
      }
    return(
        <View style={styles.screen}>
            
        <ScrollView style={styles.screen}>
            <Slider></Slider>
                <Text style={styles.title}>Hot deals</Text>

                <MealsList items={MEALS} />
                <Text style={[styles.title,{  fontSize: 27}]}>Categories</Text>
                <FlatList
                nestedScrollEnabled={true}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      horizontal={true}
      renderItem={renderCategoryItem}
    
    />
    <IconButton icon={"cart"} style={styles.icon}></IconButton>            
        </ScrollView>
            


            
    </View>
    )
    // 

}

const styles = StyleSheet.create({
    icon: {
        zIndex:1000
    },
    screen: {
        flex: 1,
        // justifyContent: "center",
        // alignItems:"center"
    },  title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginHorizontal:20
      },


})

export default HomeScreen;
