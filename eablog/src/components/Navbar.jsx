import styles from '../styles/navbar.module.css'
import logo from '../images/logo.png'
export default function Navbar() {
  return (
    <nav >
      <img src={logo} alt="" className={styles.logo} />
        <ul className={styles.navlists}>
          <li className={styles.navlist}>
            <a href="" className={styles.navlink}>Marcas</a>
          </li>
          <li className={styles.navlist}>
            <a href="/" className={styles.navlink}>Início</a>
          </li>
          <li className={styles.navlist}>
            <a href="/about" className={styles.navlink}>Sobre</a>
          </li>
          <li className={styles.navlist}>
            <a href="/contact" className={styles.navlink}>Contato</a>
          </li>
        </ul>
    </nav>
  )
}
