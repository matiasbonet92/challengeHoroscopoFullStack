import styles from './Header.module.css'
import back from '/back_button.png'
import { useLocation, useNavigate} from 'react-router-dom'
import { useAppContext } from '../../AppContext'

const Header = ({title}) => {
    const location = useLocation()
    const navigate = useNavigate();
    const { appData, setAppData } = useAppContext()

    const handleBackClick = () => {
        console.log(location.pathname)
        switch (location.pathname){
            case '/gender':
                navigate('/')
                setAppData({
                    birthDate: '',
                    dateOfSearch: '',
                    daysToNextBirthDate: 0,
                    email: '',
                    gender: '',
                    horoscope: '',
                    id: 0,
                    name: '',
                    sign: ''
                })
                break;
            case '/data':
                navigate('/gender')
                break;
            case '/horoscope':
                navigate('/data')
                break;
            case '/report':
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