import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [displayText, setDisplayText] = useState('');
  const [volume] = useState(0.5);

  const handlePadClick = (e) => {
    const pad = e.target.closest('.drum-pad');
    setDisplayText(pad.id);
    const audio = pad.querySelector('audio');
    audio.volume = volume;
    audio.play().catch(error => {
      console.error('Failed to play audio:', error);
    });
  }

  const handleKeyPress = (e) => {
    const pad = document.getElementById(String.fromCharCode(e.keyCode));
    if (pad) {
      pad.parentElement.click();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    }
  }, []);

  return (
    <>
      <div id='drum-machine'>
        <div id='controls-container'>
          <div id='display'>{displayText}</div>
          <a href='https://drum-machine-black-phi.vercel.app/'>Click here for updated version.</a>
        </div>
        <div id='pad-bank'>
          <div className='drum-pad' id='Heater 1' onClick={handlePadClick}>Q
            <audio
              src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3'
              className='clip'
              id='Q'>
            </audio>
          </div>
          <div className='drum-pad' id='Heater 2' onClick={handlePadClick}>W
            <audio
              src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3'
              className='clip'
              id='W'>
            </audio>
          </div>
          <div className='drum-pad' id='Heater 3' onClick={handlePadClick}>E
            <audio
              src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3'
              className='clip'
              id='E'>
            </audio>
          </div>
          <div className='drum-pad' id='Heater 4' onClick={handlePadClick}>A
            <audio
              src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3'
              className='clip'
              id='A'>
            </audio>
          </div>
          <div className='drum-pad' id='Clap' onClick={handlePadClick}>S
            <audio
              src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3'
              className='clip'
              id='S'>
            </audio>
          </div>
          <div className='drum-pad' id='Open-HH' onClick={handlePadClick}>D
            <audio
              src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3'
              className='clip'
              id='D'>
            </audio>
          </div>
          <div className='drum-pad' id="Kick-n'-Hat" onClick={handlePadClick}>Z
            <audio
              src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3'
              className='clip'
              id='Z'>
            </audio>
          </div>
          <div className='drum-pad' id='Kick' onClick={handlePadClick}>X
            <audio
              src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3'
              className='clip'
              id='X'>
            </audio>
          </div>
          <div className='drum-pad' id='Closed-HH' onClick={handlePadClick}>C
            <audio
              src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3'
              className='clip'
              id='C'>
            </audio>
          </div>
        </div>
      </div>
    </>
  )
}

export default App


