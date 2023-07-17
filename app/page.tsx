import Image from 'next/image'
import styles from './page.module.css'
import CardCase from '@/components/cardcase/CardCase'

export default function Home() {
  return (
    <main className={styles.main}>
      <CardCase cardWrapperClass="sdasddd"/>
    </main>
  )
}
