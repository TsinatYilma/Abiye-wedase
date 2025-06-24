import { useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import "./musicPlayer.css"


function MyMusicPlayer({wedase}) {
    const defaultAudio = "/assets/monday/ze_senuy/ሰላም ለኪ.mp3"
    const selectedAudio = wedase?.audio || defaultAudio;
    
    return (
      <AudioPlayer
        className='!bg-transparent '
        src={`${selectedAudio}`}
        progressJumpSteps={{ backward: 5000, forward: 5000 }}
        showJumpControls={true}
        showFilledVolume={false} 
        
      />
    );
  };
  
  export default MyMusicPlayer;