import Header from '../Header/Header.jsx'
import gen1 from '/gen-1.png'
import gen2 from '/gen-2.png'
import gen3 from '/gen-3.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import styles from './Gender.module.css'
import { useAppContext } from '../../AppContext.jsx'

const Gender = () => {
    const { appData, setAppData } = useAppContext()

    const handleGenderClick = (e) => {
        const data = e.currentTarget.value
        setAppData( prev => ({ ...prev, gender: data }));
    }

    const handleClick = (e) => {
        if(!appData.gender){
            alert('Debes seleccionar un genero')
            e.preventDefault()
        }
    }

    return(
        <>
            <Header title={'Tu Genero'} />
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>INGRESA TU GÉNERO</h1>
                </div>
                <div className={styles.genderContainer}>
                    <button className={`${styles.genderButtons} ${appData.gender === 'masculino' ? styles.selected : ''}`} value='masculino' onClick={handleGenderClick}>
                        <img className={styles.image} src={gen1} alt="Masculino" />
                    </button>
                    <button className={`${styles.genderButtons} ${appData.gender === 'no binario' ? styles.selected : ''}`} value='no binario' onClick={handleGenderClick}>
                        <img className={styles.image} src={gen2} alt="No Binario" />
                    </button>
                    <button className={`${styles.genderButtons} ${appData.gender === 'femenino' ? styles.selected : ''}`} value='femenino' onClick={handleGenderClick}>
                        <img className={styles.image} src={gen3} alt="Femenino" />
                    </button>
                </div>
                <div className={styles.enterContainer}>
                    <Link to="/data" onClick={handleClick} className={styles.button}>CONTINUAR</Link>
                </div>
            </div>
        </>
    )
}

export default Gender