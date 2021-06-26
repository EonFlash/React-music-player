import React, { useState } from 'react';

//Adding styles
import './styles/app.scss';

//Adding components
import Library from './components/Library';
import Player from './components/Player';
import Song from './components/Song';

//Importing Data
import data from './data';



function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} />
      <Library songs={songs} />
    </div>
  );
}

export default App;
