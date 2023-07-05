'use client'
import { useState } from 'react'
import styles from '../../app/character/builder/builder.module.css'
import races from '../../data/5e_tools_data/races.json'
import RacesModal from './raceModal';

export default function FifthEditionCharacterBuilder() {
  const [progress, setProgress] = useState(0);
  const [race, setRace] = useState('');
  const [raceModalOpen, setRaceModalOpen] = useState(false);

  console.log('races',races)

  return (
    <div>
        {
          progress === 0 && (
            <div>
              <div className={styles.title}>New Character</div>
              <div className={styles.subtitle}>Key Information</div>
              <div>
                <div className={styles['character-fields']}>
                  <label>Character Name</label>
                  <input type="text" />
                </div>
                <div className={styles['character-fields']}>
                  <label>Race</label>
                  <button onClick={() => {setRaceModalOpen(true)}}>Select</button>
                  <input type="text"  style={{display: 'none'}}/>
                </div>
                <div className={styles['character-fields']}>
                  <label>Class</label>
                  <input type="text" />
                </div>
                <div className={styles['character-fields']}>
                  <label>Age</label>
                  <input type="text" />
                </div>
              </div>
              <RacesModal />
            </div>
          )
        }
    </div>
  )
}
