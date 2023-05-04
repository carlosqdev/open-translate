import styles from './navbar.module.css'

export const Navbar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <h1>Traductor</h1>
      </div>
    </nav>
  )
}
