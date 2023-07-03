
import styles from './page.module.css'

export default function App() {
  return (
    <div className={styles.description}>
      <h1 className={styles.title}>Radiant Moon TTRPG</h1>
      <div >Personal TTRPG Character Management</div>
      <div>Currently limited to D&D 5e - hoping to expand to include some other indie ttrpgs</div>
      <a href="/references">References</a>
    </div>
  )
}
