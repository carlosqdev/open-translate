import styles from './page.module.css'
import { Navbar } from '@/components/navbar'
import { TextOriginal } from '@/components/textOriginal'
import { Result } from '@/components/result'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className={styles.layout}>
      <Navbar />
      <div className={styles.container}>
        <TextOriginal />
        <Result />
      </div>

      <Footer />
    </main>
  )
}
