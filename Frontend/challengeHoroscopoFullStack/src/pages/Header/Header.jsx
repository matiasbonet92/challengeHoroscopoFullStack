import styles from './Header.module.css'
import back from '/back_button.png'
import { useLocation, useNavigate} from 'react-router-dom'
import { useAppContext } from '../../AppContext'
import Delete from '/trash.png'
import { useEffect } from 'react'

const Header = ({title}) => {
    const location = useLocation()
    const navigate = useNavigate();
    const { appData, setAppData } = useAppContext()
    
    const handleDeleteData = async () => {
        localStorage.clear()
        navigate('/')
    }

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
                <div className={styles.titleContainer}>
                    <span className={styles.title}>{title}</span>
                    {
                        location.pathname === '/report' ? 
                            <button className={styles.deleteButton} onClick={handleDeleteData}>
                                <img className={styles.deleteImage} src={Delete} alt="borrar estadisticas"/>
                            </button> 
                        : null
                    }
                </div>
            </div>
        </>
    )
}

export default Header