import Header from '../Header/Header.jsx';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './UserData.module.css';
import { useAppContext } from '../../AppContext.jsx';

const ExportData = () => {
    const { appData, setAppData } = useAppContext();

    const handleChange = (e) => {
        switch(e.target.type) {
            case 'text':
                setAppData(prev => ({...prev, name: e.target.value}));
                break;
            case 'email':
                setAppData(prev => ({...prev, email: e.target.value}));
                break;
            case 'date':
                setAppData(prev => ({...prev, birthDate: e.target.value}));
                break;
            default:
                break;
        }
    }

    const handleContinueClick = (e) => {
        // validaciones
        const todayDate = new Date(Date.now()).toLocaleDateString()
        const formatedDate = todayDate.split('/').reverse().join('-')

        if(appData.name === '' || appData.email === '' || appData.birthDate === '') {
            alert('Debes completar todos los campos');
            e.preventDefault();
        }
        if(!appData.email.match('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$') && appData.email !== ''){
            alert('El mail no tiene un formato correcto');
            e.preventDefault();
        }
        if(new Date(appData.birthDate) > new Date(formatedDate)){
            alert('No puedes ingresar una fecha mayor a hoy');
            e.preventDefault();
        }
    }

    return (
        <>
            <Header title={'Tus Datos'}/>
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>INGRESA TUS DATOS</h1>
                </div>
                <div className={styles.formContainer}>
                    <div className={styles.nameContainer}>
                        <label>Nombre:</label>
                        <input type="text" value={appData.name} onChange={handleChange} required/>
                    </div>
                    <div className={styles.mailContainer}>
                        <label>EMail:</label>
                        <input type="email" value={appData.email} onChange={handleChange} required/>
                    </div>
                    <div className={styles.dateContainer}>
                        <label>Fecha de Nacimiento:</label>
                        <input type="date" value={appData.birthDate} onChange={handleChange} required/>
                    </div>
                </div>
                <div className={styles.enterContainer}>
                    <Link className={styles.backButton} to="/gender">VOLVER</Link>
                    <Link className={styles.continueButton} to="/horoscope" onClick={handleContinueClick}>CONTINUAR</Link>
                </div>
            </div>
        </>
    );
}

export default ExportData;
