import styles from './Header.module.css'
import back from '/back_button.png'

const Header = () => {
    return(
        <>
            <div className={styles.container}>
                <button className={styles.button}>
                    <img className={styles.image} src={back} alt="Back" />
                </button>
                <h2 className={styles.title}>Dato de pagina</h2>
            </div>
        </>
    )
}

export default Header