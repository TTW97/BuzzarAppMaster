import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component {

  render() {

    return (

      <View style = {styles.textback}>

        <Text style = {styles.text}>BUZZER APP</Text>

      </View>

    );

  }


}

const styles = StyleSheet.create({

  textback: {backgroundColor: 'brown'},
  text: {color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 20,
        paddingTop: 20
        
          
        }
        
})

export default AppHeader;
