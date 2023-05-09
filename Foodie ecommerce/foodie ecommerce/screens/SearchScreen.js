import React from 'react';
import { Searchbar } from 'react-native-paper';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealsList from '../components/MealsList/MealsList';


const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [filteredMeals, setFilteredMeals] = useState(null);
    
const onChangeSearch = (query) => { 
  setSearchQuery(query)
  
  const filtereditems = MEALS.filter((item) => {
          return item.title.toLowerCase().includes(query.toLowerCase());
        });
        
        setFilteredMeals(filtereditems);
};

  


  return (
    <View style={styles.screen}>
      <View>
    <Searchbar
      // placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.search}
      />
      </View>
      <MealsList items={filteredMeals}></MealsList>
  
      </View>
  );
};

export default SearchScreen;


const styles = StyleSheet.create({
  screen: {
      flex: 1,
      // justifyContent: "center",
      // alignItems:"center"
  },
  search: {
    // flex:1 ,
    margin: 10,
    backgroundColor:"#dbdbdb"
  }


})

