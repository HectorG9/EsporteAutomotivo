import styles from '../styles/footer.module.css'
import instagram from '../images/instagram.png'
import facebook from '../images/facebook.png'
import whatsapp from '../images/whatsapp.png'
import gmail from '../images/gmail.png'
export default function Footer() {
  return (
    <>
    <footer>
      <div className={styles.images}>
        <a href=""><img src={instagram} alt="" className={styles.image}/></a>
        <a href=""><img src={facebook} alt="" className={styles.image}/></a>
        <a href=""><img src={whatsapp} alt="" className={styles.image}/></a>
        <a href=""><img src={gmail} alt="" className={styles.image}/></a>
      </div>
      <p>Todos os direitos reservados @2024</p>
    </footer>
    </> 
  )
}
