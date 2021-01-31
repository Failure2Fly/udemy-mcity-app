import React from  'react';
import Featured from './Featured'
import Matches from './Matches';
import MeetPlayers from './MeetThePlayers';
import Promotion from './Promotion';

const Home = (props) => {
  return (
    <div className="bck_blue">
        <Featured/>
        <Matches/>
        <MeetPlayers/>
        <Promotion/>
    </div>
  );
};

export default Home;

