import Header from "../Header/Header.jsx"
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from "react"
import * as api from "../../api/index.js"
import { getUserSign, getUserSignImage } from '../../components/index.js'
import spinner from '/spinner.svg'
import {v4 as uuid} from 'uuid'
import styles from './Horoscope.module.css'


const Horoscope = () => {
    const location = useLocation()
    const userData = location.state
    const [isLoading, setIsLoading] = useState(false)
    const [apiResponse, setApiResponse] = useState({})
    const [horoscopeImage, setHoroscopeImage] = useState('')
    const [daysToBirthDate, setDaysToBirthDate] = useState(0)


    const getHoroscope = async () => {
        setIsLoading(true)
        // determinar el signo basado en la fecha de nacimiento
        const sign = getUserSign(userData.birthDate)
        // armar la data de la api
        const apiData = {
            "date": userData.birthDate,
            "lang": "es",
            "sign": sign
        }

        try{
            const response = await api.fetchHoroscope(apiData)
            console.log(response.data)
            if(response.status == 200) {
                setApiResponse(response.data)
                setHoroscopeImage(await getUserSignImage(response.data.icon))
                // calcular los dias desde hoy hasta el cumpleaños(el date esta en responde.data.date) para saber cuantos dias faltan para el cumpleaños
                const birthDate = new Date(response.data.date)
                console.log(birthDate)
                const today = new Date()
                console.log(today)
                const timeDiff = today.getTime() - birthDate.getTime()
                console.log(timeDiff)
                const daysToBirthDate = Math.ceil(timeDiff / (8.64e+7) / (today.getUTCFullYear() - '1970'))
                setDaysToBirthDate(daysToBirthDate)                
            }

        }catch(error){
            console.log(error)
        }finally{ 
            setTimeout(() => {}, 2000);
            setIsLoading(false) 
        }

    }

    const handleDataSave = () => {
        console.log('Guardando datos')
        const dateToSave = {
            ...userData,
            horoscope: apiResponse.horoscope,
            id: apiResponse.id,
            sign: apiResponse.sign
        }
        localStorage.setItem(uuid(), JSON.stringify(dateToSave))
    }

    useEffect(() => {
        getHoroscope()
    }, [userData], [])

    return (
        <>     
            <Header/>
            <div className={styles.container}>
                {
                    isLoading ? ( <img className={styles.image} src={spinner} alt="" /> ) : (
                    <>
                        <div className={styles.titleContainer}>
                            {horoscopeImage && (
                                <img className={styles.image} src={horoscopeImage} alt="Horoscope" />
                            )}
                        </div>
                        <div className={styles.contentContainer}>
                            <p className={styles.title}>Hola {userData.name}!</p>
                            <p className={styles.content}>Tu horoscopo para hoy dice que {apiResponse.horoscope}</p>
                            <p className={styles.daysTo}>Faltan {daysToBirthDate} dias para tu cumpleaños</p>
                        </div>
                        <div className={styles.buttonContainer}>
                            <Link to="/" onClick={handleDataSave} className={styles.continueButton}>Continuar</Link>
                        </div>
                    </> )
                }
            </div>
        </>
    )
}

export default Horoscope