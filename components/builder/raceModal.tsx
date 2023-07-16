'use client'
import { useState, useEffect, useRef } from 'react'
import styles from './raceModal.module.css'
import races from '../../data/5e_tools_data/races.json'

import { map, filter } from 'lodash';

interface Props {
  setRaceModalOpen: (bool: any) => void,
}

interface IRace {
  name: String,
  source: String,
  page: Number,
  size: string[],
  speed: {} | string,
  ability: {}[] | undefined,
  entries: {}[],
  languageProficiencies: {}[],
  traitTags: {}[]
}

const RacesModal = ({
  setRaceModalOpen,
}: Props) => {
  const [progress, setProgress] = useState(0);
  const [selectedRace, setSelectedRace] = useState<IRace>({});
  const acceptedSources = ['VGM', 'DMG', 'PHB', 'SCAG', 'TCE', 'MOT', 'MPMM', 'VRGR']
  const filteredRaces = filter(races.race, function(o) {
    return acceptedSources.includes(o.source) && o.name !== 'Custom Lineage'
  })

  const ref = useRef()

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setRaceModalOpen(false);
      }
    }
    document.addEventListener("click", checkIfClickedOutside)
    return () => {
      document.removeEventListener("click", checkIfClickedOutside)
    }
    
  }, [setRaceModalOpen])

  useEffect(() => {
    const handleEsc = (e: any) => {
      if (e.key === 'Escape') {
        setRaceModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
    
  }, [setRaceModalOpen])

  return (
    <div className={styles['race-modal']} ref={ref}>
      <div className={styles['races-content']}>
        <div className={styles['races-table-wrapper']}>
        <div className={styles['modal-column']}>
          <div className={styles['modal-header']}>
            <div>Character Race</div>
          </div>
          {
            map(filteredRaces, (race, index)=>(
              <div key={`race-${index}`} className={styles['modal-row']}>
                <button 
                  className={styles.race}
                  onClick={()=>{
                    console.log(race)
                    setSelectedRace(race)
                  }}
                >
                    {race.name}
                </button>
              </div>
            ))
          }

        </div>
        <div className={styles['modal-column']}>
          <div className={styles['modal-header']}>
            <div>Source Book</div>
          </div>
          {
            map(filteredRaces, (race, index)=>(
              <div key={`race-${index}`} className={styles['modal-row']}>
                <div>{race.source}</div>
              </div>
            ))
          }

        </div>
        </div>
        <div className={styles['race-info-section']}>
          {Object.keys(selectedRace).length > 0 && (
            <>
              <div>{selectedRace.name}</div>
              <div>
                <div>Character Traits</div>
                {
                  map(selectedRace.entries, (entry, index)=>(
                    <>
                      { entry.name !== undefined && (
                        <div key={`selected-entries-${index}`}>
                        <div>{entry.name}</div>
                        <div>{entry.entries[0]}</div>
                      </div>
                      )}
                    </>
                  ))
          }
              </div>
            </>
          )}
          {Object.keys(selectedRace).length === 0 && (
            <div>No Character Race Selected</div>
          )}
        </div>
      </div>
      <button
        onClick={()=>setRaceModalOpen(false)}>
        Close
      </button>
    </div>
  )
}

export default RacesModal;