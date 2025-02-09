import styles from './Header.module.css'
import back from '/back_button.png'
import { useLocation, useNavigate} from 'react-router-dom'

const Header = ({title}) => {
    const location = useLocation()
    const navigate = useNavigate();

    const handleBackClick = () => {
        console.log(location.pathname)
        switch (location.pathname){
            case '/gender':
                navigate('/')
                break;
            case '/data':
                navigate('/gender')
                break;
            case '/horoscope':
                navigate('/')
                break;
            default:
                break;
        }
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