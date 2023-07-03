
import styles from './character.module.css'

export default function Character() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.title}>Character Toolbox</div>
        <ul className={styles['character-links']}>
          <li>
            <a href="/character/builder">Create Character</a>
          </li>
          <li>
            <a href="/">Back Home</a>
          </li>
        </ul>
      </div>
    </main>
  )
}
