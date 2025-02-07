import Header from '../Header/Header.jsx'
import gen1 from '/gen-1.png'
import gen2 from '/gen-2.png'
import gen3 from '/gen-3.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import styles from './Gender.module.css'

const Gender = () => {
    const [selectedGender, setSelectedGender] = useState('');

    const handleGenderClick = (e) => {
        setSelectedGender(e.currentTarget.value)
    }
    const handleClick = (e) => {
        if(selectedGender === ''){
            alert('Debes seleccionar un genero')
            e.preventDefault()
        }
        setSelectedGender('')
    }

    return(
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>INGRESA TU GÉNERO</h1>
                </div>
                <div className={styles.genderContainer}>
                    <button className={`${styles.genderButtons} ${selectedGender === 'masculino' ? styles.selected : ''}`} value='masculino' onClick={handleGenderClick}>
                        <img className={styles.image} src={gen1} alt="Masculino" />
                    </button>
                    <button className={`${styles.genderButtons} ${selectedGender === 'no binario' ? styles.selected : ''}`} value='no binario' onClick={handleGenderClick}>
                        <img className={styles.image} src={gen2} alt="No Binario" />
                    </button>
                    <button className={`${styles.genderButtons} ${selectedGender === 'femenino' ? styles.selected : ''}`} value='femenino' onClick={handleGenderClick}>
                        <img className={styles.image} src={gen3} alt="Femenino" />
                    </button>
                </div>
                <div className={styles.enterContainer}>
                    <Link to="/data" onClick={handleClick} className={styles.button} state={{gender: selectedGender}}>Ingresar</Link>
                </div>
            </div>
        </>
    )
}

export default Gender