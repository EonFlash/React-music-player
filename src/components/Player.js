import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons'

function Player({ currentSong, isPlaying, setIsPlaying }) {

    //Ref
    const audioRef = useRef(null);

    //Event Handler
    const onClickPlayHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }
        else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }



    }

    const timeUpdateHandler = (e) => {

        const current = e.target.currentTime;

        const duration = e.target.duration;

        setsongInfo({ ...songInfo, currentTime: current, duration: duration });

    };

    const getTime = (time) => {

        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )

    }
    const dragHandler = (e) => {

        audioRef.current.currentTime = e.target.value
        setsongInfo({ ...songInfo, currentTime: e.target.value })

    }

    //State
    const [songInfo, setsongInfo] = useState({

        currentTime: 0,
        duration: 0,
    });
    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input onChange={dragHandler} min={0} max={songInfo.duration} value={songInfo.currentTime} type="range" />
                <p>{getTime(songInfo.duration)}</p>
            </div>


            <div className="play-control">

                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={onClickPlayHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} />
            </div>

            <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>

        </div>
    )
}

export default Player
