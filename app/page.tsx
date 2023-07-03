
import styles from './page.module.css'

export default function App() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 className={styles.title}>Radiant Moon TTRPG</h1>
        <div >Personal TTRPG Character Management</div>
        <div>Currently limited to D&D 5e - hoping to expand to include some other indie ttrpgs</div>
        <ul className={styles['landing-links']}>
          <li>
            <a href="/references">Reference</a>
          </li>
          <li>
            <a href="/character">Character Toolbox</a>
          </li>
          <li>
            <a href="/gm">GM Tools</a>
          </li>
        </ul>
          
      </div>
    </main>
  )
}
