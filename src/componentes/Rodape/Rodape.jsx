import iconeFacebook from '../../assets/icones/facebook.svg'
import iconeTwitter from '../../assets/icones/twitter.svg'
import iconeInstagram from '../../assets/icones/instagram.svg'
import styles from './Rodape.module.scss'

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <div className={styles.rodape__icones}>
                
                <a href='#'>
                    <img className={styles.caixa__icone} src={iconeFacebook} />
                </a>

                <a>
                    <img className={styles.caixa__icone} src={iconeTwitter} />

                </a>
                <a>
                    <img className={styles.caixa__icone} src={iconeInstagram} />

                </a>


            </div>
            <p>Desenvolvido por Breno</p>
        </footer>

    )

}