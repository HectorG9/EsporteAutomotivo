import styles from '../styles/navbar.module.css'
import logo from '../images/logo.png'
export default function Navbar() {
  return (
    <nav>
      <img src={logo} alt="" />
        <ul>
          <li>
            <a href="/" className={styles.navlink}>Início</a>
          </li>
          <li>
            <a href="/about" className={styles.navlink}>Sobre</a>
          </li>
          <li>
            <a href="/contact" className={styles.navlink}>Contato</a>
          </li>
        </ul>
  
    </nav>
  )
}
