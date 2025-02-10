import Header from "../Header/Header.jsx"
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"
import * as api from "../../api/index.js"
import { getDaysToNextBirthdate, getUserSign, getUserSignImage } from '../../components/index.js'
import spinner from '/spinner.svg'
import {v4 as uuid} from 'uuid'
import styles from './Horoscope.module.css'
import { useAppContext } from "../../AppContext.jsx"

const Horoscope = () => {
    const { appData, setAppData } = useAppContext()
    const [isLoading, setIsLoading] = useState(false)
    const [horoscopeImage, setHoroscopeImage] = useState('')

    const handleContinueToHome = () => {
        // guardo info
        localStorage.setItem(uuid(), JSON.stringify(appData))
        // reseteo valores
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
    }

    const getHoroscope = async () => {
        setIsLoading(true)

        try{
            // determinar el signo basado en la fecha de nacimiento
            const sign = await getUserSign(appData.birthDate)
            // armar la data de la api
            const apiData = {
                "date": appData.birthDate,
                "lang": "es",
                "sign": sign
            }

            const response = await api.fetchHoroscope(apiData)
            if(response.status == 200) {
                // recupero la imagen del horoscopo
                const imagePath = await getUserSignImage(response.data.icon)
                setHoroscopeImage(imagePath)

                // calcular los dias desde hoy hasta el cumpleaños(el date esta en responde.data.date) para saber cuantos dias faltan para el cumpleaños
                const days = await getDaysToNextBirthdate(response.data.date)

                // guardo response data en global
                setAppData(prev => ({
                    ...prev,
                    id: response.data.id,
                    horoscope: response.data.horoscope,
                    sign,
                    dateOfSearch: new Date(Date.now()).toLocaleDateString(),
                    daysToNextBirthDate: days
                }))
            }

        }catch(error){
            console.log(error)
        }finally{
            setIsLoading(false) 
        }

    }

    useEffect(() => {
        getHoroscope()
    }, []);

    return (
        <>     
            <Header title={'Tu Horóscopo'}/>
            <div className={styles.container}>
                {
                    isLoading ? ( <img className={styles.spinner} src={spinner} alt="" /> ) : (
                    <>
                        <div className={styles.titleContainer}>
                            {horoscopeImage && (
                                <img className={styles.image} src={horoscopeImage} alt="Horoscope" />
                            )}
                        </div>
                        <div className={styles.contentContainer}>
                            <h1 className={styles.title}>Hola {appData.name}!</h1>
                            <p className={styles.content}>Tu horoscopo para hoy dice que {appData.horoscope}</p>
                            <p className={styles.daysTo}>Faltan {appData.daysToNextBirthDate} dias para tu cumpleaños</p>
                        </div>
                        <div className={styles.buttonContainer}>
                            <Link to="/" className={styles.continueButton} onClick={handleContinueToHome}>Continuar</Link>
                        </div>
                    </> )
                }
            </div>
        </>
    )
}

export default Horoscope