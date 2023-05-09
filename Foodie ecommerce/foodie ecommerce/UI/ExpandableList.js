import * as React from 'react';
import { List } from 'react-native-paper';
import { useState } from 'react';
import { StyleSheet } from 'react-native';

const ExpandableList = () => {
    const [expanded, setExpanded] = React.useState(true);

    const [selectedCity, setSelectedCity] = useState("city")
    const handlePress = () => setExpanded(!expanded);
    
    const onSelectHandler = (value) => {
        setSelectedCity(value)
    }

  return (
      <List.Section title="Select a city"
        //   style={{ borderColor: "#dfdfdf", borderWidth: 1 }}
      >
     

      <List.Accordion
        title= {selectedCity}
        left={props => <List.Icon {...props} icon="city" />}
        expanded={expanded}
        onPress={handlePress}>
              <List.Item
                     style={styles.listItem}
                  title="Karachi"
                  onPress={onSelectHandler.bind(this,"Karachi")}
                  
                //   left={props => <List.Icon {...props} icon={"city"} />}
              />
              <List.Item
                 style={styles.listItem}
                  title="Lahore"
                  onPress={onSelectHandler.bind(this,"Lahore")}
                  
                //   left={props => <List.Icon {...props} icon={"city"} />}
              />
              <List.Item
                style={styles.listItem}
                  title="Islamabad"
                  onPress={onSelectHandler.bind(this, "Islamabad")}
                  
                  
               
              />
              
      
      </List.Accordion>
    </List.Section>
  );
};


const styles = StyleSheet.create({
    listItem: {
        backgroundColor:"#ebebeb"
  }


})

export default ExpandableList