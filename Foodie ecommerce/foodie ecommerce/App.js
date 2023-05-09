import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import CustomDrawer from "./UI/CustomDrawer";

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import EntryScreen from './screens/EntryScreen';
import SearchScreen from './screens/SearchScreen';
import HomeScreen from './screens/HomeScreen';
import Profile from './screens/Profile';
import MyCart from './screens/MyCart';

// import FavoritesContextProvider from './store/context/favorites-context';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function DrawerNavigator() {
  const navigation = useNavigation()
  return (
    <Drawer.Navigator 
    drawerContent={props => <CustomDrawer {...props}  />}
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#fff7f7' },
        drawerContentStyle: { backgroundColor: '#351401' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1',
        headerRight: ({ color, size }) => (
          <Ionicons name="search" color={"white"} size={20} style={{ marginHorizontal: 20 }} onPress={
            ()=>{navigation.navigate("Search")}
          } />
        )
      }}
    >
         <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Foodie HomeScreen',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="MyCart"
        component={MyCart}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
      
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#f0ccbe' },
              headerTintColor: 'black',
              contentStyle: { backgroundColor: '#ffffff' },
              headerRight :  ({ color, size }) => (
                  <Ionicons name="search" color={"white"} size={20} style={{marginVertical:10}} />
                )
            }}
          >
            <Stack.Screen
        name="Foodie"
        component={EntryScreen}
        options={{
          // drawerIcon: ({ color, size }) => (
          //   <Ionicons name="star" color={color} size={size} />
          // ),
        }}
      />
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
              options={{
                title: 'About the Meal',
              }}
            />
          
          <Stack.Screen
        name="Search"
        component={SearchScreen}
              options={{
                headerRight:null
          // drawerIcon: ({ color, size }) => (
          //   <Ionicons name="star" color={color} size={size} />
          // ),
        }}
      />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
