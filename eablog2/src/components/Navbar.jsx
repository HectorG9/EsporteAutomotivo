import styles from '../styles/navbar.module.css'
import logo from '../images/logo.png'
export default function Navbar() {
  return (
    <nav>
      <img src={logo} alt="" />
        <ul>
          <li>
            <a href="/">Início</a>
          </li>
          <li>
            <a href="/about">Sobre</a>
          </li>
          <li>
            <a href="/contact">Contato</a>
          </li>
          <li>
            
          </li>
        </ul>
  
    </nav>
  )
}
