import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Text, ScrollView, Section, SectionList } from 'react-native';

import { getSelectedPlayerDetails } from '../services/getPlayerInfo'
import style from './style';
const PlayerDetail = (props) => {
    
    const { data, loading, error } = useQuery(getSelectedPlayerDetails, {fetchPolicy: "network-only", variables: {"playerId": props.navigation.state.params.playerId}})

    const renderPlayerDetails = () => {
      if(loading) {
        return <Text>Player Info Fetching...</Text>
      }
  
      if(error) {
        return <Text>{error.message}</Text> 
      }
  
      if(data) {
        return (
          <Text> 
              <Text style={style.playerField}>Player Summary:{"\n\n"}</Text>
              <Text style={style.playerDescriptionField}>{data.playerInfo[0].player_summary}{"\n\n"}</Text>
              <Text style={style.playerField}>Age:</Text>
              <Text style={style.playerValueField}>  {JSON.parse(data.playerInfo[0].cricviz_details).age}{"\n\n"}</Text>
              <Text style={style.playerField}>Nationality:</Text>
              <Text style={style.playerValueField}>  {JSON.parse(data.playerInfo[0].cricviz_details).nationality}{"\n\n"}</Text>
              <Text style={style.playerField}>Batting Style:</Text>
              <Text style={style.playerValueField}>  {data.playerInfo[0].battingStyle}{"\n\n"}</Text>
              <Text style={style.playerField}>Bowling Style:</Text>
              <Text style={style.playerValueField}>  {data.playerInfo[0].bowlingStyle}{"\n\n"}</Text>
          </Text>
        );
      }
    }

    return(
        
          <ScrollView style={style.detailContent}>
            
              {renderPlayerDetails()}
            
          </ScrollView>      
        
    );
};

export default PlayerDetail;