import styles from '../css/styles.module.css'
import Header from '../components/Header'

const HomePage = () => {
  return (
    <>
      <Header />
      <div className={styles.hello}>Welcome to Next.js!</div>
    </>
  )
}

export default HomePage
