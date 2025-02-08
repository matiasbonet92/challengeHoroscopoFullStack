import dama from '/dama.png'
import styles from './Welcome.module.css'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return(
        <>
            <div className={styles.container}>
                <img src={dama} alt="dama" className={styles.image} />
                <div className={styles.linkContainer}>
                    <Link to="/gender" className={styles.enterButton}>INGRESAR</Link>
                    <Link to="/report" className={styles.reportButton}>ESTADISTICAS</Link>
                </div>
            </div>
        </>
    )
}

export default Welcome