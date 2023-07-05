import styles from './builder.module.css'

import FifthEditionCharacterBuilder from '@/components/builder/5eBuilder';

export default function Builder() {

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <FifthEditionCharacterBuilder />
      </div>
    </main>
  )
}
