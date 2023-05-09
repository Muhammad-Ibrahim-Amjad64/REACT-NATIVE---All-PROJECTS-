import PlaceForm from '../components/Places/PlaceForm';
import { useNavigation } from '@react-navigation/native';
import { insertPlace } from '../util/database';   // Using SQLite database step 10
function AddPlace() {
  const navigation = useNavigation()
   // Using SQLite database step 11 add this function
  const createPlaceHandler =  async(place) => {
    await insertPlace(place)
    navigation.navigate("AllPlaces", {
      place:place
    })

  
}

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlace;
