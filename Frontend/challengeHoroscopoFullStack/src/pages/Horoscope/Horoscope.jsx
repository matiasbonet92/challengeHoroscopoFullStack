import Header from "../Header/Header.jsx"
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from "react"
import * as api from "../../api/index.js"
import { getDaysToNextBirthdate, getUserSign, getUserSignImage } from '../../components/index.js'
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

        try{
            // determinar el signo basado en la fecha de nacimiento
            const sign = await getUserSign(userData.birthDate)
            // armar la data de la api
            const apiData = {
                "date": userData.birthDate,
                "lang": "es",
                "sign": sign
            }

            const response = await api.fetchHoroscope(apiData)
            if(response.status == 200) {
                // guardo response data
                setApiResponse(response.data)
                // recupero la imagen del horoscopo
                setHoroscopeImage(await getUserSignImage(response.data.icon))
                // calcular los dias desde hoy hasta el cumpleaños(el date esta en responde.data.date) para saber cuantos dias faltan para el cumpleaños
                const days = await getDaysToNextBirthdate(response.data.date)
                setDaysToBirthDate(days)     
                
                const dateToSave = {
                    ...userData,
                    horoscope: response.data.horoscope,
                    id: response.data.id,
                    sign: response.data.sign,
                    daysToNextBirthdate: days,
                    dateOfSearch: new Date(Date.now()).toLocaleDateString()
                }
                localStorage.setItem(uuid(), JSON.stringify(dateToSave))
            }

        }catch(error){
            console.log(error)
        }

        setIsLoading(false) 

    }

    useEffect(() => {
        getHoroscope()
    }, [userData], [])

    return (
        <>     
            <Header title={'Tu Horóscopo'}/>
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
                            <h1 className={styles.title}>Hola {userData.name}!</h1>
                            <p className={styles.content}>Tu horoscopo para hoy dice que {apiResponse.horoscope}</p>
                            <p className={styles.daysTo}>Faltan {daysToBirthDate} dias para tu cumpleaños</p>
                        </div>
                        <div className={styles.buttonContainer}>
                            <Link to="/" className={styles.continueButton}>Continuar</Link>
                        </div>
                    </> )
                }
            </div>
        </>
    )
}

export default Horoscope