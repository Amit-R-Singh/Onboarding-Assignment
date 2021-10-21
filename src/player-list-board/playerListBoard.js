import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { useQuery } from '@apollo/react-hooks';
import { getPlayerList } from './../services/getPlayerInfo'
import { orderBy } from 'lodash';
import style from './style';


const IPLPlayerList = (props) => {
    const {data, loading, error} =  useQuery(getPlayerList, {
        fetchPolicy: "network-only", 
    });

    const fetchPlayerDetails = (playerId, name) => {
        props.navigation.navigate('PlayerDetail', {playerId, name})
    };

     const renderPlayerList = () => {
        return (
          
            <View style={style.viewContent}>
                <Text style={style.textHeader}>Player List</Text>
                <FlatList 
                    style={style.listContent}
                    data={orderBy(data.players, ['iplTeam', 'name'])}
                    renderItem = {(player) => <Text style={style.playerContent} onPress={() => fetchPlayerDetails(player.item.cricviz_id, player.item.name)} underlayColor="#AAA">{`${player.item.name} | ${player.item.iccTeam} | ${player.item.iplTeam}`}</Text>}
                />
            </View>
        );
    }

    if(loading) {
        return <Text> ...Loading</Text>
    }

    if(error) {
        return <Text> {error.message} </Text>
    }

    if(data) {
        return renderPlayerList();
    }
    // useEffect (()=>{
    //     fetchPlayerData();
    // }, []);

    // const fetchPlayerData =  () => { 
    //     try {
    //         if(data) {
    //             setPlayerList(data.players);
    //         } else {
    //             setPlayerList(playerData.data.players)
    //         }
    //     } catch (err) {
    //         console.error(err);
    //         console.log('error occurred', err);
    //     }
    // }

    

   
    // return renderPlayerList();
};

export default withNavigation(IPLPlayerList);
