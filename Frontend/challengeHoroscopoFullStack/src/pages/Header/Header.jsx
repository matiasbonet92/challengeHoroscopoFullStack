import styles from './Header.module.css'
import back from '/back_button.png'
import { useLocation, useNavigate} from 'react-router-dom'

const Header = ({title}) => {
    const location = useLocation()
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1)
    }

    return(
        <>
            <div className={styles.container}>
                <button onClick={handleBackClick} className={styles.button}>
                    <img className={styles.image} src={back} alt="Back" />
                </button>
                <span className={styles.title}>{title}</span>
            </div>
        </>
    )
}

export default Header