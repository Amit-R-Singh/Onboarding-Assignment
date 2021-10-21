import  { gql } from  'apollo-boost'; 

export const getPlayerList = gql`
    query onlyIpLPlayerList {
        players: sixergame_sixers(where: {iplTeam: {_is_null: false}}) {
            cricviz_id
            full_name
            iccTeam
            iplTeam
            name
        }
    }
`;



export const getSelectedPlayerDetails = gql`
    query getPlayerDetail($playerId: Int!) {
        playerInfo: sixergame_sixers(where: {cricviz_id: {_eq: $playerId}}) {
            name
            full_name
            iplTeam
            cricviz_id
            player_summary
            battingStyle
            bowlingStyle
            cricviz_details
        }
    }  
`;
