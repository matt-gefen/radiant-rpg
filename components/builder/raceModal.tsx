'use client'
import { useState } from 'react'
import styles from './raceModal.module.css'
import races from '../../data/5e_tools_data/races.json'

export default function RacesModal() {
  const [progress, setProgress] = useState(0);
  console.log('races',races)
  return (
    <div className={styles['race-modal']}>
      <button>Close</button>
    </div>
  )
}
