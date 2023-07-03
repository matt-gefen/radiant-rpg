
import styles from './builder.module.css'

export default function Builder() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        holy heck batman, a builder sub-page
        <a href='/character'>back</a>
      </div>
    </main>
  )
}
