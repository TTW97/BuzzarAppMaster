import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import db from './config'
import AppHeader from './components/AppHeader'

export default class App extends Component {

  constructor() {

    super();
    this.state = {

      teamsRank: []

    }

  }

  showTeamRank = () => {

    var teams = [];
    
    var teamRef = db.ref('teams/');



    teamRef.on('value', (data) => {

      var teamlist = data.val();
      
      for (var team in teamlist) {

        if (teamlist[team]['isButtonPressed'] === true) {

          teamlist[team]['teamname'] = team;

          teams.push(teamlist[team])
          

        }

      }

      teams.sort(function(team1,team2) {

        return team1.time - team2.time

      })

      this.setState({teamsRank: teams});
      teams = []
      console.log(teams)

    }) 

  }

  componentDidMount() {

    this.showTeamRank();

  }

  resetdb = () => {

    var resetref = db.ref('teams/').set({
      
      red: {

        'isButtonPressed': false,
        'time': 0,
        'enabled': true

      },

      blue: {

        'isButtonPressed': false,
        'time': 0,
        'enabled': true

      },

      green: {

        'isButtonPressed': false,
        'time': 0,
        'enabled': true

      },

      yellow: {

        'isButtonPressed': false,
        'time': 0,
        'enabled': true

      },
      
    });

  }


  

  render() {

    return (

      <View>

        <AppHeader />

        <View style={{flex:1, marginTop: 25}}>

          {this.state.teamsRank.map((team) => (

            <View style = {{backgroundColor: team.teamname, 
            
              alignItems: 'center',
              justifyContent: 'center',
              height: 50,
              margin: 5,
              borderWidth: 5, 
              borderColor: 'black',

            
            }}>

              <Text style = {{fontSize: 20,
              fontWeight: 'bold',

              }}>{team.teamname.toUpperCase()}</Text>

            </View>

          ))} 

        
        </View>

        <View style = {{marginTop: 300}}>

          <Button title = 'reset' onPress = {this.resetdb}></Button>

        </View>

      </View>
    );
  }
}






