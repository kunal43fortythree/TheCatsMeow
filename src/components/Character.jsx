import React, { useState, useEffect, useRef } from 'react'
import CharacterMod from './CharacterMod.module.css'

function Character({sounds, soundNames }) {
    const [audio] = useState(new Audio())

    const firstButtonRef = useRef()
    // Auto play first sound on component load/update
    useEffect(() => {
        firstButtonRef.current.click()
    }, [sounds])

    const handleAudioPlay = (e) => {
        audio.pause();                // prevent overlapping
        audio.src = e.target.value;
        audio.currentTime = 0;
        audio.play();
    }

    return (
            <div className={CharacterMod.Sounds}>
                {
                    sounds.map((sound, index) => {
                        return <button
                                ref={firstButtonRef}
                                className={CharacterMod.SoundsBtn}
                                value={sound}
                                key={index}
                                onClick={handleAudioPlay} >
                                {soundNames[index]}
                                </button>
                    } 
                )}
            </div>
    )
}

export default Character
