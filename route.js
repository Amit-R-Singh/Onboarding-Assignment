import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import IPLPlayerList from './src/player-list-board/playerListBoard';
import PlayerDetail from './src/player-detail-page/playerDetails';

const AppNavigator = createStackNavigator({
    Home: { screen: IPLPlayerList }
  },
    {
      initialRouteName: 'Home',
      headerMode: 'none',
      navigationOptions: {
        headerVisible: true,
        title: 'IPL Player List'
      },
    });
  
  
  const RootStack = createStackNavigator(
    {
      Main: {
        screen: AppNavigator,
      },
      PlayerDetail: { 
        screen: PlayerDetail, 
        navigationOptions: ({navigation}) => ({
          title:  `${navigation.state.params.name}`
        }), 
      },
    }
  );

export default createAppContainer(RootStack);