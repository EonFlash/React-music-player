import React, { useState } from 'react';

//Adding styles
import './styles/app.scss';

//Adding components
import Player from './components/Player';
import Song from './components/Song';

//Importing Data
import data from './data';


function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />

    </div>
  );
}

export default App;
